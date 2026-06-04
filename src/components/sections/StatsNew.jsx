import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 27,  suffix: '',   label: 'lat w Polsce',     sub: 'działamy od 1999',        color: '#DA5B15' },
  { value: 150, suffix: '+',  label: 'pracowników',       sub: 'w Polsce',                color: '#0097bd' },
  { value: 20,  suffix: '',   label: 'ekspertów',         sub: 'w naszym zespole',        color: '#DA5B15' },
  { value: 6,   suffix: '',   label: 'biur w Polsce',     sub: 'Warszawa, Kraków, Gdańsk…', color: '#0170b9' },
  { value: 140, suffix: '',   label: 'biur globalnie',    sub: 'sieć EXCO Group',         color: '#DA5B15' },
  { value: 18,  suffix: '',   label: 'krajów',            sub: 'Europy i świata',         color: '#0170b9' },
  { value: 70,  suffix: 'K+', label: 'klientów',          sub: 'w całej sieci EXCO',      color: '#DA5B15' },
]

function AnimatedNumber({ value, suffix, delay = 0 }) {
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      started.current = true
      const duration = 1800
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return <span>{display}{suffix}</span>
}

export default function StatsNew() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: '#05101e',
        borderTop: '1px solid rgba(218,91,21,0.12)',
        borderBottom: '1px solid rgba(1,112,185,0.12)',
      }}
    >
      {/* Chart grid — horizontal lines like trading terminal */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: [
          'linear-gradient(rgba(1,112,185,0.10) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(1,112,185,0.05) 1px, transparent 1px)',
        ].join(','),
        backgroundSize: '100% 25%, 10% 100%',
      }} />

      {/* Trend lines — rising market chart */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trendOrange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#DA5B15" stopOpacity="0"/>
            <stop offset="15%"  stopColor="#DA5B15" stopOpacity="0.35"/>
            <stop offset="85%"  stopColor="#DA5B15" stopOpacity="0.30"/>
            <stop offset="100%" stopColor="#DA5B15" stopOpacity="0.05"/>
          </linearGradient>
          <linearGradient id="trendBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0170b9" stopOpacity="0"/>
            <stop offset="20%"  stopColor="#0170b9" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#0170b9" stopOpacity="0.08"/>
          </linearGradient>
          <linearGradient id="areaOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#DA5B15" stopOpacity="0.10"/>
            <stop offset="100%" stopColor="#DA5B15" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Area fill under main trend */}
        <path d="M0 182 C180 172 360 152 560 122 S840 76 1000 56 L1180 36 1440 10 L1440 200 L0 200 Z" fill="url(#areaOrange)"/>
        {/* Main orange trend */}
        <path d="M0 182 C180 172 360 152 560 122 S840 76 1000 56 L1180 36 1440 10"
              stroke="url(#trendOrange)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Secondary blue trend */}
        <path d="M0 196 C260 189 520 174 760 158 S1120 132 1440 112"
              stroke="url(#trendBlue)" strokeWidth="1.5" fill="none" strokeDasharray="10 5" strokeLinecap="round"/>
        {/* Candlestick markers on orange trend */}
        {[[190,162],[380,140],[570,112],[760,88],[950,66],[1140,44],[1330,20]].map(([x, y], i) => (
          <g key={x} opacity={i % 2 === 0 ? 0.55 : 0.42}>
            <line x1={x} y1={y - 8}  x2={x} y2={y - 4}  stroke={i % 3 ? '#DA5B15' : '#0170b9'} strokeWidth="1.2"/>
            <rect x={x - 2.5} y={y - 4} width="5" height="12" fill={i % 3 ? '#DA5B15' : '#0170b9'} rx="1"/>
            <line x1={x} y1={y + 8}  x2={x} y2={y + 13} stroke={i % 3 ? '#DA5B15' : '#0170b9'} strokeWidth="1.2"/>
          </g>
        ))}
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="section-label text-center mb-8"
        >
          EXCO w liczbach
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {stats.map(({ value, suffix, label, sub, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              className="text-center p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${color}22`,
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold font-display mb-1"
                style={{ color }}
              >
                <AnimatedNumber value={value} suffix={suffix} delay={300 + i * 90} />
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{label}</div>
              <div className="text-white/30 text-xs leading-tight">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
