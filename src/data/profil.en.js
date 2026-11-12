// Traduction anglaise de profil.js. Les slugs, images et liens restent dans profil.js.

export const personneEn = {
  ville: 'Brest, France',
  poste: 'Smart Grid Project Manager',
  cv: '/images/Curriculum-Vitae-GRANDET-FELIX-EN.pdf',
  accroche: 'Engineering student at IMT Atlantique, apprentice at Enedis Labs',
  statut: 'Seeking a 9 to 12-week international internship from May 2027',
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
  { titre: '2nd place', detail: '48-hour game jam', lien: '/projets/kraken-redemption' },
  { titre: 'UQAC exchange', detail: 'Canada, 2025-2026', lien: '/parcours' },
]

export const categoriesEn = {
  Cybersécurité: 'Cybersecurity',
  Réseau: 'Networking',
  Automatisation: 'Automation',
  IA: 'AI',
  Finance: 'Finance',
  'Jeu vidéo': 'Video games',
  Web: 'Web',
  Logiciel: 'Software',
  Données: 'Data',
  Management: 'Management',
  Engagement: 'Involvement',
}

export const technologiesEn = {
  'Bastion informatique': 'Bastion host',
  Cybersécurité: 'Cybersecurity',
  Cryptographie: 'Cryptography',
  "Traitement d'image": 'Image processing',
  IA: 'AI',
  Algorithmique: 'Algorithms',
  'Gestion de projet': 'Project management',
  'Normes ISO': 'ISO standards',
  RGPD: 'GDPR',
  RSE: 'CSR',
  'Jeu de plateau': 'Board game',
  'Conception et développement': 'Design and development',
  'Intelligence artificielle': 'Artificial intelligence',
  'Suite Microsoft': 'Microsoft Office',
  'Suite Office': 'Microsoft Office',
  'Administration réseau': 'Network administration',
  'Administration système': 'System administration',
  'Déploiement cloud': 'Cloud deployment',
  'Scripts d’automatisation': 'Automation scripting',
  'Supply chain': 'Supply chain',
  Documentation: 'Documentation',
  'Concours, 2ᵉ place': 'Competition, 2nd place',
  'Gestion d’équipe': 'Team management',
  'Gestion de budget': 'Budget management',
  Événementiel: 'Event management',
  'Gestion de portefeuille': 'Portfolio management',
  'Travail d’équipe': 'Teamwork',
  Compétition: 'Competition',
}

