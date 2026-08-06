import type { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL || "https://www.diagnorm.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mentions-legales", "/politique-confidentialite"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
