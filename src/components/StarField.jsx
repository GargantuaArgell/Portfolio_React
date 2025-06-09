import React, { useEffect, useState } from 'react'

const StarField = ({ density = 100, showConstellations = true, animated = true }) => {
  const [stars, setStars] = useState([])
  const [constellations, setConstellations] = useState([])

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < density; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: getRandomStarColor(),
          animationDelay: Math.random() * 5,
          animationDuration: Math.random() * 3 + 2,
          twinkleSpeed: Math.random() * 2 + 1
        })
      }
      setStars(newStars)
    }

    // Generate constellation patterns
    const generateConstellations = () => {
      if (!showConstellations) return []
      
      const patterns = [
        // Mini Leo constellation
        [
          { x: 15, y: 20 },
          { x: 25, y: 18 },
          { x: 35, y: 25 },
          { x: 45, y: 22 },
          { x: 40, y: 35 }
        ],
        // Mini Orion
        [
          { x: 70, y: 30 },
          { x: 75, y: 35 },
          { x: 80, y: 40 },
          { x: 72, y: 45 },
          { x: 78, y: 50 }
        ],
        // Mini Big Dipper
        [
          { x: 20, y: 70 },
          { x: 30, y: 75 },
          { x: 40, y: 72 },
          { x: 50, y: 68 },
          { x: 60, y: 70 },
          { x: 65, y: 65 },
          { x: 70, y: 62 }
        ],
        // Custom constellation
        [
          { x: 85, y: 15 },
          { x: 90, y: 20 },
          { x: 88, y: 25 },
          { x: 92, y: 30 }
        ]
      ]

      return patterns.map((pattern, index) => ({
        id: index,
        stars: pattern.map((star, starIndex) => ({
          ...star,
          id: `constellation-${index}-${starIndex}`,
          size: Math.random() * 2 + 2,
          color: getRandomStarColor()
        })),
        connections: pattern.map((_, i) => 
          i < pattern.length - 1 ? [i, i + 1] : null
        ).filter(Boolean)
      }))
    }

    generateStars()
    setConstellations(generateConstellations())
  }, [density, showConstellations])

  const getRandomStarColor = () => {
    const colors = [
      '#06b6d4', // cyan-500
      '#0891b2', // cyan-600
      '#0e7490', // cyan-700
      '#8b5cf6', // violet-500
      '#7c3aed', // violet-600
      '#6d28d9', // violet-700
      '#a855f7', // purple-500
      '#9333ea', // purple-600
      '#7e22ce', // purple-700
      '#ec4899', // pink-500
      '#d946ef', // fuchsia-500
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const StarComponent = ({ star, isConstellation = false }) => (
    <div
      key={star.id}
      className={`absolute rounded-full ${animated ? 'animate-pulse' : ''} ${
        isConstellation ? 'z-8' : 'z-7'
      }`}
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        backgroundColor: star.color,
        opacity: star.opacity,
        animationDelay: `${star.animationDelay}s`,
        animationDuration: `${star.animationDuration}s`,
        boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
        filter: `blur(${star.size * 0.1}px)`
      }}
    />
  )

  const ConstellationLine = ({ start, end, constellation }) => {
    const startStar = constellation.stars[start]
    const endStar = constellation.stars[end]
    
    const length = Math.sqrt(
      Math.pow(endStar.x - startStar.x, 2) + 
      Math.pow(endStar.y - startStar.y, 2)
    )
    
    const angle = Math.atan2(
      endStar.y - startStar.y, 
      endStar.x - startStar.x
    ) * 180 / Math.PI

    return (
      <div
                 className="absolute z-6 opacity-30"
        style={{
          left: `${startStar.x}%`,
          top: `${startStar.y}%`,
          width: `${length}%`,
          height: '1px',
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
          transformOrigin: '0 0',
          transform: `rotate(${angle}deg)`,
          filter: 'blur(0.5px)'
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-950/10 to-purple-950/10" />
      
      {/* Regular stars */}
      {stars.map(star => (
        <StarComponent key={star.id} star={star} />
      ))}

      {/* Constellation stars and lines */}
      {showConstellations && constellations.map(constellation => (
        <div key={constellation.id}>
          {/* Constellation lines */}
          {constellation.connections.map((connection, index) => (
            <ConstellationLine
              key={`line-${constellation.id}-${index}`}
              start={connection[0]}
              end={connection[1]}
              constellation={constellation}
            />
          ))}
          
          {/* Constellation stars */}
          {constellation.stars.map(star => (
            <StarComponent 
              key={star.id} 
              star={star} 
              isConstellation={true} 
            />
          ))}
        </div>
      ))}

      {/* Shooting stars */}
      {animated && (
        <>
          <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-300 rounded-full opacity-80 animate-ping" 
               style={{ animationDelay: '2s', animationDuration: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-ping" 
               style={{ animationDelay: '7s', animationDuration: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-ping" 
               style={{ animationDelay: '12s', animationDuration: '4s' }} />
        </>
      )}

      {/* Nebula effects */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-purple-600/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-cyan-600/5 rounded-full blur-xl" />
      <div className="absolute top-2/3 right-1/4 w-28 h-28 bg-pink-600/5 rounded-full blur-xl" />
    </div>
  )
}

export default StarField 