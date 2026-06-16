import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pizzaria Jesus - Todos os direitos reservados.</p>
        <p className="mt-2 text-stone-600">Feito com React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}