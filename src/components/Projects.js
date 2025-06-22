import React from 'react';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image: '/next.svg',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    image: '/vercel.svg',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3.',
    image: '/globe.svg',
  },
];

const Projects = () => (
  <section id="projetos" className="py-20 bg-blue-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Projetos</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-contain bg-gray-100" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 