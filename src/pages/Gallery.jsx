import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const photos = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  url: `https://images.unsplash.com/photo-15${10 + i}309${i}9-0a4cdffe6b1d?q=80&w=1600&auto=format&fit=crop`,
}))

export default function Gallery() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
              <p className="text-gray-600 mt-1">A curated selection across categories.</p>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {photos.map(p => (
              <img key={p.id} src={p.url} alt="portfolio" className="mb-4 rounded-xl w-full object-cover" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
