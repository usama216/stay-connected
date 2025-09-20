import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatWeOffer from '@/components/WhatWeOffer'
import SelectingProvider from '@/components/SelectingProvider'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="services">
        <WhatWeOffer />
      </div>
      <div id="about">
        <SelectingProvider />
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      {/* <Partners /> */}
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </main>
  )
}
