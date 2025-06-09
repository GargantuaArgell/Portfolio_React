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
      period: "2024+",
      description: "Continuer à évoluer dans le développement web moderne, approfondir les connaissances en architecture logicielle et contribuer à des projets innovants.",
      skills: ["Architecture", "Leadership", "Innovation", "Veille Technologique"]
    },
    {
      title: "Projet Portfolio",
      institution: "Formation Continue",
      period: "2024-Présent",
      description: "Développement de ce portfolio comme démonstration de compétences acquises. Utilisation de technologies modernes et bonnes pratiques de développement.",
      skills: ["React", "TailwindCSS", "Vite", "Component Architecture", "Responsive Design"]
    },
    {
      title: "Licence Pro Dev Web",
      institution: "IUT 2 Grenoble",
      period: "2023-2024",
      description: "Spécialisation en développement web avancé et technologies modernes. Projets d'envergure avec des clients réels et méthodologies professionnelles.",
      skills: ["React", "Vue.js", "TypeScript", "Docker", "DevOps", "UX/UI Design"]
    },
    {
      title: "Stage Développeur Web",
      institution: "Entreprise Locale",
      period: "Été 2022",
      description: "Première expérience professionnelle en développement web. Création d'applications front-end modernes et apprentissage des méthodologies agiles.",
      skills: ["React", "Node.js", "MongoDB", "Git", "Agile/Scrum"]
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