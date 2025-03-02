import React from 'react';

const projects = [
  { title: "Project One", description: "A cool MERN stack project showcasing a responsive design." },
  { title: "Project Two", description: "An innovative application with dynamic features." },
];

const Projects = () => (
  <section id="projects" className="p-6 animate-fadeIn">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
