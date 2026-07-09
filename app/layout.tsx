import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

const siteUrl = "https://your-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    profile.name,
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Portfolio`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}