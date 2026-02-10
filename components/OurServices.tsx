"use client"

import { useRef } from "react"
import { Icon } from "@iconify/react"
import { services, serviceCategories } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/brand"
import { MessageCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

export function OurServices() {
  const featuredService = services.find(s => s.featured)
  const otherServices = services.filter(s => !s.featured)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth || 300
    const scrollAmount = cardWidth * 2 + 24
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  // Group all non-featured services by category
  const groupedServices = serviceCategories
    .filter(cat => cat.id !== "fokus")
    .map(cat => ({
      ...cat,
      services: otherServices.filter(s => s.category === cat.id),
    }))
    .filter(cat => cat.services.length > 0)

  // Flatten into carousel items: each item is a pair of services with their category label
  const carouselCards: { category: string; service: (typeof otherServices)[number] }[] = []
  groupedServices.forEach(cat => {
    cat.services.forEach(service => {
      carouselCards.push({ category: cat.label, service })
    })
  })

  return (
    <section id="perkhidmatan" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perkhidmatan Kami
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-navy to-cyan-blue" />
          <p className="mt-4 text-lg text-gray-600">
            Kami menyediakan pelbagai perkhidmatan kesihatan untuk anda dan keluarga
          </p>
        </div>

        {/* Featured Service - Weight Management */}
        {featuredService && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-light to-cyan-blue/80 p-8 sm:p-12 text-white">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Fokus Utama
                </span>
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Icon icon={featuredService.icon} width={32} height={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {featuredService.title}
                </h3>
                <p className="text-lg text-blue-100 mb-6">
                  {featuredService.description}
                </p>

                {/* Sub-services */}
                {"subServices" in featuredService && featuredService.subServices && (
                  <div className="mb-8 grid gap-3 sm:grid-cols-3">
                    {(featuredService.subServices as { title: string; description: string }[]).map((sub, i) => (
                      <div key={i} className="rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/10">
                        <p className="font-semibold text-white text-sm">{sub.title}</p>
                        <p className="text-xs text-blue-100 mt-1">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Dapatkan Konsultasi
                </a>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/5" />
              <div className="absolute -top-10 -right-20 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-cyan-blue/20" />
            </div>
          </div>
        )}

        {/* All Other Services - Carousel */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Perkhidmatan Lain
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gradient-to-r hover:from-navy hover:to-cyan-blue hover:text-white hover:border-transparent transition-all hover:shadow-md"
                aria-label="Tatal ke kiri"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gradient-to-r hover:from-navy hover:to-cyan-blue hover:text-white hover:border-transparent transition-all hover:shadow-md"
                aria-label="Tatal ke kanan"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselCards.map(({ category, service }) => (
              <div
                key={service.id}
                className="group flex-shrink-0 w-[calc(50%-12px)] sm:w-[calc(50%-12px)] snap-start"
              >
                <div className="relative h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-cyan-blue/30 hover:-translate-y-1">
                  <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-blue-50 to-cyan-blue/10 px-3 py-1 text-xs font-medium text-navy">
                    {category}
                  </span>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-navy group-hover:bg-gradient-to-br group-hover:from-navy group-hover:to-cyan-blue group-hover:text-white transition-all">
                    <Icon icon={service.icon} width={24} height={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Tidak pasti perkhidmatan yang anda perlukan?
          </p>
          <Button asChild variant="whatsapp" size="lg">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi Kami Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
