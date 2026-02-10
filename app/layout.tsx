import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { StructuredData } from "@/components/StructuredData"
import { BRAND } from "@/lib/brand"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: BRAND.seo.title,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.seo.description,
  keywords: [...BRAND.seo.keywords],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: BRAND.seo.title,
    description: BRAND.seo.description,
    url: BRAND.url,
    siteName: BRAND.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.seo.title,
    description: BRAND.seo.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <StructuredData />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
