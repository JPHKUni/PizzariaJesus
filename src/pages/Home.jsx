import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="bg-amber-100 rounded-3xl p-8 md:p-16 shadow-inner border border-amber-200">
        <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-4">
          A Melhor Pizza da Região!
        </h2>
        <p className="text-lg text-stone-700 mb-8 max-w-xl mx-auto">
          Massa artesanal de longa fermentação, ingredientes selecionados e um sabor genuinamente divino.
        </p>
        <Link 
          to="/cardapio" 
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-block"
        >
          Ver Nosso Cardápio
        </Link>
      </div>
    </section>
  );
}