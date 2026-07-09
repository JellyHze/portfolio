import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";


const siteUrl = "https://portfolio-tau-sable-vijkdwrnqn.vercel.app";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${profile.name} | Web Developer`,
    template: `%s | ${profile.name}`,
  },

  description:
    "Portfolio website Kadek Dwiyana Pernanda. Web Developer yang membangun modern website, full-stack application, dan technology integration.",

  icons: {
    icon: "/icon.png",
  },

  keywords: [
    profile.name,
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Machine Learning",
  ],

  applicationName: profile.name,

  authors: [
    {
      name: profile.name,
    },
  ],

  creator: profile.name,

  category: "technology",


  openGraph: {
    title: `${profile.name} | Web Developer`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} Portfolio`,
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Web Developer`,
    description: profile.tagline,

    images: [
      "/og-image.png",
    ],
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
    <html
      lang="id"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >

      <body>
        {children}
      </body>

    </html>
  );
}