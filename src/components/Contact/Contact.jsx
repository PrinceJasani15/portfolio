import { personal } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="section border-t border-[var(--border)]" aria-labelledby="contact-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
            <div>
              <span className="label">07</span>
              <span className="label block mt-0.5">Contact</span>
            </div>

            <div>
              <h2 id="contact-heading" className="heading-lg uppercase max-w-xl mb-6">
                Have a project,<br />
                opportunity, or idea<br />
                worth building?
              </h2>

              <a href={`mailto:${personal.email}`} className="btn btn-primary mb-6">
                Let's Talk
                <span>→</span>
              </a>

              {/* Contact links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-[var(--border)]">
                <div>
                  <span className="label block mb-1">Email</span>
                  <a href={`mailto:${personal.email}`} className="text-[0.8125rem] text-[var(--text)] hover:text-[var(--accent)] transition-colors break-all">
                    {personal.email}
                  </a>
                </div>
                <div>
                  <span className="label block mb-1">Phone</span>
                  <a href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`} className="text-[0.8125rem] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    {personal.phone}
                  </a>
                </div>
                <div>
                  <span className="label block mb-1">LinkedIn</span>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[0.8125rem] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    Profile ↗
                  </a>
                </div>
                <div>
                  <span className="label block mb-1">GitHub</span>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-[0.8125rem] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
