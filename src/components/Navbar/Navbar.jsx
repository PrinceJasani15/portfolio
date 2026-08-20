import { useState, useEffect, useRef } from 'react'
import { personal } from '../../data/content'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) { setOpen(false); btnRef.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--border)]' : ''
      }`}
      role="banner"
    >
      <nav className="container flex items-center justify-between h-[52px]" aria-label="Main">
        {/* Left: name */}
        <a href="#hero" className="text-[0.9375rem] font-bold tracking-tight text-[var(--text)] relative z-50" style={{ fontFamily: "'Playfair Display', serif" }}>
          {personal.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-mono text-[0.6875rem] uppercase tracking-wide text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200 py-1">
              {item.label}
            </a>
          ))}
          <span className="w-px h-3 bg-[var(--border)]" aria-hidden="true" />
          <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.6875rem] uppercase tracking-wide text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200 py-1">
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="w-7 h-7 flex items-center justify-center border border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="w-3.5 h-3.5 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2 relative z-50">
          <button
            onClick={toggleTheme}
            className="w-7 h-7 flex items-center justify-center border border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="w-3.5 h-3.5 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--text)] px-2 py-1 border border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[var(--bg)] z-40 flex flex-col justify-center transition-all duration-300 ease-out ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="container space-y-2">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block font-mono text-lg sm:text-xl uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-all duration-300 py-2 min-h-[44px] flex items-center ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              <span className="text-[var(--text-faint)] text-sm mr-3">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--border)]">
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="font-mono text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors py-2 inline-block min-h-[44px] flex items-center">
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
