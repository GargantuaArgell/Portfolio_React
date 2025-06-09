import React, { useState } from 'react'

const NavigationMenu = ({ active = "profil", onNavigate }) => {
  const [showHelp, setShowHelp] = useState(false)

  const handleNavigate = (section) => {
    if (onNavigate) {
      onNavigate(section)
    }
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp)
  }

  return (
    <>
      {/* Help button - Bottom Left */}
      <button
        className="fixed bottom-6 left-6 z-[9999] w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
        onClick={toggleHelp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-6 h-6 fill-white"
        >
          <path d="M80 160c0-35.3 28.7-64 64-64s64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128S16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm112 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
      </button>

      {/* Background overlay to hide any sidebar */}
      <div className="hidden md:block fixed top-0 left-0 w-24 h-full bg-gradient-to-r from-black/50 to-transparent z-[9998]"></div>
      
      <section
        className="w-[100vw] md:w-fit flex md:flex-col items-center gap-2 fixed bottom-0 left-0 md:left-6 top-auto md:top-1/2 md:transform md:-translate-y-1/2 z-[9999]"
      >
        {/* Main navigation menu */}
        <aside className="flex md:flex-col w-full h-fit md:w-fit gap-2 justify-between bg-white/80 md:bg-white/90 rounded-t-3xl md:rounded-3xl backdrop-blur-md px-3 py-4 md:px-8 md:py-6 shadow-2xl border border-white/30">
        
        {/* Profil */}
        <div
          className="flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => handleNavigate("profil")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`${
              active === "profil"
                ? "fill-purple-600"
                : "fill-gray-700 hover:fill-purple-600"
            } duration-300 size-12 cursor-pointer`}
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
          <p className="hidden md:flex justify-center text-xs select-none cursor-pointer text-gray-800">
            Profil
          </p>
        </div>

        <hr className="hidden md:block border-gray-300" />

        {/* Projet */}
        <div
          className="flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => handleNavigate("projet")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className={`${
              active === "projet"
                ? "fill-purple-600"
                : "fill-gray-700 hover:fill-purple-600"
            } duration-300 size-12 cursor-pointer`}
          >
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          <p className="hidden md:flex justify-center text-xs select-none cursor-pointer text-gray-800">
            Projet
          </p>
        </div>

        <hr className="hidden md:block border-gray-300" />

        {/* Qualification */}
        <div
          className="flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => handleNavigate("qualification")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`${
              active === "qualification"
                ? "fill-purple-600"
                : "fill-gray-700 hover:fill-purple-600"
            } duration-300 size-12 cursor-pointer`}
          >
            <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
          </svg>
          <p className="hidden md:flex justify-center text-xs select-none cursor-pointer text-gray-800">
            Qualification
          </p>
        </div>

        <hr className="hidden md:block border-gray-300" />

        {/* Contact */}
        <div
          className="flex flex-col justify-center items-center gap-4 cursor-pointer"
          onClick={() => handleNavigate("contact")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`${
              active === "contact"
                ? "fill-purple-600"
                : "fill-gray-700 hover:fill-purple-600"
            } duration-300 size-12 cursor-pointer`}
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p className="hidden md:flex justify-center text-xs select-none cursor-pointer text-gray-800">
            Contact
          </p>
                  </div>
        </aside>
      </section>

      {/* Help tooltip */}
      {showHelp && (
        <div className="fixed bottom-20 left-6 bg-black/90 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs z-[9999] shadow-xl">
          <p className="text-sm">
            Utilisez ce menu pour naviguer entre les différentes sections de mon portfolio :
          </p>
          <ul className="text-xs mt-2 space-y-1">
            <li>• <strong>Profil</strong> : Mon introduction</li>
            <li>• <strong>Projet</strong> : Mes réalisations</li>
            <li>• <strong>Qualification</strong> : Mon parcours</li>
            <li>• <strong>Contact</strong> : Me contacter</li>
          </ul>
          <button 
            onClick={() => setShowHelp(false)}
            className="mt-2 text-xs text-purple-300 hover:text-purple-100"
          >
            Fermer
          </button>
        </div>
      )}
    </>
  )
}

export default NavigationMenu 