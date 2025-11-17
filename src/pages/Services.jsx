import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { title: 'Weddings', price: 'from $2,500', desc: 'Full-day coverage with second shooter, consultation, and online gallery.' },
  { title: 'Brand & Product', price: 'from $1,200', desc: 'Studio or on-location shoots for e-commerce and campaigns.' },
  { title: 'Portraits', price: 'from $450', desc: 'Headshots and lifestyle sessions with styling guidance.' },
]

export default function Services() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
          <p className="text-gray-600 mt-2">Clear packages with flexible options tailored to your needs.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="rounded-xl border p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <p className="mt-6 font-medium">{s.price}</p>
                <a href="/contact" className="mt-4 inline-block rounded-md bg-black text-white px-4 py-2 text-sm">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
