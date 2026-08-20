import { useState } from 'react'
import { personal } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Contact() {
  const ref = useScrollReveal()
  const formRef = useScrollReveal()

  const [formData, setFormData] = useState({ name: '', email: '', type: 'hire', message: '' })
  const [result, setResult] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setResult('')

    const typeLabels = {
      hire: 'Hire for a full-time role',
      freelance: 'Hire for freelance project',
      collaborate: 'Collaborate on a project',
      other: 'Something else'
    }

    const submitData = new FormData()
    submitData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
    submitData.append('name', formData.name)
    submitData.append('email', formData.email)
    submitData.append("I'm Looking To", typeLabels[formData.type] || formData.type)
    submitData.append('message', formData.message)
    submitData.append('subject', `[Portfolio] ${typeLabels[formData.type] || 'Inquiry'} from ${formData.name}`)
    submitData.append('from_name', 'Portfolio Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      })

      const data = await response.json()

      if (data.success) {
        setResult('success')
        setFormData({ name: '', email: '', type: 'hire', message: '' })
      } else {
        setResult('error')
      }
    } catch {
      setResult('error')
    }

    setSubmitting(false)
    setTimeout(() => setResult(''), 5000)
  }

  return (
    <section id="contact" className="section border-t border-[var(--border)]" aria-labelledby="contact-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--accent)] opacity-30">07</span>
              <div>
                <h2 id="contact-heading" className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-tight text-[var(--text)]">
                  Let's Connect
                </h2>
                <p className="text-[0.75rem] text-[var(--text-muted)] mt-0.5">Open for opportunities & collaboration</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-[var(--border)] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 opacity-70" aria-hidden="true" />
              <span className="label">Accepting work</span>
            </div>
          </div>
        </div>

        {/* Main content — two column */}
        <div ref={formRef} className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5" style={{ transitionDelay: '100ms' }}>

          {/* LEFT — Contact form */}
          <div className="group relative border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--accent)] group-hover:w-full transition-all duration-500" aria-hidden="true" />
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.01] transition-opacity duration-300" aria-hidden="true" />

            <div className="p-4 sm:p-6 relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <span className="label text-[var(--accent)]">Send a message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label block mb-1.5">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[var(--bg)] border border-[var(--border)] px-3 py-2.5 text-[0.8125rem] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label block mb-1.5">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-[var(--bg)] border border-[var(--border)] px-3 py-2.5 text-[0.8125rem] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="label block mb-1.5">I'm looking to</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] px-3 py-2.5 text-[0.8125rem] text-[var(--text)] focus:border-[var(--accent)] focus:outline-none transition-colors duration-200 cursor-pointer"
                    style={{ colorScheme: 'dark light' }}
                  >
                    <option value="hire">Hire for a full-time role</option>
                    <option value="freelance">Hire for freelance project</option>
                    <option value="collaborate">Collaborate on a project</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label block mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-[var(--bg)] border border-[var(--border)] px-3 py-2.5 text-[0.8125rem] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full justify-center group/btn"
                >
                  <span className="relative z-[1]">{submitting ? 'Sending...' : result === 'success' ? '✓ Message Sent!' : 'Send Message'}</span>
                  {!submitting && result !== 'success' && <span className="relative z-[1] inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>}
                </button>

                {result === 'success' && (
                  <p className="text-[0.75rem] text-green-500 mt-2 text-center">Message delivered successfully. I'll get back to you soon!</p>
                )}
                {result === 'error' && (
                  <p className="text-[0.75rem] text-red-500 mt-2 text-center">Something went wrong. Please try again or email me directly.</p>
                )}
              </form>

              <p className="text-[0.6875rem] text-[var(--text-faint)] mt-3 text-center">
                Your message will be sent directly to my inbox
              </p>
            </div>
          </div>

          {/* RIGHT — Contact info + CTA */}
          <div className="space-y-4">
            {/* Big CTA statement */}
            <div className="border border-[var(--border)] p-4 sm:p-6 relative overflow-hidden group hover:border-[var(--accent)] transition-colors duration-300">
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] relative z-10 mb-2">
                Have a project, opportunity, or idea worth building?
              </h3>
              <p className="text-[0.8125rem] text-[var(--text-muted)] relative z-10">
                I'm actively looking for full-time roles, freelance projects, and interesting collaborations.
              </p>
            </div>

            {/* Contact cards grid */}
            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
              <a href={`mailto:${personal.email}`} className="group border border-[var(--border)] hover:border-[var(--accent)] p-4 transition-all duration-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                <span className="label block mb-1">Email</span>
                <span className="text-[0.75rem] text-[var(--text)] font-medium break-all">{personal.email}</span>
              </a>

              <a href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`} className="group border border-[var(--border)] hover:border-[var(--accent)] p-4 transition-all duration-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                <span className="label block mb-1">Phone</span>
                <span className="text-[0.75rem] text-[var(--text)] font-medium">{personal.phone}</span>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="group border border-[var(--border)] hover:border-[var(--accent)] p-4 transition-all duration-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                <span className="label block mb-1">LinkedIn</span>
                <span className="text-[0.75rem] text-[var(--text)] font-medium">Connect ↗</span>
              </a>

              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="group border border-[var(--border)] hover:border-[var(--accent)] p-4 transition-all duration-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                <span className="label block mb-1">GitHub</span>
                <span className="text-[0.75rem] text-[var(--text)] font-medium">View Code ↗</span>
              </a>
            </div>

            {/* Resume CTA */}
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-[var(--border)] hover:border-[var(--accent)] p-4 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" aria-hidden="true" />
              <div className="relative z-10">
                <span className="label block mb-0.5">Download</span>
                <span className="text-[0.875rem] text-[var(--text)] font-semibold">View My Resume</span>
              </div>
              <span className="relative z-10 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 pt-2">
              <svg className="w-4 h-4 text-[var(--text-faint)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-[0.8125rem] text-[var(--text-muted)]">{personal.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact

