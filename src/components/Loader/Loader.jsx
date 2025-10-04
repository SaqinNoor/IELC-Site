import React, { useState, useEffect } from 'react'

// Loading screen component
const Loader = () => {
  const [isVisible, setIsVisible] = useState(true)
  
  // Get theme from localStorage directly since ThemeProvider might not be ready
  const savedTheme = localStorage.getItem('ielc-theme') || 'dark'
  const isLight = savedTheme === 'light'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      id="loader" 
      className="loader"
      aria-hidden="true"
      style={{
        transition: 'opacity 0.6s ease',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="loader-logo">
        <img 
          src={isLight ? "/IELC-logo-black.svg" : "/IELC-logo.svg"} 
          alt="IELC Logo" 
          className="loader-logo-img"
        />
      </div>
    </div>
  )
}

export default Loader
