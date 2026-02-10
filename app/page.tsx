import { HeroSection } from "@/components/HeroSection"
import { OurServices } from "@/components/OurServices"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Testimonials } from "@/components/Testimonials"
import { OurPanel } from "@/components/OurPanel"
import { ContactUs } from "@/components/ContactUs"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <OurPanel />
      <ContactUs />
    </main>
  )
}
