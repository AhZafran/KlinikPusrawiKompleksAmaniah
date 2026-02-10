import Image from "next/image"

export function OurPanel() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Panel Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami menerima pelbagai panel korporat dan insurans untuk kemudahan anda
          </p>
        </div>

        {/* Panel Logos Image */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-cyan-blue to-blue-400" />
            <Image
              src="/images/panel-kami.webp"
              alt="Panel korporat dan insurans Klinik Pusrawi Kompleks Amaniah - Yayasan Taqwa, Red Alert Online, Sel Care, Multi Modal, Mednefits, MAIWP, PMCare, MedKad, Iltizam Selangor Sihat, International Assistance, MediLink-Global, MediExpress HealthConnect, EMAS, G-Flex, AIA"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
