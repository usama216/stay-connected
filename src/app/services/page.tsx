import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServicesGrid from '@/components/ServicesGrid'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </main>
  )
}
