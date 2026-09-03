import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon, Mark } from './Icon'
import { Pill } from './Pill'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-cta">
        <h2>Need a home, or want to partner? Let's talk.</h2>
        <div className="ctas">
          <Pill to="/contact?topic=housing" large>Get help</Pill>
          <Pill to="/contact?topic=partnership" variant="ghost" large>Partner with us</Pill>
        </div>
      </div>
      <div className="wrap cols">
        <div>
          <div className="brand">
            <Mark light />
            {site.name}
          </div>
          <p>A 501(c)(3) nonprofit providing affordable housing and behavioral health counseling for veterans and senior citizens in Washington and Alabama.</p>
        </div>
        <div>
          <h4>Get help</h4>
          <ul>
            <li><Link to="/help">How it works</Link></li>
            <li><Link to="/housing">Find a community</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact?topic=referral">Refer someone</Link></li>
          </ul>
        </div>
        <div>
          <h4>Organization</h4>
          <ul>
            <li><Link to="/about">About and mission</Link></li>
            <li><Link to="/about#board">Board of Directors</Link></li>
            <li><Link to="/partners">Partners and funders</Link></li>
            <li><Link to="/contact?topic=donation">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{site.address[0]}<br />{site.address[1]}</li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.hoursShort}</li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>&copy; {new Date().getFullYear()} {site.name}. A 501(c)(3) nonprofit organization.</span>
        <span>{site.crisis.label}: {site.crisis.action}</span>
      </div>
    </footer>
  )
}

/**
 * Call / Get help bar for phones. It appears once the reader has scrolled past
 * the opening screen and steps away again when the footer, which carries the
 * same two actions, is in view. Never on the contact page.
 */
export function MobileBar() {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const footer = document.querySelector('footer.site')
      const footerNear = footer ? footer.getBoundingClientRect().top < window.innerHeight * 0.9 : false
      setShow(window.scrollY > window.innerHeight * 0.7 && !footerNear)
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
  }, [pathname])
  if (pathname === '/contact') return null
  return (
    <div className={`mbar${show ? ' show' : ''}`} aria-label="Quick actions" aria-hidden={!show}>
      <a className="btn btn-outline" href={site.phoneHref}>
        <Icon name="phone" />
        Call us
      </a>
      <Link className="btn btn-primary" to="/contact?topic=housing">
        Get help
      </Link>
    </div>
  )
}
