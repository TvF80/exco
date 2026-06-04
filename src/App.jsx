import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import NavbarNew from './components/layout/NavbarNew'
import HeroNew from './components/sections/HeroNew'
import StatsNew from './components/sections/StatsNew'
import TeamGrid from './components/sections/TeamGrid'
import ServicesNew from './components/sections/ServicesNew'
import OfficeMapNew from './components/sections/OfficeMapNew'
import TimelineNew from './components/sections/TimelineNew'
import ContactNew from './components/sections/ContactNew'
import TeamMemberModal from './components/TeamMemberModal'
import SeminarModal from './components/SeminarModal'
import { teamById } from './data/team'

export default function App() {
  const [activeMemberId, setActiveMemberId] = useState(null)
  const [activeServiceId, setActiveServiceId] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMember = useCallback((id) => setActiveMemberId(id), [])
  const closeMember = useCallback(() => setActiveMemberId(null), [])

  const goToService = useCallback((sid) => {
    setActiveServiceId(sid)
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  const activeMember = activeMemberId ? teamById(activeMemberId) : null

  // Scroll progress
  const docH = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1
  const progress = docH > 0 ? Math.min(scrollY / docH, 1) : 0

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[200] h-0.5 transition-all duration-100 pointer-events-none"
        style={{ width: `${progress * 100}%`, background: 'linear-gradient(90deg, #DA5B15, #0170b9)' }}
      />

      <NavbarNew />
      <main>
        <HeroNew />
        <StatsNew />
        <TeamGrid onMemberClick={openMember} />
        <ServicesNew
          onMemberClick={openMember}
          activeServiceId={activeServiceId}
          onServiceIdConsumed={() => setActiveServiceId(null)}
        />
        <OfficeMapNew />
        <TimelineNew />
        <ContactNew />
      </main>

      <footer
        className="py-10"
        style={{ background: '#0C0800', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            © 2026 EXCO A2A Polska Sp. z o.o. · NIP: 1181471955 · Część Grupy EXCO (Francja)
          </p>
          <div className="flex gap-4 text-xs text-white/25">
            {[
              { label: 'Zespół', id: 'team' },
              { label: 'Usługi', id: 'services' },
              { label: 'Biura', id: 'offices' },
              { label: 'Kontakt', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white/60 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <AnimatePresence>
        {scrollY > 400 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90"
            style={{
              background: 'linear-gradient(135deg, #DA5B15, #ff7a35)',
              boxShadow: '0 4px 20px rgba(218,91,21,0.4)',
            }}
          >
            <ArrowUp size={18} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Team Member Modal */}
      <TeamMemberModal
        member={activeMember}
        onClose={closeMember}
        onServiceClick={goToService}
      />

      {/* Seminar program splash */}
      <SeminarModal />
    </>
  )
}
