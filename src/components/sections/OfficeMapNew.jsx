import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, X } from 'lucide-react'
import { offices } from '../../data/offices'
import { services } from '../../data/services'

const FUTURE_OFFICES = [
  { id: 'bialystok', city: 'Białystok', x: 86, y: 29, textLeft: true },
  { id: 'rzeszow',   city: 'Rzeszów',   x: 78, y: 76, textLeft: true },
  { id: 'katowice',  city: 'Katowice',  x: 49, y: 68 },
]

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
              {/* Poland outline — x=7.9*lon-101.4, y=(54.9-lat)*13.56+5 — poprawne proporcje */}
              <path
                d="M12,18 L22,15 L31,11 L38,10
                   L43,13 L46,9 L49,13
                   L54,13 L61,11 L69,12
                   L78,16 L84,16
                   L87,21 L87,29 L85,38 L85,44
                   L88,51 L89,54
                   L88,62 L84,66 L86,70 L79,74
                   L77,77 L64,80 L58,82
                   L55,81 L48,78
                   L48,71 L44,67 L40,66 L32,63 L22,61 L18,58
                   L15,51 L15,46 L14,40 L13,34 L13,28 L13,24
                   Z"
                fill="rgba(1,112,185,0.15)"
                stroke="rgba(1,112,185,0.4)"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Future office proposals */}
              {FUTURE_OFFICES.map((f) => (
                <g key={f.id}>
                  <circle
                    cx={f.x} cy={f.y} r={3.5}
                    fill="rgba(218,91,21,0.08)"
                    stroke="rgba(218,91,21,0.45)"
                    strokeWidth={0.8}
                    strokeDasharray="2 1.5"
                  />
                  <text
                    x={f.x} y={f.y + 1.3}
                    fontSize="3.5" fill="rgba(218,91,21,0.7)"
                    fontWeight="700" fontFamily="Inter, sans-serif"
                    textAnchor="middle"
                  >?</text>
                  <text
                    x={f.textLeft ? f.x - 5 : f.x + 5} y={f.y + 1.5}
                    fontSize="3.5" fill="rgba(255,255,255,0.35)"
                    fontWeight="400" fontFamily="Inter, sans-serif"
                    textAnchor={f.textLeft ? 'end' : 'start'}
                  >{f.city}</text>
                </g>
              ))}

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
