import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, MapPin, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { team } from '../../data/team'
import { services } from '../../data/services'

const allTags = [...new Set(team.flatMap((m) => m.tags))]

export default function TeamSection() {
  const [filter, setFilter] = useState(null)
  const [expanded, setExpanded] = useState(null)

  const filtered = filter ? team.filter((m) => m.tags.includes(filter)) : team
  const expandedMember = expanded ? team.find((m) => m.id === expanded) : null

  return (
    <section id="zespol" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
            Nasi eksperci
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
            Poznaj nasz zespół
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Każdy ekspert odpowiada za konkretne usługi. Filtruj po specjalizacji lub kliknij kartę, by dowiedzieć się więcej.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setFilter(null)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background: !filter ? '#1B3A6B' : '#F7F8FA',
              color: !filter ? '#fff' : '#6B7280',
              border: !filter ? '1px solid #1B3A6B' : '1px solid #E5E7EB',
            }}
          >
            Wszyscy ({team.length})
          </button>
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: filter === tag ? '#1B3A6B' : '#F7F8FA',
                color: filter === tag ? '#fff' : '#6B7280',
                border: filter === tag ? '1px solid #1B3A6B' : '1px solid #E5E7EB',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => setExpanded(member.id)}
                  className="w-full text-left rounded-2xl p-5 hover:shadow-lg transition-all group cursor-pointer"
                  style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                >
                  {/* Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                      style={{ background: member.color }}
                    >
                      {member.initials}
                    </div>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 group-hover:text-gray-500 transition-colors"
                      style={{ background: '#fff' }}
                    >
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div className="font-bold text-[#1A1A2E] mb-0.5">{member.name}</div>
                  <div className="text-sm text-gray-400 mb-3">{member.title}</div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                    <MapPin size={11} />
                    {member.office}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {member.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ background: member.color + '18', color: member.color }}
                      >
                        {tag}
                      </span>
                    ))}
                    {member.tags.length > 2 && (
                      <span className="text-xs px-2 py-0.5 rounded-full text-gray-400 bg-gray-100">
                        +{member.tags.length - 2}
                      </span>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/zespol"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors"
            style={{ background: '#1B3A6B' }}
          >
            Poznaj cały zespół
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Member modal */}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto rounded-3xl bg-white shadow-2xl overflow-hidden"
            >
              {/* Modal header */}
              <div
                className="px-6 pt-6 pb-5"
                style={{ background: expandedMember.color }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                      {expandedMember.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{expandedMember.name}</h3>
                      <p className="text-white/80 text-sm">{expandedMember.title}</p>
                      <div className="flex items-center gap-1 text-white/60 text-xs mt-1">
                        <MapPin size={11} />
                        {expandedMember.office}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(null)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{expandedMember.bio}</p>

                {/* Services */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Usługi
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expandedMember.serviceIds.map((sid) => {
                      const svc = services.find((s) => s.id === sid)
                      return svc ? (
                        <Link
                          key={sid}
                          to={`/uslugi/${sid}`}
                          className="text-xs px-3 py-1 rounded-full font-medium transition-colors"
                          style={{ background: svc.bg, color: svc.color }}
                          onClick={() => setExpanded(null)}
                        >
                          {svc.title}
                        </Link>
                      ) : null
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
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

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="mailto:info@exco.pl"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: expandedMember.color }}
                  >
                    Napisz wiadomość
                  </a>
                  {expandedMember.linkedin && expandedMember.linkedin !== '#' && (
                    <a
                      href={expandedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 flex items-center justify-center rounded-xl"
                      style={{ background: '#EEF2FF', color: '#1B3A6B' }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
