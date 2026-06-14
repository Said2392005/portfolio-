'use client'

import { motion, type Variants } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    color: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/20',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 78 },
      { name: 'C++', level: 72 },
      { name: 'C', level: 70 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 78 },
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/20',
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 86 },
      { name: 'Matplotlib', level: 80 },
      { name: 'NLP', level: 78 },
      { name: 'Classification / Regression', level: 84 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/20',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'SQLite', level: 78 },
      { name: 'Supabase', level: 74 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Linux', level: 76 },
      { name: 'VS Code', level: 92 },
      { name: 'Power BI', level: 70 },
    ],
  },
]

const techTags = [
  'Python', 'React.js', 'Node.js', 'FastAPI', 'Flask', 'Scikit-learn',
  'Pandas', 'NumPy', 'NLP', 'MySQL', 'Supabase', 'Git', 'Linux',
  'Tailwind CSS', 'Power BI', 'Java', 'C++', 'JavaScript', 'Matplotlib',
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* bg accent */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            What I work with
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* Tech tag cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techTags.map((tag) => (
            <motion.span
              key={tag}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 glass rounded-full text-sm text-slate-300 border border-white/10 hover:border-indigo-500/40 hover:text-white cursor-default transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-xl ${group.glow}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-lg shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-white font-bold">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