export const projetsEn = {
  'bastion-tivoly': {
    titre: 'Administration bastion',
    contexte: 'Internship at Tivoly, April to June 2025',
    resume: 'Deployment of a bastion host to secure external access to the information system.',
    description: 'To strengthen the site’s cybersecurity, I was tasked with setting up a bastion host to better manage external access to the company’s information system. I used various scripts and isolated test environments (sandboxes) before deploying the solution in the production environment.',
  },
  cryptbox: {
    contexte: 'Exchange at UQAC, Canada',
    resume: 'File and directory encryption, with integrity verification.',
    description: 'To put our knowledge of encryption and application security into practice, I developed an application for securely encrypting and decrypting files and directories. Built in Python, it implements critical cryptographic functions to guarantee the integrity and confidentiality of files. As the sole developer, I integrated the AES algorithm for symmetric encryption and the HMAC mechanism to authenticate messages and detect file corruption. This work strengthened my skills in byte stream handling and cryptographic key management.',
  },
  cassiopea: {
    contexte: 'IUT2 Grenoble',
    resume: 'Design and deployment of a complete, secure network infrastructure.',
    description: 'During my second year, our project was to design and deploy a network infrastructure. In a team of five, I was elected project manager: I handled project management and set up the Scrum tools. We built a complete network from scratch with numerous services (DNS, DHCP, PostgreSQL, wiki), along with network monitoring (Zabbix, Wazuh, Cerberus).',
  },
  'automatisation-supply-chain': {
    titre: 'Supply chain automation',
    contexte: 'Internship at Tivoly, April to June 2025',
    resume: 'Automation of supply chain tasks, with error tracking and user training.',
    description: 'During my internship, I studied the needs of the different departments to see how I could help them. After discussing their difficulties with the supply chain team, I developed several Python scripts to automate tasks, with archiving, error tracking and documentation. Follow-up after deployment allowed me to make improvements for employees’ comfort and more efficient tracking of operations. I also ran meetings to present the solution, its benefits and how to use it.',
  },
  'outils-forensic': {
    titre: 'Digital forensics tools',
    contexte: 'Internship at Tivoly, April to June 2025',
    resume: 'Deployment of forensics tools to prepare the response to an attack.',
    description: 'To improve the site’s cybersecurity, I set up digital forensics tools such as the open-source software Autopsy. Autopsy can analyse a computer’s storage media in depth and recover files that were deleted or hidden during an attack. This work is part of incident prevention and preparedness.',
  },
  'cloudification-si': {
    titre: 'Moving the information system to the cloud',
    contexte: 'Internship at Tivoly, April to June 2025',
    resume: 'Migration of company files to SharePoint with PowerShell scripts.',
    description: 'To support the company’s modernisation, I developed a set of PowerShell scripts bridging the existing file environment and SharePoint. After several test phases in an isolated environment (sandbox) and detailed documentation of my scripts, the cloud migration was carried out in production.',
  },
  steganographie: {
    titre: 'Steganography',
    contexte: 'Exchange at UQAC, Canada',
    resume: 'Messages hidden in images through their least significant bits.',
    description: 'This project was designed to deepen my understanding of how data can be concealed inside digital files. Using Python, I developed a solution that encodes confidential messages in images without altering their appearance, by manipulating the least significant bits (LSB). This gave me hands-on practice with binary manipulation, file structure analysis and the fundamentals of steganography.',
  },
  'bot-de-trading': {
    titre: 'Trading bot',
    contexte: 'Personal project, in progress',
    resume: 'Design and development of Python trading bots, deployed on a server.',
    description: 'To apply what I learned in the investment club, I designed several Python algorithms using different strategies, such as moving average crossover and mean reversion. I deployed them on a server, from which they interact continuously with the markets (stocks and cryptocurrencies). The project is still in development.',
  },
  'kraken-redemption': {
    contexte: 'Exchange at UQAC, Canada',
    resume: 'A video game created in 48 hours, second place at the game jam.',
    description: 'During my exchange year in Canada, I formed a team of four to take part in a game jam, a 48-hour video game creation contest. Starting from the imposed theme, we took the project from idea to design and development. The challenge required us to adapt to the unexpected and deliver a working result that met the organisers’ constraints in a very short time. We took second place.',
  },
  'iario-kart': {
    contexte: 'Exchange at UQAC, Canada',
    resume: 'A comparison of pathfinding algorithms in procedurally generated mazes.',
    description: 'IArio Kart is a simulation environment designed to compare the efficiency of various pathfinding algorithms in procedurally generated mazes. As the lead for algorithmic logic, I programmed in C++ the navigation systems that allow agents to solve mazes autonomously. We kept in constant communication within the team to ensure consistent code, managed with Perforce. The project produced a factual analysis of the algorithms’ complexity and performance.',
  },
  'shooter-3d': {
    contexte: 'Exchange at UQAC, Canada',
    resume: 'Combat between enemy and allied AIs, with behaviour trees and navigation.',
    description: 'The goal of this project was to design a combat system between two teams: one made up of artificial intelligences, the other of an allied AI and the player. The work required rigorous coordination through the Perforce version control tool. As the lead for logic and AI within our pair, I implemented all the behaviour trees, agent navigation and shooting systems. This validated advanced logic skills and my command of Unreal Engine, while keeping everything in sync with my teammate’s visual assets and interface.',
  },
  'pac-man': {
    contexte: 'Exchange at UQAC, Canada',
    resume: 'Learning Unreal Engine and programming the AI of Pac-Man’s ghosts.',
    description: 'As part of learning video game production workflows, the main goal was to get to grips with the Unreal Engine and its core mechanisms. Developed in C++ in a team of two, the project focused on designing the artificial intelligence of the four ghosts and the gameplay behaviours. My role was to program two distinct types of ghosts, which required implementing specific movement and attack mechanics. This work strengthened my command of collision handling, behaviour trees and resource optimisation in a real-time 3D environment.',
  },
  phareaway: {
    contexte: 'IUT2 Grenoble',
    resume: 'Design and development of an application showcasing the maritime heritage of lighthouses.',
    description: 'In our second year, we formed teams of six for a five-month project. We took it from the initial idea to production, through design and development. The project let us work on every aspect of project management, including cybersecurity, legal requirements and ISO standards.',
  },
  studlife: {
    contexte: 'IUT2 Grenoble',
    resume: 'A Java event management application for student associations.',
    description: 'For our end-of-first-year project, we were free to create the Java application of our choice. In a group of five, we used the Agile Scrum method to run the project, each member having a specific role. I was team leader and Scrum Master: I coordinated the team’s work, supported skill development and facilitated communication during Scrum ceremonies by removing obstacles. We built a simple, lightweight and intuitive application that makes it easier for student associations to create, organise and manage events.',
  },
  faerun: {
    titre: 'Faerun game',
    contexte: 'IUT2 Grenoble',
    resume: 'A modular multiplayer board game developed in Java.',
    description: 'To validate our first year and our Java programming skills, we had to design an interactive multiplayer board game. The specification required a modular game able to adapt dynamically to the number of players, and several optimised algorithms for the core features: starting a game, moving pieces, the combat system and capturing opposing pieces.',
  },
  'news-theme-attribution': {
    contexte: 'IUT2 Grenoble',
    resume: 'Automatic text classification by topic with a neural network, at 98% accuracy.',
    description: 'As our first approach to artificial intelligence, we developed an algorithm based on a neural network. This deep learning model automatically analyses a text and assigns it to the appropriate topic category based on its content. It reached 98% accuracy on the test data.',
  },
  imb: {
    contexte: 'IUT2 Grenoble',
    resume: 'A modern showcase website for a company, highlighting its CSR approach.',
    description: 'One of the first projects of my studies was building a complete website. It had to have a modern design that appealed to a young audience while including an ecological dimension to highlight the company’s CSR (corporate social responsibility). After choosing a target company, we designed a showcase site in HTML, CSS and JavaScript, meeting the functional and aesthetic requirements. This project taught us the basics of front-end development and user-centred design.',
  },
  openfoodfacts: {
    contexte: 'IUT2 Grenoble',
    resume: 'Statistical analysis of a database of several million food products.',
    description: 'To deepen our skills in extracting and handling large datasets, we worked on a specific question about food products, using the OpenFoodFacts database and its millions of records. This project developed our ability to select relevant data and analyse it statistically, with rigorous processing and clear charts in the final report.',
  },
  titanic: {
    contexte: 'IUT2 Grenoble',
    resume: 'An introduction to Big Data: extraction, analysis and a structured report.',
    description: 'This project was part of our introduction to Big Data. After selecting the data relevant to the question, we extracted and analysed it. The goal was to place the results in context in order to produce a detailed report answering the initial question in a structured way.',
  },
  technovert: {
    titre: 'Technovert Group case study',
    contexte: 'Exchange at UQAC, Canada',
    resume: 'A critical analysis of the organisation of a fast-growing company.',
    description: 'The Technovert Inc. case was a critical analysis of the organisational structure and management methods of a growing company. The goal was to identify structural weaknesses in order to propose a strategic repositioning and a reorganisation of the company. To test our knowledge, each of us first completed the whole assignment; after pooling and debating our work, we structured the final document using Microsoft Office and Teams. This case study put into practice the principles of management, operational efficiency and human resources management during a growth crisis.',
  },
  'presidence-bde': {
    titre: 'Student union presidency',
    contexte: 'IUT2 Grenoble',
    resume: 'Led a team of 6 and organised events for up to 300 students.',
    description: 'During my studies at IUT2 Grenoble, I was elected president of the student union (BDE). During my term, I organised a series of events with my six teammates, from a 50-student party to an integration weekend bringing together six other student unions, for a total of 300 students and a €50,000 budget.',
  },
  'club-investissement-uqac': {
    titre: 'UQAC investment club',
    contexte: 'Exchange at UQAC, Canada',
    resume: 'Co-lead for Innovation and Investment, for a CAD $250,000 portfolio.',
    description: 'In the investment fund club, I was in charge of technology watch and presented the main innovations in dedicated meetings. I took part in investment pitches to buy or sell stocks based on specific metrics: P/E ratio (price to earnings), ROI (return on investment), the macroeconomic context, and financial results and balance sheets. I also organised meetings on emerging technologies such as agentic AI and cryptocurrencies.',
  },
  'esport-uqac': {
    titre: 'University esports team',
    contexte: 'Exchange at UQAC, Canada',
    resume: 'Selected for the university’s main League of Legends team.',
    description: 'During my exchange year, I applied to the university League of Legends team and was selected for the main roster. This experience brought back my competitive spirit and team spirit.',
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
    description: 'A university exchange in computer science and mathematics, completed during my final BUT year to validate my degree. It exposed me to new ways of working, let me lead projects in AI, cybersecurity and video games, and get involved in university life.',
    competences: ['Computer science', 'Mathematics', 'AI', 'Cybersecurity', 'Unreal Engine', 'Investment club', 'Esports'],
  },
  {
    titre: 'Network administration internship',
    lieu: 'Tivoly',
    periode: 'April - June 2025',
    description: 'My first significant experience in network administration, with four missions carried out independently: deploying an administration bastion, setting up digital forensics tools, migrating files to SharePoint and automating part of the supply chain.',
    competences: ['Bastion host', 'Forensics', 'PowerShell', 'Python', 'SharePoint', 'Azure'],
    lien: '/projets/bastion-tivoly',
  },
  {
    titre: 'Bachelor of Technology in Computer Science, track B: Communicating and Secure Application Deployment',
    lieu: 'IUT2 Grenoble',
    periode: '2023 - 2026',
    description: 'In-depth technical training covering software engineering, data management, network architecture and project management. The programme was built around complex projects carried out in real conditions, requiring methodological rigour, teamwork and compliance with professional delivery standards.',
    competences: ['Java', 'Python', 'SQL', 'R', 'HTML/CSS', 'JavaScript', 'Agile', 'Scrum', 'Project management'],
  },
  {
    titre: 'French baccalaureate, with honours',
    lieu: 'Lycée du Granier',
    periode: '2019 - 2023',
    description: 'A general baccalaureate with specialisations in mathematics, computer science, and earth and life sciences. It gave me the logical foundations and analytical rigour essential to computer engineering.',
    competences: ['Mathematics', 'Computer science', 'Earth and life sciences', 'Algorithms'],
  },
]

