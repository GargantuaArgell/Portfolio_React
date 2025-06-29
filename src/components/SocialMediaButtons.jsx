import React from 'react'

const SocialMediaButtons = ({ className = "" }) => {
  return (
    <footer className={`fixed bottom-0 left-0 right-0 py-6 bg-black/20 backdrop-blur-sm border-t border-white/10 ${className}`}>
      <ul className="flex justify-center space-x-8 md:space-x-12">
        {/* LinkedIn */}
        <li className="group relative">
          <a
            href="https://www.linkedin.com/in/f%C3%A9lix-grandet-b94b9236a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-blue-600 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600 transform scale-0 transition-transform duration-300 group-hover:scale-100 rounded-lg"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="relative z-10 text-white transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            LinkedIn
          </div>
        </li>

        {/* GitHub */}
        <li className="group relative">
          <a
            href="https://github.com/GargantuaArgell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-600 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-600 transform scale-0 transition-transform duration-300 group-hover:scale-100 rounded-lg"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="relative z-10 text-white transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            GitHub
          </div>
        </li>

        {/* Email */}
        <li className="group relative">
          <a
            href="mailto:flx.grdt@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="relative flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-red-600 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 transform scale-0 transition-transform duration-300 group-hover:scale-100 rounded-lg"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="relative z-10 text-white transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
              <path d="M.05 4.555L8 8.413l7.95-3.858A1 1 0 0 1 16 5v6a1 1 0 0 1-.05.445L8 11.587.05 11.445A1 1 0 0 1 0 11V5a1 1 0 0 1 .05-.445zM15.8 4.673L8 8.83.2 4.673C.074 4.64 0 4.576 0 4.5V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v.5c0 .076-.074.14-.2.173z" />
            </svg>
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Email
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default SocialMediaButtons 