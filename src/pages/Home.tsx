import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Pill } from '../components/Pill'
import { Scrolly, type ScrollyStep } from '../components/Scrolly'
import { VideoPlate } from '../components/VideoPlate'
import { clamp01, useScrollProgress } from '../components/useScrollProgress'
import { CallBox, Paths, Rise, ServicesGrid, TrustStrip, Values } from '../components/blocks'
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

// Chapter one: why Veterans Village exists and what it has become.
const story: ScrollyStep[] = [
  {
    title: 'Coming home should not mean starting over.',
    text: 'Too many veterans and seniors in Washington are one rent increase or one health setback away from losing a stable place to live. Service should not end in uncertainty.',
    image: '/images/plate-silver-creek-aerial.jpg',
    alt: 'Aerial view of Silver Creek Apartments in Pasco',
  },
  {
    title: 'In 2016, veterans decided to fix it themselves.',
    text: 'Veterans Village was founded by veterans who had watched friends struggle to find housing they could afford. They started as a 501(c)(3) nonprofit with one goal: safe, affordable homes, and the support to keep them.',
    image: '/images/plate-marine-view-entrance.jpg',
    alt: 'Entrance of Vintage at Marine View in Everett',
  },
  {
    title: 'Today: seven communities and counseling that comes with the keys.',
    text: 'About 1,370 affordable units developed or acquired across Shoreline, Pasco, Everett, Silverdale, and Lake Stevens. Every resident has access to behavioral health counseling, food assistance, medical care coordination, and job training.',
    image: '/images/plate-residents-celebrating.jpg',
    alt: 'Residents celebrating together in a community room',
    position: '50% 35%',
  },
  {
    title: 'Next: Alabama.',
    text: 'Camp Chula Vista in Pell City, a wooded property on a private lake with lodging and a conference center, is under contract. It will be the first Veterans Village community outside Washington.',
    image: '/images/plate-silver-creek-sign.jpg',
    alt: 'Silver Creek Apartments entrance sign',
  },
]

// Chapter two: what happens when someone reaches out.
const journey: ScrollyStep[] = [
  {
    title: 'You call, or send a message.',
    text: `Call ${site.phone} during office hours, or use the form on this site. Tell us a little about your situation. Case workers and family members are welcome to reach out on someone's behalf.`,
    image: '/images/plate-two10-living.jpg',
    alt: 'A furnished living room at Two10 by Vintage',
  },
  {
    title: 'We talk through what you need.',
    text: 'A team member goes over housing options, eligibility, and the services that fit, whether that is counseling, food assistance, medical care, or job training. Every situation is different, so there is no script.',
    image: '/images/plate-residents-party.jpg',
    alt: 'Residents laughing together at a party',
    position: '50% 30%',
  },
  {
    title: 'You move into a community that fits.',
    text: 'Family apartments or a senior 55+ community, close to transit, shopping, and care. If we cannot help directly, we connect you with a trusted partner organization that can.',
    image: '/images/marine-view.jpg',
    alt: 'Exterior of Vintage at Marine View',
  },
]

export function Home() {
  const track = useRef<HTMLElement>(null)
  const p = useScrollProgress(track)
  const copyO = 1 - clamp01(p * 2.6)
  const factsO = clamp01((p - 0.38) * 3.2)
  const featured = properties.filter((x) => x.image).slice(0, 3)

  return (
    <>
      {/* Pinned opener: the plate stays, the copy gives way to four facts. */}
      <section className="cine" ref={track} aria-labelledby="hero-h">
        <div className="cine-sticky">
          <VideoPlate src={media.hero.video} poster={media.hero.poster} position="60% 50%" />
          <div className="cine-copy wrap" style={{ opacity: copyO, transform: `translate3d(0, ${(-p * 90).toFixed(1)}px, 0)`, pointerEvents: copyO < 0.2 ? 'none' : 'auto' }}>
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
          <div className="scroll-cue" style={{ opacity: copyO }} aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>
        </div>
      </section>

      <Paths />

      <Scrolly chapter="Chapter one" heading="Why Veterans Village exists" steps={story} />

      <section className="band-plate">
        <VideoPlate src={media.numbers.video} poster={media.numbers.poster} fade={false} />
        <TrustStrip />
      </section>

      <Scrolly chapter="Chapter two" heading="What happens when you reach out" steps={journey} flip />

      <section className="help-sec">
        <div className="wrap two-col">
          <div>
            <span className="kicker">Get help</span>
            <h2>There is no wrong way to reach us.</h2>
            <p className="lead">Every veteran and senior's situation is different, so we start with a conversation. Call, email, or send the form. A person answers.</p>
            <div className="ctas" style={{ marginTop: 28 }}>
              <Pill to="/contact?topic=housing" large>Send a message</Pill>
              <Pill to="/help" variant="ghost" large>How it works</Pill>
            </div>
          </div>
          <CallBox />
        </div>
      </section>

      <section className="housing">
        <div className="wrap">
          <span className="kicker">Chapter three</span>
          <h2>Where you could live</h2>
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

      <section className="services">
        <div className="wrap">
          <span className="kicker">Chapter four</span>
          <h2>Support that lasts</h2>
          <p className="lead">Housing is where it starts. These services are what keep it. We deliver them directly and through trusted local partners in every market we serve.</p>
          <ServicesGrid />
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
