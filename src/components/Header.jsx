import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-wider">
          <Link to="/">PIZZARIA JESUS 🍕</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 font-semibold">
            <li><Link to="/" className="hover:text-yellow-300 transition-colors">Início</Link></li>
            <li><Link to="/cardapio" className="hover:text-yellow-300 transition-colors">Cardápio</Link></li>
            <li><Link to="/carrinho" className="hover:text-yellow-300 transition-colors">Carrinho</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}