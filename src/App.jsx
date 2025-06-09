import React, { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import Contact from './components/Contact'
import Qualification from './components/Qualification'
import ProjectBook from './components/ProjectBook'
import Preloader from './components/Preloader'
import StarField from './components/StarField'
import { TransitionManager } from './components/PageTransition'

function App() {
  const [loading, setLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  const [currentPage, setCurrentPage] = useState('profil')

  useEffect(() => {
    // Ensure preloader shows for at least 2 seconds
    const minLoadTime = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Wait for the page to fully load
    const handleLoad = () => {
      // If minimum time hasn't passed yet, wait for it
      if (loading) {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } else {
        setLoading(false)
      }
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(minLoadTime)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      // Start fade out after loading is complete
      const fadeOutTimer = setTimeout(() => {
        setShowPreloader(false)
      }, 500) // Delay to ensure smooth transition

      return () => clearTimeout(fadeOutTimer)
    }
  }, [loading])

  return (
    <div className="App">
      {/* Global Star Field - appears on all pages */}
      {!showPreloader && <StarField density={80} showConstellations={true} animated={true} />}
      
      {/* Preloader with fade transition */}
      <div className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${
        showPreloader ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <Preloader 
          isVisible={showPreloader} 
          onComplete={() => setShowPreloader(false)} 
        />
      </div>
      
      {/* Main content with fade in and page transitions */}
      <div className={`transition-all duration-1000 ease-in-out ${
        showPreloader ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <TransitionManager
          currentPage={currentPage}
          transitionDuration={800}
          className="relative w-full h-screen"
          pages={{
            'profil': () => <Homepage onNavigate={setCurrentPage} />,
            'projet': () => <ProjectBook onNavigate={setCurrentPage} />,
            'qualification': () => <Qualification onNavigate={setCurrentPage} />,
            'contact': () => <Contact onNavigate={setCurrentPage} />
          }}
        />
      </div>
    </div>
  )
}

export default App 