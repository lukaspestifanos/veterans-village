import { Link } from 'react-router-dom'
import { CommunityFinder } from '../components/CommunityFinder'
import { Icon } from '../components/Icon'
import { PageHead } from '../components/blocks'
import { media } from '../data/media'
import { tiers } from '../data/properties'

export function Housing() {
  return (
    <>
      <PageHead
        kicker="Housing"
        title="Find a community"
        lead="We operate two kinds of communities today, with more under construction. Pick the one that fits your situation, then call the property or ask us to help."
        poster={media.pages.housing}
      />
      <section className="housing">
        <div className="wrap">
          <div className="tiers">
            {tiers.map((t) => (
              <Link className="tier" key={t.title} to={`/housing?type=${t.filter}`}>
                <span className="who">{t.who}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="go">Filter to these <Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
          <CommunityFinder />
        </div>
      </section>
    </>
  )
}
