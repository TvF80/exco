import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, MapPin, Tag } from 'lucide-react'
import { serviceById } from '../data/services'

export default function TeamMemberModal({ member, onClose, onServiceClick }) {
  if (!member) return null
  const memberServices = member.serviceIds.map(serviceById).filter(Boolean)

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100]"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
      />
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        className="fixed inset-x-3 bottom-0 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[480px] sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-[101] rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #151515 0%, #111 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          maxHeight: '92svh',
          overflowY: 'auto',
        }}
      >
        {/* Color accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }} />

        {/* Photo header */}
        <div className="relative">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-52 object-cover object-top"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #111 0%, rgba(17,17,17,0.2) 55%, transparent 100%)' }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90"
            style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            <X size={16} className="text-white" />
          </button>

          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: member.color }}>{member.title}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin size={11} className="text-white/30" />
              <span className="text-xs text-white/30">{member.dept}</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Bio */}
          {member.bio && (
            <p className="text-sm text-white/65 leading-relaxed">{member.bio}</p>
          )}

          {/* Tags */}
          {member.tags?.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Tag size={11} className="text-white/30" />
                <p className="text-xs uppercase tracking-widest text-white/30">Specjalizacje</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: member.color + '18', color: member.color, border: `1px solid ${member.color}35` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          {memberServices.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 mb-2.5">Obszary usług</p>
              <div className="space-y-2">
                {memberServices.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => { onClose(); onServiceClick?.(svc.id) }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                    style={{ background: svc.bg, border: `1px solid ${svc.color}25` }}
                  >
                    <span className="text-xl shrink-0">{svc.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-white">{svc.title}</p>
                      <p className="text-xs text-white/40 truncate">{svc.tagline}</p>
                    </div>
                    <span className="text-xs shrink-0" style={{ color: svc.color }}>→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <a
            href={`mailto:${member.email || 'war@exco.pl'}`}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white transition-all active:scale-[0.97]"
            style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
          >
            <Mail size={16} />
            Napisz do {member.name.split(' ')[0]}
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
