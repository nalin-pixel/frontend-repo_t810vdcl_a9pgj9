import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm text-gray-700 hover:text-gray-900 transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
            <span className="font-semibold text-gray-900">Finix</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={navLink}>Features</a>
            <a href="#pricing" className={navLink}>Pricing</a>
            <a href="#faq" className={navLink}>FAQ</a>
            <a href="#" className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md px-4 py-2 transition-colors">Sign in</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 border-t border-gray-200 pt-4">
              <a href="#features" className={navLink} onClick={() => setOpen(false)}>Features</a>
              <a href="#pricing" className={navLink} onClick={() => setOpen(false)}>Pricing</a>
              <a href="#faq" className={navLink} onClick={() => setOpen(false)}>FAQ</a>
              <a href="#" className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md px-4 py-2 transition-colors">Sign in</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
