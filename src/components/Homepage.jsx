import React, { useState } from 'react'
import SocialMediaButtons from './SocialMediaButtons'
import NavigationMenu from './NavigationMenu'

const Homepage = ({ onNavigate }) => {
  const [currentSection, setCurrentSection] = useState('profil')

  const handleCVDownload = () => {
    // Open the CV file from the images folder
    window.open('/images/Curriculum-Vitae-GRANDET-FELIX.pdf', '_blank')
  }

  const handleNavigation = (section) => {
    setCurrentSection(section)
    if (onNavigate) {
      onNavigate(section)
    }
    console.log(`Navigating to: ${section}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white opacity-5 z-1"></div>
      <div className="absolute inset-0 bg-black opacity-50 z-2"></div>
      
      {/* Header */}
      <header className="relative z-3 text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Profil
        </h1>
      </header>

      {/* Main Content */}
      <main className="relative z-3 container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          
          {/* Profile Section */}
          <section className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bienvenue,
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Je m'appelle <span className="text-cyan-400 font-semibold">Félix GRANDET</span>, 
              je suis en étude d'informatique spécialisé back-end en première année basé sur Grenoble.
              Curieux de nature, je m'intéresse à toute sorte de choses comme le sport, l'économie ou les nouvelles technologies.
            </p>

            {/* CV Button */}
            <button 
              onClick={handleCVDownload}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              {/* Sparkle Animation */}
              <svg 
                height="24" 
                width="24" 
                fill="#FFFFFF" 
                viewBox="0 0 24 24" 
                className="sparkle transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              
              <span className="relative z-10">Curriculum Vitae</span>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </section>

          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="/images/profil.jpg" 
                alt="Félix Grandet" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTlBM0FFIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI2NHB4Ij5GRzwvdGV4dD4KPHN2Zz4K'
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Menu */}
      <NavigationMenu 
        active={currentSection} 
        onNavigate={handleNavigation} 
      />

      {/* Social Media Buttons */}
      <SocialMediaButtons />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  )
}

export default Homepage 