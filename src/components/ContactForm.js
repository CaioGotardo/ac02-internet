import React from 'react';

const ContactForm = () => (
  <section id="contato" className="py-20 bg-blue-50">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Contato</h2>
      <form className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-4 animate-fade-in">
        <input
          type="text"
          placeholder="Seu nome"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-900"
          disabled
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-900"
          disabled
        />
        <textarea
          placeholder="Sua mensagem"
          className="border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-gray-900"
          disabled
        />
        <button
          type="submit"
          className="bg-blue-700 text-white rounded px-6 py-2 font-semibold cursor-not-allowed opacity-80"
          disabled
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm; 