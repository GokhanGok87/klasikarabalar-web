import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/xloginpanel", "/xloginpanel/", "/dashboard", "/dashboard/"],
      },
    ],
    sitemap: "https://klasikarabalar.vercel.app/sitemap.xml",
  };
}
