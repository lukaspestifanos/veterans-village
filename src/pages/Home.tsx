import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Pill } from '../components/Pill'
import { VideoPlate } from '../components/VideoPlate'
import { clamp01, useScrollProgress } from '../components/useScrollProgress'
import { CallBox, Paths, Rise, ServicesGrid, Steps, TrustStrip, Values } from '../components/blocks'
import { PropertyCard } from '../components/PropertyCard'
import { media } from '../data/media'
import { properties, tiers } from '../data/properties'
import { site } from '../data/site'

const facts = [
  { k: 'Founded 2016', t: 'Started by veterans who wanted other veterans housed.' },
  { k: 'Seven communities', t: 'Shoreline, Pasco, Everett, Silverdale, and Lake Stevens.' },
  { k: 'Counseling included', t: 'Behavioral health support through every transition.' },
  { k: 'Alabama next', t: 'Camp Chula Vista in Pell City is under contract.' },
]

export function Home() {
  const track = useRef<HTMLElement>(null)
  const p = useScrollProgress(track)
  const copyO = 1 - clamp01(p * 2.6)
  const factsO = clamp01((p - 0.38) * 3.2)
  const featured = properties.filter((x) => x.image).slice(0, 3)

  return (
    <>
      {/* Pinned cinematic opener: the plate stays, the copy gives way to four facts. */}
      <section className="cine" ref={track} aria-labelledby="hero-h">
        <div className="cine-sticky">
          <VideoPlate src={media.hero.video} poster={media.hero.poster} position="60% 50%" />
          <div className="cine-copy wrap" style={{ opacity: copyO, transform: `translateY(${-p * 90}px)`, pointerEvents: copyO < 0.2 ? 'none' : 'auto' }}>
            <Rise delay={0.05}>
              <span className="kicker">501(c)(3) nonprofit, founded by veterans</span>
              <h1 id="hero-h">Affordable housing and support for veterans and seniors.</h1>
            </Rise>
            <Rise delay={0.14}>
              <p className="lead">Safe, affordable homes, behavioral health counseling, and the practical help that makes a new home last. Seven communities in Washington, expanding into Alabama.</p>
            </Rise>
            <Rise delay={0.22}>
              <div className="ctas">
                <Pill to="/help" large>I need housing or support</Pill>
                <Pill to="/housing" variant="ghost" large>See our communities</Pill>
              </div>
              <ul className="proof">
                <li><Icon name="check" strokeWidth={2.5} />Founded by veterans in {site.founded}</li>
                <li><Icon name="check" strokeWidth={2.5} />Family and senior 55+ communities</li>
                <li><Icon name="check" strokeWidth={2.5} />Individualized care</li>
              </ul>
            </Rise>
          </div>
          <div className="cine-facts wrap" style={{ opacity: factsO, pointerEvents: factsO < 0.2 ? 'none' : 'auto' }} aria-hidden={factsO < 0.2}>
            {facts.map((f, i) => (
              <div className={`fact f${i + 1}`} key={f.k}>
                <b>{f.k}</b>
                <span>{f.t}</span>
              </div>
            ))}
            <h2 className="fact-h">Housing first.<br />Support that lasts.</h2>
          </div>
        </div>
      </section>

      <Paths />

      <section className="band-plate">
        <VideoPlate src={media.numbers.video} poster={media.numbers.poster} fade={false} />
        <TrustStrip />
      </section>

      <section className="help-sec">
        <div className="wrap two-col">
          <div>
            <span className="kicker">Get help</span>
            <h2>Getting started is simple.</h2>
            <p className="lead">Every veteran and senior's situation is different, so we start with a conversation. There is no wrong way to reach us.</p>
            <Steps />
          </div>
          <CallBox />
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <span className="kicker">Services</span>
          <h2>What we provide</h2>
          <p className="lead">Housing is where it starts. Support is what makes it last. We deliver these services directly and through trusted local partners in every market we serve.</p>
          <ServicesGrid />
        </div>
      </section>

      <section className="housing">
        <div className="wrap">
          <span className="kicker">Housing</span>
          <h2>Find a community</h2>
          <p className="lead">Two kinds of communities today, with more under construction. Pick the one that fits your situation, then call the property or ask us to help.</p>
          <div className="tiers">
            {tiers.map((t) => (
              <Link className="tier" key={t.title} to={`/housing?type=${t.filter}`}>
                <span className="who">{t.who}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="go">See these communities <Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
          <ul className="props">
            {featured.map((x) => (
              <PropertyCard key={x.slug} p={x} />
            ))}
          </ul>
          <div className="more">
            <Pill to="/housing" variant="ghost" large>See all {properties.length} communities</Pill>
          </div>
        </div>
      </section>

      <section className="quote-plate">
        <VideoPlate src={media.quote.video} poster={media.quote.poster} fade={false} position="50% 40%" />
        <div className="wrap">
          <span className="kicker">Our mission</span>
          <blockquote>
            "{site.mission}"<cite>Veterans Village mission statement</cite>
          </blockquote>
        </div>
      </section>

      <section className="impact">
        <div className="wrap two-col">
          <div>
            <span className="kicker">What we stand for</span>
            <h2>Supported and respected, from the first day in a new home.</h2>
            <p>Over the years, Veterans Village has had a positive impact on the lives of thousands of veterans and their families. We are proud of the difference we have made and committed to continuing the work.</p>
          </div>
          <Values />
        </div>
      </section>
    </>
  )
}
