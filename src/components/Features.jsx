import { Aperture, Sparkles, Timer, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Aperture, title: 'Artistic Direction', desc: 'Minimalist aesthetic with clean, editorial composition.' },
  { icon: Sparkles, title: 'Retouching Mastery', desc: 'Subtle, natural post-production using modern tooling.' },
  { icon: Timer, title: 'Fast Turnaround', desc: 'Streamlined workflow for efficient delivery without compromise.' },
  { icon: ShieldCheck, title: 'Pro Reliability', desc: 'Insured, backed up, and always on time for your peace of mind.' },
]

export default function Features() {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
