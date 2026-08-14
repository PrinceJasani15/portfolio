import { education } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="section border-t border-[var(--border)]" aria-labelledby="edu-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
            <div>
              <span className="label">05</span>
              <span className="label block mt-0.5">Education</span>
            </div>

            <div>
              <h2 id="edu-heading" className="heading-md uppercase mb-6">Academic Background</h2>

              {education.map((item, i) => (
                <div key={item.id} className={`py-4 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h3 className={`font-semibold text-[var(--text)] ${item.primary ? 'text-base' : 'text-[0.875rem]'}`}>
                        {item.institution}
                      </h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)] mt-0.5">{item.degree}</p>
                    </div>
                    <div className="flex items-baseline gap-3 shrink-0">
                      <span className="font-mono text-[0.6875rem] text-[var(--text-faint)]">{item.period}</span>
                      <span className={`font-mono font-bold text-[var(--text)] ${item.primary ? 'text-base' : 'text-[0.875rem]'}`}>
                        {item.score}
                      </span>
                    </div>
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

export default Education
