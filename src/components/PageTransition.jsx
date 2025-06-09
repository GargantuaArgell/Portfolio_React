import React, { useState, useEffect } from 'react'

const PageTransition = ({ 
  children, 
  isActive, 
  transitionDuration = 500,
  className = "" 
}) => {
  const [displayState, setDisplayState] = useState(isActive ? 'active' : 'hidden')
  const [opacity, setOpacity] = useState(isActive ? 1 : 0)

  useEffect(() => {
    if (isActive) {
      // Page is becoming active - fade in
      if (displayState === 'hidden') {
        setDisplayState('entering')
        setOpacity(0)
        
        // Small delay to ensure state is set
        const enterTimeout = setTimeout(() => {
          setOpacity(1)
          setDisplayState('active') // Set to active immediately for interactions
        }, 10)
        
        return () => clearTimeout(enterTimeout)
      }
    } else {
      // Page is becoming inactive - fade out
      if (displayState === 'active' || displayState === 'entering') {
        setDisplayState('exiting')
        setOpacity(0)
        
        // After fade out completes, hide the component
        const exitTimeout = setTimeout(() => {
          setDisplayState('hidden')
        }, transitionDuration)
        
        return () => clearTimeout(exitTimeout)
      }
    }
  }, [isActive, transitionDuration])

  // Don't render if hidden
  if (displayState === 'hidden') {
    return null
  }

  return (
    <div
      className={`transition-opacity ease-out bg-black ${className}`}
      style={{
        opacity,
        transitionDuration: `${transitionDuration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        pointerEvents: (displayState === 'active' || displayState === 'entering') ? 'auto' : 'none'
      }}
    >
      {children}
    </div>
  )
}

// Higher-order component for easier usage
export const withPageTransition = (WrappedComponent, transitionDuration = 500) => {
  return ({ isActive, ...props }) => (
    <PageTransition 
      isActive={isActive} 
      transitionDuration={transitionDuration}
      className="absolute inset-0"
    >
      <WrappedComponent {...props} />
    </PageTransition>
  )
}

// Main transition manager component
export const TransitionManager = ({ 
  currentPage, 
  pages, 
  transitionDuration = 500,
  className = "relative w-full h-full"
}) => {
  const [transitioning, setTransitioning] = useState(false)
  const [previousPage, setPreviousPage] = useState(currentPage)

  useEffect(() => {
    if (currentPage !== previousPage) {
      setTransitioning(true)
      
      // Wait for transition to complete
      const transitionTimeout = setTimeout(() => {
        setPreviousPage(currentPage)
        setTransitioning(false)
      }, transitionDuration)
      
      return () => clearTimeout(transitionTimeout)
    }
  }, [currentPage, previousPage, transitionDuration])

  return (
    <div className={className}>
      {Object.entries(pages).map(([pageKey, PageComponent]) => (
        <PageTransition
          key={pageKey}
          isActive={pageKey === currentPage}
          transitionDuration={transitionDuration}
          className="absolute inset-0 z-10"
        >
          <PageComponent />
        </PageTransition>
      ))}
    </div>
  )
}

export default PageTransition 