export const competencesEn = [
  { titre: 'Languages', items: ['Python', 'Java', 'C/C++', 'SQL', 'R', 'HTML/CSS', 'JavaScript', 'PowerShell'] },
  { titre: 'Security and networking', items: ['Cryptography (AES, HMAC)', 'Administration bastion', 'Forensics (Autopsy)', 'Wazuh', 'Zabbix', 'Linux', 'DNS', 'DHCP'] },
  { titre: 'Tools', items: ['Unreal Engine', 'React', 'Next.js', 'PostgreSQL', 'SharePoint', 'Azure', 'Git', 'Perforce', 'Jira'] },
  { titre: 'Methods', items: ['Project management', 'Agile', 'Scrum', 'GDPR', 'ISO standards', 'CSR'] },
]

export const languesEn = [
  { nom: 'French', niveau: 'native', code: 'fr' },
  { nom: 'English', niveau: 'C1', code: 'en' },
  { nom: 'Spanish', niveau: 'B2', code: 'es' },
  { nom: 'Japanese', niveau: 'A2', code: 'ja' },
]

export const engagementsEn = [
  'President of the IUT2 Grenoble student union (BDE)',
  'Co-lead for Innovation and Investment, UQAC investment fund club',
  'Main roster player, UQAC League of Legends team',
]
