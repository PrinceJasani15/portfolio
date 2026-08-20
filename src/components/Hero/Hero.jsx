import { personal } from '../../data/content'

function Hero() {
  return (
    <section id="hero" className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12" aria-label="Introduction">
      <div className="container hero-stagger">
        {/* Top metadata bar */}
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[var(--border)]">
          <span className="label">Full-Stack Developer</span>
          <span className="text-[var(--text-faint)] text-[0.5rem]" aria-hidden="true">•</span>
          <span className="label">Based in Surat, India</span>
          <span className="text-[var(--text-faint)] text-[0.5rem] hidden min-[400px]:inline" aria-hidden="true">•</span>
          <span className="label hidden min-[400px]:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            Available for opportunities
          </span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

          {/* LEFT — content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-1">
            {/* Personal intro headline */}
            <p className="font-mono text-[0.8125rem] text-[var(--text-muted)] mb-2">Hi, I'm</p>
            <h1 className="display max-w-full lg:max-w-[560px]">
              <span className="text-[var(--accent)]">Prince Jasani.</span>
            </h1>

            {/* Description */}
            <p className="text-[0.875rem] sm:text-[0.9375rem] text-[var(--text-muted)] leading-relaxed max-w-md mt-4 sm:mt-0">
              Full-Stack Developer building practical web and mobile applications with React.js, Node.js, Express.js, PostgreSQL, REST APIs, Flutter, AI integrations, and AWS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col min-[360px]:flex-row flex-wrap items-stretch min-[360px]:items-center gap-2.5 mt-6 sm:mt-7">
              <a href="#projects" className="btn btn-primary group justify-center min-[360px]:justify-start">
                <span className="relative z-[1]">View My Work</span>
                <span className="relative z-[1] inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn group justify-center min-[360px]:justify-start">
                <span className="relative z-[1]">Contact Me</span>
                <span className="relative z-[1] inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[var(--border)]">
              {personal.github && (
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--accent)] transition-colors duration-200 py-1">
                  GitHub ↗
                </a>
              )}
              {personal.linkedin && (
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--accent)] transition-colors duration-200 py-1">
                  LinkedIn ↗
                </a>
              )}
              {personal.resume && (
                <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="label hover:text-[var(--accent)] transition-colors duration-200 py-1">
                  Resume ↗
                </a>
              )}
            </div>
          </div>

          {/* RIGHT — portrait composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-2 lg:order-2 overflow-visible">
            <div className="relative w-[220px] min-[400px]:w-[260px] sm:w-[300px] lg:w-[330px] portrait-entrance">

              {/* Orbital motion circles — centered on portrait */}
              <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none" aria-hidden="true">
                {/* Primary orbital — large, slow rotation */}
                <div className="absolute orbital-spin" style={{ width: '130%', aspectRatio: '1', top: '50%', left: '50%', marginLeft: '-65%', marginTop: '-65%' }}>
                  <div className="w-full h-full rounded-full border border-[var(--accent)] opacity-20" />
                  {/* Accent dot on orbit */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[var(--accent)] rounded-full opacity-80" />
                  <span className="absolute bottom-[10%] right-0 w-1.5 h-1.5 bg-[var(--accent)] rounded-full opacity-40" />
                </div>

                {/* Secondary orbital — medium, reverse rotation */}
                <div className="absolute" style={{ width: '105%', aspectRatio: '1', top: '50%', left: '50%', marginLeft: '-52.5%', marginTop: '-52.5%', animation: 'orbital 50s linear infinite reverse' }}>
                  <div className="w-full h-full rounded-full border border-dashed border-[var(--border)] opacity-30" />
                  <span className="absolute top-[15%] right-0 w-2 h-2 bg-[var(--text-faint)] rounded-full opacity-50" />
                </div>

                {/* Tertiary orbital — small, fast */}
                <div className="absolute orbital-spin" style={{ width: '80%', aspectRatio: '1', top: '50%', left: '50%', marginLeft: '-40%', marginTop: '-40%', animationDuration: '25s' }}>
                  <div className="w-full h-full rounded-full border border-[var(--accent)] opacity-10" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[var(--accent)] rounded-full opacity-60" />
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-visible pointer-events-none" aria-hidden="true">
                {/* Gradient glow behind portrait */}
                <div className="absolute inset-0 -z-20 scale-[1.4] opacity-[0.15] blur-[50px]"
                  style={{ background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)' }}
                />

                {/* Inner technical grid pattern */}
                <div className="absolute inset-[5%] -z-10 opacity-[0.05]"
                  style={{
                    backgroundImage: `
                      linear-gradient(var(--text-faint) 1px, transparent 1px),
                      linear-gradient(90deg, var(--text-faint) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Corner brackets — accent */}
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 sm:w-16 h-8 sm:h-16 border-t-2 border-l-2 border-[var(--accent)] opacity-80" />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 sm:w-16 h-8 sm:h-16 border-b-2 border-r-2 border-[var(--accent)] opacity-80" />

                {/* Additional corner marks */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 sm:w-8 h-4 sm:h-8 border-t border-r border-[var(--border)] opacity-40" />
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 sm:w-8 h-4 sm:h-8 border-b border-l border-[var(--border)] opacity-40" />

                {/* Horizontal scan line */}
                <div className="absolute top-[25%] left-[-5%] right-[-5%] h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20 -z-10" />

                {/* Coordinate labels */}
                <span className="absolute top-0 right-0 label text-[0.5rem] text-[var(--text-faint)] opacity-60">
                  21.1702°N
                </span>
                <span className="absolute bottom-[15%] left-0 label text-[0.5rem] text-[var(--text-faint)] opacity-60">
                  72.8311°E
                </span>

                {/* Status indicator */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-70" />
                  <span className="label text-[0.5rem] text-[var(--text-faint)] opacity-60">SYS.ACTIVE</span>
                </div>
              </div>

              {/* === PORTRAIT IMAGE with bottom fade === */}
              <div className="relative z-10">
                <img
                  src="/PJ.png"
                  alt="Prince Jasani — Full-Stack Developer"
                  className="w-full h-auto"
                  loading="eager"
                />
                {/* Bottom gradient fade — blends image into background */}
                <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/60 to-transparent" />
              </div>

              {/* Info block — flows into document on mobile, positioned on larger screens */}
              <div className="relative sm:absolute sm:right-0 lg:-right-5 sm:top-[45%] z-20 bg-[var(--bg)] border border-[var(--border)] px-3 py-2.5 mt-4 sm:mt-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]">
                <span className="label text-[var(--accent)] block mb-1.5">What I Build</span>
                <div className="flex sm:block gap-x-4 gap-y-0.5 flex-wrap">
                  <p className="text-[0.6875rem] text-[var(--text-secondary)]">Web Applications</p>
                  <p className="text-[0.6875rem] text-[var(--text-secondary)]">Backend Systems</p>
                  <p className="text-[0.6875rem] text-[var(--text-secondary)]">REST APIs</p>
                  <p className="text-[0.6875rem] text-[var(--text-secondary)]">AI Integrations</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
