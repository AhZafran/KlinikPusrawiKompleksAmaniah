"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"
import type { IconifyIcon } from "@iconify/react"
import { BRAND } from "@/lib/brand"
import { ParkingCircle, Sparkles, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import careStaffArea from "@iconify-icons/medical-icon/i-care-staff-area"
import healthServices from "@iconify-icons/medical-icon/i-health-services"
import familyPractice from "@iconify-icons/medical-icon/i-family-practice"

type Feature =
  | { icon: IconifyIcon; title: string; description: string; type: "medical" }
  | { icon: LucideIcon; title: string; description: string; type: "lucide" }

function FeatureIcon({ feature }: { feature: Feature }) {
  if (feature.type === "medical") {
    return <Icon icon={feature.icon} width={28} height={28} />
  }
  const LucideComp = feature.icon
  return <LucideComp className="h-7 w-7" />
}

const features: Feature[] = [
  {
    icon: careStaffArea,
    title: "Kakitangan Wanita",
    description: "Doktor dan kakitangan perubatan wanita untuk keselesaan anda.",
    type: "medical",
  },
  {
    icon: Star,
    title: `${BRAND.reviews.googleCount} Ulasan 5 Bintang`,
    description: "Dipercayai oleh ribuan pesakit dengan ulasan positif di Google.",
    type: "lucide",
  },
  {
    icon: ParkingCircle,
    title: "Tempat Letak Kereta Luas",
    description: "Kemudahan parkir yang mencukupi untuk keselesaan anda.",
    type: "lucide",
  },
  {
    icon: Sparkles,
    title: "Kemudahan Bersih & Selesa",
    description: "Persekitaran klinik yang bersih, selesa dan mesra.",
    type: "lucide",
  },
  {
    icon: healthServices,
    title: "Kakitangan Mesra",
    description: "Layanan mesra dan penuh perhatian dari seluruh kakitangan kami.",
    type: "medical",
  },
  {
    icon: familyPractice,
    title: "Doktor Berpengalaman",
    description: "Doktor berpengalaman lebih 10 tahun dalam bidang perubatan am dan kesihatan keluarga.",
    type: "medical",
  },
]

export function WhyChooseUs() {
  return (
    <section id="tentang" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Pilih Kami?
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-navy to-cyan-blue" />
          <p className="mt-4 text-lg text-gray-600">
            Klinik pilihan keluarga Malaysia untuk rawatan kesihatan berkualiti
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-cyan-blue/20 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-blue/10 text-navy group-hover:from-navy group-hover:to-cyan-blue group-hover:text-white transition-all">
                <FeatureIcon feature={feature} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Pasukan Kami
            </h3>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-navy to-cyan-blue" />
            <p className="mt-4 text-gray-600">
              Profesional perubatan yang berdedikasi untuk kesihatan anda
            </p>
          </div>

          {/* Featured Doctor Card */}
          <div className="mx-auto max-w-md mb-10">
            <div className="relative rounded-2xl bg-white p-8 shadow-md border border-gray-100 text-center overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-cyan-blue to-blue-400" />
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-50 to-cyan-blue/10" />
              {/* Photo ring */}
              <div className="mx-auto mb-6 h-48 w-48 rounded-full p-1 bg-gradient-to-br from-navy/30 via-cyan-blue/40 to-blue-200/30">
                <div className="h-full w-full rounded-full bg-white p-1">
                  <Image
                    src="/images/team/doctor.webp"
                    alt={BRAND.team.doctor.name}
                    width={192}
                    height={192}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {BRAND.team.doctor.name}
              </h4>
              <p className="mt-1 text-base font-semibold bg-gradient-to-r from-cyan-blue to-blue-600 bg-clip-text text-transparent">
                Doktor
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {BRAND.team.doctor.title}
              </p>
            </div>
          </div>

          {/* Staff Cards Row */}
          <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "Pembantu Perubatan", image: "/images/team/staff-1.webp" },
              { name: "Pembantu Klinik", image: "/images/team/staff-2.webp" },
              { name: "Pembantu Klinik", image: "/images/team/staff-3.webp" },
              { name: "Pembantu Klinik", image: "/images/team/staff-4.webp" },
            ].map((staff, i) => (
              <div key={i} className="group relative rounded-2xl bg-white p-5 shadow-sm border border-gray-100 text-center transition-all hover:shadow-md hover:-translate-y-1">
                {/* Decorative circle */}
                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-gradient-to-br from-blue-50 to-cyan-blue/10" />
                {/* Staff photo with gradient ring */}
                <div className="mx-auto mb-4 h-28 w-28 rounded-full p-0.5 bg-gradient-to-br from-navy/20 via-cyan-blue/30 to-blue-200/20 group-hover:from-navy/40 group-hover:via-cyan-blue/50 group-hover:to-blue-300/40 transition-all">
                  <div className="h-full w-full rounded-full bg-white p-1">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      width={112}
                      height={112}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">{staff.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
