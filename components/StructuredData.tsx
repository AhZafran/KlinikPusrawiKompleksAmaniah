import { BRAND } from "@/lib/brand"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": BRAND.url,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    description: BRAND.seo.description,
    url: BRAND.url,
    telephone: BRAND.contact.phone,
    image: `${BRAND.url}/images/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BRAND.contact.address.street}, ${BRAND.contact.address.road}`,
      addressLocality: BRAND.contact.address.city,
      addressRegion: BRAND.contact.address.state,
      postalCode: BRAND.contact.address.postcode,
      addressCountry: BRAND.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.2300",
      longitude: "101.6800",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      BRAND.social.facebook,
      BRAND.social.instagram,
      BRAND.social.tiktok,
    ],
    medicalSpecialty: [
      "Family Medicine",
      "Obstetrics",
      "Pediatrics",
      "Weight Management",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Pengurusan Berat Badan",
        description: "Program pengurusan berat badan yang berkesan dan selamat",
      },
      {
        "@type": "MedicalProcedure",
        name: "Pemantauan Kehamilan",
        description: "Pemeriksaan berkala untuk ibu mengandung",
      },
      {
        "@type": "MedicalProcedure",
        name: "Vaksinasi Kanak-Kanak",
        description: "Jadual vaksinasi lengkap untuk kanak-kanak",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "800",
      bestRating: "5",
      worstRating: "1",
    },
    founder: {
      "@type": "Person",
      name: BRAND.team.doctor.name,
      jobTitle: BRAND.team.doctor.title,
    },
    foundingDate: BRAND.established,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
