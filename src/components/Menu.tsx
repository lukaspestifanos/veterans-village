import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

export interface MenuOption {
  value: string
  label: string
  hint?: string
}
export interface MenuGroup {
  head?: string
  items: MenuOption[]
}

interface Props {
  name: string
  value: string
  onChange: (value: string) => void
  groups: MenuGroup[]
  placeholder?: string
  search?: boolean
  label?: string
  id?: string
}

const Tick = () => (
  <svg className="tick" viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
    <path d="M3.5 8.6l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * A real menu, not a native select. Same idiom as the Triptych hub: a button
 * that states the current value, a popover of rows with a check mark and
 * optional section headers, arrow keys, Escape, click-outside. A hidden input
 * carries the value so a plain form submit still works.
 */
export function Menu({ name, value, onChange, groups, placeholder = 'Choose', search, label, id }: Props) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const root = useRef<HTMLDivElement>(null)
  const pop = useRef<HTMLDivElement>(null)
  const btnId = useId()
  const listId = id ?? `${btnId}-list`

  const all = groups.flatMap((g) => g.items)
  const current = all.find((o) => o.value === value)
  const shown = current?.label ?? placeholder
  const match = (o: MenuOption) => !q || o.label.toLowerCase().includes(q.toLowerCase())

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    // keep the popover on screen
    const box = pop.current?.getBoundingClientRect()
    if (box && pop.current && box.right > window.innerWidth - 12) {
      pop.current.style.left = 'auto'
      pop.current.style.right = '0'
    }
    const sel = pop.current?.querySelector<HTMLElement>('.ddrow.sel')
    sel?.scrollIntoView({ block: 'nearest' })
    if (search) pop.current?.querySelector<HTMLInputElement>('.ddfind')?.focus()
    else sel?.focus()
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open, search])

  const choose = (v: string) => {
    onChange(v)
    setOpen(false)
    setQ('')
    root.current?.querySelector<HTMLButtonElement>('.ddbtn')?.focus()
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      root.current?.querySelector<HTMLButtonElement>('.ddbtn')?.focus()
      return
    }
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setOpen(true)
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const rows = Array.from(pop.current?.querySelectorAll<HTMLElement>('.ddrow') ?? [])
      if (!rows.length) return
      const i = rows.indexOf(document.activeElement as HTMLElement)
      let j = i < 0 ? (e.key === 'ArrowDown' ? 0 : rows.length - 1) : i + (e.key === 'ArrowDown' ? 1 : -1)
      if (j < 0) j = rows.length - 1
      if (j >= rows.length) j = 0
      rows[j].focus()
    }
  }

  return (
    <div className={`dd${open ? ' open' : ''}`} ref={root} onKeyDown={onKey}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={btnId}
        className="ddbtn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ddshown">{shown}</span>
        <svg className="chev" viewBox="0 0 10 6" width="9" height="6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="ddpop" ref={pop} role="listbox" id={listId} aria-labelledby={btnId}>
          {search && (
            <input className="ddfind" type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} aria-label={`Search ${placeholder}`} />
          )}
          <div className="ddlist">
            {groups.map((g, gi) => {
              const items = g.items.filter(match)
              if (!items.length) return null
              return (
                <div key={gi}>
                  {g.head && <div className="ddhead">{g.head}</div>}
                  {items.map((o) => {
                    const sel = o.value === value
                    return (
                      <button
                        type="button"
                        key={o.value}
                        className={`ddrow${sel ? ' sel' : ''}`}
                        role="option"
                        aria-selected={sel}
                        onClick={() => choose(o.value)}
                      >
                        {sel ? <Tick /> : <i className="tick" />}
                        <span className="ddlab">
                          {o.label}
                          {o.hint && <em>{o.hint}</em>}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
