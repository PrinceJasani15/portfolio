function SectionDivider({ text }) {
  return (
    <div className="container">
      <div className="section-divider py-2">
        {text && <span>{text}</span>}
      </div>
    </div>
  )
}

export default SectionDivider
