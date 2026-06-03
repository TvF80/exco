import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 27, suffix: '', label: 'lat w Polsce', sub: 'działamy od 1999' },
  { value: 20, suffix: '', label: 'ekspertów', sub: 'w naszym zespole' },
  { value: 6, suffix: '', label: 'biur w Polsce', sub: 'Warszawa, Kraków, Gdańsk...' },
  { value: 140, suffix: '', label: 'biur globalnie', sub: 'sieć EXCO Group' },
  { value: 18, suffix: '', label: 'krajów', sub: 'Europy i świata' },
  { value: 70, suffix: 'K+', label: 'klientów', sub: 'w całej sieci EXCO' },
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
    <section className="py-20" style={{ background: 'linear-gradient(rgba(12,8,0,0.91), rgba(12,8,0,0.91)), url(/bg/bg-placeholder3.jpg) center/cover no-repeat' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="section-label text-center mb-8"
        >
          EXCO w liczbach
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {stats.map(({ value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="text-center p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold font-display mb-1"
                style={{ color: i % 2 === 0 ? '#DA5B15' : '#0170b9' }}
              >
                <AnimatedNumber value={value} suffix={suffix} delay={300 + i * 100} />
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{label}</div>
              <div className="text-white/30 text-xs">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
