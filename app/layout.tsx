import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nama Kamu | Portfolio",
  description:
    "Website portfolio pribadi berisi profil, skill, project, dan kontak.",
  authors: [{ name: "Nama Kamu" }],
  openGraph: {
    title: "Nama Kamu | Portfolio",
    description:
      "Website portfolio pribadi berisi profil, skill, project, dan kontak.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}