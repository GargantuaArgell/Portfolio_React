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
      period: "2025 +",
      description: "Poursuivre mon développement dans les domaines du développement informatique et de la cybersécurité tout en découvrant de nouvelles technologies et contribuer à des projets innovants.",
      skills: ["Programmation", "Leadership", "Innovation", "Veille Technologique"]
    },
    {
      title: "Stage Administration réseau chez Tivoly",
      institution: "Entreprise internationale",
      period: "Avril 2025 - Juin 2025",
      description: "Première expérience en administration réseau. Réalisation de missions sensibles, incluant la création et la mise en place d’un Bastion informatique, ainsi que le développement de scripts d’automatisation pour optimiser les processus internes de l’entreprise.",
      skills: ["Microsoft 365", "Bastion informatique", "Python", "PowerShell"]
    },
    {
      title: "BUT Informatique - Parcours Déploiement d'application Communicantes et Sécurisées",
      institution: "IUT2 de Grenoble",
      period: "2023 - Présent",
      description: "Formation technique complète en développement logiciel, bases de données, réseaux et gestion de projet. Nombreux projets réalisés en conditions simulées, avec un encadrement régulier et des livrables professionnels.",
      skills: ["Java", "Python", "SQL", "HTML/CSS", "JavaScript", "Gestion de projet", "C++"]
    },
    {
      title: "Baccalauréat Scientifique",
      institution: "Lycée Général",
      period: "2019 - 2023",
      description: "Formation généraliste avec spécialisation en mathématiques et sciences numériques. Acquisition des fondements logiques et analytiques nécessaires à la pratique de l’informatique.",
      skills: ["Mathématiques", "Sciences Numériques", "Logique", "Algorithmique de base"]
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