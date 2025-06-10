import React, { useState } from 'react'
import LionConstellation from './LionConstellation'
import NavigationMenu from './NavigationMenu'

const ProjectBook = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Titanic",
      image: "/images/titanic.png",
      technologies: ["PostgreSQL", "R", "Big Data"],
      description: "Ce projet s’inscrivait dans le cadre de notre initiation au Big Data. Après avoir sélectionné les données pertinentes en lien avec la problématique posée, nous avons procédé à leur extraction et à leur analyse. L’objectif était de replacer les résultats dans leur contexte afin de produire un rapport détaillé répondant de manière structurée à la question de départ.",
      teamSize: 2
    },
    {
      id: 2,
      title: "OpenFoodFact",
      image: "/images/food_fact.png", 
      technologies: ["PostgreSQL", "R", "Big Data"],
      description: "Dans le cadre de l’approfondissement de nos compétences en extraction et manipulation de données massives, nous avons travaillé sur une problématique précise portant sur des produits alimentaires, à partir de la base de données OpenFoodFacts, riche de plusieurs millions d’enregistrements. Ce projet nous a permis de développer une véritable expertise dans la sélection pertinente de données et leur exploitation statistique, en veillant à la rigueur des traitements effectués et à la clarté des visualisations utilisées pour la rédaction du rapport final.",
      teamSize: 2
    },
    {
      id: 3,
      title: "News Theme Attribution",
      image: "/images/news.png",
      technologies: ["Java", "Intelligence Artificielle", "Machine Learning"],
      description: "Dans le cadre de notre première approche de l’intelligence artificielle, nous avons réalisé un projet consistant à développer un algorithme basé sur un réseau de neurones. Ce modèle, utilisant l’apprentissage profond, avait pour objectif d’analyser automatiquement un texte présenté en entrée et de le classer dans la catégorie thématique appropriée, en fonction de son contenu.",
      teamSize: 2
    },
    {
      id: 4,
      title: "Jeu Faerun",
      image: "/images/faerun.png",
      technologies: ["Java", "Algorithmes", "Jeu de plateau"],
      description: "Dans le cadre de la validation de notre première année d’université ainsi que de nos acquis en programmation Java, nous avons eu pour projet de concevoir un jeu de plateau interactif en multijoueur. Ce jeu devait respecter un cahier des charges précis : il devait être modulable, c’est-à-dire capable de s’adapter dynamiquement au nombre de joueurs, et intégrer plusieurs algorithmes optimisés assurant les fonctionnalités essentielles telles que le lancement de la partie, le déplacement des pions, ou encore la capture de pièces adverses.",
      teamSize: 1
    },
    {
      id: 5,
      title: "IMB",
      image: "/images/imb.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Design"],
      description: "L’un des premiers projets réalisés durant ma formation fut la création d’un site web complet. Ce site devait adopter un design moderne, attractif pour un public jeune, tout en intégrant une dimension écologique. Après avoir sélectionné une entreprise cible, nous avons conçu un site vitrine en HTML, CSS et JavaScript, en respectant les contraintes fonctionnelles et esthétiques imposées. Ce projet nous a permis d’acquérir les bases du développement front-end ainsi que de la conception orientée utilisateur.",
      teamSize: 4
    },
    {
      id: 6,
      title: "Stud'Life",
      image: "/images/studlife.png",
      technologies: ["Java", "Application Desktop", "Gestion d'événements", "Leadership"],
      description: "Pour notre projet de fin de première année, nous avons eu la liberté de créer une application Java de notre choix, pour mettre en pratique ce que nous avions appris. En groupe de cinq, nous avons développé une application qui facilite la création, l’organisation et la gestion d’événements pour les associations étudiantes. Nous avons veillé à ce que l’application soit simple, légère et intuitive, pour que n’importe quelle association puisse l’adopter rapidement et l’utiliser facilement. Ce projet répond à un vrai besoin de simplification dans la gestion des événements associatifs, avec un bon potentiel pour être déployé largement.",
      teamSize: 5
    },
    {
      id: 7,
      title: "Cassiopea",
      image: "/images/cassiopea.png",
      technologies: ["Wazuh", "PostgreSQL", "PmWiki", "Zabbix", "Apache2", "Leadership"],
      description: "Durant ma deuxième année d'étude nous avions eu un projet de création et mise en place d'une infrastructure réseau. Lors de ce projet, j'ai eu l'occasion de pouvoir créer de zéro avec mes camarades un réseau complet avec de nombreux services (DNS, DHCP, PostgreSQL, Wiki) ainsi qu'une supervision du réseau (Zabbix, Wazuh).",
      teamSize: 5
    },
    {
      id: 8,
      title: "PhareAway",
      image: "/images/phareaway.png",
      technologies: ["TailwindCSS", "React", "SQLite", "NextJS", "Gestion de Projet", "Leadership", "Norme ISO"],
      description: "Pour nous permettre de mettre en pratique les connaissances apportées tout au long de notre deuxième année, nous avons formé des groupes de 6 personnes pour réaliser un projet pour promouvoir le patrimoine français. Ce projet nous a permis de développer nos compétences en gestion d'équipe et d'appliquer les normes ISO dans un contexte de développement web moderne.",
      teamSize: 6
    }
  ]

  const totalPages = projects.length + 2 // Cover + Summary + Projects

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToProject = (projectIndex) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentPage(projectIndex + 2) // +2 because cover and summary come first
      setIsAnimating(false)
    }, 300)
  }

  const handleNavigation = (section) => {
    if (onNavigate) {
      onNavigate(section)
    }
  }

  const renderCoverPage = () => (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-cyan-800/40 via-purple-700/40 to-purple-800/40 rounded-lg backdrop-blur-sm border border-cyan-400/30">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Mes Projets
        </h1>
        <p className="text-xl text-cyan-200 font-medium">
          Histoires de Développement
        </p>
      </div>
      
      <div className="mb-8">
        <LionConstellation />
      </div>
      
      <div className="text-center">
        <p className="text-sm mt-2 text-cyan-200">Cliquez pour tourner la page →</p>
      </div>
    </div>
  )

  const renderSummaryPage = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Left side - Project summary */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">Sommaire</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => goToProject(index)}
              className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-gradient-to-br hover:from-cyan-400/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30 hover:border-purple-400/50"
            >
              <h3 className="text-lg font-semibold text-blue-800">{project.title}</h3>
              <p className="text-sm text-black mt-2">
                {project.description.substring(0, 100)}...
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Description */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent mb-6">À Propos</h2>
        <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg backdrop-blur-sm p-6 border border-purple-400/30">
          <p className="text-black leading-relaxed mb-4">
            Bienvenue dans mon livre de projets ! Chaque page raconte l'histoire d'un projet que j'ai développé, 
            des défis rencontrés aux solutions trouvées.
          </p>
          <p className="text-black leading-relaxed mb-4">
            Vous trouverez ici un aperçu de mes compétences techniques et de ma progression en tant que développeur. 
            Chaque projet représente une étape importante de mon apprentissage.
          </p>
          <p className="text-black leading-relaxed">
            Naviguez à travers les pages pour découvrir les technologies utilisées, les fonctionnalités implémentées 
            et les leçons apprises lors de chaque développement.
          </p>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-lg border border-cyan-400/40">
            <h4 className="text-cyan-200 font-semibold mb-2">Navigation</h4>
            <p className="text-sm text-cyan-100/90">
              • Cliquez sur un projet dans le sommaire pour y accéder directement<br/>
              • Utilisez les flèches pour naviguer page par page<br/>
              • Chaque projet contient une image, les technologies et une description détaillée
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjectPage = (project) => (
    <div className="flex flex-col h-full space-y-6">
      {/* Project Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">{project.title}</h2>
      </div>
      
      {/* Project Image */}
      <div className="h-1/3 rounded-lg overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#374151"/>
                <text x="200" y="100" text-anchor="middle" fill="#9CA3AF" font-family="sans-serif" font-size="16">${project.title}</text>
                <rect x="150" y="120" width="100" height="60" rx="8" fill="#6B7280"/>
                <circle cx="170" cy="140" r="8" fill="#9CA3AF"/>
                <rect x="185" y="135" width="30" height="10" rx="2" fill="#9CA3AF"/>
                <rect x="185" y="150" width="45" height="6" rx="1" fill="#9CA3AF"/>
              </svg>
            `)}`
          }}
        />
      </div>

      {/* Technologies */}
      <div className="h-1/4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Technologies Utilisées</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium shadow-lg border border-cyan-400/30 hover:border-purple-400/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.teamSize && (
          <div className="flex items-center gap-2 text-blue-700">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span className="font-medium">Équipe de {project.teamSize} personne{project.teamSize > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="h-2/5">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent mb-4">Description</h3>
        <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg backdrop-blur-sm p-6 border border-cyan-400/30 h-full">
          <p className="text-black leading-relaxed font-medium">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white opacity-5 z-1"></div>
      <div className="absolute inset-0 bg-black opacity-70 z-2"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-cyan-300' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-300'
            } shadow-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Book Container */}
      <div className="relative z-[100] container mx-auto px-6 py-8 h-screen flex items-center justify-center">
        <div className="relative max-w-6xl w-full h-5/6 perspective-1000">
          
          {/* Book */}
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-2xl transform-style-preserve-3d z-[110]">
            
            {/* Page Content */}
            <div className={`absolute inset-4 transition-all duration-500 z-[120] ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              {currentPage === 0 && renderCoverPage()}
              {currentPage === 1 && renderSummaryPage()}
              {currentPage >= 2 && renderProjectPage(projects[currentPage - 2])}
            </div>

            {/* Page Navigation */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-[130]">
              {/* Previous Page */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isAnimating}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Page Indicator */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentPage ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gray-500'
                  }`}
                  />
                ))}
              </div>

              {/* Next Page */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1 || isAnimating}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Current Page Number */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm font-medium z-[130]">
              Page {currentPage + 1} / {totalPages}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="relative z-[9999]">
        <NavigationMenu 
          active="projet" 
          onNavigate={handleNavigation} 
        />
      </div>
    </div>
  )
}

export default ProjectBook 