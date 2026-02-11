import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKYTUNNEL",
  description: "Private access made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
