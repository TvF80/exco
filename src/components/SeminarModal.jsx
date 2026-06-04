import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ArrowRight } from 'lucide-react'

export default function SeminarModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show modal after brief delay on first visit
    const timer = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200]"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed z-[201] inset-x-3 top-4 bottom-4 sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:w-[860px] sm:h-[90vh] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'linear-gradient(180deg, #0a0e1a 0%, #080c16 100%)',
              border: '1px solid rgba(218,91,21,0.25)',
              boxShadow: '0 0 80px rgba(218,91,21,0.12)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{
                background: 'linear-gradient(90deg, rgba(218,91,21,0.12), rgba(1,112,185,0.08))',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#DA5B15' }}
                >S</div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Seminarium EXCO A2A Polska 2026</p>
                  <p className="text-white/40 text-xs">Program spotkania</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/seminarium-2026.pdf"
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 transition-all hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Download size={12} />
                  Pobierz PDF
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* PDF embed */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/seminarium-2026.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full"
                title="Program Seminarium EXCO 2026"
                style={{ border: 'none', background: '#0a0e1a' }}
              />
            </div>

            {/* Footer CTA */}
            <div
              className="shrink-0 flex items-center justify-between px-5 py-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}
            >
              <p className="text-white/30 text-xs">EXCO A2A Polska · Walne Spotkanie 2026</p>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #DA5B15, #c44e10)' }}
              >
                Przejdź do strony
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
