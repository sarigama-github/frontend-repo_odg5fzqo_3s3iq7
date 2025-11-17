import { useState } from 'react'

const sample = [
  { id: 1, url: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1600&auto=format&fit=crop', tag: 'Portraits' },
  { id: 2, url: 'https://images.unsplash.com/photo-1491554150239-a9062e24de5e?q=80&w=1600&auto=format&fit=crop', tag: 'Editorial' },
  { id: 3, url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1600&auto=format&fit=crop', tag: 'Lifestyle' },
  { id: 4, url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop', tag: 'Weddings' },
  { id: 5, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', tag: 'Products' },
  { id: 6, url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop', tag: 'Architecture' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const tags = ['All', ...Array.from(new Set(sample.map(s => s.tag)))]
  const items = filter === 'All' ? sample : sample.filter(s => s.tag === filter)

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
          <div className="flex gap-2">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-full text-sm border ${filter === t ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(img => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl">
              <img src={img.url} alt={img.tag} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
