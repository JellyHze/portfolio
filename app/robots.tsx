import type { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
    "https://portfolio-tau-sable-vijkdwrnqn.vercel.app/sitemap.xml"
  };

}