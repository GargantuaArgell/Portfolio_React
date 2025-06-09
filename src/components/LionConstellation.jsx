import React from 'react'

const LionConstellation = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg 
        width="300" 
        height="250" 
        viewBox="0 0 300 250" 
        className="animate-pulse"
      >
        <defs>
          <linearGradient id="lionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          
          <filter id="lionGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Lion constellation stars */}
        {/* Head/Mane */}
        <circle cx="150" cy="60" r="3" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="120" cy="50" r="2.5" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="180" cy="50" r="2.5" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="100" cy="70" r="2" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        <circle cx="200" cy="70" r="2" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>
        
        {/* Body */}
        <circle cx="150" cy="120" r="3.5" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="2.5s" />
        </circle>
        <circle cx="120" cy="140" r="2.8" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="180" cy="140" r="2.8" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.8s" />
        </circle>
        
        {/* Legs */}
        <circle cx="130" cy="180" r="2.2" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.3s" />
        </circle>
        <circle cx="170" cy="180" r="2.2" fill="url(#lionGradient)" filter="url(#lionGradient)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.8s" />
        </circle>
        <circle cx="125" cy="210" r="2" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="2.3s" />
        </circle>
        <circle cx="175" cy="210" r="2" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        
        {/* Tail */}
        <circle cx="220" cy="160" r="1.8" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.1s" />
        </circle>
        <circle cx="240" cy="140" r="1.5" fill="url(#lionGradient)" filter="url(#lionGlow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="1.6s" />
        </circle>
        
        {/* Constellation lines */}
        {/* Head connections */}
        <line x1="120" y1="50" x2="150" y2="60" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="150" y1="60" x2="180" y2="50" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </line>
        <line x1="100" y1="70" x2="120" y2="50" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1s" />
        </line>
        <line x1="180" y1="50" x2="200" y2="70" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </line>
        
        {/* Body connections */}
        <line x1="150" y1="60" x2="150" y2="120" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="2s" />
        </line>
        <line x1="150" y1="120" x2="120" y2="140" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="2.5s" />
        </line>
        <line x1="150" y1="120" x2="180" y2="140" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.3s" />
        </line>
        
        {/* Leg connections */}
        <line x1="120" y1="140" x2="130" y2="180" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
        </line>
        <line x1="180" y1="140" x2="170" y2="180" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.3s" />
        </line>
        <line x1="130" y1="180" x2="125" y2="210" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.8s" />
        </line>
        <line x1="170" y1="180" x2="175" y2="210" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="2.3s" />
        </line>
        
        {/* Tail connections */}
        <line x1="180" y1="140" x2="220" y2="160" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="0.6s" />
        </line>
        <line x1="220" y1="160" x2="240" y2="140" stroke="url(#lionGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.1s" />
        </line>
      </svg>
    </div>
  )
}

export default LionConstellation 