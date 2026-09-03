import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Pill } from '../components/Pill'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { CallBox, ServicesGrid, Values } from '../components/blocks'
import { PropertyCard } from '../components/PropertyCard'
import { media } from '../data/media'
import { properties } from '../data/properties'
import { site, stats } from '../data/site'

const steps = [
  { n: '01', title: 'Call, or send a message', text: `Call ${site.phone} during office hours or use the form on this site. Case workers and family can reach out on someone's behalf.` },
  { n: '02', title: 'We talk through what you need', text: 'A team member goes over housing options, eligibility, and the services that fit. Every situation is different, so there is no script.' },
  { n: '03', title: 'You move into a community that fits', text: 'Family apartments or a senior 55+ community. If we cannot help directly, we connect you with a trusted partner that can.' },
]

export function Home() {
  const featured = properties.filter((x) => x.image)

  return (
    <>
      {/* Hero: one photograph, one sentence, two ways in. */}
      <section className="hero">
        <Plate src={media.hero.poster} position="60% 55%" scrim={0.5} />
        <div className="wrap hero-inner">
          <Reveal>
            <p className="eyebrow light">A 501(c)(3) nonprofit founded by veterans in 2016</p>
            <h1>Affordable housing and support for veterans and seniors.</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero-lead">Seven communities in Washington. Counseling, food, medical care coordination, and job training that come with the keys. Alabama next.</p>
            <div className="ctas">
              <Pill to="/help" large>I need housing or support</Pill>
              <Pill to="/housing" variant="ghost" large>See our communities</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The dual navigation, made physical: a bar that sits across the hero's bottom edge. */}
      <section className="paths">
        <div className="wrap">
          <Reveal className="paths-bar">
            <Link className="path" to="/help">
              <Icon name="home" className="ic" />
              <span><b>I need housing or help</b><small>Veterans and seniors looking for a home or support</small></span>
              <Icon name="arrow" className="go" />
            </Link>
            <Link className="path" to="/contact?topic=referral">
              <Icon name="people" className="ic" />
              <span><b>I'm referring someone</b><small>Case workers, VA staff, family, partner agencies</small></span>
              <Icon name="arrow" className="go" />
            </Link>
            <Link className="path" to="/partners">
              <Icon name="hands" className="ic" />
              <span><b>I want to partner or fund</b><small>Grantors, municipalities, nonprofits, donors</small></span>
              <Icon name="arrow" className="go" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="statement">
        <div className="wrap statement-grid">
          <Reveal>
            <p className="eyebrow">Why we exist</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Coming home should not mean starting over.</h2>
            <p className="big">Too many veterans and seniors are one rent increase or one health setback away from losing a stable place to live. In 2016 a group of veterans started Veterans Village to change that: safe, affordable homes, and the support to keep them.</p>
            <Link className="textlink" to="/about">Our story and board <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Numbers on navy */}
      <section className="numbers">
        <div className="wrap">
          <ul>
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 70}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Communities rail */}
      <section className="communities">
        <div className="wrap communities-head">
          <Reveal>
            <p className="eyebrow">Communities</p>
            <h2>Where you could live</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">Family apartments in Shoreline and Pasco. Senior 55+ communities in Everett and Silverdale. Two more under construction, and a first Alabama property under contract.</p>
            <Pill to="/housing" variant="outline">Find a community</Pill>
          </Reveal>
        </div>
        <div className="rail-wrap">
          <ul className="rail">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 60}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
            <li className="rail-more">
              <Link to="/housing?type=soon">
                <b>Lake Stevens, Village at 47th, Camp Chula Vista</b>
                <span>Under construction and under contract <Icon name="arrow" /></span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="how">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Getting started</p>
            <h2>There is no wrong way to reach us.</h2>
          </Reveal>
          <ol className="how-grid">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90}>
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="how-call">
            <CallBox />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="wrap">
          <div className="services-head">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2>Support that lasts.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead">Housing is where it starts. These services are what keep it. We deliver them directly and through trusted local partners in every market we serve.</p>
            </Reveal>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Mission over a photograph */}
      <section className="mission">
        <Plate src={media.quote.poster} position="50% 45%" scrim={0.62} />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow light">Our mission</p>
            <blockquote>"{site.mission}"</blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="values-sec">
        <div className="wrap values-grid">
          <Reveal>
            <p className="eyebrow">What we stand for</p>
            <h2>Supported and respected, from the first day in a new home.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Values />
          </Reveal>
        </div>
      </section>
    </>
  )
}
