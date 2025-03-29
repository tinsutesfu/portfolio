import { useState, useEffect,useRef } from 'react';
import tinsu from './assets/tinsu.jpg';
import dblog from './assets/dblog.png';
import mblog from './assets/mblog.png';
import ecode from './assets/eco-de.png';
import ecomo from './assets/eco-mo.png';
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
import { FaLinkedin ,FaSquareGithub,FaFacebook,FaTelegram,FaWhatsapp  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const App = () => {
  const navigate=useNavigate
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);




  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tinsutesfu', icon:FaSquareGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tinsutesfu', icon: FaLinkedin },
    { name: 'Faccebook', url: 'https://facebook.com/tinsayetesfaye', icon: FaFacebook },
    { name: 'Telegram', url: 'https://t.me/y@tinsi', icon: FaTelegram },
    { name: 'Whatsapp', url: 'https://whatsapp.com', icon: FaWhatsapp },
    { name: 'Website', url: 'https://your-portfolio.com', icon: GlobeAltIcon },
  ];

  // Sample data
  const projects = [
  
    {
      id: 1,
      title: "tinsu blog App",
      description: "On this blog, you'll find daily articles and news on topics such as web development, ai and programming languages.tinsaye is always learning and exploring new technologies. so in this blog app user can read any posts but only registered user give like and comments for each posts. technology that i used are listed below.",
      liveLink: "https://your-task-app.onrender.com", // Replace with your Render link
      tech: ["React", "Firebase", "nodejs","express","mongodb","flowbite","tailwindcss","vite","Rtk","Cloudinary"],
      image: [mblog, dblog]
    },
    {
      id: 2,
      title: "tinsu lapto ",
      description: "I built a web-based online ecommerce platform that Designed and developed a responsive and user-friendly e-commerce platform using MERN stack technologies (MongoDB, Express.js, React.js, Node.js), enabling customers to browse, filter, and purchase laptops online,Integrated secure payment gateways, including Chapa (Ethiopia-based payment solution) and PayPal, ensuring seamless and secure financial transactions. technology that i used are listed below.",
      liveLink: "https://nodjs-1-3k0d.onrender.com", // Replace with your Render link
      tech: ["React", "contextApi", "nodejs","express","mongodb","materialUi","chapa","vite","paypal","jwt"],
      image: [ecomo, ecode]
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

    emailjs
      .sendForm(
        'service_h44amik', // Your Service ID
        'template_rj17rgc', // Your Template ID
        form.current,
        'TML8pRuklVYhJjGja' // Your Public Key
      )
      .then(
        (result) => {
          setStatus('Message successfully sent! 🎉');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };



  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-indigo-500 origin-left z-50" 
        style={{ scaleX }}
      />

      {/* Floating Back to Top */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-indigo-600 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 md:px-8  flex justify-between items-center">
        <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-16 h-16 md:w-20 md:h-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
      <HashLink
                smooth
                to={`#home`}
                className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
              >
                <img
        src={tzon}
        className="w-full h-full rounded-full object-cover border-8 border-gray-800 shadow-2xl relative z-10"
        alt="Tinsaye - MERN Stack Developer"
      />
              </HashLink>
      
    </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Projects', 'Skills','about', 'Contact'].map((item) => (
              <HashLink
                key={item}
                smooth
                to={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
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
            {isMenuOpen ? (
              <CloseIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute w-full bg-gray-800/95 backdrop-blur-lg"
            >
              <div className="px-6 py-4 space-y-4">
                {['Projects', 'Skills', 'Testimonials','about', 'Contact'].map((item) => (
                  <HashLink
                    key={item}
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-indigo-400 py-2"
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

      /* Hero Section */
      {/* Hero Section */}
<section id="home" className="pt-22 pb-20 px-4 md:px-8 mt-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16">
    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 text-center md:text-left space-y-6"
    >
      {/* Animated "Hi There" */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-2xl md:text-3xl font-medium text-indigo-400"
      >
        👋 Hi There!
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
      >
        I'm <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tinsaye</span>
      </motion.h1>

      {/* Enhanced Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0"
      >
        A passionate <span className='text-3xl bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent '> MERN Stack Developer</span> specializing in crafting immersive digital experiences. 
        I transform complex problems into elegant, user-friendly solutions.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.6 }}
        className="pt-6"
      >
    <HashLink
  smooth
  to="#projects"
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors shadow-lg flex items-center gap-2 mx-auto md:mx-0 w-64"
>
  <CommandLineIcon className="w-6 h-6" />
  Explore My Work
</HashLink>
      </motion.div>
    </motion.div>

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-64 h-64 md:w-96 md:h-96 relative"
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
      <section id="skills" className="py-20 px-4 md:px-8 bg-gray-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100"
          >
            Technical Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-700/30 rounded-2xl backdrop-blur-sm border border-gray-600/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-600/20 rounded-lg text-indigo-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
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
      <section id="projects" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className=" group bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  {project.image.length > 1 ? (
                    <div className="relative">
                      <img 
                        src={project.image[1]} 
                        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                        alt={project.title}
                      />
                      <img 
                        src={project.image[0]} 
                        className="absolute top-10 right-0 w-1/4 h-25 object-cover transform transition-transform duration-300 group-hover:scale-105"
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
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
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


      <AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={() => isProjectsOpen(null)}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-100">{selectedProject.title}</h3>
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-gray-400 hover:text-indigo-400"
          >
            <CloseIcon className="w-8 h-8" />
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
                <div className="relative">
                  <img 
                    src={selectedProject.image[1]} 
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    alt={selectedProject.title}
                  />
                  <img 
                    src={selectedProject.image[0]} 
                    className="absolute top-10 right-0 w-1/4 h-25 object-cover transform transition-transform duration-300 group-hover:scale-105"
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

            <div className="p-6 lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-100 mb-2">
                {selectedProject.title}
              </h4>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
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
<section id="about" className="py-20 px-4 md:px-8 bg-gray-800/30">
  <div className="container mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Text Content */}
      <div className="space-y-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Hi! I'm Tinsaye, a passionate MERN Stack Developer with 2+ years of experience in creating 
          robust web applications. I specialize in building scalable solutions using modern technologies 
          like React, Node.js, and MongoDB. My expertise includes:
          
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              Full-stack web development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              REST API design & development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
              Nextjs development (ssr)
            </li>
          </ul>
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.open('YOUR_GOOGLE_DRIVE_CV_LINK', '_blank')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            View My Resume
          </button>
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-8 p-6 bg-gray-700/30 rounded-2xl backdrop-blur-sm border border-gray-600/30"
      >
        <h3 className="text-2xl font-semibold text-gray-100">Extra skills</h3>
        
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-indigo-400">
            <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-0"></div>
            <h4 className="text-lg font-medium text-gray-100">junior Angular Developer </h4>
            <p className="text-sm text-indigo-400">mean stack</p>
            <p className="mt-2 text-gray-300">another way in building enterprise-level web applications</p>
          </div>

          <div className="relative pl-8 border-l-2 border-indigo-400">
            <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-0"></div>
            <h4 className="text-lg font-medium text-gray-100">wordpress Developer </h4>
            <p className="text-sm text-indigo-400">cms</p>
            <p className="mt-2 text-gray-300">Developing multiple client-facing web applications without codding from scrach</p>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>



     {/* Contact Section */}
<section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-blue-900">
  <div className="container mx-auto max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 gap-12"
    >
      {/* Contact Information */}
      <div className="space-y-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div className="space-y-6">
          {/* Email Card */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            className="p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/20 rounded-lg">
                <EnvelopeIcon className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Email Address</h3>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  yetesfayes@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/20 rounded-lg">
                <DevicePhoneMobileIcon className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Phone Number</h3>
                <a 
                  href="tel:+251940137855" 
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  +251 (940) 137-855
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 pt-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ y: -5 }}
                className="p-2 bg-gray-700/30 rounded-full backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50"
              >
                <link.icon className="w-6 h-6 text-gray-300 hover:text-indigo-400" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-center mt-4 text-gray-300">
              {status}
            </p>
          )}
      </motion.form>
    </motion.div>
  </div>
</section>

{/* Enhanced Footer */}
<footer className="bg-gray-900/80 backdrop-blur-md">
  <div className="container mx-auto px-4 md:px-8 py-12">
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      {/* About Column */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-4"
      >
        <img
        src={tzon}
        className=" rounded-full object-cover border-8 border-gray-800 shadow-2xl relative z-10"
        alt="Tinsaye - MERN Stack Developer"
      />
        <p className="text-gray-400">
          Passionate full-stack developer creating digital experiences that matter.
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
        <div className="space-y-2">
          {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
            <HashLink
              key={link}
              to={`#${link.toLowerCase()}`}
              className="block text-gray-400 hover:text-indigo-400 transition-colors"
            >
              {link}
            </HashLink>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold text-gray-100">Reach Out</h4>
        <div className="space-y-2">
          <p className="text-gray-400">yetesfayes@gmail.com</p>
          <p className="text-gray-400">+251 (940) 137-855</p>
          <p className="text-gray-400">Addis Ababa, Ethiopia</p>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h4 className="text-lg font-semibold text-gray-100">Follow Me</h4>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
            >
              <link.icon className="w-6 h-6 text-gray-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Copyright */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="pt-8 border-t border-gray-800 text-center"
    >
      <p className="text-gray-400">
        © {new Date().getFullYear()} Tinsu. All rights reserved.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Crafted with ❤️ using React & Tailwind
      </p>
    </motion.div>
  </div>
</footer>
    </div>
  );
};

export default App;