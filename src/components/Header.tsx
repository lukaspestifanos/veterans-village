import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon, Mark } from './Icon'
import { Pill } from './Pill'
import { nav, site } from '../data/site'

export function UtilityBar() {
  return (
    <div className="util" role="region" aria-label="Contact and crisis information">
      <div className="wrap">
        <div>
          <a href={site.phoneHref}>Call {site.phone}</a>
          <span className="hours"> &middot; {site.hours}</span>
        </div>
        <div className="crisis">
          <strong>In crisis?</strong> {site.crisis.label}: <a href={site.crisis.href}>{site.crisis.action}</a>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Over the home photograph the bar starts transparent and turns to paper once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const overPhoto = location.pathname === '/' || ['/help', '/housing', '/services', '/about', '/partners', '/contact'].includes(location.pathname)

  // Close the menu on navigation, on Escape, and when the window turns wide.
  useEffect(() => setOpen(false), [location.pathname, location.search])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1100 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.documentElement.classList.add('menu-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.documentElement.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className={`site${open ? ' is-open' : ''}${overPhoto ? ' photo' : ''}${overPhoto && !scrolled && !open ? ' over' : ''}`}>
      <div className="wrap bar">
        <Link className="logo" to="/" aria-label="Veterans Village home">
          <Mark className="mark" />
          <span>
            {site.name}
            <small>{site.tagline}</small>
          </span>
        </Link>
        <nav className="main" aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hdr-cta">
          <Pill to="/partners" variant="outline">Partner With Us</Pill>
          <Pill to="/contact?topic=housing">Get Help</Pill>
        </div>
        <button
          className="hamb"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav id="menu" className="menu" aria-label="Mobile" aria-hidden={!open}>
        <div className="menu-inner">
          <p className="menu-eyebrow" style={{ '--d': '0.06s' } as React.CSSProperties}>Menu</p>
          <ul className="menu-list">
            {nav.map((n, i) => (
              <li key={n.to} style={{ '--d': `${0.1 + i * 0.05}s` } as React.CSSProperties}>
                <NavLink to={n.to}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="menu-foot" style={{ '--d': '0.42s' } as React.CSSProperties}>
            <Pill to="/contact?topic=housing" large>Get Help</Pill>
            <Pill to="/partners" variant="outline" large>Partner With Us</Pill>
            <p className="menu-phone">
              Or call <a href={site.phoneHref}>{site.phone}</a>
              <br />
              {site.hours}
            </p>
          </div>
        </div>
      </nav>
    </header>
  )
}
