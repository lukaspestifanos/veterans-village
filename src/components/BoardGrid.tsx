import { Icon } from './Icon'
import { board } from '../data/board'

export function BoardGrid() {
  return (
    <ul className="board">
      {board.map((m) => (
        <li className="member" key={m.name}>
          <h3>{m.name}</h3>
          <div className="role">{m.role}</div>
          {m.veteran && (
            <span className="vet">
              <Icon name="star" />
              {m.veteran}
            </span>
          )}
          <details>
            <summary>Read bio</summary>
            <p>{m.bio}</p>
          </details>
        </li>
      ))}
    </ul>
  )
}
