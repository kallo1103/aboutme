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
  title: {
    default: "Kallo | Creative Web Developer",
    template: "%s | Kallo",
  },
  description:
    "Portfolio of Kallo, a Fullstack Web Developer passionate about building high-performance, scalable, and beautiful web experiences.",
  keywords: [
    "portfolio",
    "developer",
    "web",
    "frontend",
    "fullstack",
    "typescript",
    "nextjs",
    "react",
    "software engineer",
  ],
  authors: [{ name: "Le Hoai Nam", url: "https://github.com/kallo1103" }],
  creator: "Le Hoai Nam",
  metadataBase: new URL("https://kallo-portfolio.vercel.app"), // TODO: Update with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kallo-portfolio.vercel.app",
    title: "Kallo | Creative Web Developer",
    description: "Portfolio of Kallo, a Fullstack Web Developer passionate about building high-performance, scalable, and beautiful web experiences.",
    siteName: "Kallo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallo | Creative Web Developer",
    description: "Portfolio of Kallo, a Fullstack Web Developer passionate about building high-performance, scalable, and beautiful web experiences.",
    creator: "@kallo", // Update if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
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
