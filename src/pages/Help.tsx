import { CallBox, PageHead, Paths, ServicesGrid, Steps } from '../components/blocks'
import { Pill } from '../components/Pill'
import { media } from '../data/media'

export function Help() {
  return (
    <>
      <PageHead
        kicker="Get help"
        title="Getting started is simple."
        lead="Every veteran and senior's situation is different, so we start with a conversation. There is no wrong way to reach us."
        poster={media.pages.help}
      />
      <section className="help-sec">
        <div className="wrap two-col">
          <div>
            <h2>How it works</h2>
            <Steps />
            <div className="ctas" style={{ marginTop: 28 }}>
              <Pill to="/contact?topic=housing" large>Send a message</Pill>
              <Pill to="/housing" variant="outline" large>See communities</Pill>
            </div>
          </div>
          <CallBox />
        </div>
      </section>
      <section className="services">
        <div className="wrap">
          <p className="eyebrow">What we can help with</p>
          <h2>Housing first, then everything that keeps it.</h2>
          <ServicesGrid />
        </div>
      </section>
      <Paths />
      <div style={{ height: 48 }} />
    </>
  )
}
