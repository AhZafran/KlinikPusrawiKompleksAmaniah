export const BRAND = {
  // Basic Info
  name: "Klinik Pusrawi Kompleks Amaniah",
  shortName: "Klinik Pusrawi Amaniah",
  tagline: "Penjagaan Ibu Hamil, Kanak-Kanak & Kesihatan Keluarga",
  description: "Kami komited memberikan rawatan terbaik untuk anda sekeluarga",
  established: "2000",
  patientCount: "2,000+",

  // Colors
  colors: {
    primary: "#0d1b4c",
    secondary: "#0693e3",
    accent: "#0693e3",
  },

  // Logo
  logo: {
    path: "/images/logo.png",
    alt: "Logo Klinik Pusrawi Kompleks Amaniah",
    width: 150,
    height: 150,
  },

  // Contact
  contact: {
    whatsapp: "60115961615",
    whatsappDisplay: "011-5961 6159",
    whatsappMessage: "Assalamualaikum, saya ingin membuat temujanji di Klinik Pusrawi Amaniah.",
    whatsappLink: "https://wa.link/rx2cz3",
    phone: "011-5961 6159",
    address: {
      street: "No G4, Kompleks Amaniah",
      road: "Jln Batu Caves",
      area: "Taman Amaniah",
      postcode: "68100",
      city: "Batu Caves",
      state: "Selangor",
      country: "Malaysia",
      full: "No G4, Kompleks Amaniah, Jln Batu Caves, Taman Amaniah, 68100 Batu Caves, Selangor",
    },
    googleMapsUrl: "https://maps.google.com/?q=Klinik+Pusrawi+Kompleks+Amaniah",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.458404806461!2d101.67483879999999!3d3.2355226999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc47357939aff1%3A0xc29f79bf34d329dc!2sKLINIK%20PUSRAWI%20KOMPLEKS%20AMANIAH%2C%20BATU%20CAVES%20-SCAN%20BABY%20%2CBUKU%20PINK%2CALLERGY%20TEST-ECZEMA%20%2CRESDUNG%2CDOCTOR%20WANITA!5e0!3m2!1sen!2smy!4v1770653481947!5m2!1sen!2smy",
  },

  // Operating Hours
  operatingHours: {
    weekdays: "9:00 AM - 9:00 PM",
    saturday: "9:00 AM - 9:00 PM",
    sunday: "9:00 AM - 5:00 PM",
    publicHolidays: "Tutup",
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/klinikpusrawi.amaniah/",
    facebookHandle: "klinikpusrawi.amaniah",
    instagram: "https://www.instagram.com/klinikpusrawi.amaniah/",
    instagramHandle: "@klinikpusrawi.amaniah",
    tiktok: "https://www.tiktok.com/@farahhulaimi",
    tiktokHandle: "@farahhulaimi",
  },

  // Team
  team: {
    doctor: {
      name: "Dr. Farah",
      title: "Pengamal Perubatan Am",
      gender: "Wanita",
    },
    staff: [
      { role: "Pembantu Perubatan", count: 1 },
      { role: "Pembantu Klinik", count: 3 },
    ],
  },

  // Reviews
  reviews: {
    googleRating: 5,
    googleCount: "800+",
  },

  // SEO
  seo: {
    title: "Klinik Pusrawi Kompleks Amaniah | Klinik Keluarga Batu Caves",
    description: "Klinik kesihatan keluarga di Batu Caves, Selangor. Pakar dalam penjagaan ibu hamil, kanak-kanak, pengurusan berat badan & kesihatan keluarga. Lebih 2,000 pesakit sejak tahun 2000.",
    keywords: [
      "klinik batu caves",
      "klinik pusrawi",
      "klinik keluarga selangor",
      "penjagaan ibu hamil",
      "klinik kanak-kanak",
      "pengurusan berat badan",
      "ultrasound kehamilan",
      "vaksinasi kanak-kanak",
      "doktor wanita batu caves",
    ],
  },

  // Website
  url: "https://klinikpusrawiamaniah.com",
} as const

// Helper Functions
export function getWhatsAppUrl(): string {
  return BRAND.contact.whatsappLink
}

export function getPhoneUrl(): string {
  return `tel:${BRAND.contact.phone.replace(/[^0-9+]/g, "")}`
}
