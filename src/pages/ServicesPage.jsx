import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TrendingUp, Search, FileSearch, BookOpen, Users, Leaf, Globe, Scale,
  ArrowLeft, ArrowRight, CheckCircle,
} from 'lucide-react'
import { services } from '../data/services'
import { teamByService } from '../data/team'
import Contact from '../components/sections/Contact'

const iconMap = { TrendingUp, Search, FileSearch, BookOpen, Users, Leaf, Globe, Scale }

export default function ServicesPage() {
  const { slug } = useParams()

  if (!slug) {
    // Lista wszystkich usług
    return (
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#E8362A] mb-3">
              Co oferujemy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">Nasze usługi</h1>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              Osiem obszarów eksperckich — każdy obsługiwany przez dedykowany zespół specjalistów.
              Razem tworzymy kompletne wsparcie dla Twojego biznesu na każdym etapie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              const experts = teamByService(service.id)
              return (
                <Link
                  key={service.id}
                  to={`/uslugi/${service.id}`}
                  className="group flex gap-5 p-6 rounded-2xl transition-all hover:shadow-lg"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: service.bg }}
                  >
                    {Icon && <Icon size={24} style={{ color: service.color }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-lg text-[#1A1A2E] mb-1 group-hover:text-[#1B3A6B] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">{service.tagline}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub.name}
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{ background: service.bg, color: service.color }}
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight
                      size={18}
                      className="text-gray-300 group-hover:text-[#1B3A6B] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const service = services.find((s) => s.id === slug)
  if (!service) {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-500">Nie znaleziono usługi.</p>
        <Link to="/uslugi" className="text-[#1B3A6B] underline mt-4 inline-block">
          Wróć do usług
        </Link>
      </div>
    )
  }

  const Icon = iconMap[service.icon]
  const experts = teamByService(service.id)
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <div
        className="pt-24 pb-16"
        style={{ background: service.color }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/uslugi"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-8"
          >
            <ArrowLeft size={14} />
            Wszystkie usługi
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                {Icon && <Icon size={28} className="text-white" />}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed">{service.tagline}</p>

              {service.note && (
                <div
                  className="mt-4 px-4 py-2 rounded-xl text-sm text-white/70 inline-block"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {service.note}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <h3 className="text-white/60 text-xs uppercase tracking-widest mb-3">Dla kogo?</h3>
                <ul className="space-y-2">
                  {service.forWhom.map((fw) => (
                    <li key={fw} className="flex items-start gap-2 text-white">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-white/50" />
                      <span className="text-sm">{fw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Zakres usługi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.subcategories.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{ background: '#fff', border: `1px solid ${service.color}22` }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: service.bg }}
                >
                  <span className="text-sm font-bold" style={{ color: service.color }}>{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{sub.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Experts */}
      {experts.length > 0 && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">
              Eksperci usługi: {service.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  className="rounded-2xl p-5"
                  style={{ background: '#F7F8FA', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-3"
                    style={{ background: expert.color }}
                  >
                    {expert.initials}
                  </div>
                  <div className="font-bold text-[#1A1A2E] mb-0.5">{expert.name}</div>
                  <div className="text-sm text-gray-400 mb-3">{expert.title}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{expert.bio.slice(0, 100)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other services */}
      <div className="py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Zobacz też</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {otherServices.map((svc) => {
              const SIcon = iconMap[svc.icon]
              return (
                <Link
                  key={svc.id}
                  to={`/uslugi/${svc.id}`}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:shadow-md transition-all"
                  style={{ background: '#fff', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: svc.bg }}
                  >
                    {SIcon && <SIcon size={18} style={{ color: svc.color }} />}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1A1A2E]">{svc.title}</div>
                    <div className="text-xs text-gray-400">{svc.tagline}</div>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-gray-300" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}
