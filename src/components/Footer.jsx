export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} LensCraft Photography. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/privacy" className="hover:text-black">Privacy</a>
            <a href="/terms" className="hover:text-black">Terms</a>
            <a href="/contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
