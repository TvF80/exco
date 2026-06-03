import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp, ShoppingBag, AlertTriangle, Search, Settings,
  BookOpen, Users, Leaf, Globe, Scale, ArrowRight, RotateCcw, Phone, Mail,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { questions, results } from '../../data/expertFinder'
import { services } from '../../data/services'
import { teamById } from '../../data/team'

const iconMap = { TrendingUp, ShoppingBag, AlertTriangle, Search, Settings, BookOpen, Users, Leaf, Globe, Scale }

export default function ExpertFinder() {
  const [selected, setSelected] = useState(null)
  const [result, setResult] = useState(null)

  const q = questions[0]

  const handleSelect = (optionNext) => {
    setSelected(optionNext)
    setTimeout(() => setResult(results[optionNext]), 300)
  }

  const reset = () => {
    setSelected(null)
    setResult(null)
  }

  const resultService = result ? services.find((s) => s.id === result.serviceId) : null
  const resultExperts = result ? result.expertIds.map(teamById).filter(Boolean) : []

  return (
    <section id="znajdz-eksperta" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Interaktywny dobór
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            Znajdź swojego eksperta
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Powiedz nam, czego potrzebujesz — dopasujemy właściwą usługę i eksperta.
          </p>
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}
        >
          {/* Question header */}
          <div
            className="px-8 py-6 flex items-center justify-between"
            style={{ background: '#F7F8FA', borderBottom: '1px solid #E5E7EB' }}
          >
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {result ? 'Wynik dopasowania' : 'Krok 1 z 1'}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E]">
                {result ? `Polecamy: ${result.subcategory}` : q.text}
              </h3>
            </div>
            {result && (
              <button
                onClick={reset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <RotateCcw size={14} />
                Zacznij od nowa
              </button>
            )}
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {q.options.map((option) => {
                    const Icon = iconMap[option.icon]
                    const isSelected = selected === option.next
                    return (
                      <motion.button
                        key={option.next}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(option.next)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all"
                        style={{
                          background: isSelected ? '#1B3A6B' : '#F7F8FA',
                          border: `1px solid ${isSelected ? '#1B3A6B' : '#E5E7EB'}`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: isSelected ? 'rgba(255,255,255,0.15)' : '#fff' }}
                        >
                          {Icon && (
                            <Icon size={18} style={{ color: isSelected ? '#fff' : '#1B3A6B' }} />
                          )}
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: isSelected ? '#fff' : '#1A1A2E' }}
                        >
                          {option.label}
                        </span>
                        {isSelected && (
                          <ArrowRight size={16} className="ml-auto text-white/70" />
                        )}
                      </motion.button>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Service result */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                      Rekomendowana usługa
                    </h4>
                    {resultService && (
                      <div
                        className="rounded-2xl p-5"
                        style={{ background: resultService.bg, border: `1px solid ${resultService.color}22` }}
                      >
                        <div className="font-bold text-lg text-[#1A1A2E] mb-1">{resultService.title}</div>
                        <div className="text-sm text-gray-600 mb-1">{result.subcategory}</div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-3">{result.message}</p>
                        <Link
                          to={`/uslugi/${resultService.id}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                          style={{ color: resultService.color }}
                        >
                          Dowiedz się więcej
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Expert result */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                      Dopasowani eksperci
                    </h4>
                    <div className="space-y-3">
                      {resultExperts.map((expert) => (
                        <div
                          key={expert.id}
                          className="flex gap-4 rounded-2xl p-4"
                          style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                            style={{ background: expert.color }}
                          >
                            {expert.initials}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-sm text-[#1A1A2E]">{expert.name}</div>
                            <div className="text-xs text-gray-400 mb-2">{expert.title}</div>
                            <div className="flex flex-wrap gap-1">
                              {expert.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-0.5 rounded-full"
                                  style={{ background: expert.color + '15', color: expert.color }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3">
                      <a
                        href="mailto:info@exco.pl"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                        style={{ background: '#E8362A' }}
                      >
                        <Mail size={15} />
                        Napisz do nas
                      </a>
                      <a
                        href="tel:+48221000000"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#1B3A6B] transition-colors"
                        style={{ background: '#EEF2FF', border: '1px solid #C7D2FE' }}
                      >
                        <Phone size={15} />
                        Zadzwoń
                      </a>
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
