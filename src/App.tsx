import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Help } from './pages/Help'
import { Housing } from './pages/Housing'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Partners } from './pages/Partners'
import { Contact, NotFound } from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="housing" element={<Housing />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="partners" element={<Partners />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
