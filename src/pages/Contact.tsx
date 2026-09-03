import { ContactForm } from '../components/ContactForm'
import { ContactInfo, PageHead } from '../components/blocks'
import { media } from '../data/media'

export function Contact() {
  return (
    <>
      <PageHead
        kicker="Contact"
        title="Send us a message"
        lead="Tell us a little about what you need. A team member follows up during office hours."
        poster={media.pages.contact}
      />
      <section className="contact">
        <div className="wrap two-col">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <PageHead kicker="Page not found" title="That page does not exist." lead="Use the menu above, or call (253) 257-7804 and we will point you the right way." />
  )
}
