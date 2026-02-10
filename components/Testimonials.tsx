"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Haslina As",
    role: "Pesakit Ujian Alahan",
    text: "Akhirnya jumpa klinik utk buat allergy test anak. Doktor Farah dan staff sangat baik. Anak selalu tantrum bila buat rawatan tapi boleh behave arini. Doktor Farah pandai tackle anak. Tempat sangat selesa. Doktor dan staff perempuan, sangat selesa kalau pesakit wanita datang kesini. Terbaik! Sangat recommended untuk semua.",
  },
  {
    name: "Nor Amira",
    role: "Pesakit Mounjaro",
    text: "Dr Farah is a very nice and friendly doctor. She explained all the details about Mounjaro very clearly and thoroughly, which made me feel comfortable and well-informed. The whole process, from registration until I received my first injection, was very smooth and well-organised.",
  },
  {
    name: "Zafran",
    role: "Pesakit Rawatan Kanak-Kanak",
    text: "Staf sangat mesra dan profesional, terutamanya doktor yang merawat anak saya. Cara penerangan jelas, lembut dengan bayi, dan sangat menenangkan sebagai ibu bapa. Proses pendaftaran juga cepat dan teratur. Klinik bersih dan selesa. Sangat recommended untuk ibu bapa yang mencari rawatan kanak-kanak yang berkualiti.",
  },
  {
    name: "Amaleen",
    role: "Pesakit Am",
    text: "Doctor sangatlah friendly nak tanya apa-apa dia jawab je. Klinik pun bersih same goes to staff semua kind dan polite. I'd like to follow up here next time. Price reasonable also!",
  },
  {
    name: "Amin",
    role: "Pesakit Ujian Alahan",
    text: "Puas hati dapat penjelasan dgn Dr Farah. Dr yg sgt friendly & soft spoken. Penjelasan yg sgt mudah difahami. Dtg buat allergy test utk anak disebabkan severe eczema, harga juga berpatutan. Klinik ni sgt mudah akses, sebelah Tabung Haji Batu Caves sahaja, senang dapat parking.",
  },
  {
    name: "Shafeeq",
    role: "Pesakit Ultrasound",
    text: "Saya membawa isteri saya untuk janji temu ultrasound. Layanan yang diberikan sangat baik, dan terima kasih kepada Dr. Farah beserta teams atas penerangan yang bagus dan senang difahami.",
  },
  {
    name: "Amir",
    role: "Pesakit Detail Scan",
    text: "Dtg buat detail scanning kat sini. Sy dan Isteri sgt berpuas hati dgn service dan layanan baik dari doktor hingga ke staff. Environment klinik sgt selesa. Highly recommended kepada pasangan suami isteri yg menantikan cahaya mata.",
  },
  {
    name: "Siti Aisyah",
    role: "Pesakit Detail Scan",
    text: "Alhamdulillah baru lepas buat detail scan di Klinik Pusrawi. Suka dengan explaination Doktor Farah sangat detail dan friendly. Recommend sangat guys. Klinik pun bersih dan sesuai utk nak bawak anak.",
  },
  {
    name: "Fathini",
    role: "Pesakit Am",
    text: "Klinik bersih dan selesa, Dr sangat friendly and give good consultation. Price range affordable, would recommended to my friends.",
  },
  {
    name: "Sarah",
    role: "Pesakit Detail Scan",
    text: "Done with my detailed scan at Klinik Pusrawi today — everything went smoothly! Baby wasn't fully cooperating, but the doctor still managed to get all the important details for my 19-week update. Highly recommend!",
  },
]

const firstColumn = testimonials.slice(0, 4)
const secondColumn = testimonials.slice(4, 7)
const thirdColumn = testimonials.slice(7, 10)

function TestimonialsColumn({
  testimonials,
  className,
  duration = 10,
}: {
  testimonials: Testimonial[]
  className?: string
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-2xl border border-gray-100 shadow-sm max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-cyan-blue/30"
              >
                <blockquote className="m-0 p-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm m-0">
                    &ldquo;{text}&rdquo;
                  </p>

                  <footer className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy to-cyan-blue text-white text-sm font-semibold shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-gray-900">
                        {name}
                      </cite>
                      <span className="text-xs leading-5 tracking-tight text-gray-500 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-gradient-to-b from-white via-slate-50 to-blue-50/30 py-16 sm:py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto mb-14">
          <div className="flex justify-center">
            <div className="border border-cyan-blue/20 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-navy bg-gradient-to-r from-blue-50 to-cyan-blue/10">
              Google Reviews
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight mt-6 text-center text-gray-900"
          >
            Apa Kata Pesakit Kami
          </h2>
          <p className="text-center mt-4 text-gray-600 text-lg leading-relaxed max-w-md">
            Ulasan dari pesakit yang telah mendapat rawatan di klinik kami
          </p>
        </div>

        {/* Scrolling Columns */}
        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Ulasan Pesakit"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </motion.div>
    </section>
  )
}
