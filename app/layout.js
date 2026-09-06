import "./globals.css";

export const metadata = {
  title: "NexaERP Fast Food",
  description: "NexaERP Fast Food Management Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
