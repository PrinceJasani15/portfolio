import { about } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const icons = {
  globe: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z"/></svg>,
  cpu: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3m6-3v3m-6 17v3m6-3v3M1 9h3m17 0h3M1 15h3m17 0h3"/></svg>,
  bot: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>,
  layout: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  server: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>,
  database: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  smartphone: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  cloud: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
}

function About() {
  const ref = useScrollReveal()
  const catRef = useScrollReveal()

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        {/* Main content with unique card treatment */}
        <div ref={ref} className="reveal about-card border p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">

          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-[var(--border)] opacity-30" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-t border-r border-[var(--border)] opacity-30" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-2 h-8 bg-[var(--accent)] opacity-70" aria-hidden="true" />

          {/* Header row */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-2xl font-bold text-[var(--accent)]">01</span>
            <span className="w-8 h-px bg-[var(--accent)] opacity-50" aria-hidden="true" />
            <span className="label">About</span>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12">
            {/* Left — statement + description */}
            <div>
              <h2 id="about-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[var(--text)] leading-tight mb-5">
                Full-Stack Developer crafting scalable web applications, intelligent systems, and mobile experiences.
              </h2>

              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-relaxed">
                {about.summary}
              </p>
            </div>

            {/* Right — stats/facts */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="border border-[var(--border)] p-4 relative group hover:border-[var(--accent)] transition-colors duration-200">
                <span className="label block mb-1">Focus</span>
                <span className="text-[1rem] font-semibold text-[var(--text)]">Full-Stack</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </div>
              <div className="border border-[var(--border)] p-4 relative group hover:border-[var(--accent)] transition-colors duration-200">
                <span className="label block mb-1">Also</span>
                <span className="text-[1rem] font-semibold text-[var(--text)]">Mobile & AI</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </div>
              <div className="border border-[var(--border)] p-4 relative group hover:border-[var(--accent)] transition-colors duration-200">
                <span className="label block mb-1">Location</span>
                <span className="text-[1rem] font-semibold text-[var(--text)]">Surat, IN</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </div>
              <div className="border border-[var(--border)] p-4 relative group hover:border-[var(--accent)] transition-colors duration-200">
                <span className="label block mb-1">Status</span>
                <span className="text-[1rem] font-semibold text-[var(--accent)]">Available</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise categories — separate visual zone */}
        <div ref={catRef} className="reveal mt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="label">What I Work With</span>
            <span className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {about.categories.map((cat) => (
              <div
                key={cat.label}
                className="group flex items-center gap-3 p-3.5 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-200 relative overflow-hidden"
              >
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200 shrink-0">
                  {icons[cat.icon] || icons.globe}
                </span>
                <span className="text-[0.8125rem] text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors duration-200">
                  {cat.label}
                </span>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
