import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const lidarComEnvio = (evento) => {
    evento.preventDefault();

    if (nome.trim().length < 3) {
      setErro('Por favor, digite um nome válido (mínimo 3 caracteres).');
      return;
    }
    if (endereco.trim().length < 8) {
      setErro('Por favor, informe seu endereço completo para a entrega.');
      return;
    }
    if (telefone.trim().length < 8) {
      setErro('Informe um número de telefone válido.');
      return;
    }

    setErro('');
    localStorage.removeItem('carrinho');
    alert(`Perfeito, ${nome}! Seu pedido foi enviado para a Pizzaria Jesus!`);
    navigate('/');
  };

  return (
    <section className="max-w-md mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-100">
        <h2 className="text-2xl font-black text-stone-900 mb-6">Informações de Entrega</h2>
        
        {erro && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-semibold mb-4 border border-red-200">
            {erro}
          </div>
        )}

        <form onSubmit={lidarComEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Nome Completo:</label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Ex: João da Silva"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Endereço de Entrega:</label>
            <input 
              type="text" 
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Rua, Número, Bairro"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">Telefone de Contato:</label>
            <input 
              type="tel" 
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="(42) 99999-9999"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg shadow transition-colors mt-6"
          >
            Confirmar e Enviar Pedido
          </button>
        </form>
      </div>
    </section>
  );
}