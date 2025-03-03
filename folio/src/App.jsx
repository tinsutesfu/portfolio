import { useState, useEffect, useRef } from 'react';
import tinsu from './assets/tinsu.jpg';
import dblog from './assets/dblog.png';
import mblog from './assets/mblog.png';
import laptop from './assets/laptop.jpg';
import tzon from './assets/t-zon.jpg';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import {
  CommandLineIcon,
  PaintBrushIcon,
  ServerStackIcon,
  XMarkIcon as CloseIcon,
  Bars3Icon as MenuIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaSquareGithub, FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const form = useRef();
  const [status, setStatus] = useState('');

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tinsutesfu', icon: FaSquareGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tinsutesfu', icon: FaLinkedin },
    { name: 'Facebook', url: 'https://facebook.com/tinsayetesfaye', icon: FaFacebook },
    { name: 'Telegram', url: 'https://t.me/y@tinsi', icon: FaTelegram },
    { name: 'Whatsapp', url: 'https://whatsapp.com', icon: FaWhatsapp },
    { name: 'Website', url: 'https://mern-blog-client-betf.onrender.com', icon: GlobeAltIcon },
  ];

  const projects = [
    {
      id: 2,
      title: "Tinsu Blog App",
      description: "A blog platform featuring daily articles on web development, AI, and programming languages. Registered users can like and comment on posts.",
      liveLink: "https://mern-blog-client-betf.onrender.com",
      tech: ["React", "Firebase", "Node.js", "Express", "MongoDB", "Flowbite", "TailwindCSS", "Vite", "RTK", "Cloudinary"],
      image: [mblog, dblog]
    },
  ];

  const skills = [
    { name: 'Frontend Development 100%', level: 100, icon: <CommandLineIcon className="w-6 h-6" /> },
    { name: 'Backend Development 80%', level: 80, icon: <ServerStackIcon className="w-6 h-6" /> },
    { name: 'UI/UX Design 70%', level: 70, icon: <PaintBrushIcon className="w-6 h-6" /> },
    { name: 'Libraries & Tools 70%', level: 70, icon: <FaSquareGithub className="w-6 h-6" /> },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm('service_h44amik', 'template_rj17rgc', form.current, 'TML8pRuklVYhJjGja')
      .then(() => {
        setStatus('Message successfully sent! 🎉');
        form.current.reset();
      }, () => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-indigo-500 origin-left z-50" 
        style={{ scaleX }}
      />

      {/* Floating Back to Top */}
      <motion.button
        className="fixed bottom-8 right-4 sm:right-8 p-4 bg-indigo-600 rounded-full shadow-xl hover:bg-indigo-700 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800/80 backdrop-blur-md z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-12 h-12 sm:w-16 sm:h-16 relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse" />
            <HashLink smooth to="#home">
              <img
                src={tzon}
                className="w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-2xl relative z-10"
                alt="Tinsaye - MERN Stack Developer"
              />
            </HashLink>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <HashLink
                key={item}
                smooth
                to={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {item}
              </HashLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-indigo-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-gray-800/95 backdrop-blur-lg w-full absolute left-0"
            >
              <div className="px-4 py-4 space-y-4">
                {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
                  <HashLink
                    key={item}
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-indigo-400 py-2 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </HashLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-indigo-400"
            >
              👋 Hi There!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            >
              I'm <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tinsaye</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0"
            >
              A passionate <span className='text-xl sm:text-2xl bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent'>MERN Stack Developer</span> specializing in crafting immersive digital experiences.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.6 }}
              className="pt-6"
            >
              <HashLink
                smooth
                to="#projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-colors shadow-lg inline-flex items-center gap-2 mx-auto md:mx-0 w-fit"
              >
                <CommandLineIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Explore My Work
              </HashLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative mx-auto flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src={tinsu}
              className="w-full h-full rounded-full object-cover border-8 border-gray-800 shadow-2xl relative z-10"
              alt="Tinsaye - MERN Stack Developer"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-16 text-gray-100"
          >
            Technical Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-700/30 rounded-2xl backdrop-blur-sm border border-gray-600/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600/20 rounded-lg text-indigo-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100">{skill.name}</h3>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-16 text-gray-100"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  {project.image.length > 1 ? (
                    <div className="relative w-full aspect-video">
                      <img 
                        src={project.image[1]} 
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        alt={project.title}
                      />
                      <img 
                        src={project.image[0]} 
                        className="absolute top-4 right-4 w-1/4 h-25 object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-lg"
                        alt={project.title}
                      />
                    </div>
                  ) : (
                    <img 
                      src={project.image[0]} 
                      className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      alt={project.title}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-800 rounded-2xl w-full max-w-4xl mx-4 my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  <CloseIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/30 hover:border-indigo-400/50 transition-all flex flex-col lg:flex-row"
                >
                  <div className="relative overflow-hidden lg:w-1/2">
                    {selectedProject.image.length > 1 ? (
                      <div className="relative w-full aspect-video">
                        <img 
                          src={selectedProject.image[1]} 
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                          alt={selectedProject.title}
                        />
                        <img 
                          src={selectedProject.image[0]} 
                          className="absolute top-4 right-4 w-1/4 h-25 object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-lg"
                          alt={selectedProject.title}
                        />
                      </div>
                    ) : (
                      <img 
                        src={selectedProject.image[0]} 
                        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        alt={selectedProject.title}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">{selectedProject.title}</h4>
                      <p className="text-gray-400 mb-4 text-sm sm:text-base">{selectedProject.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                      Visit Live Project
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed"
              >
                Hi! I'm Tinsaye, a passionate MERN Stack Developer with 2+ years of experience in creating 
                robust web applications. I specialize in building scalable solutions using modern technologies 
                like React, Node.js, and MongoDB.
              </motion.p>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => window.open('YOUR_GOOGLE_DRIVE_CV_LINK', '_blank')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  View My Resume
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 p-6 bg-gray-700/30 rounded-2xl backdrop-blur-sm border border-gray-600/30"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">Extra Skills</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-indigo-400">
                  <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-[7px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-100">Junior Angular Developer</h4>
                  <p className="text-sm text-indigo-400">MEAN Stack</p>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base">Building enterprise-level web applications</p>
                </div>

                <div className="relative pl-6 border-l-2 border-indigo-400">
                  <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-[7px] top-0"></div>
                  <h4 className="text-lg font-medium text-gray-100">WordPress Developer</h4>
                  <p className="text-sm text-indigo-400">CMS</p>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base">Developing client-facing web applications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Let's Connect
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  className="p-4 sm:p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600/20 rounded-lg">
                      <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-100">Email Address</h3>
                      <a href="mailto:yetesfayes@gmail.com" className="text-indigo-400 hover:text-indigo-300 text-sm sm:text-base">
                        yetesfayes@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 sm:p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600/20 rounded-lg">
                      <DevicePhoneMobileIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-100">Phone Number</h3>
                      <a href="tel:+251940137855" className="text-indigo-400 hover:text-indigo-300 text-sm sm:text-base">
                        +251 (940) 137-855
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 pt-4 flex-wrap"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      whileHover={{ y: -5 }}
                      className="p-2 bg-gray-700/30 rounded-full backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50"
                    >
                      <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-indigo-400" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={sendEmail}
              ref={form}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500 peer"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm bg-gray-800 px-2">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500 peer"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm bg-gray-800 px-2">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500 peer"
                  rows="5"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm bg-gray-800 px-2">
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-colors"
              >
                Send Message
              </motion.button>

              {status && (
                <p className="text-center text-gray-300 text-sm sm:text-base">{status}</p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-4"
            >
              <img
                src={tzon}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
                alt="Tinsaye - MERN Stack Developer"
              />
              <p className="text-gray-400 text-sm sm:text-base">
                Passionate full-stack developer creating digital experiences that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <HashLink
                    key={link}
                    to={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </HashLink>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Reach Out</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm sm:text-base">yetesfayes@gmail.com</p>
                <p className="text-gray-400 text-sm sm:text-base">+251 (940) 137-855</p>
                <p className="text-gray-400 text-sm sm:text-base">Addis Ababa, Ethiopia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-100">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  >
                    <link.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} Tinsu. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Crafted with ❤️ using React & Tailwind
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
