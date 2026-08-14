import { personal } from '../../data/content'

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6" role="contentinfo">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-mono text-[0.6875rem] text-[var(--text-faint)]">
          &copy; {new Date().getFullYear()} {personal.name}
        </span>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="label hover:text-[var(--text)] transition-colors">Email</a>
          <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--text)] transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
