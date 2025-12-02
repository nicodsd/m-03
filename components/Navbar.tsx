import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Demo', href: '#demo' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bone-100/90 backdrop-blur-md border-b border-bone-300 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-primary-600 p-2 rounded-lg shadow-lg shadow-primary-600/20">
              <UtensilsCrossed className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>QMenú</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-primary-600 hover:bg-bone-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#pricing" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-600/20">
                Crear Mi Menú
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-bone-200 inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-primary-600 hover:bg-bone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bone-100 focus:ring-primary-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bone-100 border-b border-bone-300 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-600 hover:text-primary-600 hover:bg-bone-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full text-center block mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-md text-base font-bold shadow-md">
              Crear Mi Menú
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};