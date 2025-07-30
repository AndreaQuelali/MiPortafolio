import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o necesitas ayuda con algo? Estoy aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Información de contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span>andrealizbethquelali5@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span>+591 60391320</span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Contáctame en redes sociales</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AndreaQuelali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/andrea-lizbeth-quelali-quispe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+59160391320"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Asunto *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje *</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full">
                Enviar mensaje
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 