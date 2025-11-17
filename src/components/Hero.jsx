import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">Capturing stories through a modern lens</h1>
            <p className="mt-4 text-gray-700 text-lg">Minimal, timeless imagery for brands, weddings, and creatives. Technology-forward process with a human touch.</p>
            <div className="mt-6 flex gap-3">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 text-sm font-medium">View Portfolio</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900">Book a Session</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
