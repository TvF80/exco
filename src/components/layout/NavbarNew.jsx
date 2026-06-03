import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ExcoLogo from '../ExcoLogo'

const sections = [
  { id: 'team', label: 'Zespół' },
  { id: 'services', label: 'Usługi' },
  { id: 'offices', label: 'Biura' },
  { id: 'contact', label: 'Kontakt' },
]

export default function NavbarNew() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Determine active section
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec.id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sec.id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 inset-x-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(12,8,0,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ExcoLogo className="h-7" white />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: active === id ? '#DA5B15' : 'rgba(255,255,255,0.6)',
                  background: active === id ? 'rgba(218,91,21,0.1)' : 'transparent',
                }}
              >
                {label}
              </button>
            ))}
            <a
              href="https://exco.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: '#DA5B15' }}
            >
              exco.pl
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 inset-x-0 z-30 p-4"
            style={{
              background: 'rgba(12,8,0,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="space-y-1 mb-3">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full flex items-center px-4 py-3.5 rounded-xl text-left text-white font-medium"
                  style={{ background: active === id ? 'rgba(218,91,21,0.15)' : 'transparent' }}
                >
                  <span style={{ color: active === id ? '#DA5B15' : '#fff' }}>{label}</span>
                </button>
              ))}
            </div>
            <a
              href="https://exco.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3.5 rounded-xl text-white font-semibold"
              style={{ background: '#DA5B15' }}
            >
              Odwiedź exco.pl
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
