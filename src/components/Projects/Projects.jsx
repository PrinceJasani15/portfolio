import { projects } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      className="reveal group relative"
      style={{ transitionDelay: `${index * 120}ms` }}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 relative">

        {/* Top accent bar — animates on hover */}
        <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--accent)] group-hover:w-full transition-all duration-500 z-10" aria-hidden="true" />

        {/* Project number watermark */}
        <span className="absolute top-3 right-4 sm:right-6 font-mono text-[3rem] min-[400px]:text-[4rem] sm:text-[5.5rem] font-black text-[var(--accent)] opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-500 leading-none select-none pointer-events-none z-0" aria-hidden="true">
          {project.id}
        </span>

        {/* Header band */}
        <div className="p-4 sm:p-6 border-b border-[var(--border)] bg-[var(--bg-surface)] relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-mono text-xl sm:text-3xl font-bold text-[var(--accent)] shrink-0">{project.id}</span>
              <div className="min-w-0">
                <h3 id={`project-${project.id}`} className="text-lg sm:text-2xl font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300 truncate">
                  {project.title}
                </h3>
                <p className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--text-faint)] mt-0.5">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-[0.625rem] sm:text-[0.6875rem] text-[var(--text-muted)] border border-[var(--border)] px-2 sm:px-2.5 py-1">{project.period}</span>
            </div>
          </div>
        </div>

        {/* Main content — two columns */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 relative z-10 ${isEven ? '' : 'lg:[direction:rtl]'}`}>

          {/* Left / Feature side */}
          <div className="p-4 sm:p-6 lg:border-r border-[var(--border)] lg:[direction:ltr]">
            <p className="text-[0.8125rem] sm:text-[0.875rem] text-[var(--text-secondary)] leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="mb-4">
              <span className="label flex items-center gap-2 mb-3">
                <span className="w-3 h-px bg-[var(--accent)]" aria-hidden="true" />
                Key Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 bg-[var(--accent)] opacity-60 shrink-0" aria-hidden="true" />
                    <span className="text-[0.8125rem] text-[var(--text-secondary)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta info */}
            {(project.mentor || project.teamSize) && (
              <div className="flex gap-5 pt-3 border-t border-[var(--border)]">
                {project.mentor && (
                  <div>
                    <span className="label block">Mentor</span>
                    <span className="text-[0.8125rem] font-medium text-[var(--text)]">{project.mentor}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div>
                    <span className="label block">Team</span>
                    <span className="text-[0.8125rem] font-medium text-[var(--text)]">{project.teamSize} members</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right / Technical side */}
          <div className="p-4 sm:p-6 bg-[var(--bg-hover)] lg:bg-transparent lg:[direction:ltr]">
            {/* Implementation */}
            <div className="mb-5">
              <span className="label flex items-center gap-2 mb-3">
                <span className="w-3 h-px bg-[var(--accent)]" aria-hidden="true" />
                Technical Implementation
              </span>
              <ul className="space-y-2">
                {project.implementation.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-mono text-[0.625rem] text-[var(--accent)] mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[0.8125rem] text-[var(--text-secondary)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-5">
              <span className="label flex items-center gap-2 mb-3">
                <span className="w-3 h-px bg-[var(--accent)]" aria-hidden="true" />
                Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[0.625rem] px-2 py-0.5 border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] transition-colors duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[var(--border)]">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn text-[0.75rem] group/btn">
                  <span className="relative z-[1]">View Project</span>
                  <span className="relative z-[1] inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn text-[0.75rem] group/btn">
                  <span className="relative z-[1]">Source Code</span>
                  <span className="relative z-[1] inline-block transition-transform duration-200 group-hover/btn:translate-x-1">↗</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section border-t border-[var(--border)]" aria-labelledby="projects-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">03</span>
              <div>
                <h2 id="projects-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Selected Work
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Case studies & projects</p>
              </div>
            </div>
            <span className="label hidden sm:block">{projects.length} Projects</span>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-8 h-px bg-[var(--accent)]" aria-hidden="true" />
          <p className="text-[0.75rem] text-[var(--text-muted)] italic">
            More projects available on GitHub.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
