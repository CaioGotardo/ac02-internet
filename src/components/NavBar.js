import React from 'react';

const NavBar = () => (
  <nav className="fixed top-0 left-0 w-full bg-blue-900 shadow-lg z-50">
    <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
      <span className="font-bold text-lg text-white">Meu Portfólio</span>
      <ul className="flex space-x-6">
        <li><a href="#inicio" className="text-white font-semibold hover:text-blue-300 transition-colors">Início</a></li>
        <li><a href="#projetos" className="text-white font-semibold hover:text-blue-300 transition-colors">Projetos</a></li>
        <li><a href="#sobre" className="text-white font-semibold hover:text-blue-300 transition-colors">Sobre</a></li>
        <li><a href="#contato" className="text-white font-semibold hover:text-blue-300 transition-colors">Contato</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar; 