import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header, UtilityBar } from './Header'
import { Footer, MobileBar } from './Footer'

function useScrollRestore() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export function Layout() {
  useScrollRestore()
  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>
      <UtilityBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
