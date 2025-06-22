import React from 'react';

const Hero = () => (
  <section id="inicio" className="relative flex items-center justify-center h-screen min-h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/globe.svg)' }}>
    <div className="absolute inset-0 bg-blue-950 bg-opacity-70" />
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in drop-shadow-lg text-blue-300">Bem-vindo ao Nosso Portfólio!</h1>
      <p className="text-lg md:text-2xl animate-fade-in delay-200 drop-shadow">Desenvolvedor Full-stack apaixonado por tecnologia.</p>
    </div>
  </section>
);

export default Hero; 