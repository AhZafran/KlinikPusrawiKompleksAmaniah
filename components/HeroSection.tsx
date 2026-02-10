"use client"

import Image from "next/image"
import { BRAND, getWhatsAppUrl } from "@/lib/brand"
import { UserCircle } from "lucide-react"
import { Icon } from "@iconify/react"
import womensHealth from "@iconify-icons/medical-icon/i-womens-health"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-navy to-navy-light px-5 py-2 text-sm font-semibold text-white shadow-md shadow-navy/20">
                {BRAND.team.doctor.name} | {BRAND.team.doctor.title}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem] leading-[1.15]">
              Penjagaan Ibu Hamil, Kanak-Kanak &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-blue to-blue-600 bg-clip-text text-transparent">Kesihatan Keluarga</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg text-gray-600 leading-relaxed">
              {BRAND.description}. Diuruskan oleh doktor wanita yang berpengalaman, klinik kami menawarkan perkhidmatan menyeluruh
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-cyan-blue px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/30 transition-all hover:shadow-xl hover:shadow-cyan-blue/30 hover:scale-[1.02]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Buat Temujanji
              </a>
            </div>
          </div>

          {/* Right — Doctor Image + Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* White frame with gradient border */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-navy/20 via-cyan-blue/30 to-blue-200/40 shadow-2xl">
                <div className="rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/doctor.webp"
                    alt={`${BRAND.team.doctor.name} - ${BRAND.team.doctor.title}, ${BRAND.name}`}
                    width={600}
                    height={700}
                    className="w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating Doctor Card */}
              <div className="absolute top-6 -right-4 sm:right-[-2rem] z-20 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-white/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-light">
                  <UserCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{BRAND.team.doctor.name.toUpperCase()}</p>
                  <p className="text-xs text-gray-500">{BRAND.shortName}</p>
                </div>
              </div>

              {/* Floating Specialty Card */}
              <div className="absolute bottom-8 -left-4 sm:left-[-2rem] z-20 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-white/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-blue to-blue-500">
                  <Icon icon={womensHealth} width={20} height={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">KESIHATAN</p>
                  <p className="text-xs text-gray-500">Kesihatan Wanita &amp; Keluarga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
