import React, { useState, useEffect } from 'react';
import PizzaCard from "../components/PizzaCard.jsx";

export default function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Erro ao buscar o cardápio:", error));
  }, []);

  const adicionarAoCarrinho = (pizza) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemExistente = carrinhoAtual.find(item => item.id === pizza.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinhoAtual.push({ ...pizza, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    alert(`${pizza.nome} adicionada ao carrinho!`);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-black text-stone-900 mb-8 text-center border-b-4 border-red-600 inline-block pb-2">
        Nosso Cardápio Celestial
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onAdicionar={adicionarAoCarrinho} />
        ))}
      </div>
    </section>
  );
}