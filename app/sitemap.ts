import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/coding", priority: 0.9 },
    { path: "/work/aravalli", priority: 0.9 },
    { path: "/work/ekohum", priority: 0.9 },
    { path: "/work/sparkframe", priority: 0.9 },
    { path: "/projects", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/design", priority: 0.6 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
