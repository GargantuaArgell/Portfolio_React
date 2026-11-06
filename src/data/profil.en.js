// Traduction anglaise de profil.js. Les slugs, images et liens restent dans profil.js.

export const personneEn = {
  ville: 'Brest, France',
  poste: 'Smart Grid Project Manager',
  accroche: 'Engineering student at IMT Atlantique, apprentice at Enedis Labs',
  statut: 'Apprentice at Enedis Labs',
  bio: [
    "I am an engineering student at IMT Atlantique, on the Brest campus, and an apprentice at Enedis Labs as a Smart Grid Project Manager. My academic and professional background centres on back-end development and cybersecurity.",
    'My interest in sectors with complex challenges (economics, aerospace, AI, blockchain) shapes my analytical mindset. This rigour helps me quickly understand varied environments and become operational faster.',
  ],
  nft: {
    titre: 'My NFT from the “Little Nightmare” collection',
    texte: 'A digital artwork whose ownership is recorded on a blockchain through NFT technology.',
    alt: 'Profile illustration: Félix Grandet’s NFT from the Little Nightmare collection',
  },
}

export const preuvesEn = [
  { titre: 'Enedis Labs', detail: 'Smart grid apprenticeship', lien: '/parcours' },
  { titre: 'Secure bastion', detail: 'Internship at Tivoly', lien: '/projets/bastion-tivoly' },
  { titre: '2nd place', detail: '48-hour Wonderjam', lien: '/projets/kraken-redemption' },
  { titre: 'UQAC exchange', detail: 'Canada, 2025-2026', lien: '/parcours' },
]

export const categoriesEn = {
  Cybersécurité: 'Cybersecurity',
  Réseau: 'Networking',
  IA: 'AI',
  'Jeu vidéo': 'Video games',
  Web: 'Web',
  Logiciel: 'Software',
  Données: 'Data',
  Management: 'Management',
}

export const technologiesEn = {
  'Bastion informatique': 'Bastion host',
  Cryptographie: 'Cryptography',
  "Traitement d'image": 'Image processing',
  IA: 'AI',
  Algorithmique: 'Algorithms',
  Algorithmes: 'Algorithms',
  'Gestion de projet': 'Project management',
  'Normes ISO': 'ISO standards',
  'Application desktop': 'Desktop application',
  "Gestion d'événements": 'Event management',
  'Jeu de plateau': 'Board game',
  'Intelligence artificielle': 'Artificial intelligence',
  'Suite Microsoft': 'Microsoft Office',
}

