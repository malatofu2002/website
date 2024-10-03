import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem('themeName')
    if (storedTheme) {
      return storedTheme
    }
    // If no theme in localStorage, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    // Default to light theme
    return 'light'
  })

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light')
      }
    }
    darkMediaQuery.addEventListener('change', handleChange)
    return () => darkMediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    localStorage.setItem('themeName', themeName)
    document.body.className = themeName
  }, [themeName])

  const toggleTheme = () => {
    setThemeName(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
