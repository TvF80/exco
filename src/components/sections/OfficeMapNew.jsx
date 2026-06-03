import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, X } from 'lucide-react'
import { offices } from '../../data/offices'
import { services } from '../../data/services'

export default function OfficeMapNew({ onServiceClick }) {
  const [active, setActive] = useState(null)
  const office = active ? offices.find((o) => o.id === active) : null
  const officeServices = office ? office.serviceIds.map((sid) => services.find((s) => s.id === sid)).filter(Boolean) : []

  return (
    <section
      id="offices"
      className="py-20"
      style={{ background: '#0a1628' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3">Gdzie jesteśmy</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            6 biur w Polsce
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* SVG Map */}
          <div
            className="relative rounded-3xl p-6 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', minHeight: 360 }}
          >
            <svg viewBox="8 0 84 92" className="w-full max-w-xs">
              {/* Poland outline */}
              <path
                d="M38 8 L44 6 L52 4 L60 5 L67 8 L72 10 L76 14 L80 18 L82 22 L83 28 L85 32 L88 36 L88 40 L85 44 L82 47 L80 52 L78 56 L74 60 L72 65 L70 70 L68 74 L66 78 L63 80 L60 78 L58 74 L55 72 L52 74 L50 78 L47 80 L44 78 L41 74 L38 70 L35 68 L32 68 L28 66 L25 62 L22 58 L20 54 L18 50 L16 46 L14 42 L14 38 L16 34 L18 30 L20 26 L22 22 L25 18 L28 14 L32 10 Z"
                fill="rgba(1,112,185,0.15)"
                stroke="rgba(1,112,185,0.3)"
                strokeWidth="1.2"
              />
              {offices.map((o) => {
                const isActive = active === o.id
                return (
                  <g key={o.id} onClick={() => setActive(isActive ? null : o.id)} style={{ cursor: 'pointer' }}>
                    {isActive && (
                      <motion.circle
                        cx={o.x} cy={o.y} r={3}
                        fill="none" stroke="#DA5B15" strokeWidth={1}
                        initial={{ r: 3, opacity: 1 }}
                        animate={{ r: 9, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    )}
                    <circle
                      cx={o.x} cy={o.y}
                      r={isActive ? 4 : o.isHQ ? 3.5 : 2.5}
                      fill={isActive ? '#DA5B15' : o.isHQ ? '#DA5B15' : '#0170b9'}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth={isActive ? 1.5 : 1}
                    />
                    <text
                      x={o.x + 5} y={o.y + 1.5}
                      fontSize="4" fill={isActive ? '#DA5B15' : 'rgba(255,255,255,0.7)'}
                      fontWeight={isActive || o.isHQ ? '700' : '500'}
                      fontFamily="Inter, sans-serif"
                    >
                      {o.city}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Office list */}
          <div>
            <AnimatePresence mode="wait">
              {!office ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2"
                >
                  {offices.map((o, i) => (
                    <motion.button
                      key={o.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      onClick={() => setActive(o.id)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all active:scale-95"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: o.isHQ ? '#DA5B15' : 'rgba(1,112,185,0.2)' }}
                      >
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold flex items-center gap-2">
                          {o.city}
                          {o.isHQ && (
                            <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ background: '#DA5B15' }}>
                              Główna
                            </span>
                          )}
                        </div>
                        <div className="text-white/40 text-xs truncate">{o.address}</div>
                      </div>
                      <div className="text-white/30 text-xs">{o.serviceIds.length} usług</div>
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,91,21,0.3)' }}
                >
                  <div
                    className="flex items-center justify-between p-5"
                    style={{ background: 'rgba(218,91,21,0.1)', borderBottom: '1px solid rgba(218,91,21,0.2)' }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white">{office.city}</h3>
                      <p className="text-white/50 text-sm">{office.address}</p>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white/40"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <a href={`tel:${office.phone}`} className="flex items-center gap-2 p-3 rounded-xl text-sm text-white/70" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <Phone size={14} style={{ color: '#DA5B15' }} />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2 p-3 rounded-xl text-sm text-white/70" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <Mail size={14} style={{ color: '#0170b9' }} />
                        {office.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Usługi</p>
                      <div className="flex flex-wrap gap-1.5">
                        {officeServices.map((svc) => (
                          <button
                            key={svc.id}
                            onClick={() => {
                              setActive(null)
                              setTimeout(() => {
                                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                              }, 200)
                            }}
                            className="text-xs px-2.5 py-1 rounded-full transition-all active:scale-95 hover:brightness-110"
                            style={{ background: svc.bg, color: svc.color, border: `1px solid ${svc.color}30` }}
                          >
                            {svc.title}
                          </button>
                        ))}
                      </div>
                    </div>
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
