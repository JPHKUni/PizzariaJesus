import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItens(carrinhoSalvo);
  }, []);

  const removerItem = (id) => {
    const novoCarrinho = itens.filter(item => item.id !== id);
    setItens(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-black text-stone-900 mb-8">Seu Carrinho</h2>
      {itens.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border">
          <p className="text-stone-500 mb-4">Você ainda não escolheu seus sabores!.</p>
          <Link to="/cardapio" className="text-red-600 font-bold hover:underline">Voltar para o cardápio</Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <div className="space-y-4">
            {itens.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-stone-900">{item.nome}</h3>
                  <p className="text-sm text-stone-500">Qtd: {item.quantidade}x</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-stone-800">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  <button 
                    onClick={() => removerItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center pt-4 border-t-2 border-stone-100">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-black text-red-600">R$ {calcularTotal().toFixed(2)}</span>
          </div>
          <div className="mt-8 text-right">
            <Link to="/checkout" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors inline-block">
              Finalizar Pedido
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}