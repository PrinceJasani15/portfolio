import { interests } from '../../data/content'

function Interests() {
  return (
    <div className="border-t border-[var(--border)] py-4">
      <div className="container flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="label">Beyond code</span>
        {interests.map((item, i) => (
          <span key={item} className="text-[0.8125rem] text-[var(--text-muted)]">
            {i > 0 && <span className="mr-2 text-[var(--border)]">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Interests
