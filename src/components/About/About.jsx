import { about } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Asymmetric grid: number left, content right */}
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
            {/* Left: section number */}
            <div>
              <span className="label">01</span>
              <span className="label block mt-0.5">About</span>
            </div>

            {/* Right: content */}
            <div>
              <h2 id="about-heading" className="heading-lg uppercase mb-5">
                Full-Stack Developer<br />
                building practical<br />
                digital products.
              </h2>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                {about.summary}
              </p>

              {/* Categories as typographic grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 pt-5 border-t border-[var(--border)]">
                {about.categories.map((cat) => (
                  <span key={cat.label} className="text-[0.8125rem] text-[var(--text-muted)]">
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
