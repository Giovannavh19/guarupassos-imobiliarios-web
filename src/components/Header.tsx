
import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Registro de Imóveis',
      id: 'registro-de-imoveis',
      items: [
        'Circunscrição',
        'Documentos Mínimos Necessários',
        'Consultar Protocolos',
        'Requerimentos',
        'Serviços Eletrônicos',
        'Usucapião Extrajudicial'
      ]
    },
    {
      title: 'Títulos e Documentos',
      id: 'titulos-e-documentos',
      items: [
        'Consulta de Protocolos de TD',
        'Requerimentos',
        'Serviço Eletrônico TD'
      ]
    },
    {
      title: 'Pessoa Jurídica',
      id: 'pessoa-juridica',
      items: [
        'Consulta de Protocolos de PJ',
        'Requerimentos',
        'Serviço Eletrônico PJ'
      ]
    },
    {
      title: 'Tabelas de Custas',
      id: 'tabelas-de-custas',
      items: []
    },
    {
      title: 'Pesquisa de Satisfação',
      id: 'pesquisa-de-satisfacao',
      items: []
    },
    {
      title: 'Fale Conosco',
      id: 'fale-conosco',
      items: []
    },
    {
      title: 'Compliance',
      id: 'compliance',
      items: []
    },
    {
      title: 'Proteção de Dados',
      id: 'protecao-de-dados',
      items: [
        'Política de Privacidade - LGPD',
        'LGPD'
      ]
    },
    {
      title: 'Serventia',
      id: 'serventia',
      items: [
        'Missão, Visão e Valores',
        'O que fazemos',
        'Política da Qualidade',
        'Responsabilidade Socioambiental',
        'Mapa de Localização'
      ]
    },
    {
      title: 'Trabalhe Conosco',
      id: 'trabalhe-conosco',
      items: []
    },
    {
      title: 'Mapa do Site',
      id: 'mapa-do-site',
      items: []
    }
  ];

  const handleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleItemClick = (parentTitle: string, itemTitle?: string) => {
    console.log(`Navegando para: ${parentTitle}${itemTitle ? ` > ${itemTitle}` : ''}`);
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
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                alt="2º Registro de Imóveis e Anexos de Guarulhos"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {menuItems.slice(0, 6).map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => item.items.length > 0 ? handleDropdown(item.id) : handleItemClick(item.title)}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.title}
                    {item.items.length > 0 && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                  
                  {item.items.length > 0 && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border z-50">
                      <div className="py-2">
                        {item.items.map((subItem, index) => (
                          <button
                            key={index}
                            onClick={() => handleItemClick(item.title, subItem)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                          >
                            {subItem}
                          </button>
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
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden border-t py-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => item.items.length > 0 ? handleDropdown(item.id) : handleItemClick(item.title)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {item.title}
                      {item.items.length > 0 && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>
                    
                    {item.items.length > 0 && activeDropdown === item.id && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem, index) => (
                          <button
                            key={index}
                            onClick={() => handleItemClick(item.title, subItem)}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                          >
                            {subItem}
                          </button>
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
