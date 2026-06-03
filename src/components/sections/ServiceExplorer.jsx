import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp, Search, FileSearch, BookOpen, Users, Leaf, Globe, Scale,
  ChevronRight, X, ArrowRight,
} from 'lucide-react'
import { services } from '../../data/services'
import { teamByService } from '../../data/team'

const iconMap = { TrendingUp, Search, FileSearch, BookOpen, Users, Leaf, Globe, Scale }

export default function ServiceExplorer() {
  const [active, setActive] = useState(null)

  const activeService = active ? services.find((s) => s.id === active) : null
  const activeExperts = activeService ? teamByService(activeService.id) : []

  return (
    <section id="uslugi" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Nasze specjalizacje
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            8 obszarów eksperckich
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Kliknij w dowolną usługę, aby poznać zakres i ekspertów odpowiedzialnych za ten obszar.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            const isActive = active === service.id
            return (
              <motion.button
                key={service.id}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(isActive ? null : service.id)}
                className="relative text-left rounded-2xl p-5 transition-all cursor-pointer"
                style={{
                  background: isActive ? service.color : '#fff',
                  border: isActive ? `2px solid ${service.color}` : '2px solid #E5E7EB',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: isActive ? 'rgba(255,255,255,0.2)' : service.bg }}
                >
                  {Icon && (
                    <Icon
                      size={20}
                      style={{ color: isActive ? '#fff' : service.color }}
                    />
                  )}
                </div>
                <h3
                  className="font-bold text-sm leading-tight mb-1"
                  style={{ color: isActive ? '#fff' : '#1A1A2E' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs leading-snug"
                  style={{ color: isActive ? 'rgba(255,255,255,0.75)' : '#9CA3AF' }}
                >
                  {service.tagline}
                </p>
                <div
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: isActive ? 'rgba(255,255,255,0.2)' : service.bg }}
                >
                  <ChevronRight
                    size={12}
                    style={{
                      color: isActive ? '#fff' : service.color,
                      transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  />
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${activeService.color}22`, background: '#fff', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center justify-between p-6 pb-4" style={{ borderBottom: `1px solid ${activeService.color}22` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: activeService.bg }}
                  >
                    {iconMap[activeService.icon] && (
                      React.createElement(iconMap[activeService.icon], { size: 22, style: { color: activeService.color } })
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A2E]">{activeService.title}</h3>
                    <p className="text-sm text-gray-500">{activeService.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Subcategories */}
                <div className="md:col-span-2">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Zakres usługi
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeService.subcategories.map((sub) => (
                      <div
                        key={sub.name}
                        className="p-3 rounded-xl"
                        style={{ background: activeService.bg }}
                      >
                        <div className="font-semibold text-sm text-[#1A1A2E] mb-1">{sub.name}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{sub.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Dla kogo?
                    </h4>
                    <ul className="space-y-1">
                      {activeService.forWhom.map((fw) => (
                        <li key={fw} className="flex items-center gap-2 text-sm text-gray-600">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: activeService.color }}
                          />
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Experts */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Eksperci tej usługi
                  </h4>
                  <div className="space-y-3">
                    {activeExperts.map((expert) => (
                      <Link
                        key={expert.id}
                        to="/zespol"
                        className="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-all group"
                        style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                          style={{ background: expert.color }}
                        >
                          {expert.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm text-[#1A1A2E] truncate">{expert.name}</div>
                          <div className="text-xs text-gray-400 truncate">{expert.title}</div>
                        </div>
                        <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={`/uslugi/${activeService.id}`}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ background: activeService.color }}
                  >
                    Więcej o usłudze
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Needed for dynamic icon rendering in JSX
import React from 'react'
