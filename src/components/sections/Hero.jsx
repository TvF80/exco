import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1B3A6B 50%, #1e4a8a 100%)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: '#E8362A', filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-16 w-80 h-80 rounded-full"
          style={{ background: '#2563EB', filter: 'blur(100px)' }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full"
          style={{ background: '#F5A623', filter: 'blur(90px)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{ background: 'rgba(232,54,42,0.2)', border: '1px solid rgba(232,54,42,0.4)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8362A] animate-pulse" />
          Część Grupy EXCO — 140 biur w 18 krajach
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Eksperci na każdym
          <br />
          <span
            className="relative inline-block"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
          >
            etapie biznesu
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full origin-left"
              style={{ background: '#E8362A' }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          EXCO A2A Polska to multidyscyplinarna firma doradcza działająca od 1999 roku.
          Łączymy konsulting, audyt, outsourcing i prawo — w jednym zespole, dla Twojego biznesu.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/#znajdz-eksperta"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all"
            style={{ background: '#E8362A' }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('znajdz-eksperta')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Znajdź swojego eksperta
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/uslugi"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            Poznaj nasze usługi
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          {[
            { value: '27', label: 'lat w Polsce', suffix: '' },
            { value: '6', label: 'biur w Polsce', suffix: '' },
            { value: '18', label: 'krajów w sieci', suffix: '' },
            { value: '70K+', label: 'klientów globalnie', suffix: '' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="py-6 px-4 text-center"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <span>Przewiń w dół</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}
