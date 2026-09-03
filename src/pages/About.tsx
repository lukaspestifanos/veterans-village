import { BoardGrid } from '../components/BoardGrid'
import { PageHead, TrustStrip, Values } from '../components/blocks'
import { media } from '../data/media'
import { site } from '../data/site'

export function About() {
  return (
    <>
      <PageHead
        kicker="About"
        title="Founded by veterans, for veterans, and the seniors who served alongside them."
        lead="Veterans Village was founded in 2016 by several veterans who were passionate about helping other veterans and their families."
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
              Our office is in Spanaway, Washington. Our communities are in Shoreline, Pasco, Everett, Silverdale, and
              Lake Stevens, with a first Alabama property under contract in Pell City.
            </p>
          </div>
          <img src="/images/plate-marine-view-entrance.jpg" alt="Vintage at Marine View senior community in Everett, Washington" width={800} height={600} loading="lazy" />
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
