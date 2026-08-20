import { experience } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function ExperienceCard({ item, index }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Main card */}
      <div className="border border-[var(--border)] p-4 sm:p-6 md:p-8 relative overflow-hidden hover:border-[var(--accent)] transition-colors duration-300">

        {/* Background number watermark */}
        <span className="absolute top-3 right-4 font-mono text-[3rem] sm:text-[5rem] font-bold text-[var(--text)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 leading-none select-none pointer-events-none" aria-hidden="true">
          {item.id}
        </span>

        {/* Accent bar top-left */}
        <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--accent)] group-hover:w-full transition-all duration-500" aria-hidden="true" />

        {/* Header: role + date */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-5 relative z-10">
          <div className="min-w-0">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-2 flex-wrap">
              <span className="font-mono text-base sm:text-xl font-bold text-[var(--accent)]">{item.id}</span>
              <span className="w-4 sm:w-5 h-px bg-[var(--accent)] opacity-50" aria-hidden="true" />
              <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--text-faint)]">{item.industry}</span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-[var(--text)] tracking-tight">{item.role}</h3>
            <p className="text-[0.8125rem] text-[var(--text-muted)] mt-1">{item.company}</p>
          </div>

          {/* Date badge */}
          <div className="shrink-0 border border-[var(--border)] px-3 py-1.5 group-hover:border-[var(--accent)] transition-colors duration-300">
            <span className="font-mono text-[0.6875rem] text-[var(--text-secondary)]">{item.period}</span>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="relative z-10 mb-5">
          <span className="label block mb-2.5">Key Contributions</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
            {item.responsibilities.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 mt-1.5 bg-[var(--accent)] opacity-50 group-hover:opacity-100 shrink-0 transition-opacity duration-200" aria-hidden="true" />
                <p className="text-[0.8125rem] text-[var(--text-secondary)] leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="relative z-10 pt-4 border-t border-[var(--border)]">
          <span className="label block mb-2">Technologies Used</span>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span key={t} className="font-mono text-[0.6875rem] px-2.5 py-1 border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors duration-200">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section border-t border-[var(--border)]" aria-labelledby="exp-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Section header — unique treatment */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">02</span>
              <div>
                <h2 id="exp-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Experience
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Professional journey</p>
              </div>
            </div>
            <span className="label hidden sm:block">{experience.length} Roles</span>
          </div>
        </div>

        {/* Experience cards — stacked with gap */}
        <div className="space-y-4">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Timeline connector */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-8 h-px bg-[var(--accent)]" aria-hidden="true" />
          <p className="text-[0.75rem] text-[var(--text-muted)] italic">
            Building real-world solutions since 2024.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
