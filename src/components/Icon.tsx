import type { SVGProps } from 'react'

export type IconName =
  | 'home'
  | 'heart'
  | 'basket'
  | 'medical'
  | 'briefcase'
  | 'hands'
  | 'people'
  | 'check'
  | 'arrow'
  | 'arrowUp'
  | 'phone'
  | 'menu'
  | 'close'
  | 'star'

const paths: Record<IconName, JSX.Element> = {
  home: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  heart: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <path d="M9.5 10h5M12 7.5v5" />
    </>
  ),
  basket: (
    <>
      <path d="M4 10h16l-1.5 9h-13z" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  medical: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M9 6V4h6v2M12 10v6M9 13h6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5h8v2M3 12h18" />
    </>
  ),
  hands: (
    <>
      <path d="M7 11l3-3 3 3" />
      <path d="M4 13.5 8.5 9a2 2 0 0 1 3 0l1 1 1-1a2 2 0 0 1 3 0l3.5 4.5" />
      <path d="M4 13.5 9 19l3 1.5L15 19l5-5.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M15 15.5a5 5 0 0 1 6.5 4.5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7M8 7h9v9" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  star: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"
    />
  ),
}

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
}

export function Icon({ name, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}

export function Mark({ light = false, ...rest }: { light?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" {...rest}>
      <rect width="48" height="48" rx="10" fill={light ? '#faf7f2' : '#1b2a41'} />
      <path d="M10 25 24 12l14 13v12H10z" fill={light ? '#1b2a41' : '#faf7f2'} />
      <path
        d="M24 20.5l1.7 3.5 3.8.5-2.8 2.7.7 3.8-3.4-1.8-3.4 1.8.7-3.8-2.8-2.7 3.8-.5z"
        fill="#a63a2b"
      />
    </svg>
  )
}
