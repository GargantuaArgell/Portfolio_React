import React, { useState } from 'react'

const Leaf = ({ 
  title, 
  institution, 
  period, 
  description, 
  skills = [], 
  position = 'left',
  delay = 0,
  isActive = false
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const positionClasses = position === 'left' 
    ? 'md:flex-row' 
    : 'md:flex-row-reverse'

  return (
    <div 
      className={`flex flex-col ${positionClasses} items-center gap-6 mb-12 transform transition-all duration-700 ease-out ${
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Connection Line to Tree */}
      <div className="hidden md:block relative">
        <div className={`w-16 h-0.5 bg-gradient-to-r ${
          position === 'left' 
            ? 'from-purple-500 to-transparent' 
            : 'from-transparent to-purple-500'
        } relative`}>
          {/* Circuit-like connectors */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
          <div className={`absolute top-0 ${position === 'left' ? 'right-0' : 'left-0'} w-2 h-2 bg-purple-500 rounded-full transform -translate-y-1/2`}></div>
        </div>
      </div>

      {/* Leaf Content */}
      <div 
        className={`relative group cursor-pointer ${position === 'left' ? 'md:ml-8' : 'md:mr-8'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Leaf Shape Container */}
        <div className={`relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 
          backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 min-w-80 max-w-md
          transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/50
          ${isHovered ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg shadow-black/50'}`}>
          
          {/* Leaf Vein Pattern (IT Circuit Style) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 320 200" className="w-full h-full">
              <defs>
                <linearGradient id="veinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              
              {/* Main vein (central line) */}
              <path d="M 160 20 Q 160 60 160 100 Q 160 140 160 180" 
                stroke="url(#veinGradient)" strokeWidth="2" fill="none" />
              
              {/* Branch veins */}
              <path d="M 160 40 Q 120 50 100 70" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              <path d="M 160 40 Q 200 50 220 70" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              <path d="M 160 80 Q 130 90 110 110" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              <path d="M 160 80 Q 190 90 210 110" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              <path d="M 160 120 Q 140 130 120 150" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              <path d="M 160 120 Q 180 130 200 150" 
                stroke="url(#veinGradient)" strokeWidth="1" fill="none" />
              
              {/* Circuit nodes */}
              <circle cx="160" cy="40" r="2" fill="#06b6d4" />
              <circle cx="160" cy="80" r="2" fill="#a855f7" />
              <circle cx="160" cy="120" r="2" fill="#06b6d4" />
              <circle cx="120" cy="50" r="1.5" fill="#8b5cf6" />
              <circle cx="200" cy="50" r="1.5" fill="#8b5cf6" />
            </svg>
          </div>

          {/* Header */}
          <div className="relative z-10 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {title}
              </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-purple-300 font-medium">{institution}</p>
              <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {period}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
            {description}
          </p>

          {/* Skills Tags */}
          {skills.length > 0 && (
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 
                      text-white rounded-full border border-purple-400/30 backdrop-blur-sm
                      hover:from-purple-500/60 hover:to-cyan-500/60 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hover Effect - Glowing Border */}
          <div className={`absolute inset-0 rounded-2xl border-2 border-transparent 
            bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 
            group-hover:opacity-50 transition-opacity duration-300 -z-10`}>
          </div>
        </div>

        {/* Data Flow Animation */}
        {isHovered && (
          <div className="absolute -top-2 -right-2 w-4 h-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Leaf 