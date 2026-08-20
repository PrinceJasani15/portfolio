import { skills } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

// Category descriptions for non-technical understanding
const categoryDescriptions = {
  frontend: 'What users see and interact with',
  backend: 'Server logic and data processing',
  databases: 'Where data lives and is managed',
  mobile: 'Native mobile app development',
  ai: 'Artificial intelligence integration',
  'cloud / tools': 'Deployment and collaboration',
}

// Category icons (SVG)
const categoryIcons = {
  frontend: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  backend: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>,
  databases: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  mobile: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  ai: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M12 18v4M8 22h8"/></svg>,
  'cloud / tools': <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
}

function CategoryBlock({ category, items, index }) {
  return (
    <div className="group relative border border-[var(--border)] p-3.5 sm:p-5 hover:border-[var(--accent)] transition-all duration-300 overflow-hidden">

      {/* Hover background glow */}
      <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" aria-hidden="true" />

      {/* Number badge */}
      <span className="absolute top-3 right-3 font-mono text-[2rem] font-bold text-[var(--accent)] opacity-10 group-hover:opacity-25 transition-opacity duration-300 leading-none" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Category header */}
      <div className="relative z-10 flex items-center gap-2.5 mb-1.5">
        <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200">
          {categoryIcons[category] || categoryIcons.frontend}
        </span>
        <h3 className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200">
          {category}
        </h3>
      </div>

      {/* Description for non-technical people */}
      <p className="relative z-10 text-[0.6875rem] text-[var(--text-faint)] mb-4 italic">
        {categoryDescriptions[category]}
      </p>

      {/* Tech items */}
      <ul className="relative z-10 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[0.8125rem] text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors duration-200">
            <span className="w-1 h-1 bg-[var(--accent)] opacity-50 group-hover:opacity-100 shrink-0 transition-opacity duration-200" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-400" aria-hidden="true" />
    </div>
  )
}

function Skills() {
  const ref = useScrollReveal()
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="section border-t border-[var(--border)]" aria-labelledby="skills-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">04</span>
              <div>
                <h2 id="skills-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Expertise
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Technologies I build with daily</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-[var(--border)] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-60" aria-hidden="true" />
              <span className="label">{categories.length} Domains</span>
            </div>
          </div>

          {/* Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map(([category, items], i) => (
              <CategoryBlock key={category} category={category} items={items} index={i} />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center gap-3">
            <div className="w-8 h-px bg-[var(--accent)]" aria-hidden="true" />
            <p className="text-[0.75rem] text-[var(--text-muted)]">
              Each technology chosen for solving specific real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
