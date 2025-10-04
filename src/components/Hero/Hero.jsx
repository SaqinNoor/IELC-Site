import React, { useState, useEffect } from 'react'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'

// Hero section with animated slogans
const Hero = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const [isSloganVisible, setIsSloganVisible] = useState(false)

  const slogans = [
    "Where Language Meets Excellence",
    "Empowering Minds Through English", 
    "Building Tomorrow's Leaders Today",
    "Excellence in Every Expression",
    "The Infinite Use of Finite Means"
  ]

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsSloganVisible(true)
    }, 500)

    const rotationInterval = setInterval(() => {
      setIsSloganVisible(false)
      setTimeout(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length)
        setTimeout(() => setIsSloganVisible(true), 100)
      }, 800)
    }, 5000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(rotationInterval)
    }
  }, [slogans.length])

  return (
    <header className="hero">
      <h1 className="hero-title" data-reveal>
        Ideal <span className="highlight">English</span> Language Club
      </h1>

      <div className="slogan-container" data-reveal style={{ transitionDelay: '.2s' }}>
        <h2 
          className={`slogan-text ${isSloganVisible ? 'visible' : ''}`}
          id="slogan-text"
        >
          {slogans[currentSloganIndex]}
        </h2>
      </div>

      <div className="hero-description" data-reveal style={{ transitionDelay: '.4s' }}>
        <p>
          Empowering students with exceptional English language skills and leadership qualities since 2016. 
          Join Bangladesh's most prestigious English language club and unlock your potential for academic 
          and professional excellence.
        </p>
      </div>

      <ScrollIndicator />
    </header>
  )
}

export default Hero
