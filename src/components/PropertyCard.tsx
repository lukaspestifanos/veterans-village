import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import type { Property } from '../data/properties'

export function PropertyCard({ p }: { p: Property }) {
  const soon = p.type === 'soon'
  return (
    <li className="prop">
      <div className="ph">
        {p.image ? (
          <img src={p.image} alt={`${p.name} in ${p.city}`} loading="lazy" width={640} height={400} />
        ) : (
          <div className="noimg">{soon ? 'Coming soon' : 'Photo coming soon'}</div>
        )}
        <span className={`badge ${soon ? 'soon' : 'open'}`}>{p.status}</span>
      </div>
      <div className="body">
        <h3>{p.name}</h3>
        <div className="addr">{p.address}</div>
        <p className="desc">{p.description}</p>
        <ul className="feat">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="links">
          {p.phone && <a href={`tel:+1${p.phone.replace(/\D/g, '')}`}>Call {p.phone}</a>}
          {p.site && (
            <a href={p.site} target="_blank" rel="noopener">
              {p.siteLabel ?? 'Property website'} <Icon name="arrowUp" />
            </a>
          )}
          <Link to={`/contact?topic=property&community=${encodeURIComponent(p.name)}`}>Ask about this community</Link>
        </div>
      </div>
    </li>
  )
}
