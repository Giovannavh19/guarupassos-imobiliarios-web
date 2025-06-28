
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(11) 2408-4500</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Guarulhos - SP</span>
            </div>
          </div>
          <div className="text-xs">
            Horário de Atendimento: Segunda a Sexta, 9h às 17h
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-red-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Title area - now empty */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-white text-xl font-bold">
                Cartório
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-red-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
