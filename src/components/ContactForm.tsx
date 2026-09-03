import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Menu } from './Menu'
import { Pill } from './Pill'
import { properties } from '../data/properties'
import { site } from '../data/site'

export const TOPICS = [
  { value: 'housing', label: 'Housing availability' },
  { value: 'property', label: 'A specific community' },
  { value: 'services', label: 'Services and support' },
  { value: 'referral', label: 'Referring someone' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'donation', label: 'Donation' },
  { value: 'other', label: 'Other' },
]

export interface ContactPayload {
  name: string
  phone: string
  email: string
  topic: string
  community: string
  message: string
}

/**
 * Where the message goes. Swap this for a real endpoint (a Vercel function,
 * Formspree, the org's CRM) and the form does not need to change.
 */
async function submitContact(payload: ContactPayload): Promise<void> {
  console.info('contact form submitted (stub, no backend yet)', payload)
  await new Promise((r) => setTimeout(r, 600))
}

/** Deep links prefill the form: /contact?topic=property&community=Quinn%20by%20Vintage */
export function ContactForm() {
  const [params] = useSearchParams()
  const [topic, setTopic] = useState(params.get('topic') ?? 'housing')
  const [community, setCommunity] = useState(params.get('community') ?? '')
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const okRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (params.get('topic')) setTopic(params.get('topic')!)
    if (params.get('community')) setCommunity(params.get('community')!)
  }, [params])

  useEffect(() => {
    if (state === 'done') okRef.current?.focus()
  }, [state])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    setState('sending')
    await submitContact({
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      email: String(data.get('email') ?? ''),
      topic,
      community,
      message: String(data.get('message') ?? ''),
    })
    setState('done')
  }

  if (state === 'done') {
    return (
      <div className="ok" role="status" tabIndex={-1} ref={okRef}>
        <h3>Thank you. We received your message.</h3>
        <p>
          A team member will follow up during office hours, {site.hours} Pacific. If you need help sooner, call{' '}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="req" onSubmit={onSubmit} noValidate>
      <div className="two">
        <label>
          Full name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Phone <span className="opt">(optional)</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <div className="two">
        <div className="field">
          <span className="field-label">I'm reaching out about</span>
          <Menu name="topic" label="I'm reaching out about" value={topic} onChange={setTopic} groups={[{ items: TOPICS }]} />
        </div>
        <div className="field">
          <span className="field-label">Community <span className="opt">(if known)</span></span>
          <Menu
            name="community"
            label="Community"
            value={community}
            onChange={setCommunity}
            placeholder="Not sure yet"
            groups={[
              { items: [{ value: '', label: 'Not sure yet' }] },
              { head: 'Family apartments', items: properties.filter((p) => p.type === 'family').map((p) => ({ value: p.name, label: p.name, hint: p.city })) },
              { head: 'Senior 55+', items: properties.filter((p) => p.type === 'senior').map((p) => ({ value: p.name, label: p.name, hint: p.city })) },
              { head: 'Coming soon', items: properties.filter((p) => p.type === 'soon').map((p) => ({ value: p.name, label: p.name, hint: p.city })) },
            ]}
          />
        </div>
      </div>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="For example: I am a veteran looking for a one-bedroom apartment near Everett."
        />
      </label>
      <div className="foot">
        <Pill type="submit" large disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending...' : 'Send message'}
        </Pill>
        <span className="note">
          Prefer to talk? Call <a href={site.phoneHref}>{site.phone}</a>.
        </span>
      </div>
    </form>
  )
}
