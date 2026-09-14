import { BoardGrid } from '../components/BoardGrid'
import { PageHead, TrustStrip, Values } from '../components/blocks'
import { media } from '../data/media'
import { site } from '../data/site'

// Photos sent by the Veterans Village team, 2026-09-13.
const photos = [
  { src: '/images/story/yelm-team.jpg', caption: 'The Veterans Village team on a visit to Yelm', alt: 'The Veterans Village team in matching shirts on the front steps of a brick house' },
  { src: '/images/story/signing.jpg', caption: 'Signing day', alt: 'Two people signing documents at a conference table' },
  { src: '/images/story/site-walk.jpg', caption: 'Walking a future site', alt: 'Three people, one in Army uniform, reviewing a document in an open field' },
  { src: '/images/story/site-plan.jpg', caption: 'Reviewing a site plan with community partners', alt: 'A group standing behind a table with a site model' },
  { src: '/images/story/construction.jpg', caption: 'On site during construction', alt: 'Four people, two in hard hats, in front of a building under construction' },
  { src: '/images/story/lake-stevens-community.jpg', caption: 'Community engagement in Lake Stevens, August 2026', alt: 'A Veterans Village team member with a guest at the Lake Stevens Senior Center' },
]

export function About() {
  return (
    <>
      <PageHead
        kicker="About"
        title="Founded by veterans, for veterans, and the seniors who served alongside them."
        lead="Veterans Village was founded in 2016 by two veterans who were passionate about helping other veterans and their families."
        poster={media.pages.about}
      />
      <TrustStrip />
      <section className="about">
        <div className="wrap top">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>A 501(c)(3) nonprofit, rooted in Washington, growing into Alabama.</h2>
            <p>
              We are dedicated to making a positive difference in the lives of veterans and their families. We partner
              with other nonprofit organizations to make sure our services are effective and reliable, and that the
              veterans we serve receive the best possible care.
            </p>
            <p style={{ marginTop: 12 }}>
              Our office is in Spanaway, Washington. Our communities are in Shoreline, Pasco, Everett, Shelton, and
              Kennewick, with new communities under construction in Lake Stevens and Tukwila and a first Alabama
              property under contract in Pell City.
            </p>
          </div>
          <img src="/images/plate-marine-view-entrance.jpg" alt="Vintage at Marine View senior community in Everett, Washington" width={800} height={600} loading="lazy" />
        </div>
      </section>
      <section className="about">
        <div className="wrap">
          <p className="eyebrow">In the field</p>
          <h2>Out in the communities we serve.</h2>
          <ul className="gallery">
            {photos.map((ph) => (
              <li key={ph.src}>
                <figure>
                  <img src={ph.src} alt={ph.alt} loading="lazy" />
                  <figcaption>{ph.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="impact">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Supported and respected, from the first day in a new home.</h2>
            <blockquote>
              "{site.mission}"<cite>Veterans Village mission statement</cite>
            </blockquote>
          </div>
          <Values />
        </div>
      </section>
      <section className="board-sec" id="board">
        <div className="wrap">
          <p className="eyebrow">Leadership</p>
          <h2>Board of Directors</h2>
          <p className="lead">Veteran-led and community-rooted. The board brings decades of military, healthcare, finance, and real estate experience to every decision.</p>
          <BoardGrid />
        </div>
      </section>
    </>
  )
}
