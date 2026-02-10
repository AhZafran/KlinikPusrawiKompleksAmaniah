import { BRAND } from "@/lib/brand"

export default function sitemap() {
  return [
    {
      url: BRAND.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]
}
