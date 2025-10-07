import React, { useEffect, useRef } from 'react'

// Accomplishments counter section with animated numbers
const Accomplishments = () => {
  const counterRefs = useRef([])

  const accomplishments = [
    {
      id: 1,
      number: 6,
      label: "National Festivals",
      delay: 0
    },
    {
      id: 2,
      number: 17,
      label: "Workshops",
      delay: 0.1
    },
    {
      id: 3,
      number: 8,
      label: "Magazines",
      delay: 0.2
    }
  ]

  const animateCounter = (counter, target) => {
    const duration = 2000
    let start = null

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      counter.textContent = Math.floor(progress * target)
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        counter.textContent = target
      }
    }
    
    window.requestAnimationFrame(step)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'))
            animateCounter(entry.target, target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="accomplishments">
      <div className="container">
        <h2 className="section-title" data-reveal>
          An Overview of our<br />Legacy Of Excellence
        </h2>
        
        <div className="counter-grid">
          {accomplishments.map((accomplishment, index) => (
            <div 
              key={accomplishment.id}
              className="counter-item" 
              data-reveal
              style={{ transitionDelay: `${accomplishment.delay}s` }}
            >
              <div 
                className="number" 
                data-target={accomplishment.number}
                ref={(el) => (counterRefs.current[index] = el)}
              >
                0
              </div>
              <div className="label">
                {accomplishment.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accomplishments
