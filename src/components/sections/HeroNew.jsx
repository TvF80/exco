import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, FileText, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'
import ParticleCanvas from '../ParticleCanvas'
import ExcoLogo from '../ExcoLogo'
import SeminarModal from '../SeminarModal'

export default function HeroNew({ onScrollDown }) {
  const fired = useRef(false)
  const [seminarOpen, setSeminarOpen] = useState(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    // Fajerwerki na load — kolory EXCO
    const launch = (x, angle) =>
      confetti({
        particleCount: 80,
        spread: 70,
        angle,
        origin: { x, y: 0.6 },
        colors: ['#DA5B15', '#0170b9', '#ffffff', '#ff9a55', '#0097bd'],
        gravity: 0.8,
        scalar: 0.9,
        drift: 0,
      })

    const t1 = setTimeout(() => launch(0.2, 60), 600)
    const t2 = setTimeout(() => launch(0.8, 120), 800)
    const t3 = setTimeout(() => launch(0.5, 90), 1100)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <section
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0500 0%, #1b0e00 35%, #0d1a2e 70%, #0a1628 100%)' }}
    >
      <ParticleCanvas />

      {/* EXCO diamond glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(218,91,21,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <ExcoLogo className="h-10 md:h-14" white />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: 'rgba(218,91,21,0.15)',
            border: '1px solid rgba(218,91,21,0.4)',
            color: '#ff9a55',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#DA5B15', animation: 'pulse 2s infinite' }}
          />
          Seminarium EXCO A2A Polska 2026
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6"
        >
          <span className="text-white">Razem</span>
          <br />
          <span
            className="font-display"
            style={{
              background: 'linear-gradient(135deg, #DA5B15 0%, #ff9a55 50%, #DA5B15 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            budujemy
          </span>
          <br />
          <span className="text-white">przyszłość</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          EXCO A2A Polska — 27 lat eksperckich usług doradczych,
          finansowych i prawnych. 20 specjalistów. 6 miast. Jedna wizja.
        </motion.p>

        {/* Stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          {[
            { n: '27', label: 'lat w Polsce' },
            { n: '20', label: 'ekspertów' },
            { n: '6', label: 'miast' },
            { n: '140', label: 'biur globalnie' },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="text-2xl font-bold" style={{ color: '#DA5B15' }}>{n}</span>
              <span className="text-sm text-white/50">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-2xl font-semibold text-white transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #DA5B15, #ff7a35)' }}
          >
            Poznaj nasz zespół
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-2xl font-semibold text-white/80 transition-all active:scale-95"
            style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}
          >
            Nasze usługi
          </button>
        </motion.div>

        {/* ── Seminar card ── entry → float → hover (3 nested layers) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.65, type: 'spring', stiffness: 260, damping: 24 }}
          className="mt-10 mb-20 mx-auto max-w-lg w-full"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2, delay: 2.5 }}
          >
            <motion.button
              onClick={() => setSeminarOpen(true)}
              whileHover={{ scale: 1.035, y: -5, rotate: 0 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              className="relative flex items-center gap-5 px-7 py-5 rounded-2xl text-left w-full cursor-pointer group"
              style={{
                rotate: '-1deg',
                background: 'linear-gradient(135deg, rgba(218,91,21,0.18) 0%, rgba(1,112,185,0.12) 100%)',
                border: '1px solid rgba(218,91,21,0.45)',
                boxShadow: '0 0 40px rgba(218,91,21,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #DA5B15, #c44e10)' }}>
                <FileText size={26} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full inline-block mb-1"
                  style={{ background: 'rgba(218,91,21,0.3)', color: '#ff9a55' }}>Program</span>
                <p className="text-white font-bold text-base leading-tight">Seminarium EXCO A2A Polska 2026</p>
                <p className="text-white/45 text-sm mt-0.5">Kliknij aby otworzyć plan spotkania</p>
              </div>
              <ArrowRight size={20} className="shrink-0 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-200" />
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute -top-1 -right-1 w-8 h-8 rotate-45" style={{ background: 'rgba(218,91,21,0.25)' }} />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <SeminarModal open={seminarOpen} onClose={() => setSeminarOpen(false)} />

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Przewiń</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
