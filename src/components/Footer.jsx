import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Félix Grandet. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Email
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 