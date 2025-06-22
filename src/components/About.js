import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Node.js',
  'Python',
  'SQL',
  'git',
  'Github',
];

const About = () => (
  <section id="sobre" className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Sobre Mim</h2>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Olá! Somos desenvolvedores Full-stack apaixonados por criar experiências digitais incríveis. Tenho experiência em diversas tecnologias modernas e adoro aprender coisas novas.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-blue-700">Habilidades:</h3>
      <ul className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About; 