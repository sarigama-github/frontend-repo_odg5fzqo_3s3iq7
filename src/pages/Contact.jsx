import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus('sent')
      else setStatus(data.detail || 'failed')
    } catch (err) {
      setStatus('failed')
    }
  }

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-gray-600 mt-2">Tell me about your project or event. I’ll reply within 24 hours.</p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <button className="rounded-md bg-black text-white px-4 py-2 text-sm" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>}
            {status && status !== 'sent' && status !== 'sending' && <p className="text-red-600 text-sm">{status}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
