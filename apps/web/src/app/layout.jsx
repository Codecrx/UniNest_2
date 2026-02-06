import "./globals.css";

export const metadata = {
  title: "UniNest",
  description: "Hostel & PG management platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