export const projetsEn = {
  'bastion-tivoly': {
    titre: 'Administration bastion',
    contexte: 'Internship at Tivoly, April to June 2025',
    resume: 'Design and deployment of a secure administration bastion, with automation scripts.',
    description: 'My first significant experience in network administration, involving highly critical assignments. I led the design and deployment of a secure administration bastion and built automation tools (scripts) to streamline the organisation’s operational processes.',
  },
  cryptbox: {
    resume: 'File and directory encryption, with integrity verification.',
    description: 'To put our knowledge of encryption and application security into practice, I developed an application for securely encrypting and decrypting files and directories. Built in Python, it implements critical cryptographic functions to guarantee the integrity and confidentiality of files. As the sole developer, I integrated the AES algorithm for symmetric encryption and the HMAC mechanism to authenticate messages and detect file corruption. This work strengthened my skills in byte stream handling and cryptographic key management.',
  },
  cassiopea: {
    resume: 'A complete network infrastructure and monitoring, built from scratch by a team of five.',
    description: 'During my second year of study, we had a project to create and deploy a network infrastructure. With my classmates, I built a complete network from scratch with numerous services (DNS, DHCP, PostgreSQL, wiki), along with network monitoring (Zabbix, Wazuh).',
  },
  steganographie: {
    titre: 'Steganography',
    resume: 'Messages hidden in images through their least significant bits.',
    description: 'This project was designed to deepen my understanding of how data can be concealed inside digital files. Using Python, I developed a solution that encodes confidential messages in images without altering their appearance, by manipulating the least significant bits (LSB). This gave me hands-on practice with binary manipulation, file structure analysis and the fundamentals of steganography.',
  },
  'kraken-redemption': {
    resume: 'A video game created in 48 hours, second place at the Wonderjam.',
    description: 'Developed during a 48-hour Wonderjam in which my team took second place, this video game project tested our responsiveness and our ability to design a working prototype under time pressure. In a team of four developers, I took part in implementing the game mechanics in C++ with Unreal Engine. The experience required close coordination and rigorous project lifecycle management, from designing the core mechanics to optimising assets. It strengthened my command of game engine software architecture and collaborative version control.',
  },
  'iario-kart': {
    resume: 'A comparison of pathfinding algorithms in procedurally generated mazes.',
    description: 'IArio Kart is a simulation environment designed to compare the efficiency of various pathfinding algorithms in procedurally generated mazes. As the lead for algorithmic logic, I programmed in C++ the navigation systems that allow agents to solve mazes autonomously. We kept in constant communication within the team to ensure consistent code, managed with Perforce. The project produced a factual analysis of the algorithms’ complexity and performance.',
  },
  'shooter-3d': {
    titre: '3D Shooter',
    resume: 'Combat between AI teams, with behaviour trees and navigation.',
    description: 'The goal of this project was to design a combat system between two teams: one made up of artificial intelligences, the other of an allied AI and the player. The work required rigorous coordination through the Perforce version control tool. As the lead for logic and AI within our pair, I implemented all the behaviour trees, agent navigation and shooting systems. This validated advanced logic skills and my command of Unreal Engine, while keeping everything in sync with my teammate’s visual assets and interface.',
  },
  'pac-man': {
    resume: 'Learning Unreal Engine and programming two types of ghosts.',
    description: 'As part of learning video game production workflows, the main goal was to get to grips with the Unreal Engine and its core mechanisms. Developed in C++ in a team of two, the project focused on designing artificial intelligence and gameplay behaviours. My role was to program two distinct types of enemies (ghosts), which required implementing specific movement and attack mechanics. This work strengthened my command of collision handling, behaviour trees and resource optimisation in a real-time 3D environment.',
  },
  phareaway: {
    resume: 'An application promoting French heritage, built by a team of six.',
    description: 'To apply the knowledge gained during our second year, we formed groups of six to build a project promoting French heritage. This project allowed us to develop our team management skills and to apply ISO standards in a modern web development context.',
  },
  studlife: {
    resume: 'A Java event management application for student associations.',
    description: 'For our end-of-first-year project, we were free to create a Java application of our choice. In a group of five, we developed an application that makes it easier for student associations to create, organise and manage events. We made sure it was simple, lightweight and intuitive so that any association could adopt it quickly. The project addresses a real need to simplify the management of association events.',
  },
  faerun: {
    titre: 'Faerun game',
    resume: 'A modular multiplayer board game developed in Java.',
    description: 'To validate our first university year and our Java programming skills, we had to design an interactive multiplayer board game. It had to meet a precise specification: being modular, meaning able to adapt dynamically to the number of players, and including several optimised algorithms for essential features such as starting a game, moving pieces and capturing opposing pieces.',
  },
  'news-theme-attribution': {
    resume: 'Automatic text classification by topic with a neural network.',
    description: 'As our first approach to artificial intelligence, we developed an algorithm based on a neural network. This deep learning model was designed to automatically analyse an input text and assign it to the appropriate topic category based on its content.',
  },
  imb: {
    resume: 'A modern showcase website for a company, with an ecological dimension.',
    description: 'One of the first projects of my studies was building a complete website. It had to have a modern design that appealed to a young audience while including an ecological dimension. After choosing a target company, we designed a showcase site in HTML, CSS and JavaScript, meeting the functional and aesthetic requirements. This project taught us the basics of front-end development and user-centred design.',
  },
  openfoodfacts: {
    resume: 'Statistical analysis of a database of several million food products.',
    description: 'To deepen our skills in extracting and handling large datasets, we worked on a specific question about food products, using the OpenFoodFacts database and its millions of records. This project developed our ability to select relevant data and analyse it statistically, with rigorous processing and clear visualisations in the final report.',
  },
  titanic: {
    resume: 'An introduction to Big Data: extraction, analysis and a structured report.',
    description: 'This project was part of our introduction to Big Data. After selecting the data relevant to the question, we extracted and analysed it. The goal was to place the results in context in order to produce a detailed report answering the initial question in a structured way.',
  },
  technovert: {
    titre: 'Technovert Group case study',
    resume: 'A critical analysis of the organisation of a fast-growing company.',
    description: 'The Technovert Inc. case was a critical analysis of the organisational structure and management methods of a growing company. The goal was to identify structural weaknesses in order to propose a strategic repositioning and a reorganisation of the company. Each of us first completed the whole assignment; after pooling and debating our work, we structured the final document using Microsoft Office and Teams. This case study put into practice the principles of management, operational efficiency and human resources management during a growth crisis.',
  },
}

