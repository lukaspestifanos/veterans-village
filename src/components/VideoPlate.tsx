import { useEffect, useRef } from 'react'

interface Props {
  /** MP4/WebM background. When missing, the poster is used. */
  src?: string
  poster: string
  alt?: string
  /** Parallax depth: 0 = moves with the page, 1 = fixed to the viewport. */
  speed?: number
  /** Bottom fade into the stage color, for legibility of what follows. */
  fade?: boolean
  className?: string
  position?: string
}

const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Full-bleed background plate with parallax. The media layer is taller than
 * its container and slides against the scroll, so the picture lags behind
 * the page. Edge fades are the only overlay.
 */
export function VideoPlate({ src, poster, alt = '', speed = 0.3, fade = true, className = '', position = '50% 50%' }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current, media = layer.current
    if (!el || !media || REDUCED || speed <= 0) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.bottom < 0 || r.top > vh) return
      // 0 when the plate's centre is at the viewport centre; +-1 at the edges.
      const t = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)
      const travel = r.height * speed * 0.5
      media.style.transform = `translate3d(0, ${(t * travel).toFixed(1)}px, 0)`
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
  }, [speed])

  const overscan = REDUCED || speed <= 0 ? 0 : speed * 50
  return (
    <div ref={box} className={`plate${fade ? ' plate-fade' : ''} ${className}`.trim()} aria-hidden="true">
      <div ref={layer} className="plate-layer" style={{ top: `-${overscan}%`, bottom: `-${overscan}%` }}>
        {src && !REDUCED ? (
          <video className="plate-media" src={src} poster={poster} autoPlay muted loop playsInline preload="auto" style={{ objectPosition: position }} />
        ) : (
          <img className="plate-media" src={poster} alt={alt} style={{ objectPosition: position }} />
        )}
      </div>
    </div>
  )
}
