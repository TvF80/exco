import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X, ExternalLink, Mail, ArrowRight } from 'lucide-react'
import { team } from '../data/team'
import { services } from '../data/services'
import { Link } from 'react-router-dom'

const departments = [...new Set(team.map((m) => m.department))]
const allOffices = [...new Set(team.map((m) => m.office))]

export default function TeamPage() {
  const [deptFilter, setDeptFilter] = useState(null)
  const [officeFilter, setOfficeFilter] = useState(null)
  const [expanded, setExpanded] = useState(null)

  const filtered = team.filter((m) => {
    if (deptFilter && m.department !== deptFilter) return false
    if (officeFilter && m.office !== officeFilter) return false
    return true
  })

  const expandedMember = expanded ? team.find((m) => m.id === expanded) : null

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}
      <div
        className="pt-24 pb-16"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1B3A6B 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Nasi eksperci
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Poznaj nasz zespół</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Każdy z nas odpowiada za konkretny obszar ekspercki. Filtruj po departamencie lub biurze,
            aby znaleźć właściwą osobę.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <span className="text-xs text-gray-400 mr-2">Departament:</span>
            <button
              onClick={() => setDeptFilter(null)}
              className="px-3 py-1 rounded-full text-xs font-medium mr-1 transition-all"
              style={{
                background: !deptFilter ? '#1B3A6B' : '#fff',
                color: !deptFilter ? '#fff' : '#6B7280',
                border: '1px solid #E5E7EB',
              }}
            >
              Wszyscy
            </button>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDeptFilter(deptFilter === d ? null : d)}
                className="px-3 py-1 rounded-full text-xs font-medium mr-1 transition-all"
                style={{
                  background: deptFilter === d ? '#1B3A6B' : '#fff',
                  color: deptFilter === d ? '#fff' : '#6B7280',
                  border: '1px solid #E5E7EB',
                }}
              >
                {d}
              </button>
            ))}
          </div>
          <div>
            <span className="text-xs text-gray-400 mr-2">Biuro:</span>
            {allOffices.map((o) => (
              <button
                key={o}
                onClick={() => setOfficeFilter(officeFilter === o ? null : o)}
                className="px-3 py-1 rounded-full text-xs font-medium mr-1 transition-all"
                style={{
                  background: officeFilter === o ? '#E8362A' : '#fff',
                  color: officeFilter === o ? '#fff' : '#6B7280',
                  border: '1px solid #E5E7EB',
                }}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Wyświetlam {filtered.length} z {team.length} ekspertów
        </p>
      </div>

      {/* Team grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setExpanded(member.id)}
                  className="w-full text-left rounded-2xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  {/* Color bar */}
                  <div className="h-2 w-full" style={{ background: member.color }} />

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                        style={{ background: member.color }}
                      >
                        {member.initials}
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-gray-200 group-hover:text-gray-400 mt-1 transition-colors"
                      />
                    </div>

                    <h3 className="font-bold text-[#1A1A2E] mb-0.5">{member.name}</h3>
                    <p className="text-xs text-gray-400 mb-1">{member.title}</p>

                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                      <MapPin size={11} />
                      {member.office}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {member.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: member.color + '15', color: member.color }}
                        >
                          {tag}
                        </span>
                      ))}
                      {member.tags.length > 2 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                          +{member.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {expandedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[520px] top-1/2 -translate-y-1/2 z-50 rounded-3xl bg-white shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="h-2" style={{ background: expandedMember.color }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shrink-0"
                      style={{ background: expandedMember.color }}
                    >
                      {expandedMember.initials}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1A1A2E]">{expandedMember.name}</h2>
                      <p className="text-sm text-gray-400">{expandedMember.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <MapPin size={11} />
                        {expandedMember.office}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">{expandedMember.bio}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Obsługiwane usługi
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expandedMember.serviceIds.map((sid) => {
                      const svc = services.find((s) => s.id === sid)
                      return svc ? (
                        <Link
                          key={sid}
                          to={`/uslugi/${sid}`}
                          onClick={() => setExpanded(null)}
                          className="text-sm px-3 py-1 rounded-full font-medium"
                          style={{ background: svc.bg, color: svc.color }}
                        >
                          {svc.title}
                        </Link>
                      ) : null
                    })}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Specjalizacje
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {expandedMember.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ background: expandedMember.color + '15', color: expandedMember.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="mailto:info@exco.pl"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ background: expandedMember.color }}
                  >
                    <Mail size={15} />
                    Skontaktuj się
                  </a>
                  <a
                    href="#"
                    className="w-12 flex items-center justify-center rounded-xl"
                    style={{ background: '#EEF2FF', color: '#1B3A6B' }}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
