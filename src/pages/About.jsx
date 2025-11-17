import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Camera, HeartHandshake, Briefcase } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="text-gray-600 mt-2">I’m a photographer focused on minimal, modern imagery with a documentary feel.</p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl border p-5">
              <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center mb-3"><Camera size={18} /></div>
              <h3 className="font-semibold">Background</h3>
              <p className="text-sm text-gray-600 mt-1">10+ years shooting brands, weddings, and editorial.</p>
            </div>
            <div className="rounded-xl border p-5">
              <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center mb-3"><Briefcase size={18} /></div>
              <h3 className="font-semibold">Clients</h3>
              <p className="text-sm text-gray-600 mt-1">Startups, agencies, and couples across the globe.</p>
            </div>
            <div className="rounded-xl border p-5">
              <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center mb-3"><HeartHandshake size={18} /></div>
              <h3 className="font-semibold">Approach</h3>
              <p className="text-sm text-gray-600 mt-1">Human-centered direction, natural light, and calm sets.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
