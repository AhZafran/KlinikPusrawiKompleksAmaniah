import Link from "next/link"
import Image from "next/image"
import { BRAND, getWhatsAppUrl } from "@/lib/brand"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"

const navigation = [
  { name: "Utama", href: "#" },
  { name: "Perkhidmatan", href: "#perkhidmatan" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Hubungi Kami", href: "#hubungi" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-navy to-navy-dark text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.webp"
                alt="Logo Klinik Pusrawi Kompleks Amaniah"
                width={200}
                height={45}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {BRAND.tagline}
            </p>
            <p className="text-sm text-gray-400">
              Sejak {BRAND.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Pautan Pantas
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-cyan-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-cyan-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{BRAND.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-cyan-blue flex-shrink-0" />
                <a href={`tel:${BRAND.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-gray-400 hover:text-cyan-blue">
                  {BRAND.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Waktu Operasi
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-blue" />
                <span>Isnin - Jumaat: {BRAND.operatingHours.weekdays}</span>
              </li>
              <li className="pl-6">Sabtu: {BRAND.operatingHours.saturday}</li>
              <li className="pl-6">Ahad: {BRAND.operatingHours.sunday}</li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ikuti Kami
            </h3>
            <div className="flex gap-3">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light text-gray-400 hover:bg-cyan-blue hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light text-gray-400 hover:bg-cyan-blue hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light text-gray-400 hover:bg-cyan-blue hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} {BRAND.name}. Hak cipta terpelihara.
          </p>
        </div>
      </div>
    </footer>
  )
}
