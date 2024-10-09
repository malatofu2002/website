import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import BackgroundShapes from './components/BackgroundShapes'
import MyStory from './pages/MyStory/MyStory'
import MyResearch from './pages/Research/Research'
import Materials from './pages/Materials/Materials'
import Podcasts from './pages/Materials/Podcasts'
import Interventions from './pages/Materials/Interventions'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.scrollTo === 'contact') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

function App() {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = themeName
  }, [themeName])

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <div className="app-wrapper">
          <BackgroundShapes />
          <div className="main-content">
            <Header />
            <ScrollManager />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<MyStory />} />
                <Route path="/experience" element={<MyResearch />} />
                <Route path="/materials" element={<Materials />} />
                <Route path="/materials/podcasts" element={<Podcasts />} />
                <Route path="/materials/interventions" element={<Interventions />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App