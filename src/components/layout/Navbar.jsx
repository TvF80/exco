import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/uslugi', label: 'Usługi' },
  { to: '/zespol', label: 'Zespół' },
  { to: '/o-nas', label: 'O nas' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm"
            style={{ background: '#1B3A6B' }}
          >
            E
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-[#1B3A6B]' : 'text-white'
            }`}
          >
            EXCO A2A
          </span>
          <span
            className={`text-xs font-medium transition-colors ${
              scrolled ? 'text-gray-500' : 'text-white/70'
            }`}
          >
            Polska
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? scrolled
                      ? 'bg-[#1B3A6B] text-white'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-gray-600 hover:text-[#1B3A6B] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* CTA button */}
        <Link
          to="/kontakt"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-[#E8362A] text-white hover:bg-[#c82a20] transition-colors shadow-md"
        >
          Skontaktuj się
        </Link>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-[#1B3A6B]' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-xl">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-100"
            >
              {label}
            </Link>
          ))}
          <div className="p-4">
            <Link
              to="/kontakt"
              className="block text-center py-3 px-4 rounded-xl bg-[#E8362A] text-white font-semibold text-sm"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
