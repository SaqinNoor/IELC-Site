import React, { useEffect } from 'react'

// Mouse-following spotlight effect
const Spotlight = () => {
  useEffect(() => {
    let mouseX = 50
    let mouseY = 50
    
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 100
      mouseY = (e.clientY / window.innerHeight) * 100
      
      const spotlight = document.getElementById('spotlight')
      if (spotlight) {
        spotlight.style.setProperty('--mouse-x', mouseX + '%')
        spotlight.style.setProperty('--mouse-y', mouseY + '%')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      className="spotlight" 
      id="spotlight"
      aria-hidden="true"
    />
  )
}

export default Spotlight
