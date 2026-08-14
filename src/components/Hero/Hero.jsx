import { personal } from '../../data/content'

function Hero() {
  return (
    <section id="hero" className="pt-28 sm:pt-32 pb-12 sm:pb-16" aria-label="Introduction">
      <div className="container hero-stagger">
        {/* Top meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 pb-5 border-b border-[var(--border)]">
          <span className="label">Based in — Surat, India</span>
          <span className="label">Focus — Full-Stack Development</span>
          <span className="label flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            Available
          </span>
        </div>

        {/* Display headline */}
        <h1 className="display max-w-5xl">
          Engineering<br />
          ideas into<br />
          <span className="text-[var(--accent)]">useful</span> products.
        </h1>

        {/* Sub info */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mt-10 pt-6 border-t border-[var(--border)]">
          <div>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
              {personal.name} — Full-stack developer working with React, Node.js, Express, PostgreSQL, Flutter, and REST APIs. Experience in AI integration and AWS deployment.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn">Contact</a>
            </div>
          </div>

          {/* Right: links column */}
          <div className="flex flex-col gap-2">
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">
                GitHub ↗
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">
                LinkedIn ↗
              </a>
            )}
            {personal.resume && (
              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">
                Resume ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
