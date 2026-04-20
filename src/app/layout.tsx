import type { Metadata } from "next";
import { Inter, Space_Grotesk, Mea_Culpa } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const meaCulpa = Mea_Culpa({
  variable: "--font-mea-culpa",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kallo | Creative Fullstack Developer",
    template: "%s | Kallo",
  },
  description:
    "Portfolio of Le Hoai Nam (Kallo) — Fullstack Web Developer crafting high-performance, scalable, and beautifully designed web experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Le Hoai Nam",
    "Kallo",
    "portfolio",
    "fullstack developer",
    "frontend engineer",
    "web developer",
    "typescript",
    "nextjs",
    "react",
    "software engineer",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Le Hoai Nam", url: "https://github.com/kallo1103" }],
  creator: "Le Hoai Nam",
  metadataBase: new URL("https://kallo-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kallo-portfolio.vercel.app",
    title: "Kallo | Creative Fullstack Developer",
    description:
      "Fullstack Web Developer crafting high-performance, scalable, and beautifully designed web experiences.",
    siteName: "Kallo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallo | Creative Fullstack Developer",
    description:
      "Fullstack Web Developer crafting high-performance, scalable, and beautifully designed web experiences.",
    creator: "@kallo",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Le Hoai Nam",
              alternateName: "Kallo",
              url: "https://kallo-portfolio.vercel.app",
              jobTitle: "Fullstack Web Developer",
              sameAs: [
                "https://github.com/kallo1103",
                "https://www.linkedin.com/in/le-hoai-nam-385580364/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Docker",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${meaCulpa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
