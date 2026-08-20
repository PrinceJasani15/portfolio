import { personal } from '../../data/content'

function Footer() {
  return (
    <footer className="border-t border-[var(--border)]" role="contentinfo">
      <div className="container">
        {/* Big ending statement */}
        <div className="py-10 sm:py-14 flex flex-col items-center">
          <p className="font-mono text-[0.625rem] uppercase tracking-widest text-[var(--text-faint)] mb-3">Thank you for visiting</p>
          <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase tracking-tight text-[var(--text)] leading-tight text-center">
            Let's build something<br /><span className="text-[var(--accent)]">great together.</span>
          </h3>
          <a href={`mailto:${personal.email}`} className="inline-block mt-5 font-mono text-[0.75rem] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 border-b border-[var(--border)] hover:border-[var(--accent)] pb-0.5">
            {personal.email}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[0.625rem] text-[var(--text-faint)]">
            &copy; {new Date().getFullYear()} Prince Jasani
          </span>

          <div className="flex items-center gap-5">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.625rem] text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-200">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.625rem] text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-200">LinkedIn</a>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.625rem] text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-200">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
