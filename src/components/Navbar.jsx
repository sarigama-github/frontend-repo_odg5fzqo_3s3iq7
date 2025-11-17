import { Link, NavLink } from 'react-router-dom'
import { Camera, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <>
      <NavLink to="/" end className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Home</NavLink>
      <NavLink to="/gallery" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Gallery</NavLink>
      <NavLink to="/services" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Services</NavLink>
      <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`}>Contact</NavLink>
      <a href="/test" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-black transition-colors">System Test</a>
    </>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"><Camera size={18} /></span>
            <span className="font-semibold tracking-tight">LensCraft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">{navItem}</nav>

          <button className="md:hidden p-2 rounded-md border border-gray-300" onClick={() => setOpen(v => !v)}>
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-1">{navItem}</div>
        </div>
      )}
    </header>
  )
}
