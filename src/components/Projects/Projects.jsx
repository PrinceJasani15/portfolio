import { projects } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function ProjectItem({ project, index }) {
  const ref = useScrollReveal()
  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      className="reveal group py-10 border-t border-[var(--border)]"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-[var(--accent)]">{project.id}</span>
          <div>
            <h3 className="heading-lg group-hover:text-[var(--accent)] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="font-mono text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-wide mt-0.5">
              {project.category}
            </p>
          </div>
        </div>
        <span className="font-mono text-[0.6875rem] text-[var(--text-faint)] hidden sm:block">{project.period}</span>
      </div>

      {/* Two column content */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isEven ? '' : 'lg:direction-rtl'}`}>
        <div>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{project.description}</p>

          <h4 className="label mb-2">Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mb-4">
            {project.features.map((f, i) => (
              <li key={i} className="text-[0.8125rem] text-[var(--text-secondary)] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-[var(--accent)]">
                {f}
              </li>
            ))}
          </ul>

          {(project.mentor || project.teamSize) && (
            <div className="flex gap-6 pt-3 border-t border-[var(--border)]">
              {project.mentor && <div><span className="label block">Mentor</span><span className="text-[0.8125rem] text-[var(--text)] font-medium">{project.mentor}</span></div>}
              {project.teamSize && <div><span className="label block">Team</span><span className="text-[0.8125rem] text-[var(--text)] font-medium">{project.teamSize}</span></div>}
            </div>
          )}
        </div>

        <div>
          <h4 className="label mb-2">Implementation</h4>
          <ul className="space-y-1 mb-5">
            {project.implementation.map((p, i) => (
              <li key={i} className="text-[0.8125rem] text-[var(--text-secondary)] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-[var(--text-faint)]">
                {p}
              </li>
            ))}
          </ul>

          <h4 className="label mb-2">Stack</h4>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="flex gap-2.5">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn text-[0.75rem] group/btn">
                View Project
                <span className="inline-block transition-transform duration-150 group-hover/btn:translate-x-0.5">→</span>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn text-[0.75rem] group/btn">
                Source
                <span className="inline-block transition-transform duration-150 group-hover/btn:translate-x-0.5">→</span>
              </a>
            )}
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
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 mb-6">
            <div>
              <span className="label">03</span>
              <span className="label block mt-0.5">Work</span>
            </div>
            <div>
              <h2 id="projects-heading" className="heading-md uppercase">Selected Projects</h2>
            </div>
          </div>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
