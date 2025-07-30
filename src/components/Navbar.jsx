import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

function Navbar({ isDark, toggleTheme, scrollToSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img src="/public/icons/aliz-logo.png" alt="Aliz Logo" className="w-16 h-16" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Aliz</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={`capitalize font-medium transition-colors duration-200 ${
                  activeSection === section 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {section === 'home' ? 'Inicio' : 
                 section === 'about' ? 'Sobre mí' :
                 section === 'skills' ? 'Habilidades' :
                 section === 'projects' ? 'Proyectos' : 'Contacto'}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
          >
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScrollToSection(section)}
                  className="block w-full text-left py-2 px-4 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-dark-800"
                >
                  {section === 'home' ? 'Inicio' : 
                   section === 'about' ? 'Sobre mí' :
                   section === 'skills' ? 'Habilidades' :
                   section === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar 