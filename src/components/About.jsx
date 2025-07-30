import { motion } from 'framer-motion'
import { Code, Users, Zap, Target, Coffee, Heart } from 'lucide-react'
function About() {
  const qualities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Código limpio",
      description: "Sigo las mejores prácticas para escribir código mantenible y escalable."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Diseño responsivo",
      description: "Creo interfaces que se ven perfectas en cualquier dispositivo."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "UI/UX centrado",
      description: "Me enfoco en crear experiencias de usuario intuitivas y atractivas."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Alto rendimiento",
      description: "Optimizo aplicaciones para obtener la mejor experiencia de usuario."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabajo en equipo",
      description: "Experiencia colaborando en equipos ágiles con comunicación efectiva."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Pasión por aprender",
      description: "Siempre actualizándome con las últimas tecnologías y tendencias."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desarrolladora web apasionada por crear soluciones digitales innovadoras y experiencias de usuario excepcionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/photo.jpeg" 
              alt="Andrea Lizbeth Quelali Quispe" 
              className="w-full max-w-md mx-auto rounded-full shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
        
<p align="left">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=36&pause=1000&color=5e17eb&left=true&vCenter=true&width=500&lines=Frontend+Developer;UX%2FUI+Designer" alt="Typing animation roles" />
</p>
 
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Me especializo en <strong>React, TypeScript, JavaScript </strong> para el frontend, 
              con un fuerte énfasis en <strong>diseño responsivo</strong> y <strong>UI/UX</strong>. 
              Como desarrolladora <strong>proactiva y perseverante</strong>, disfruto enfrentando desafíos técnicos complejos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tengo experiencia trabajando en <strong>equipos colaborativos</strong>, donde he desarrollado habilidades 
              de comunicación efectiva y adaptabilidad. Mi pasión por el aprendizaje me mantiene actualizada 
              con las últimas tendencias en desarrollo web.
            </p>

            <div className="flex gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">2+</div>
                <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Proyectos realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">12+</div>
                <div className="text-gray-600 dark:text-gray-300">Tecnologías dominadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">∞</div>
                <div className="text-gray-600 dark:text-gray-300">Tazas de café</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards de cualidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  {quality.icon}
                </div>
                <h4 className="text-lg font-semibold">{quality.title}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 