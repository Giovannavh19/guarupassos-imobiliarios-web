
import React from 'react';
import { Home, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
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
            Horário de Atendimento: Segunda a Sexta, 09h às 16h
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-red-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            {/* Home Icon */}
            <Link to="/" className="text-white hover:text-red-200 transition-colors absolute left-4">
              <Home size={28} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
