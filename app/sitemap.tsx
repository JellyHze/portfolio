import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url:"https://portfolio-tau-sable-vijkdwrnqn.vercel.app",
      lastModified: new Date(),
    },
  ];

}