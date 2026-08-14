import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses IntersectionObserver to add 'visible' class when element enters viewport.
 * Each element animates once — no re-triggering on scroll up.
 * Respects prefers-reduced-motion by making elements immediately visible.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Respect reduced motion preference — show immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      element.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
