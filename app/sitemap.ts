import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const siteUrl = process.env.SITE_URL || "https://www.diagnorm.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/a-propos",
    "/contact",
    "/devis",
    "/diagnostics",
    "/zones-intervention",
    "/mentions-legales",
    "/politique-confidentialite",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/diagnostics/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}