import React, { useState, useEffect } from 'react'
import Leaf from './Leaf'

const TreeOfLife = ({ qualifications = [] }) => {
  const [visibleLeaves, setVisibleLeaves] = useState(new Set())
  const [treeLoaded, setTreeLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Animate tree trunk first, then leaves one by one
    const timer = setTimeout(() => {
      setTreeLoaded(true)
      
      // Reveal leaves progressively
      qualifications.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLeaves(prev => new Set([...prev, index]))
        }, 500 + index * 300)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [qualifications])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden scrollbar-hide">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="border border-purple-500/20"></div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Arbre de Qualification
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mon parcours éducatif représenté comme un arbre technologique en croissance constante
          </p>
        </div>

        {/* Tree Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Tree Trunk (Central Timeline) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden">
            {/* Main trunk */}
            <div className={`w-full bg-gradient-to-b from-purple-600 via-cyan-500 to-purple-800 
              transition-all duration-1000 ease-out ${
                treeLoaded ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}>
            </div>
            
            {/* Trunk segments with glow effect */}
            <div className="absolute inset-0 w-full bg-gradient-to-b from-purple-400/50 via-cyan-400/50 to-purple-600/50 blur-sm"></div>
            
            {/* Data flow animation along trunk */}
            {treeLoaded && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2">
                <div className="w-full h-full bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            )}
          </div>

          {/* Tree Branches & Leaves */}
          <div className="relative">
            {qualifications.map((qualification, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleLeaves.has(index)
              
              return (
                <div key={index} className="relative flex justify-center">
                  {/* Branch Connection Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 z-20">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 
                      border-2 border-white shadow-lg transition-all duration-500 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-sm"></div>
                    </div>
                  </div>

                  {/* Leaf Component */}
                  <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={isLeft ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}>
                      <Leaf
                        {...qualification}
                        position={isLeft ? 'left' : 'right'}
                        delay={index * 200}
                        isActive={isVisible}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tree Roots (Bottom Effect) */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 
            transition-all duration-1000 delay-1000 ${
              treeLoaded ? 'opacity-30' : 'opacity-0'
            }`}>
            <svg viewBox="0 0 256 128" className="w-full h-full">
              <defs>
                <radialGradient id="rootGradient">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              
              {/* Root network */}
              <path d="M 128 0 Q 100 30 80 60 Q 60 80 40 100" 
                stroke="url(#rootGradient)" strokeWidth="2" fill="none" />
              <path d="M 128 0 Q 156 30 176 60 Q 196 80 216 100" 
                stroke="url(#rootGradient)" strokeWidth="2" fill="none" />
              <path d="M 128 0 Q 120 40 100 80 Q 80 100 60 120" 
                stroke="url(#rootGradient)" strokeWidth="1.5" fill="none" />
              <path d="M 128 0 Q 136 40 156 80 Q 176 100 196 120" 
                stroke="url(#rootGradient)" strokeWidth="1.5" fill="none" />
              
              {/* Root nodes */}
              <circle cx="128" cy="0" r="3" fill="#8b5cf6" opacity="0.8" />
              <circle cx="100" cy="30" r="2" fill="#06b6d4" opacity="0.6" />
              <circle cx="156" cy="30" r="2" fill="#06b6d4" opacity="0.6" />
            </svg>
          </div>

          {/* Growth Progress Indicator */}
          <div className="fixed bottom-8 right-8 z-30">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {/* Glowing border effect like homepage picture */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Main indicator */}
              <div className="relative bg-gray-800/90 backdrop-blur-md rounded-full p-4 border border-purple-500/30 transition-transform duration-300 group-hover:scale-105 shadow-2xl">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Croissance</div>
                  <div className="text-lg font-bold text-cyan-400">
                    {/* Barre de progression réaliste 
                    {Math.round((visibleLeaves.size / qualifications.length) * 100)}%
                    */}
                    65%
                  </div>
                  <div className="w-12 h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${(visibleLeaves.size / qualifications.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute bottom-full right-0 mb-3 bg-black/90 text-white px-4 py-2 rounded-lg backdrop-blur-sm whitespace-nowrap z-50 shadow-xl border border-purple-500/30">
                  <div className="text-sm font-medium">
                    Taux d'objectifs personnels atteint
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreeOfLife 