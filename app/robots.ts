import { BRAND } from "@/lib/brand"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND.url}/sitemap.xml`,
  }
}
