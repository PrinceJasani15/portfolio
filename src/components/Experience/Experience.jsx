import { experience } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section border-t border-[var(--border)]" aria-labelledby="exp-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
            <div>
              <span className="label">02</span>
              <span className="label block mt-0.5">Experience</span>
            </div>

            <div>
              <h2 id="exp-heading" className="heading-md uppercase mb-8">Professional Experience</h2>

              {experience.map((item, i) => (
                <div key={item.id} className={`py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text)]">{item.role}</h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)]">{item.company} — {item.industry}</p>
                    </div>
                    <span className="font-mono text-[0.6875rem] text-[var(--text-faint)] shrink-0">{item.period}</span>
                  </div>

                  <ul className="space-y-1 mb-3">
                    {item.responsibilities.map((r, j) => (
                      <li key={j} className="text-[0.8125rem] text-[var(--text-secondary)] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--text-faint)] before:text-[0.625rem]">
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
