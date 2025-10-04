import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Loader from './components/Loader/Loader'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Activities from './components/Activities/Activities'
import Journey from './components/Journey/Journey'
import Accomplishments from './components/Accomplishments/Accomplishments'
import Links from './components/Links/Links'
import Statement from './components/Statement/Statement'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects'
import Spotlight from './components/Spotlight/Spotlight'
import CarnivalShowcase from './pages/CarnivalShowcase'
import { useScrollReveal, useParallax, useDynamicBackground } from './hooks/useScrollReveal'

// Home page component with hooks
function HomePage() {
  // Initialize animation hooks for home page
  useScrollReveal()
  useParallax()
  useDynamicBackground()

  return (
    <main>
      <Hero />
      <Activities />
      <Journey />
      <Accomplishments />
      <Links />
      <Statement />
      <Contact />
    </main>
  )
}

// Main application component
function App() {

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Loader />
          <Navigation />
          <BackgroundEffects />
          <Spotlight />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carnivals" element={<CarnivalShowcase />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
