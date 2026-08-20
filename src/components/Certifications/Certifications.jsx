import { certifications } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="section border-t border-[var(--border)]" aria-labelledby="cert-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">06</span>
              <div>
                <h2 id="cert-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Credentials
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Verified certifications & training</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-[var(--border)] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 opacity-70" aria-hidden="true" />
              <span className="label">Verified</span>
            </div>
          </div>

          {/* Certification cards */}
          <div className="space-y-4">
            {certifications.map((item, i) => (
              <div key={item.id} className="group relative border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--accent)] group-hover:w-full transition-all duration-500" aria-hidden="true" />
                {/* Background glow */}
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" aria-hidden="true" />

                <div className="p-4 sm:p-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4 lg:gap-8">
                    {/* Left — main content */}
                    <div>
                      {/* Title row */}
                      <div className="flex items-start gap-3 mb-4">
                        <span className="font-mono text-xl font-bold text-[var(--accent)]">{item.id}</span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[var(--text)] tracking-tight">{item.name}</h3>
                          <p className="text-[0.8125rem] text-[var(--text-muted)] mt-0.5 flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 shrink-0 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                            {item.provider}
                          </p>
                        </div>
                      </div>

                      {/* Topics */}
                      <div className="mb-3">
                        <span className="label flex items-center gap-2 mb-2">
                          <span className="w-3 h-px bg-[var(--accent)]" aria-hidden="true" />
                          Topics Covered
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1">
                          {item.topics.map((t, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-[var(--accent)] opacity-50 shrink-0" aria-hidden="true" />
                              <span className="text-[0.8125rem] text-[var(--text-secondary)]">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((s) => (
                          <span key={s} className="font-mono text-[0.625rem] px-2 py-0.5 border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors duration-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — score display */}
                    {item.score && (
                      <div className="flex lg:flex-col lg:items-center lg:justify-center">
                        <div className="border border-[var(--border)] group-hover:border-[var(--accent)] px-5 py-4 text-center transition-colors duration-300 w-full">
                          <span className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--text-faint)] block">Aggregate</span>
                          <div className="mt-1.5">
                            <span className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">{item.score.split('/')[0].trim()}</span>
                          </div>
                          <span className="text-[0.75rem] text-[var(--text-muted)] font-mono block mt-0.5">out of {item.score.split('/')[1].trim()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
