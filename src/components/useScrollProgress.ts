import { useEffect, useState, type RefObject } from 'react'

/**
 * 0 when the element's top reaches the top of the viewport, 1 when its bottom
 * reaches the bottom. Used to drive the pinned hero: copy fades out, facts fade in.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const track = r.height - window.innerHeight
      const next = track <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / track))
      setP((prev) => (Math.abs(prev - next) < 0.002 ? prev : next))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
  return p
}

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
