import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { team } from '../../data/team'

const FILTERS = [
  { label: 'Wszyscy', match: null },
  { label: 'Zarząd', match: ['Zarząd'] },
  { label: 'Konsulting', match: ['Konsulting'] },
  { label: 'Audyt', match: ['Audyt'] },
  { label: 'Finanse', match: ['Finanse', 'Księgowość'] },
  { label: 'Operacje', match: ['Operacje', 'HR', 'Administracja'] },
  { label: 'Biura', match: ['Kraków', 'Gdańsk'] },
  { label: 'Marketing', match: ['Marketing'] },
  { label: 'Prawo', match: ['Prawo'] },
]

function matchFilter(person, filter) {
  if (!filter.match) return true
  return filter.match.includes(person.dept)
}

export default function TeamGrid({ onMemberClick }) {
  const [filter, setFilter] = useState(FILTERS[0])

  const filtered = team.filter((p) => matchFilter(p, filter))

  return (
    <section
      id="team"
      className="min-h-svh py-20"
      style={{ background: 'linear-gradient(rgba(10,5,0,0.93), rgba(13,13,13,0.97)), url(/bg/team-bw.jpeg) center/cover no-repeat' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3">Nasz Zespół</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            20 ekspertów,<br />
            <span style={{ color: '#DA5B15' }}>jedna firma</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Kliknij zdjęcie, aby poznać specjalizację i powiązane usługi eksperta.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 justify-start md:justify-center" style={{ scrollbarWidth: 'none' }}>
          {FILTERS.map((f) => {
            const count = team.filter((p) => matchFilter(p, f)).length
            const isActive = filter.label === f.label
            return (
              <button
                key={f.label}
                onClick={() => setFilter(f)}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5"
                style={{
                  background: isActive ? '#DA5B15' : 'rgba(255,255,255,0.07)',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {f.label}
                {f.match && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((person, i) => (
              <motion.button
                key={person.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.28, delay: Math.min(i * 0.03, 0.35) }}
                onClick={() => onMemberClick?.(person.id)}
                className="group flex flex-col items-center gap-2 cursor-pointer"
                title={`${person.name} — ${person.title}`}
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="absolute inset-0 items-center justify-center text-white text-xl font-bold hidden"
                    style={{ background: person.color }}
                  >
                    {person.initials}
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-2"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}
                  >
                    <div
                      className="w-full py-1 rounded-lg text-center text-[10px] font-bold text-white tracking-wide"
                      style={{ background: person.color }}
                    >
                      PROFIL
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 group-hover:h-1 transition-all duration-300"
                    style={{ background: person.color }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-white text-xs font-semibold leading-tight">
                    {person.name.split(' ')[0]}
                  </p>
                  <p className="text-white/30 text-[10px] leading-tight hidden sm:block">
                    {person.name.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
