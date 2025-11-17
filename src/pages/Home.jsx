import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
