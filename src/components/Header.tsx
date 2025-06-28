
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Serventia',
      id: 'serventia',
      path: '/serventia',
      items: [
        { name: 'Missão, Visão e Valores', path: '/serventia#missao' },
        { name: 'O que fazemos', path: '/serventia#servicos' },
        { name: 'Política da Qualidade', path: '/serventia#qualidade' },
        { name: 'Responsabilidade Socioambiental', path: '/serventia#responsabilidade' },
        { name: 'Mapa de Localização', path: '/serventia#localizacao' }
      ]
    },
    {
      title: 'Trabalhe Conosco',
      id: 'trabalhe-conosco',
      path: '/trabalhe-conosco',
      items: []
    },
    {
      title: 'Pesquisa de Satisfação',
      id: 'pesquisa-de-satisfacao',
      path: '/pesquisa-de-satisfacao',
      items: []
    },
    {
      title: 'Fale Conosco',
      id: 'fale-conosco',
      path: '/fale-conosco',
      items: []
    },
    {
      title: 'Compliance',
      id: 'compliance',
      path: '/compliance',
      items: []
    },
    {
      title: 'Proteção de Dados',
      id: 'protecao-de-dados',
      path: '/protecao-de-dados',
      items: [
        { name: 'Política de Privacidade - LGPD', path: '/protecao-de-dados#politica' },
        { name: 'LGPD', path: '/protecao-de-dados#lgpd' }
      ]
    }
  ];

  const handleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleItemClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

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
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                  alt="2º Registro de Imóveis e Anexos de Guarulhos"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.items.length > 0 ? (
                    <button
                      onClick={() => handleDropdown(item.id)}
                      className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-amber-200 hover:bg-red-800 rounded-md transition-colors"
                    >
                      {item.title}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={handleItemClick}
                      className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-amber-200 hover:bg-red-800 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                  
                  {item.items.length > 0 && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border z-50">
                      <div className="py-2">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            onClick={handleItemClick}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-red-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden border-t border-red-800 py-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    {item.items.length > 0 ? (
                      <button
                        onClick={() => handleDropdown(item.id)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-white hover:text-amber-200 hover:bg-red-800 rounded-md transition-colors"
                      >
                        {item.title}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleItemClick}
                        className="flex items-center w-full px-3 py-2 text-sm font-medium text-white hover:text-amber-200 hover:bg-red-800 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                    
                    {item.items.length > 0 && activeDropdown === item.id && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            onClick={handleItemClick}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-amber-200 hover:bg-red-800 rounded-md transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
