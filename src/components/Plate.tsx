interface Props {
  src: string
  alt?: string
  position?: string
  /** 0 to 1, how dark the scrim over the photo is. */
  scrim?: number
  className?: string
}

/** Full-bleed photo behind a section. Plain img + gradient, works everywhere. */
export function Plate({ src, alt = '', position = '50% 50%', scrim = 0.45, className = '' }: Props) {
  return (
    <div className={`plate ${className}`.trim()} aria-hidden="true" style={{ '--scrim': scrim } as React.CSSProperties}>
      <img src={src} alt={alt} style={{ objectPosition: position }} decoding="async" />
    </div>
  )
}
