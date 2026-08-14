import { skills } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function CategoryBlock({ category, items, hasBorderLeft, hasBorderTop }) {
  return (
    <div
      className={`group p-3.5 sm:p-4 md:p-5 min-h-[120px] transition-colors duration-200 hover:bg-[var(--bg-hover)] ${
        hasBorderLeft ? 'sm:border-l sm:border-[var(--border)]' : ''
      } ${hasBorderTop ? 'border-t border-[var(--border)] sm:border-t-0' : ''}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 bg-[var(--accent)] opacity-50 group-hover:opacity-100 transition-opacity duration-200 shrink-0" aria-hidden="true" />
        <h3 className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.08em] text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors duration-200">
          {category}
        </h3>
      </div>

      <ul className="space-y-px transition-transform duration-200 group-hover:translate-x-0.5">
        {items.map((item) => (
          <li key={item} className="text-[0.8125rem] text-[var(--text-secondary)] leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  const ref = useScrollReveal()
  const categories = Object.entries(skills)

  const topRow = categories.slice(0, 3)
  const bottomRow = categories.slice(3)

  return (
    <section id="skills" className="section border-t border-[var(--border)]" aria-labelledby="skills-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-0">

            {/* LEFT — section info */}
            <div className="lg:col-span-4 lg:pr-6 lg:border-r lg:border-[var(--border)]">
              <div className="flex items-start gap-3 mb-4">
                <span className="label mt-px">04</span>
                <span className="w-px h-6 bg-[var(--border)]" aria-hidden="true" />
                <span className="label mt-px">Stack</span>
              </div>

              <h2 id="skills-heading" className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[var(--text)] mb-3">
                My<br />Tech<br />Stack
              </h2>

              <p className="text-[0.8125rem] text-[var(--text-muted)] leading-relaxed max-w-[240px]">
                Tools and technologies across full-stack development, mobile, AI, and cloud.
              </p>
            </div>

            {/* RIGHT — technology grid */}
            <div className="lg:col-span-8 lg:pl-0">
              <div className="border border-[var(--border)] bg-[var(--bg-surface)] lg:border-l-0">
                {/* Top row */}
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3">
                  {topRow.map(([category, items], i) => (
                    <CategoryBlock
                      key={category}
                      category={category}
                      items={items}
                      hasBorderLeft={i > 0}
                      hasBorderTop={i > 0}
                    />
                  ))}
                </div>

                <div className="border-t border-[var(--border)]" />

                {/* Bottom row */}
                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3">
                  {bottomRow.map(([category, items], i) => (
                    <CategoryBlock
                      key={category}
                      category={category}
                      items={items}
                      hasBorderLeft={i > 0}
                      hasBorderTop={i > 0}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom statement */}
              <div className="mt-3.5 pt-3 border-t border-[var(--border)] flex flex-col min-[480px]:flex-row min-[480px]:items-baseline gap-1.5 min-[480px]:gap-3">
                <span className="label shrink-0">Building with purpose</span>
                <p className="text-[0.75rem] text-[var(--text-muted)] leading-relaxed">
                  Practical applications, clean interfaces, reliable systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
