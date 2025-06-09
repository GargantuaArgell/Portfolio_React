import React, { useState, useEffect } from 'react'
import TreeOfLife from './TreeOfLife'
import NavigationMenu from './NavigationMenu'

const Qualification = ({ onNavigate }) => {
  const [currentSection, setCurrentSection] = useState('qualification')

  const handleNavigation = (section) => {
    setCurrentSection(section)
    if (onNavigate) {
      onNavigate(section)
    }
    console.log(`Navigating to: ${section}`)
  }

  // Hide scrollbar on qualification page only
  useEffect(() => {
    document.documentElement.classList.add('scrollbar-hide')
    document.body.classList.add('scrollbar-hide')
    
    return () => {
      // Restore scrollbar when leaving the page
      document.documentElement.classList.remove('scrollbar-hide')
      document.body.classList.remove('scrollbar-hide')
    }
  }, [])
  // Educational journey data - chronologically ordered from newest to oldest (tree grows from past to present)
  const qualifications = [
    {
      title: "Objectifs Futurs",
      institution: "Évolution Professionnelle",
      period: "2025+",
      description: "Continuer à évoluer dans le développement informatique ainsi qu'en CyberSécurité, découvrir toujours de technologie et contribuer à des projets innovants.",
      skills: ["Programmation", "Leadership", "Innovation", "Veille Technologique"]
    },
    {
      title: "Stage Administration réseau chez Tivoly",
      institution: "Entreprise Locale",
      period: "Avril 2025 - Juin 2025",
      description: "Première expérience professionnelle en administration réseau. Création et mise en place d'un Bastion informatique ainsi que de script informatique pour optimiser certaines fonctions de l'entreprise.",
      skills: ["Microsoft 365", "Bastion informatique", "Teleport", "Python", "PowerShell"]
    },
    {
      title: "DUT Informatique",
      institution: "IUT de Grenoble",
      period: "2021-2023",
      description: "Formation technique approfondie en développement logiciel, bases de données, réseaux et gestion de projet. Premier contact avec le monde professionnel via des stages.",
      skills: ["Java", "Python", "SQL", "HTML/CSS", "JavaScript", "Gestion de projet"]
    },
    {
      title: "Baccalauréat Scientifique",
      institution: "Lycée Général",
      period: "2018-2021",
      description: "Formation générale avec spécialisation en mathématiques et sciences numériques. Développement des bases logiques et analytiques essentielles pour l'informatique.",
      skills: ["Mathématiques", "Physique", "Logique", "Algorithmique de base"]
    }
  ]

  return (
    <div className="min-h-screen relative">
      <TreeOfLife qualifications={qualifications} />
      
      {/* Navigation Menu */}
      <NavigationMenu 
        active={currentSection} 
        onNavigate={handleNavigation} 
      />
    </div>
  )
}

export default Qualification 