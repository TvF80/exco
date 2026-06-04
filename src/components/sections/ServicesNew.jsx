import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Users, BookOpen, List, ChevronRight, ChevronDown, Mail } from 'lucide-react'
import { services } from '../../data/services'
import { teamByService } from '../../data/team'

const TABS = [
  { id: 'opis', label: 'Opis', Icon: BookOpen },
  { id: 'zakres', label: 'Zakres', Icon: List },
  { id: 'eksperci', label: 'Eksperci', Icon: Users },
]

function SubcategoryAccordion({ subcategories, color }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="space-y-2">
      {subcategories.map((sub, idx) => {
        const isOpen = openIdx === idx
        return (
          <motion.div
            key={sub.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: isOpen ? `${color}10` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isOpen ? color + '35' : 'rgba(255,255,255,0.06)'}`,
              transition: 'background 0.2s, border-color 0.2s',
            }}
          >
            {/* Header row */}
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center gap-3 p-3.5 text-left"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0 transition-transform duration-200"
                style={{
                  background: isOpen ? color : 'rgba(255,255,255,0.25)',
                  transform: isOpen ? 'scale(1.4)' : 'scale(1)',
                }}
              />
              <span
                className="flex-1 text-sm font-semibold leading-snug transition-colors"
                style={{ color: isOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.65)' }}
              >
                {sub.name}
              </span>
              <ChevronDown
                size={14}
                className="shrink-0 transition-transform duration-200"
                style={{
                  color: isOpen ? color : 'rgba(255,255,255,0.2)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {/* Expanded description */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p
                    className="px-4 pb-4 text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', borderTop: `1px solid ${color}20` }}
                  >
                    {sub.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function ServicesNew({ onMemberClick, activeServiceId, onServiceIdConsumed }) {
  const [active, setActive] = useState(null)
  const [tab, setTab] = useState('opis')

  useEffect(() => {
    if (activeServiceId) {
      setActive(activeServiceId)
      setTab('zakres')
      onServiceIdConsumed?.()
    }
  }, [activeServiceId, onServiceIdConsumed])

  const activeService = active ? services.find((s) => s.id === active) : null
  const activeTeam = activeService ? teamByService(activeService.id) : []

  function open(id) {
    if (id === active) {
      setActive(null)
    } else {
      setActive(id)
      setTab('opis')
    }
  }

  return (
    <section
      id="services"
      className="min-h-svh py-20"
      style={{
        background: [
          'linear-gradient(180deg, rgba(7,11,20,0.99) 0%, rgba(9,9,18,0.98) 50%, rgba(7,11,20,0.99) 100%)',
          'linear-gradient(rgba(1,112,185,0.13) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(1,112,185,0.13) 1px, transparent 1px)',
          'linear-gradient(rgba(1,112,185,0.04) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(1,112,185,0.04) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: 'auto, 100% 96px, 96px 100%, 100% 24px, 24px 100%',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Co oferujemy</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            9 obszarów,
            <br />
            <span style={{ color: '#0170b9' }}>pełne wsparcie</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Kliknij usługę, aby zobaczyć pełny opis, zakres i ekspertów. W zakładce Zakres kliknij każdą pozycję, aby rozwinąć szczegółowy opis.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {services.map((svc, i) => {
            const isActive = svc.id === active
            const expertCount = teamByService(svc.id).length
            return (
              <motion.button
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + Math.min(i * 0.06, 0.35) }}
                whileTap={{ scale: 0.96 }}
                onClick={() => open(svc.id)}
                className="relative text-left p-5 rounded-2xl transition-all group overflow-hidden"
                style={{
                  background: isActive ? svc.color : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? svc.color : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: isActive ? 'rgba(255,255,255,0.08)' : `${svc.color}08` }}
                />
                <div className="text-3xl mb-3">{svc.emoji}</div>
                <h3 className="font-bold text-sm sm:text-base text-white leading-tight mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed line-clamp-2 mb-3">
                  {svc.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <div
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: isActive ? 'rgba(255,255,255,0.8)' : svc.color }}
                  >
                    {isActive ? 'Zamknij' : 'Szczegóły'}
                    <ChevronRight size={12} className={`transition-transform duration-200 ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                  {expertCount > 0 && (
                    <div
                      className="flex items-center gap-1 text-xs"
                      style={{ color: isActive ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)' }}
                    >
                      <Users size={10} />
                      {expertCount}
                    </div>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active service detail panel */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-6 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeService.color}40`,
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between p-5"
                style={{ borderBottom: `1px solid ${activeService.color}20` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: activeService.bg }}
                  >
                    {activeService.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeService.title}</h3>
                    <p className="text-sm text-white/50">{activeService.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeService.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all active:scale-95"
                    style={{ background: activeService.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={11} />
                    exco.pl
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b px-5" style={{ borderColor: `${activeService.color}15` }}>
                {TABS.map(({ id, label, Icon }) => {
                  const isTab = tab === id
                  return (
                    <button
                      key={id}
                      onClick={() => setTab(id)}
                      className="flex items-center gap-1.5 px-4 py-3 text-xs font-semibold transition-all border-b-2 -mb-px"
                      style={{
                        color: isTab ? activeService.color : 'rgba(255,255,255,0.35)',
                        borderColor: isTab ? activeService.color : 'transparent',
                      }}
                    >
                      <Icon size={12} />
                      {label}
                      {id === 'eksperci' && activeTeam.length > 0 && (
                        <span
                          className="px-1.5 py-0.5 rounded-full text-[10px]"
                          style={{ background: activeService.color + '25', color: activeService.color }}
                        >
                          {activeTeam.length}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-5"
                >
                  {/* === OPI S === */}
                  {tab === 'opis' && (
                    <div className="max-w-2xl space-y-5">
                      <p className="text-white/70 leading-relaxed text-sm">
                        {activeService.description}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <a
                          href={activeService.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
                          style={{ background: activeService.color }}
                        >
                          <ExternalLink size={14} />
                          Więcej na exco.pl
                        </a>
                        <button
                          onClick={() => setTab('zakres')}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
                          style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                          <List size={14} />
                          Zakres usług
                        </button>
                        {activeTeam.length > 0 && (
                          <button
                            onClick={() => setTab('eksperci')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
                            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                          >
                            <Users size={14} />
                            Poznaj ekspertów ({activeTeam.length})
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* === ZAKRES — accordion === */}
                  {tab === 'zakres' && (
                    <div>
                      <p className="text-xs text-white/30 mb-3 uppercase tracking-widest">
                        Kliknij pozycję, aby rozwinąć opis
                      </p>
                      <SubcategoryAccordion
                        subcategories={activeService.subcategories}
                        color={activeService.color}
                      />
                      <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <a
                          href={`mailto:war@exco.pl?subject=Zapytanie: ${activeService.title}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
                          style={{ background: activeService.color }}
                        >
                          <Mail size={14} />
                          Zapytaj o tę usługę
                        </a>
                      </div>
                    </div>
                  )}

                  {/* === EKSPERCI === */}
                  {tab === 'eksperci' && (
                    activeTeam.length === 0 ? (
                      <p className="text-sm text-white/30">Skontaktuj się z nami, aby poznać właściwego eksperta.</p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {activeTeam.map((person, idx) => (
                          <motion.button
                            key={person.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            onClick={() => onMemberClick?.(person.id)}
                            className="group flex flex-col items-center gap-2 p-3 rounded-2xl text-center transition-all active:scale-95"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                            title={`${person.name} — kliknij aby zobaczyć profil`}
                          >
                            <div
                              className="relative w-16 h-16 rounded-full overflow-hidden"
                              style={{ boxShadow: `0 0 0 2px ${person.color}` }}
                            >
                              <img
                                src={person.photo}
                                alt={person.name}
                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                  e.target.nextSibling.style.display = 'flex'
                                }}
                              />
                              <div
                                className="absolute inset-0 items-center justify-center text-white text-sm font-bold hidden"
                                style={{ background: person.color }}
                              >
                                {person.initials}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white leading-tight">
                                {person.name.split(' ')[0]} {person.name.split(' ')[1]}
                              </p>
                              <p className="text-[10px] text-white/40 mt-0.5 leading-tight line-clamp-2">{person.title}</p>
                            </div>
                            <div
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ background: person.color + '25', color: person.color }}
                            >
                              Zobacz profil
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
