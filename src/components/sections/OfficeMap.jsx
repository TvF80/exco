import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, X, Users } from 'lucide-react'
import { offices } from '../../data/offices'
import { services } from '../../data/services'
import { teamById } from '../../data/team'

// Uproszczona mapa Polski jako SVG path
const PolandOutline = () => (
  <path
    d="M 38 8 L 44 6 L 52 4 L 60 5 L 67 8 L 72 10 L 76 14 L 80 18 L 82 22 L 83 28 L 85 32 L 88 36 L 88 40 L 85 44 L 82 47 L 80 52 L 78 56 L 74 60 L 72 65 L 70 70 L 68 74 L 66 78 L 63 80 L 60 78 L 58 74 L 55 72 L 52 74 L 50 78 L 47 80 L 44 78 L 41 74 L 38 70 L 35 68 L 32 68 L 28 66 L 25 62 L 22 58 L 20 54 L 18 50 L 16 46 L 14 42 L 14 38 L 16 34 L 18 30 L 20 26 L 22 22 L 25 18 L 28 14 L 32 10 Z"
    fill="#EEF2FF"
    stroke="#C7D2FE"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
)

export default function OfficeMap() {
  const [active, setActive] = useState(null)

  const activeOffice = active ? offices.find((o) => o.id === active) : null
  const activeTeam = activeOffice ? activeOffice.teamMemberIds.map(teamById).filter(Boolean) : []
  const activeServices = activeOffice
    ? activeOffice.serviceIds.map((sid) => services.find((s) => s.id === sid)).filter(Boolean)
    : []

  return (
    <section id="biura" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Gdzie jesteśmy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            6 biur w Polsce
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Kliknij w miasto na mapie lub na liście, aby poznać szczegóły biura i dostępne usługi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div
            className="relative rounded-3xl p-6 flex items-center justify-center"
            style={{ background: '#fff', border: '1px solid #E5E7EB', minHeight: 380 }}
          >
            <svg viewBox="10 0 80 88" className="w-full max-w-xs" style={{ overflow: 'visible' }}>
              <PolandOutline />
              {offices.map((office) => {
                const isActive = active === office.id
                return (
                  <g key={office.id} onClick={() => setActive(isActive ? null : office.id)} style={{ cursor: 'pointer' }}>
                    {/* Pulse ring */}
                    {isActive && (
                      <motion.circle
                        cx={office.x}
                        cy={office.y}
                        r={5}
                        fill="none"
                        stroke="#E8362A"
                        strokeWidth={1.5}
                        initial={{ r: 3, opacity: 1 }}
                        animate={{ r: 8, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    )}
                    <motion.circle
                      cx={office.x}
                      cy={office.y}
                      r={isActive ? 5 : 3.5}
                      fill={isActive ? '#E8362A' : (office.isHQ ? '#1B3A6B' : '#2563EB')}
                      stroke="#fff"
                      strokeWidth={isActive ? 2 : 1.5}
                      whileHover={{ r: 5.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Label */}
                    <text
                      x={office.x + 5}
                      y={office.y + 1.5}
                      fontSize="4.5"
                      fill={isActive ? '#E8362A' : '#1A1A2E'}
                      fontWeight={isActive || office.isHQ ? '700' : '500'}
                      fontFamily="Inter, sans-serif"
                    >
                      {office.city}
                    </text>
                    {office.isHQ && (
                      <text
                        x={office.x + 5}
                        y={office.y + 5.5}
                        fontSize="3.2"
                        fill="#9CA3AF"
                        fontFamily="Inter, sans-serif"
                      >
                        Siedziba główna
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>

            <p className="absolute bottom-4 text-xs text-gray-400">
              Kliknij w miasto aby zobaczyć szczegóły
            </p>
          </div>

          {/* Office list / detail */}
          <div>
            <AnimatePresence mode="wait">
              {!activeOffice ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {offices.map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setActive(office.id)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all hover:shadow-md"
                      style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: office.isHQ ? '#1B3A6B' : '#EEF2FF' }}
                      >
                        <MapPin size={18} style={{ color: office.isHQ ? '#fff' : '#1B3A6B' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#1A1A2E] flex items-center gap-2">
                          {office.city}
                          {office.isHQ && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1B3A6B] text-white">
                              HQ
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 truncate">{office.address}</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {office.serviceIds.length} usług
                      </div>
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={activeOffice.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl overflow-hidden"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  {/* Office header */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ background: '#1B3A6B' }}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{activeOffice.city}</h3>
                        {activeOffice.isHQ && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">
                            Siedziba główna
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 text-sm">{activeOffice.address}, {activeOffice.postal}</p>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Contact */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${activeOffice.phone}`}
                        className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium text-[#1B3A6B]"
                        style={{ background: '#EEF2FF' }}
                      >
                        <Phone size={15} />
                        {activeOffice.phone}
                      </a>
                      <a
                        href={`mailto:${activeOffice.email}`}
                        className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium text-[#1B3A6B]"
                        style={{ background: '#EEF2FF' }}
                      >
                        <Mail size={15} />
                        {activeOffice.email}
                      </a>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                        Usługi w tym biurze
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeServices.map((svc) => (
                          <span
                            key={svc.id}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ background: svc.bg, color: svc.color }}
                          >
                            {svc.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Team */}
                    {activeTeam.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                          Zespół w {activeOffice.city}
                        </h4>
                        <div className="flex gap-2">
                          {activeTeam.map((member) => (
                            <div key={member.id} className="flex items-center gap-2">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: member.color }}
                                title={member.name}
                              >
                                {member.initials}
                              </div>
                            </div>
                          ))}
                          <div className="text-xs text-gray-400 flex items-center ml-1">
                            {activeTeam.map((m) => m.name.split(' ')[0]).join(', ')}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
