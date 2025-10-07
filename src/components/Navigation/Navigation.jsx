import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

// Navigation component with mobile menu
const Navigation = () => {
  const { toggleTheme, getThemeIcon, isLight } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.classList.toggle('no-scroll')
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('no-scroll')
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMobileMenu()
  }

  return (
    <>
      <nav className="nav">
        <div className="inner">
          {/* Brand Logo and Name */}
          <a href="#" className="brand">
            <img 
              src={(import.meta.env.BASE_URL || '/') + (isLight ? "IELC-logo-black.svg" : "IELC-logo.svg")} 
              alt="IELC Logo" 
              className="header-logo-img"
            />
            <span className="brand-text">
              Ideal English Language Club
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links" id="nav-links">
            <div className="nav-buttons">
              <a 
                className="btn ghost" 
                href="#activities"
                onClick={(e) => handleSmoothScroll(e, '#activities')}
              >
                Activities
              </a>
              <a 
                className="btn ghost" 
                href="#journey"
                onClick={(e) => handleSmoothScroll(e, '#journey')}
              >
                Journey
              </a>
              <a 
                className="btn ghost" 
                href="#links"
                onClick={(e) => handleSmoothScroll(e, '#links')}
              >
                Links
              </a>
              <a 
                className="btn ghost" 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact
              </a>
            </div>

            {/* Theme Toggle */}
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle light/dark mode"
            >
              {getThemeIcon()}
            </button>

            {/* Visual Divider */}
            <div className="nav-divider"></div>

            {/* Social Media Links */}
            <div className="social-links">
              <a 
                href="https://instagram.com/ideal_english_language_club" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/IdealEnglishLanguageClub" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="mailto:info.ielc2017@gmail.com" 
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <button 
            className="menu-toggle" 
            aria-label="Open menu" 
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      <div 
        id="mobile-menu" 
        className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}
      >
        <button 
          className="close-menu-btn" 
          aria-label="Close menu"
          onClick={closeMobileMenu}
        >
          &times;
        </button>
        
        <div className="mobile-nav-section">
          <h3 className="mobile-section-title">Navigation</h3>
          <div className="mobile-nav-buttons">
            <a 
              className="btn ghost" 
              href="#activities"
              onClick={(e) => handleSmoothScroll(e, '#activities')}
            >
              Activities
            </a>
            <a 
              className="btn ghost" 
              href="#journey"
              onClick={(e) => handleSmoothScroll(e, '#journey')}
            >
              Journey
            </a>
            <a 
              className="btn ghost" 
              href="#links"
              onClick={(e) => handleSmoothScroll(e, '#links')}
            >
              Links
            </a>
            <a 
              className="btn cta" 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mobile-social-section">
          <h3 className="mobile-section-title">Settings</h3>
          <button 
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle light/dark mode"
          >
            {getThemeIcon()}
            <span className="theme-toggle-text">Switch to {isLight ? "Dark" : "Light"} Mode</span>
          </button>
          
          <h3 className="mobile-section-title">Connect</h3>
          <div className="social-links">
            <a 
              href="https://instagram.com/ideal_english_language_club" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/IdealEnglishLanguageClub" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="mailto:info.ielc2017@gmail.com" 
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
