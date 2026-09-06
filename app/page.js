"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login frontend ready. Backend next connect karenge.");
  };

  const features = [
    ["🛒", "POS"],
    ["👨‍🍳", "Kitchen Orders"],
    ["📦", "Inventory"],
    ["📊", "Reports"],
    ["🏪", "Multi Branch"],
    ["👥", "Users & Roles"],
    ["🚚", "Purchases"],
    ["•••", "And More..."],
  ];

  return (
    <>
      <main className="loginPage">
        <div className="loginWrapper">

          {/* LEFT SIDE */}
          <section className="leftPanel">
            <div className="overlay"></div>

            <div className="leftContent">
              <div>
                <div className="logoArea">
                  <div className="chefIcon">♨</div>

                  <div>
                    <div className="logoText">
                      <span>Nexa</span>
                      <b>ERP</b>
                    </div>

                    <div className="logoSub">FAST FOOD</div>
                  </div>
                </div>

                <div className="heroTitle">
                  <span>Complete</span>
                  <strong>Fast Food</strong>
                  <span>Management</span>
                  <span>Made Simple</span>
                </div>
              </div>

              <div className="featureGrid">
                {features.map((item, index) => (
                  <div className="featureItem" key={index}>
                    <div className="featureIcon">{item[0]}</div>
                    <div>{item[1]}</div>
                  </div>
                ))}
              </div>

              <div className="bottomLeft">
                <div className="slogan">
                  Serve Better
                  <br />
                  Grow Faster
                </div>

                <div className="miniFeatures">
                  <span>🍃 Fresh Ingredients</span>
                  <span>♥ Happy Customers</span>
                  <span>📈 Higher Profits</span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="rightPanel">
            <div className="language">
              <span>🌐</span>
              English
              <span>⌄</span>
            </div>

            <div className="formArea">
              <div>
                <h1>Welcome Back</h1>
                <p className="subtitle">
                  Login to your Nexa Fast Food account
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <span>♙</span>

                  <input
                    type="text"
                    placeholder="Username or Email"
                    required
                  />
                </div>

                <div className="inputBox">
                  <span>🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                  />

                  <button
                    className="eyeButton"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "◉"}
                  </button>
                </div>

                <div className="options">
                  <label
                    className="remember"
                    onClick={() => setRemember(!remember)}
                  >
                    <span className={remember ? "checkbox active" : "checkbox"}>
                      {remember ? "✓" : ""}
                    </span>

                    Remember me
                  </label>

                  <button type="button" className="forgot">
                    Forgot password?
                  </button>
                </div>

                <button className="loginBtn" type="submit">
                  Login <span>→</span>
                </button>
              </form>

              <div className="securityBox">
                <div className="securityIcon">♢</div>

                <div>
                  <h3>Secure Access for Authorized Staff</h3>

                  <p>
                    This system is for Nexa Fast Food employees and
                    administrators only. Please use your assigned credentials
                    to access your account.
                  </p>
                </div>
              </div>

              <div className="footer">
                <span>
                  © 2026 NexaERP Fast Food. All rights reserved.
                </span>

                <span>
                  A Product of <b>NexaERP</b>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #ff7918;
        }

        button,
        input {
          font-family: inherit;
        }

        .loginPage {
          width: 100%;
          min-height: 100vh;
          padding: 15px;
          background: #ff7a18;
        }

        .loginWrapper {
          width: 100%;
          min-height: calc(100vh - 30px);
          display: grid;
          grid-template-columns: 55% 45%;
          background: white;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.22);
        }

        /* LEFT */

        .leftPanel {
          position: relative;
          min-height: 820px;
          color: white;
          background-image: url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90");
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(4, 8, 10, 0.97) 0%,
              rgba(4, 8, 10, 0.89) 50%,
              rgba(4, 8, 10, 0.48) 100%
            );
        }

        .leftContent {
          position: relative;
          z-index: 2;
          padding: 42px 60px;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .logoArea {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .chefIcon {
          width: 72px;
          height: 72px;
          border: 4px solid #ff6b00;
          color: #ff6b00;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 39px;
          font-weight: 900;
        }

        .logoText {
          font-size: clamp(40px, 4vw, 67px);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .logoText b {
          color: #ff6b00;
        }

        .logoSub {
          margin-top: 10px;
          font-size: 18px;
          letter-spacing: 10px;
          font-weight: 700;
        }

        .heroTitle {
          margin-top: 45px;
          display: flex;
          flex-direction: column;
          font-size: clamp(40px, 4vw, 64px);
          font-weight: 800;
          line-height: 1.05;
        }

        .heroTitle strong {
          color: #ff6b00;
          font-weight: 900;
        }

        .featureGrid {
          max-width: 570px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px 18px;
          margin-top: 38px;
        }

        .featureItem {
          text-align: center;
          font-size: 14px;
          color: #fff;
        }

        .featureIcon {
          width: 58px;
          height: 58px;
          margin: 0 auto 9px;
          border: 2px solid rgba(255, 255, 255, 0.18);
          border-radius: 15px;
          background: rgba(20, 25, 28, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff7300;
          font-size: 24px;
        }

        .slogan {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(34px, 3vw, 54px);
          line-height: 1.12;
          margin-top: 35px;
        }

        .miniFeatures {
          margin-top: 42px;
          display: flex;
          gap: 35px;
          flex-wrap: wrap;
          font-size: 15px;
        }

        .miniFeatures span {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        /* RIGHT */

        .rightPanel {
          position: relative;
          background: #fbfbfb;
          padding: 30px 50px;
          display: flex;
          flex-direction: column;
        }

        .language {
          align-self: flex-end;
          border: 1px solid #d9dfe7;
          background: #fff;
          border-radius: 30px;
          padding: 12px 18px;
          display: flex;
          gap: 9px;
          align-items: center;
          font-weight: 600;
          color: #252b33;
        }

        .formArea {
          width: 100%;
          max-width: 620px;
          margin: auto;
        }

        .formArea h1 {
          color: #101825;
          font-size: clamp(38px, 3vw, 54px);
          margin: 0;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .subtitle {
          color: #647083;
          font-size: 18px;
          margin: 12px 0 38px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .inputBox {
          height: 66px;
          background: #fff;
          border: 1px solid #dbe1e8;
          border-radius: 15px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          gap: 15px;
          transition: 0.2s;
        }

        .inputBox:focus-within {
          border-color: #ff6b00;
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
        }

        .inputBox > span {
          color: #5d6978;
          font-size: 23px;
        }

        .inputBox input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 17px;
          color: #202733;
        }

        .inputBox input::placeholder {
          color: #798597;
        }

        .eyeButton {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 18px;
          color: #697586;
        }

        .options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin: 2px 0 8px;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          cursor: pointer;
          color: #1d242d;
        }

        .checkbox {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #cbd2db;
          border-radius: 7px;
          color: white;
          font-weight: 900;
        }

        .checkbox.active {
          background: #ff6b00;
          border-color: #ff6b00;
        }

        .forgot {
          border: none;
          background: transparent;
          color: #ff5c00;
          font-size: 15px;
          cursor: pointer;
          font-weight: 600;
        }

        .loginBtn {
          height: 66px;
          border: none;
          border-radius: 15px;
          background: linear-gradient(90deg, #ff6500, #ff8900);
          color: white;
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(255, 100, 0, 0.22);
          transition: 0.2s;
        }

        .loginBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 35px rgba(255, 100, 0, 0.32);
        }

        .loginBtn span {
          margin-left: 12px;
          font-size: 27px;
        }

        .securityBox {
          margin-top: 38px;
          padding: 22px 24px;
          border-radius: 20px;
          background: #fff0e8;
          display: flex;
          gap: 19px;
          align-items: flex-start;
        }

        .securityIcon {
          width: 64px;
          height: 64px;
          min-width: 64px;
          border-radius: 50%;
          background: #ff6500;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
        }

        .securityBox h3 {
          margin: 2px 0 7px;
          color: #171b22;
          font-size: 20px;
        }

        .securityBox p {
          margin: 0;
          color: #687381;
          line-height: 1.55;
          font-size: 15px;
        }

        .footer {
          margin-top: 45px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #707987;
          font-size: 12px;
        }

        .footer b {
          color: #ff6500;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .loginWrapper {
            grid-template-columns: 1fr;
          }

          .leftPanel {
            min-height: auto;
          }

          .leftContent {
            padding: 40px;
          }

          .rightPanel {
            padding: 40px;
          }

          .formArea {
            padding: 45px 0;
          }
        }

        @media (max-width: 650px) {
          .loginPage {
            padding: 0;
          }

          .loginWrapper {
            border-radius: 0;
          }

          .leftContent {
            padding: 28px 22px;
          }

          .rightPanel {
            padding: 25px 20px;
          }

          .featureGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .heroTitle {
            font-size: 42px;
          }

          .logoText {
            font-size: 44px;
          }

          .logoSub {
            letter-spacing: 6px;
          }

          .miniFeatures {
            gap: 15px;
          }

          .options {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer {
            flex-direction: column;
          }

          .securityBox {
            padding: 18px;
          }
        }
      `}</style>
    </>
  );
}
