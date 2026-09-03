import { PageHead, Values } from '../components/blocks'
import { Pill } from '../components/Pill'
import { media } from '../data/media'
import { site } from '../data/site'

const columns = [
  {
    title: 'Governance',
    items: [
      '501(c)(3) nonprofit, founded 2016',
      'Eight-member board: U.S. Army and Marine Corps veterans, nursing, finance, and real estate',
      'Compliance monitoring and quality assurance are board-level competencies',
      `Registered office: ${site.address.join(', ')}`,
    ],
  },
  {
    title: 'Portfolio',
    items: [
      'Family apartments: Quinn by Vintage, Two10 by Vintage, Silver Creek',
      'Senior 55+: Vintage at Marine View, Vintage at Silverdale',
      'Under construction: Lake Stevens, Village at 47th',
      'Under contract: Camp Chula Vista, Pell City, Alabama',
      'About 1,370 affordable units developed or acquired in Washington',
    ],
  },
  {
    title: 'Ways to work with us',
    items: [
      'Refer a veteran or senior for housing or services',
      'Fund or co-develop affordable housing',
      'Deliver wraparound services on site as a partner agency',
      'Support the Alabama expansion',
    ],
  },
]

export function Partners() {
  return (
    <>
      <PageHead
        kicker="For partners and funders"
        title="Built to be a reliable partner."
        lead="What grantors, municipal partners, referral agencies, and donors need to know before working with us."
        poster={media.pages.partners}
      >
        <div className="ctas" style={{ marginTop: 24 }}>
          <Pill to="/contact?topic=partnership" large>Start a partnership conversation</Pill>
          <Pill to="/contact?topic=donation" variant="ghost" large>Make a donation</Pill>
        </div>
      </PageHead>
      <section className="partners">
        <div className="wrap">
          <div className="grid pgrid">
            {columns.map((c) => (
              <div className="pcol" key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="eyebrow" style={{ marginTop: 48 }}>What we stand for</p>
          <h2>Our values</h2>
          <Values />
          <div className="pcol contact-strip">
            <h3>Reach the team directly</h3>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
