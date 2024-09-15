import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-70' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-1xl font-bold text-white tracking-wide">
          #NotEverythingBelongsToTheSea.
        </Link>

        {/* Links para escritorio */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/about">Nosotros</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/donations">Donaciones</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>

        {/* Botón de menú para dispositivos móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 py-4">
          <ul className="space-y-4 text-center text-white">
            <li>
              <Link href="/about" onClick={toggleMenu}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/donation" onClick={toggleMenu}>
                Donaciones
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
