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
      className="py-20"
      style={{
        background: 'linear-gradient(180deg, #0C0800 0%, #0a1020 50%, #0C0800 100%)',
        borderTop: '1px solid rgba(218,91,21,0.1)',
        borderBottom: '1px solid rgba(1,112,185,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
