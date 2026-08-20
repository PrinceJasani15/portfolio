import { education } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Education() {
  const ref = useScrollReveal()
  const primary = education.filter((e) => e.primary)
  const secondary = education.filter((e) => !e.primary)

  return (
    <section id="education" className="section border-t border-[var(--border)]" aria-labelledby="edu-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">05</span>
              <div>
                <h2 id="edu-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Education
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Academic foundation</p>
              </div>
            </div>
          </div>

          {/* Primary education — featured card */}
          {primary.map((item) => (
            <div key={item.id} className="group relative border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 mb-4 overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[var(--accent)]" aria-hidden="true" />
              {/* Background glow */}
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" aria-hidden="true" />

              <div className="p-4 sm:p-7 pl-6 sm:pl-9 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Left — info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--accent)] font-medium">Primary Degree</span>
                      <span className="w-4 h-px bg-[var(--accent)] opacity-50" aria-hidden="true" />
                      <span className="font-mono text-[0.625rem] text-[var(--text-faint)]">{item.period}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] tracking-tight">{item.institution}</h3>
                    <p className="text-[0.8125rem] text-[var(--text-secondary)] mt-1.5">{item.degree}</p>
                  </div>

                  {/* Right — score display */}
                  <div className="shrink-0 border border-[var(--border)] group-hover:border-[var(--accent)] px-5 py-3 text-center transition-colors duration-300">
                    <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--text-faint)] block">{item.scoreLabel}</span>
                    <div className="mt-1">
                      <span className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">{item.score.split('/')[0].trim()}</span>
                      <span className="text-[0.875rem] text-[var(--text-muted)] font-mono"> / {item.score.split('/')[1].trim()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Secondary education — compact but styled */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {secondary.map((item) => (
              <div key={item.id} className="group border border-[var(--border)] hover:border-[var(--accent)] p-4 sm:p-5 transition-all duration-300 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" aria-hidden="true" />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[0.625rem] text-[var(--text-faint)] block mb-1">{item.period}</span>
                    <h3 className="text-[0.9375rem] font-semibold text-[var(--text)]">{item.institution}</h3>
                    <p className="text-[0.8125rem] text-[var(--text-muted)] mt-0.5">{item.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">{item.score.split('/')[0].trim()}</span>
                    <span className="text-[0.75rem] text-[var(--text-muted)] font-mono block">/ {item.score.split('/')[1].trim()}</span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-400" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
