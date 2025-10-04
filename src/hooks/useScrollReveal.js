import { useEffect } from 'react'

// Scroll reveal animations hook
export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    
    if (revealElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    revealElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}

// Parallax effects hook
export const useParallax = () => {
  useEffect(() => {
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.geo-shape, .floating-circle, .radial-pulse')
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1)
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
      
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

// Dynamic background intensity hook
export const useDynamicBackground = () => {
  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const intensity = Math.min(scrollPercent * 0.5, 0.3)
      
      const waveWrap = document.querySelector('.wave-wrap')
      if (waveWrap) {
        waveWrap.style.opacity = 0.15 + intensity
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          waveWrap.style.opacity = 0.15
        }, 150)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])
}
