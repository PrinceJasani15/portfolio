import { useScrollReveal } from '../../hooks/useScrollReveal'

const services = [
  {
    id: '01',
    title: 'Freelance Development',
    description: 'Custom software development for startups, businesses, and individuals.',
    capabilities: [
      'Web application development',
      'Mobile application development',
      'Backend / API development',
      'Database development',
      'Bug fixing & feature development',
      'Third-party API integrations',
    ],
  },
  {
    id: '02',
    title: 'Contract-Based Development',
    description: 'Work with companies on short-term or long-term contracts as a dedicated developer.',
    capabilities: [
      'Dedicated development support',
      'Long-term project development',
      'Feature development',
      'Existing application maintenance',
      'Backend and API development',
      'Technical implementation',
    ],
  },
  {
    id: '03',
    title: 'Outsourcing Development',
    description: 'Complete or partial software development outsourcing for companies.',
    capabilities: [
      'End-to-end application development',
      'Frontend development',
      'Backend development',
      'Mobile application development',
      'API development',
      'Deployment & maintenance',
    ],
  },
  {
    id: '04',
    title: 'Web & Mobile Applications',
    description: 'Build modern, scalable, and production-ready applications.',
    capabilities: [
      'React.js applications',
      'Node.js / Express.js backend',
      'Flutter mobile applications',
      'REST APIs',
      'PostgreSQL databases',
      'AWS deployment',
    ],
  },
  {
    id: '05',
    title: 'AI & API Integrations',
    description: 'Help businesses integrate AI and third-party services into their applications.',
    capabilities: [
      'AI API integration',
      'Gemini / LLM integrations',
      'REST API integrations',
      'Automation integrations',
      'AI-powered features',
      'Custom backend integrations',
    ],
  },
  {
    id: '06',
    title: 'Maintenance & Technical Support',
    description: 'Help businesses maintain, improve, and troubleshoot existing applications.',
    capabilities: [
      'Bug fixing',
      'Performance improvements',
      'Feature updates',
      'API & database issues',
      'Deployment support',
      'Application maintenance',
    ],
  },
]

function ServiceCard({ service, index }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal group relative border border-[var(--border)] hover:border-[var(--accent)] p-4 sm:p-6 transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-500" aria-hidden="true" />

      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" aria-hidden="true" />

      {/* Number */}
      <span className="absolute top-4 right-4 font-mono text-[1.75rem] font-bold text-[var(--accent)] opacity-15 group-hover:opacity-30 transition-opacity duration-300 leading-none" aria-hidden="true">
        {service.id}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="font-mono text-[0.8125rem] font-bold text-[var(--accent)]">{service.id}</span>
          <span className="w-4 h-px bg-[var(--accent)] opacity-50" aria-hidden="true" />
        </div>

        <h3 className="text-base sm:text-[1.0625rem] font-bold text-[var(--text)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-[0.8125rem] text-[var(--text-muted)] leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Capabilities */}
        <ul className="space-y-1.5 mb-4">
          {service.capabilities.map((cap, i) => (
            <li key={i} className="flex items-center gap-2 text-[0.75rem] text-[var(--text-secondary)]">
              <span className="w-1 h-1 bg-[var(--accent)] opacity-50 group-hover:opacity-100 shrink-0 transition-opacity duration-200" aria-hidden="true" />
              {cap}
            </li>
          ))}
        </ul>

        {/* Arrow indicator */}
        <div className="flex items-center gap-1.5 text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors duration-200">
          <span className="font-mono text-[0.625rem] uppercase tracking-wider">Learn more</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-400 delay-100" aria-hidden="true" />
    </div>
  )
}

function Services() {
  const ref = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <section id="services" className="section border-t border-[var(--border)]" aria-labelledby="services-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">05</span>
              <div>
                <h2 id="services-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Services
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">How I can help</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-[var(--border)] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-60" aria-hidden="true" />
              <span className="label">6 Services</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-[0.875rem] text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
            I provide flexible software development services for startups, businesses, and teams — from individual features to complete application development.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="reveal mt-8 sm:mt-10 pt-6 border-t border-[var(--border)]" style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">Have a project in mind?</h3>
              <p className="text-[0.8125rem] text-[var(--text-muted)] mt-1">
                Let's discuss how I can help build, improve, or scale your application.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary group shrink-0">
              <span className="relative z-[1]">Start a Project</span>
              <span className="relative z-[1] inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
