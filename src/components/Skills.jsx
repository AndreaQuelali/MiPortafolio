import { useState } from 'react'
import { motion } from 'framer-motion'

function Skills() {
  const skillCategories = [
    {
      key: 'languages',
      title: "Lenguajes de Programación",
      skills: [
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-400' },
        { name: 'Python', level: 70, color: 'from-green-500 to-blue-500' },
        { name: 'Java', level: 65, color: 'from-red-500 to-orange-500' },
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-purple-500' },
      ]
    },
    {
      key: 'frameworks',
      title: "Frameworks y Librerías",
      skills: [
        { name: 'React', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 75, color: 'from-gray-800 to-gray-600' },
        { name: 'Vite', level: 70, color: 'from-purple-500 to-pink-500' },
        { name: 'Flask', level: 65, color: 'from-gray-600 to-gray-400' },
        { name: 'Material UI', level: 80, color: 'from-blue-600 to-blue-400' },
        { name: 'shadcn/ui', level: 75, color: 'from-gray-700 to-gray-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' },
      ]
    },
    {
      key: 'databases',
      title: "Bases de Datos",
      skills: [
        { name: 'Firebase', level: 75, color: 'from-orange-500 to-yellow-500' },
        { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 65, color: 'from-blue-500 to-blue-600' },
        { name: 'PostgreSQL', level: 60, color: 'from-blue-600 to-blue-700' },
        { name: 'Supabase', level: 70, color: 'from-green-600 to-green-700' },
      ]
    },
    {
      key: 'design',
      title: "Herramientas",
      skills: [
        { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'Canva', level: 75, color: 'from-blue-500 to-purple-500' },
        { name: 'Git & GitHub', level: 85, color: 'from-gray-700 to-gray-500' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-purple-500' },
        { name: 'NetBeans IDE', level: 70, color: 'from-orange-500 to-red-500' },
        { name: 'Postman', level: 75, color: 'from-orange-600 to-orange-500' },
        { name: 'Jira', level: 70, color: 'from-blue-600 to-blue-500' },
        { name: 'Trello', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Notion', level: 75, color: 'from-gray-600 to-gray-500' },
      ]
    },
  ]

  const [activeTab, setActiveTab] = useState(skillCategories[0].key)
  const activeCategory = skillCategories.find(cat => cat.key === activeTab)

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologías, frameworks y herramientas que domino para crear soluciones web modernas y aplicaciones robustas
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none text-sm md:text-base
                ${activeTab === cat.key
                  ? 'bg-primary-500 text-white border-primary-500 shadow'
                  : 'bg-white dark:bg-dark-700 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900'}
              `}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-sm md:text-base">{skill.name}</h4>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 