export const parcoursEn = [
  {
    titre: 'Future goals',
    lieu: 'Professional development',
    periode: '2026 and beyond',
    description: 'Aiming to combine software development expertise with cybersecurity challenges, I want to put my skills to work on innovative projects while keeping up constant technology watch to anticipate tomorrow’s digital challenges.',
    competences: ['Programming', 'Leadership', 'Innovation', 'Technology watch'],
  },
  {
    titre: 'Smart Grid Project Manager',
    lieu: 'Enedis Labs',
    periode: 'Current apprenticeship',
    description: 'Apprenticeship carried out alongside my engineering degree at IMT Atlantique.',
    competences: ['Smart grids', 'Project management'],
  },
  {
    titre: 'Engineering degree',
    lieu: 'IMT Atlantique, Brest campus',
    periode: 'Since August 2026',
    description: 'To build on the technical foundation gained at IUT2 Grenoble and during my exchange in Canada, I joined the engineering programme at IMT Atlantique. This work-study programme is a key step in my specialisation, combining academic rigour with hands-on experience in a company.',
    competences: ['Project management', 'Cybersecurity', 'AI'],
  },
  {
    titre: 'Study abroad: Canada',
    lieu: 'Université du Québec à Chicoutimi',
    periode: 'August 2025 - May 2026',
    description: 'During my final year at IUT2 Grenoble, I broadened my studies with an international exchange in Canada. This experience exposed me to new ways of working and enriched my technical profile in a different academic environment.',
    competences: ['Python', 'Unreal Engine', 'Management', 'University club', 'Project management', 'Cybersecurity', 'AI'],
  },
  {
    titre: 'Network administration internship',
    lieu: 'Tivoly',
    periode: 'April - June 2025',
    description: 'My first significant experience in network administration, involving highly critical assignments. I led the design and deployment of a secure administration bastion and built automation tools.',
    competences: ['Microsoft 365', 'Bastion host', 'Python', 'PowerShell'],
    lien: '/projets/bastion-tivoly',
  },
  {
    titre: 'Bachelor of Technology in Computer Science, Communicating and Secure Application Deployment track',
    lieu: 'IUT2 Grenoble',
    periode: '2023 - 2026',
    description: 'In-depth technical training covering software engineering, data management, network architecture and project management. The programme was built around complex projects carried out in real conditions, requiring methodological rigour, teamwork and compliance with professional delivery standards.',
    competences: ['Java', 'Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Project management', 'C++'],
  },
  {
    titre: 'French baccalaureate, with honours',
    lieu: 'Lycée du Granier',
    periode: '2019 - 2023',
    description: 'A programme focused on mathematics and computer science. It gave me the logical foundations and analytical rigour essential to computer engineering.',
    competences: ['Mathematics', 'Computer science', 'Logic', 'Algorithms'],
  },
]

export const competencesEn = [
  { titre: 'Languages', items: ['Java', 'Python', 'C/C++', 'SQL', 'HTML/CSS', 'JavaScript'] },
  { titre: 'Security and networking', items: ['Cryptography (AES, HMAC)', 'Administration bastion', 'Wazuh', 'Zabbix', 'PowerShell'] },
  { titre: 'Tools', items: ['Unreal Engine', 'React', 'Next.js', 'PostgreSQL', 'Git', 'Perforce'] },
  { titre: 'Soft skills', items: ['Project management', 'Teamwork', 'Planning', 'Communication'] },
]

export const languesEn = [
  { nom: 'French', niveau: 'native', code: 'fr' },
  { nom: 'English', niveau: 'C1', code: 'en' },
  { nom: 'Spanish', niveau: 'B2', code: 'es' },
  { nom: 'Japanese', niveau: 'A2', code: 'ja' },
]

export const engagementsEn = [
  'President of the student union (BDE)',
  'Co-lead of the UQAC investment fund club',
  'eSports club athlete',
]
