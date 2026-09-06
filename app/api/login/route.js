import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "../../../lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const { usernameOrEmail, password } = body;

    if (!usernameOrEmail || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username/Email and password are required",
        },
        { status: 400 }
      );
    }

    const [rows] = await pool.execute(
      `
      SELECT
        id,
        full_name,
        username,
        email,
        password,
        role,
        status
      FROM users
      WHERE username = ? OR email = ?
      LIMIT 1
      `,
      [usernameOrEmail, usernameOrEmail]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username/email or password",
        },
        { status: 401 }
      );
    }

    const user = rows[0];

    if (user.status !== "active") {
      return NextResponse.json(
        {
          success: false,
          message: "Your account is inactive",
        },
        { status: 403 }
      );
    }

    const passwordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatched) {
      await pool.execute(
        `
        INSERT INTO login_logs
        (
          user_id,
          username_or_email,
          login_status
        )
        VALUES (?, ?, 'failed')
        `,
        [user.id, usernameOrEmail]
      );

      return NextResponse.json(
        {
          success: false,
          message: "Invalid username/email or password",
        },
        { status: 401 }
      );
    }

    await pool.execute(
      `
      UPDATE users
      SET last_login_at = NOW()
      WHERE id = ?
      `,
      [user.id]
    );

    await pool.execute(
      `
      INSERT INTO login_logs
      (
        user_id,
        username_or_email,
        login_status
      )
      VALUES (?, ?, 'success')
      `,
      [user.id, usernameOrEmail]
    );

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
