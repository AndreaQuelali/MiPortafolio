import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Andrea Lizbeth Quelali Quispe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Desarrolladora web apasionada por crear experiencias digitales únicas y soluciones innovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Ver mis proyectos
            </button>
            <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300">
              <Download className="w-5 h-5 mr-2 inline" />
              Descargar CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 