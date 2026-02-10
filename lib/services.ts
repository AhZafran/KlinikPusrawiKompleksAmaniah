import type { IconifyIcon } from "@iconify/react"
import nutrition from "@iconify-icons/medical-icon/i-nutrition"
import womensHealth from "@iconify-icons/medical-icon/i-womens-health"
import ultrasound from "@iconify-icons/medical-icon/i-ultrasound"
import laboratory from "@iconify-icons/medical-icon/i-laboratory"
import pediatrics from "@iconify-icons/medical-icon/i-pediatrics"
import immunizations from "@iconify-icons/medical-icon/i-immunizations"
import familyPractice from "@iconify-icons/medical-icon/i-family-practice"
import pharmacy from "@iconify-icons/medical-icon/i-pharmacy"
import internalMedicine from "@iconify-icons/medical-icon/i-internal-medicine"
import emergency from "@iconify-icons/medical-icon/i-emergency"
import healthServices from "@iconify-icons/medical-icon/i-health-services"

export interface Service {
  id: string
  title: string
  description: string
  icon: IconifyIcon
  category: string
  featured?: boolean
  subServices?: { title: string; description: string }[]
}

export const services: Service[] = [
  // Weight Management - FIRST (Current Focus)
  {
    id: "weight-management",
    title: "Pengurusan Berat Badan",
    description: "Program pengurusan berat badan yang berkesan dan selamat dengan bimbingan doktor.",
    icon: nutrition,
    category: "fokus",
    featured: true,
    subServices: [
      { title: "Suntikan Penurunan Berat Badan", description: "Rawatan suntikan yang terbukti berkesan untuk membantu penurunan berat badan." },
      { title: "Ubat Penurunan Berat Badan", description: "Preskripsi ubat yang sesuai dan selamat untuk membantu mengawal berat badan." },
      { title: "Penilaian Penurunan Berat Badan", description: "Penilaian menyeluruh untuk merancang program penurunan berat badan yang tepat." },
    ],
  },
  // Maternal Services
  {
    id: "pregnancy-monitoring",
    title: "Pemantauan Kehamilan",
    description: "Pemeriksaan berkala untuk memastikan kesihatan ibu dan bayi sepanjang kehamilan.",
    icon: womensHealth,
    category: "ibu-hamil",
  },
  {
    id: "pregnancy-ultrasound",
    title: "Ultrasound Kehamilan",
    description: "Pemeriksaan ultrasound untuk memantau perkembangan bayi dalam kandungan.",
    icon: ultrasound,
    category: "ibu-hamil",
  },
  {
    id: "pink-book",
    title: "Buku Pink & Susulan",
    description: "Pembukaan dan susulan buku pink untuk rekod kesihatan ibu mengandung.",
    icon: womensHealth,
    category: "ibu-hamil",
  },
  {
    id: "nipt",
    title: "Ujian NIPT",
    description: "Ujian saringan pranatal bukan invasif untuk mengesan keabnormalan kromosom.",
    icon: laboratory,
    category: "ibu-hamil",
  },
  // Pediatric Services
  {
    id: "female-circumcision",
    title: "Khatan Bayi Perempuan",
    description: "Khatan bayi perempuan yang selamat dan mengikut prosedur perubatan.",
    icon: pediatrics,
    category: "kanak-kanak",
  },
  {
    id: "male-circumcision",
    title: "Khatan Kanak-Kanak Lelaki",
    description: "Khatan kanak-kanak lelaki dengan teknik moden dan selamat.",
    icon: pediatrics,
    category: "kanak-kanak",
  },
  {
    id: "child-vaccination",
    title: "Vaksinasi Kanak-Kanak",
    description: "Jadual vaksinasi lengkap untuk melindungi anak anda dari penyakit.",
    icon: immunizations,
    category: "kanak-kanak",
  },
  {
    id: "allergy-test",
    title: "Ujian Alahan",
    description: "Ujian untuk mengenal pasti punca alahan pada kanak-kanak dan dewasa.",
    icon: laboratory,
    category: "kanak-kanak",
  },
  // General Medical
  {
    id: "health-checkup",
    title: "Pemeriksaan Kesihatan",
    description: "Pemeriksaan kesihatan menyeluruh untuk mengesan masalah kesihatan awal.",
    icon: familyPractice,
    category: "am",
  },
  {
    id: "wound-care",
    title: "Rawatan Luka",
    description: "Rawatan dan penjagaan luka dengan teknik moden.",
    icon: pharmacy,
    category: "am",
  },
  {
    id: "swab-test",
    title: "Ujian Swab",
    description: "Ujian swab untuk pengesanan pelbagai jenis jangkitan.",
    icon: laboratory,
    category: "am",
  },
  {
    id: "chronic-disease",
    title: "Pengurusan Penyakit Kronik",
    description: "Rawatan dan pemantauan penyakit kronik seperti diabetes dan darah tinggi.",
    icon: internalMedicine,
    category: "am",
  },
  {
    id: "emergency",
    title: "Perkhidmatan Kecemasan",
    description: "Rawatan segera untuk kes-kes kecemasan perubatan.",
    icon: emergency,
    category: "am",
  },
  {
    id: "hajj-examination",
    title: "Pemeriksaan Haji",
    description: "Pemeriksaan kesihatan lengkap untuk bakal jemaah haji dan umrah.",
    icon: healthServices,
    category: "am",
  },
  {
    id: "adult-vaccination",
    title: "Vaksinasi Dewasa",
    description: "Vaksinasi untuk dewasa termasuk vaksin influenza dan pneumonia.",
    icon: immunizations,
    category: "am",
  },
]

export const serviceCategories = [
  { id: "fokus", label: "Fokus Utama", color: "pink" },
  { id: "ibu-hamil", label: "Penjagaan Ibu Hamil", color: "rose" },
  { id: "kanak-kanak", label: "Penjagaan Kanak-Kanak", color: "blue" },
  { id: "am", label: "Perubatan Am", color: "teal" },
]
