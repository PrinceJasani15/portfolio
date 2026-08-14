/**
 * SectionLabel — editorial numbered section marker.
 * Renders as: "01 / ABOUT"
 * Uses monospace font, uppercase, wide tracking.
 */
function SectionLabel({ number, label }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-faint)]">
      <span>{number}</span>
      <span className="mx-2" aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  )
}

export default SectionLabel
