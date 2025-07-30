function Footer() {
  return (
    <footer className="py-12 px-4 bg-dark-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
      
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Inicio</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre mí</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Habilidades</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Proyectos</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contacto</a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="mailto:andrealizbethquelali5@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" /></svg>
            andrealizbethquelali5@gmail.com
          </a>
       
          <a href="https://www.linkedin.com/in/andrea-lizbeth-quelali-quispe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/AndreaQuelali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="tel:+59160391320" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +591 60391320
          </a>
        </div>
        <div className="border-t border-dark-700 pt-6">
          <p className="text-gray-400">
            © 2025 Andrea Quelali. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 