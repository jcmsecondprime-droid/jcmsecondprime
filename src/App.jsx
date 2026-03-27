import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import SplashScreen from './components/SplashScreen'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhoThisIsFor from './components/WhoThisIsFor'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CardDetailPage from './pages/CardDetailPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhoThisIsFor />
      <Services />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <ScrollToTop />
          <WhatsAppFloat />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topic/:slug" element={<CardDetailPage />} />
          </Routes>
        </>
      )}
    </>
  )
}
