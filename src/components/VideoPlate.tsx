import { useEffect, useRef } from 'react'

interface Props {
  /** MP4/WebM background. When missing, the poster plays a slow Ken Burns drift instead. */
  src?: string
  poster: string
  alt?: string
  /** Tie playback position to the page scroll instead of looping. */
  scrub?: boolean
  /** 0..1 scroll progress for scrub mode (from useScrollProgress). */
  progress?: number
  /** Bottom fade into the stage color, for legibility of what follows. */
  fade?: boolean
  className?: string
  position?: string
}

/**
 * Full-bleed cinematic background plate. The video is a real edge-to-edge
 * plane, not an inset media card. Overlays are limited to the edge fades.
 */
export function VideoPlate({ src, poster, alt = '', scrub, progress = 0, fade = true, className = '', position = '50% 50%' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v || !scrub) return
    const dur = v.duration
    if (!dur || Number.isNaN(dur)) return
    v.currentTime = progress * (dur - 0.05)
  }, [scrub, progress])

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div className={`plate${fade ? ' plate-fade' : ''} ${className}`.trim()} aria-hidden="true">
      {src && !reduced ? (
        <video
          ref={ref}
          className="plate-video"
          src={src}
          poster={poster}
          autoPlay={!scrub}
          muted
          loop={!scrub}
          playsInline
          preload="auto"
          style={{ objectPosition: position }}
        />
      ) : (
        <img className={`plate-img${reduced ? '' : ' kb'}`} src={poster} alt={alt} style={{ objectPosition: position }} />
      )}
    </div>
  )
}
