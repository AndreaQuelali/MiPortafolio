import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: 'Sweet_Cake',
      description: 'Página web realizada en React, Tailwind, CSS con diferentes funcionalidades y productos para una repostería.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: '/images/SweetCake.jpeg',
      github: 'https://github.com/AndreaQuelali/Sweet_Cake',

    },
    {
      title: 'webTime',
      description: 'Aplicación web de audiolibros enfocado a personas que buscan material sobre Programación Web.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      image: '/images/Webtime.PNG',
      github: 'https://github.com/ivancidev/webTime',
      live: 'https://web-time-seven.vercel.app/'
    },
    {
      title: 'OhSanSi-Frontend',
      description: 'Aplicación web de inscripción a las olimpiadas Oh! SanSi.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      image: '/images/OhSanSi.PNG',
      github: 'https://github.com/AndreaQuelali/OhSanSi-Frontend',
      live: 'http://techmirai.tis.cs.umss.edu.bo/'
    },
    {
      title: 'PyStart',
      description: 'Plataforma web para aprender Python en diferentes idiomas, con recursos interactivos y seguimiento de progreso.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      image: '/images/PyStart.jpeg',
      github: 'https://github.com/AndreaQuelali/PyStart',
    },
    {
      title: 'PostuLatte SCESI',
      description: 'Plataforma web orientada a los organizadores y miembros activos de la SCESI, diseñada para facilitar y optimizar la gestión de postulaciones estudiantiles.',
      tech: ['Canva', 'Figma'],
      image: '/images/PostuLatte.PNG',
      live: 'https://www.figma.com/proto/k1KshZkM70hIGVYSxL9MDk/PostuLatte?node-id=0-1&t=NvZOZ7YYZMxb3HQH-1'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que muestran mis habilidades y experiencia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 