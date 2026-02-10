import { BRAND, getWhatsAppUrl, getPhoneUrl } from "@/lib/brand"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram } from "lucide-react"

export function ContactUs() {
  return (
    <section id="hubungi" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan atau temujanji.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-cyan-blue text-white shadow-md shadow-navy/20">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Alamat</h3>
                <p className="mt-1 text-gray-600">
                  {BRAND.contact.address.full}
                </p>
                <a
                  href={BRAND.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-cyan-blue hover:underline"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-cyan-blue text-white shadow-md shadow-navy/20">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                <a
                  href={getPhoneUrl()}
                  className="mt-1 text-gray-600 hover:text-cyan-blue"
                >
                  {BRAND.contact.phone}
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-cyan-blue text-white shadow-md shadow-navy/20">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Waktu Operasi</h3>
                <div className="mt-1 space-y-1 text-gray-600">
                  <p>Isnin - Jumaat: {BRAND.operatingHours.weekdays}</p>
                  <p>Sabtu: {BRAND.operatingHours.saturday}</p>
                  <p>Ahad: {BRAND.operatingHours.sunday}</p>
                  <p>Cuti Umum: {BRAND.operatingHours.publicHolidays}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navy hover:bg-gradient-to-br hover:from-navy hover:to-cyan-blue hover:text-white transition-all hover:shadow-md"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navy hover:bg-gradient-to-br hover:from-navy hover:to-cyan-blue hover:text-white transition-all hover:shadow-md"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href={BRAND.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navy hover:bg-gradient-to-br hover:from-navy hover:to-cyan-blue hover:text-white transition-all hover:shadow-md"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src={BRAND.contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Pusrawi Kompleks Amaniah"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
