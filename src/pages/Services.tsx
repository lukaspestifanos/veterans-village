import { PageHead, ServicesGrid } from '../components/blocks'
import { media } from '../data/media'

export function Services() {
  return (
    <>
      <PageHead
        kicker="Services"
        title="What we provide"
        lead="Individualized care for every veteran and senior we serve. Housing is where it starts. Support is what makes it last."
        poster={media.pages.services}
      />
      <section className="services">
        <div className="wrap">
          <ServicesGrid />
        </div>
      </section>
      <section className="about">
        <div className="wrap top">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Care that respects every veteran.</h2>
            <p>
              We are committed to providing veterans and senior citizens with the highest quality of service. Every
              situation is unique, so we tailor our services to meet each person where they are, and make sure they are
              supported and respected as they transition into a new home.
            </p>
            <p style={{ marginTop: 12 }}>
              Our services have helped thousands of individuals move into safe, affordable homes, and we remain proud
              members of the veteran and senior communities we serve.
            </p>
          </div>
          <img src="/images/plate-two10-living.jpg" alt="A furnished living room at Two10 by Vintage in Shoreline" width={800} height={600} loading="lazy" />
        </div>
      </section>
    </>
  )
}
