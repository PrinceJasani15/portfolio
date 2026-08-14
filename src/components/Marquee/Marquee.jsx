const items = [
  'Full-Stack Development',
  'React.js',
  'Node.js',
  'PostgreSQL',
  'AI Integration',
  'Flutter',
  'Express.js',
  'REST APIs',
  'AWS',
  'Tailwind CSS',
]

function Marquee() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-4 px-4">
      <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--text-muted)] whitespace-nowrap">
        {item}
      </span>
      <span className="text-[var(--accent)] text-xs" aria-hidden="true">×</span>
    </span>
  ))

  return (
    <div className="border-y border-[var(--border)] py-3 overflow-hidden" aria-hidden="true">
      <div className="marquee-track">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  )
}

export default Marquee
