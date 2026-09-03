import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties, type PropertyType } from '../data/properties'
import { PropertyCard } from './PropertyCard'

type TypeFilter = 'all' | PropertyType
type StateFilter = 'all' | 'WA' | 'AL'

const TYPES: { value: TypeFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'family', label: 'Family' },
  { value: 'senior', label: 'Senior 55+' },
  { value: 'soon', label: 'Coming soon' },
]
const STATES: { value: StateFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'WA', label: 'Washington' },
  { value: 'AL', label: 'Alabama' },
]

/** Filters live in the URL (?type=senior&state=WA) so a filtered view can be shared. */
export function CommunityFinder() {
  const [params, setParams] = useSearchParams()
  const type = (params.get('type') as TypeFilter) || 'all'
  const state = (params.get('state') as StateFilter) || 'all'

  const list = useMemo(
    () => properties.filter((p) => (type === 'all' || p.type === type) && (state === 'all' || p.state === state)),
    [type, state],
  )

  const set = (key: 'type' | 'state', value: string) => {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <>
      <div className="finder" role="group" aria-label="Filter communities">
        <div className="group">
          <span>Type</span>
          {TYPES.map((t) => (
            <button key={t.value} className="chip" aria-pressed={type === t.value} onClick={() => set('type', t.value)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="group">
          <span>State</span>
          {STATES.map((s) => (
            <button key={s.value} className="chip" aria-pressed={state === s.value} onClick={() => set('state', s.value)}>
              {s.label}
            </button>
          ))}
        </div>
        <span className="count" aria-live="polite">
          {list.length === properties.length ? `Showing all ${list.length} communities` : `Showing ${list.length} of ${properties.length} communities`}
        </span>
      </div>
      <ul className="props">
        {list.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
      </ul>
    </>
  )
}
