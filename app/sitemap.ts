import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://klasikarabalar.vercel.app";

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/galeri", priority: 0.9 },
    { path: "/yayin", priority: 0.8 },
    { path: "/ilanlar", priority: 0.9 },
    { path: "/etkinlikler", priority: 0.8 },
    { path: "/topluluk", priority: 0.7 },
    { path: "/login", priority: 0.3 },
    { path: "/register", priority: 0.3 },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));
}
