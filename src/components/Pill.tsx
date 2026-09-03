import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'navy' | 'outline' | 'light' | 'ghost'

interface Props {
  to?: string
  href?: string
  variant?: Variant
  large?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

/** One rounded button used everywhere. Internal routes use `to`, phone/mail/external use `href`. */
export function Pill({ to, href, variant = 'primary', large, className = '', children, onClick, type, disabled }: Props) {
  const cls = `btn btn-${variant}${large ? ' btn-lg' : ''} ${className}`.trim()
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} onClick={onClick} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
