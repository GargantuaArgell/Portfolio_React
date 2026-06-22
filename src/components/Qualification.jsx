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
      period: "2026 +",
      description: "Aspirant à conjuguer expertise en développement logiciel et enjeux de cybersécurité, je souhaite mettre mes compétences au service de projets innovants, tout en m'investissant dans une veille technologique constante pour anticiper les défis numériques de demain.",
      skills: ["Programmation", "Leadership", "Innovation", "Veille Technologique"]
    },        {
      title: "Ecole d'ingénieur",
      institution: "IMT Atlantique",
      period: "Début aout 2026",
      description: "Afin de consolider mon socle technique acquis à l'IUT2 de Grenoble et lors de ma mobilité au Canada, j'ai intégré le cycle ingénieur de l'IMT Atlantique. Ce parcours en alternance représente une étape clé dans ma spécialisation en cybersécurité, me permettant d'allier exigence académique et immersion opérationnelle dans le milieu de l'enteprise.",
      skills: ["Gestion de projet", "CyberSécurité", "IA"]
    },
        {
      title: "Etude international : Canada",
      institution: "Université du Québec à Chicoutimi",
      period: "Aout 2025 - Mai 2026",
      description: "Dans le cadre de ma dernière année à l'IUT2 de Grenoble, j'ai consolidé mon cursus académique par une mobilité internationale au Canada. Cette expérience m'a permis d'appréhender de nouvelles méthodes de travail et d'enrichir mon profil technique dans un environnement académique différent.",
      skills: ["Python", "Unreal Engine", "Management", "Club universitaire", "Gestion de projet", "CyberSécurité", "IA"]
    },
    {
      title: "Stage Administration réseau chez Tivoly",
      institution: "Entreprise internationale",
      period: "Avril 2025 - Juin 2025",
      description: "Première expérience significative en administration réseau, marquée par la gestion de missions à haute criticité. J'ai notamment piloté la conception et le déploiement d’un bastion d'administration sécurisé, tout en concevant des outils d'automatisation (scripts) destinés à optimiser les processus opérationnels de l'organisation.",
      skills: ["Microsoft 365", "Bastion informatique", "Python", "PowerShell"]
    },
    {
      title: "BUT Informatique - Parcours Déploiement d'application Communicantes et Sécurisées",
      institution: "IUT2 de Grenoble",
      period: "2023 - Présent",
      description: "Formation technique approfondie couvrant l'ingénierie logicielle, la gestion des données, les architectures réseau et le pilotage de projet. Mon cursus a été rythmé par la réalisation de projets complexes en conditions réelles, exigeant rigueur méthodologique, travail collaboratif et conformité aux standards de livraison professionnels.",
      skills: ["Java", "Python", "SQL", "HTML/CSS", "JavaScript", "Gestion de projet", "C++"]
    },
    {
      title: "Baccalauréat Scientifique",
      institution: "Lycée Général",
      period: "2019 - 2023",
      description: "Parcours académique généraliste orienté vers les sciences mathématiques et numériques. Cette formation m'a permis d'acquérir les fondements logiques et la rigueur analytique indispensables à l'exercice des métiers de l'ingénierie informatique.",
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