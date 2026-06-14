'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Vishwakarma University',
    location: 'Pune, Maharashtra',
    duration: '2023 – 2027',
    status: 'Pursuing',
    description:
      'Studying core subjects including Machine Learning, Deep Learning, Natural Language Processing, Data Structures & Algorithms, Database Management, and Software Engineering. Actively involved in research and project development.',
    highlights: [
      'Specialization in AI & ML',
      'Published research paper',
      'Conference presenter',
      'Full-stack project development',
    ],
    icon: '🎓',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-500/30',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  },
]

const certifications = [
  {
    name: 'Project Management Foundations',
    issuer: 'LinkedIn Learning',
    icon: '📋',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Python Using AI',
    issuer: 'GUVI / Online Platform',
    icon: '🐍',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'IBM Full Stack Software Developer',
    issuer: 'IBM / Coursera',
    icon: '🔵',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    name: '.NET Full Stack Developer',
    issuer: 'Microsoft / Online Platform',
    icon: '🟣',
    color: 'from-purple-600 to-violet-500',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Academic background
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* Education timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex gap-6"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-indigo-500/30 mt-1">
                  {edu.icon}
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/40 to-transparent mt-4" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className={`glass p-7 rounded-2xl border ${edu.borderColor} mb-8 flex-1 transition-all duration-300`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                    <p className="text-indigo-400 font-semibold">{edu.institution}</p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border glass ${edu.badgeColor}`}>
                    {edu.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={13} className="text-slate-600" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={13} className="text-slate-600" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{edu.description}</p>

                <div className={`rounded-xl bg-gradient-to-br ${edu.gradient} p-4`}>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FiAward size={12} /> Highlights
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div id="certifications">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10 text-white"
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                  {cert.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-1 leading-snug">{cert.name}</h4>
                <p className="text-slate-500 text-xs">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
