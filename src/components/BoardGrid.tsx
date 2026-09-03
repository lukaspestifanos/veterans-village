import { Icon } from './Icon'
import { board } from '../data/board'

const initials = (name: string) =>
  name.split(',')[0].split(' ').filter((w) => /^[A-Z]/.test(w)).map((w) => w[0]).slice(0, 2).join('')

/** Board members with the full bio in view. A portrait shows when `photo` is set; until then a monogram. */
export function BoardGrid() {
  return (
    <ul className="board">
      {board.map((m) => (
        <li className="member" key={m.name}>
          {m.photo ? (
            <img className="portrait" src={m.photo} alt={m.name} width={160} height={160} loading="lazy" />
          ) : (
            <span className="portrait mono" aria-hidden="true">{initials(m.name)}</span>
          )}
          <div>
            <h3>{m.name}</h3>
            <div className="role">{m.role}</div>
            {m.veteran && (
              <span className="vet">
                <Icon name="star" />
                {m.veteran}
              </span>
            )}
            <p>{m.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
