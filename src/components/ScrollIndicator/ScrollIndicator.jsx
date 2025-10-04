import React, { useState, useEffect } from 'react'

// Scroll down indicator component
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsVisible(scrollTop < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollDown = () => {
    const activitiesSection = document.getElementById('activities')
    if (activitiesSection) {
      activitiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div 
      className={`scroll-indicator ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleScrollDown}
      role="button"
      tabIndex={0}
      aria-label="Scroll down to see more content"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleScrollDown()
        }
      }}
    >
      <div className="scroll-text">Scroll to explore</div>
      <div className="scroll-arrow">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M7 10L12 15L17 10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default ScrollIndicator
