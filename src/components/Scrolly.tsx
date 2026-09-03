import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface ScrollyStep {
  title: string
  text: ReactNode
  image: string
  alt: string
  position?: string
}

interface Props {
  chapter: string
  heading: string
  steps: ScrollyStep[]
  /** Put the sticky picture on the left instead of the right. */
  flip?: boolean
}

/**
 * Scroll-driven chapter: the picture stays pinned while the steps scroll past
 * it, and the picture crossfades to match the step in the middle of the
 * viewport. Built on position: sticky and IntersectionObserver only, which
 * behave the same in Safari (macOS and iOS) and Chrome.
 */
export function Scrolly({ chapter, heading, steps, flip }: Props) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[]
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    let io: IntersectionObserver | null = null
    const connect = () => {
      io?.disconnect()
      // On phones the picture is pinned across the top, so the "reading line"
      // sits in the lower part of the screen; on wide screens it is the centre.
      const narrow = window.matchMedia('(max-width: 899px)').matches
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
          })
        },
        { rootMargin: narrow ? '-62% 0px -18% 0px' : '-45% 0px -45% 0px', threshold: 0 },
      )
      els.forEach((el) => io!.observe(el))
    }
    connect()
    let t = 0
    const onResize = () => {
      window.clearTimeout(t)
      t = window.setTimeout(connect, 150)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.clearTimeout(t)
      io?.disconnect()
    }
  }, [steps.length])

  return (
    <section className={`scrolly${flip ? ' flip' : ''}`} aria-label={heading}>
      <div className="wrap scrolly-grid">
        <figure className="scrolly-figure" aria-hidden="true">
          {steps.map((s, i) => (
            <img
              key={s.image + i}
              src={s.image}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={i === active ? 'on' : ''}
              style={{ objectPosition: s.position ?? '50% 50%' }}
            />
          ))}
          <figcaption className="scrolly-cap">
            <span className="scrolly-chapter">{chapter}</span>
            <span className="scrolly-count">{String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
          </figcaption>
        </figure>
        <ol className="scrolly-steps">
          <li className="scrolly-head">
            <span className="kicker">{chapter}</span>
            <h2>{heading}</h2>
          </li>
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-i={i}
              ref={(el) => {
                refs.current[i] = el
              }}
              className={`scrolly-step${i === active ? ' on' : ''}`}
            >
              <span className="scrolly-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
