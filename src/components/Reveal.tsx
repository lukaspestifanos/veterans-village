import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

/**
 * Fades and lifts children in the first time they scroll into view.
 * IntersectionObserver plus a class toggle, nothing else, so Safari and
 * Chrome behave the same. Reduced-motion users see everything at rest.
 */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'li' | 'section' | 'article' }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in')
            io.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const Comp = Tag as any
  return (
    <Comp ref={ref} className={`reveal ${className}`.trim()} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </Comp>
  )
}
