import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Kỹ Sư Web",
  description:
    "Hồ sơ trực tuyến giới thiệu kỹ năng, dự án và kinh nghiệm phát triển web.",
  keywords: [
    "portfolio",
    "developer",
    "web",
    "frontend",
    "fullstack",
    "typescript",
    "nextjs",
  ],
  authors: [{ name: "Kỹ Sư Web" }],
  creator: "Kỹ Sư Web",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
