import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio showcasing creative development work and projects",
  keywords: ["portfolio", "developer", "creative", "web design", "frontend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="gradient-bg"></div>
        <div className="noise"></div>
        {children}
      </body>
    </html>
  );
}
