import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
import { useScrollReveal, useParallax, useDynamicBackground } from './hooks/useScrollReveal'

// Main application component
function App() {
  // Initialize animation hooks
  useScrollReveal()
  useParallax()
  useDynamicBackground()

  return (
    <Router>
      <div className="app">
        <Loader />
        <Navigation />
        <BackgroundEffects />
        <Spotlight />
        
        <main>
          <Hero />
          <Activities />
          <Journey />
          <Accomplishments />
          <Links />
          <Statement />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
