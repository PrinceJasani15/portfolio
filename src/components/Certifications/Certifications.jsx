import { certifications } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="section border-t border-[var(--border)]" aria-labelledby="cert-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
            <div>
              <span className="label">06</span>
              <span className="label block mt-0.5">Certs</span>
            </div>

            <div>
              <h2 id="cert-heading" className="heading-md uppercase mb-6">Credentials</h2>

              {certifications.map((item, i) => (
                <div key={item.id} className={`py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text)]">{item.name}</h3>
                      <p className="text-[0.8125rem] text-[var(--text-muted)]">{item.provider}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                      </div>
                    </div>
                    {item.score && (
                      <div className="shrink-0 text-right">
                        <span className="text-xl font-bold text-[var(--accent)]">{item.score.split('/')[0].trim()}</span>
                        <span className="text-[0.8125rem] text-[var(--text-muted)] font-mono"> / {item.score.split('/')[1].trim()}</span>
                      </div>
                    )}
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

export default Certifications
