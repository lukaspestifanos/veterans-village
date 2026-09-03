import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'
import { Pill } from './Pill'
import { Plate } from './Plate'
import { Reveal } from './Reveal'
import { services } from '../data/services'
import { site, stats, values } from '../data/site'

/** Entrance motion: wraps children in a block that rises on mount. Respects reduced motion via CSS. */
export function Rise({ delay = 0, as: Tag = 'div', className = '', children }: { delay?: number; as?: 'div' | 'section' | 'li'; className?: string; children: ReactNode }) {
  return (
    <Tag className={`rise ${className}`.trim()} style={{ '--d': `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  )
}

export function PageHead({ kicker, title, lead, poster, children }: { kicker: string; title: string; lead?: string; poster?: string; children?: ReactNode }) {
  return (
    <section className={`page-head${poster ? ' has-photo' : ''}`}>
      {poster && <Plate src={poster} position="50% 45%" scrim={0.55} />}
      <div className="wrap">
        <Reveal>
          <p className={`eyebrow${poster ? ' light' : ''}`}>{kicker}</p>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function Paths() {
  const items: { to: string; icon: IconName; title: string; text: string; go: string; tone: string }[] = [
    { to: '/help', icon: 'home', title: 'I need housing or help', text: 'For veterans and seniors looking for an affordable home, counseling, food, medical care, or job training.', go: 'Start here', tone: 'help' },
    { to: '/contact?topic=referral', icon: 'people', title: "I'm referring someone", text: 'For case workers, VA staff, family members, and partner agencies helping a veteran or senior find a home.', go: 'Make a referral', tone: '' },
    { to: '/partners', icon: 'hands', title: 'I want to partner or fund', text: 'For grantors, municipal partners, nonprofits, and donors. Governance, portfolio, and how to work with us.', go: 'Partner with us', tone: 'partner' },
  ]
  return (
    <section className="paths-sec" aria-label="How can we help you today">
      <div className="wrap">
        <div className="paths-grid">
          {items.map((it, i) => (
            <Reveal key={it.to} delay={i * 70}>
              <Link className={`path-card ${it.tone}`} to={it.to}>
                <Icon name={it.icon} className="ic" />
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <span className="go">
                  {it.go} <Icon name="arrow" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustStrip() {
  return (
    <section className="trust" aria-label="Veterans Village at a glance">
      <div className="wrap">
        <ul>
          {stats.map((s) => (
            <li key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CallBox() {
  return (
    <div className="callbox">
      <h3>Talk to a person</h3>
      <a className="phone" href={site.phoneHref}>
        {site.phone}
      </a>
      <p>
        {site.hours} Pacific. Email <a href={`mailto:${site.email}`}>{site.email}</a> any time.
      </p>
      <div className="row">
        <Pill to="/contact?topic=housing">Send a message</Pill>
        <Pill to="/housing" variant="ghost">Check availability</Pill>
      </div>
      <p className="crisis">
        <strong>If you are in crisis right now,</strong> call the {site.crisis.label}:{' '}
        <a href={site.crisis.href}>{site.crisis.action}</a>. Free, confidential, 24 hours a day.
      </p>
    </div>
  )
}

export function Steps() {
  const steps = [
    { title: 'Call or send us a message', text: `Call ${site.phone} during office hours or use the short form on the contact page. Tell us a little about your situation.` },
    { title: 'We talk through what you need', text: 'A team member will go over housing options, eligibility, and the services that fit, whether that is counseling, food assistance, medical care, or job training.' },
    { title: 'We connect you to the right place', text: 'We match you with a community that has availability, or with a trusted partner organization if we cannot help directly.' },
  ]
  return (
    <ol className="steps">
      {steps.map((s) => (
        <li key={s.title}>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function ServicesGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid svc-grid">
      {services.slice(0, limit).map((s) => (
        <article className="svc" key={s.slug} id={s.slug}>
          <div className="ic">
            <Icon name={s.icon} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <Link to={s.cta.to}>{s.cta.label}</Link>
        </article>
      ))}
    </div>
  )
}

export function Values() {
  return (
    <ul className="values">
      {values.map((v) => (
        <li key={v.title}>
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function ContactInfo() {
  return (
    <aside className="info" aria-label="Office information">
      <h3>{site.name}</h3>
      <dl>
        <div>
          <dt>Visit</dt>
          <dd>
            <a href={site.mapHref} target="_blank" rel="noopener">
              {site.address.join(', ')}
            </a>
          </dd>
        </div>
        <div>
          <dt>Call</dt>
          <dd><a href={site.phoneHref}>{site.phone}</a></dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
        </div>
        <div>
          <dt>Office hours</dt>
          <dd>{site.hours}</dd>
        </div>
        <div>
          <dt>Crisis support</dt>
          <dd>
            {site.crisis.label}: <a href={site.crisis.href}>{site.crisis.action}</a>. Free and confidential, 24/7.
          </dd>
        </div>
      </dl>
    </aside>
  )
}

export function CtaBand({ title, text, primary, secondary }: { title: string; text: string; primary: { to: string; label: string }; secondary?: { to: string; label: string } }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="actions">
          <Pill to={primary.to} variant="light" large>{primary.label}</Pill>
          {secondary && <Pill to={secondary.to} variant="ghost" large>{secondary.label}</Pill>}
        </div>
      </div>
    </section>
  )
}
