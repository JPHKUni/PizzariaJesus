import React from 'react';

export default function PizzaCard({ pizza, onAdicionar }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-stone-100 flex flex-col justify-between">
      <img src={pizza.imagem} alt={pizza.nome} className="w-full h-48 object-cover" />
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-stone-900 mb-2">{pizza.nome}</h3>
          <p className="text-stone-600 text-sm mb-4 leading-relaxed">{pizza.ingredientes}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-black text-red-600">
            R$ {pizza.preco.toFixed(2).replace('.', ',')}
          </span>
          <button
            onClick={() => onAdicionar(pizza)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}