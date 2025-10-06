import React, { createContext, useContext, useState, useEffect } from 'react'

// Theme Context
const ThemeContext = createContext()

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('ielc-theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';
  });

  // Update document class and save to localStorage when theme changes
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('ielc-theme', theme)
  }, [theme])

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  // Get theme icon based on current theme
  const getThemeIcon = () => {
    if (theme === 'dark') {
      // Sun icon for dark mode (to switch to light)
      return (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="2"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    } else {
      // Moon icon for light mode (to switch to dark)
      return (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    getThemeIcon
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext
