
import React, { useState, useRef, useEffect } from 'react';
import { FileText, Edit, CheckSquare, Calculator, Lock, Facebook, Instagram, Home, MapPin, Phone, MessageSquare, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredSideItem, setHoveredSideItem] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const backgroundImages = [
    '/lovable-uploads/0cf54159-739c-4a86-9453-166d31e1d3c8.png',
    '/lovable-uploads/faa61c82-f2c4-461b-88fc-f0b9135ff770.png'
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const services = [
    {
      id: 'tabelas-de-custas',
      title: 'Tabelas de Custas',
      path: '/tabelas-de-custas'
    },
    {
      id: 'registro-de-imoveis',
      title: 'Registro de Imóveis',
      path: '/registro-de-imoveis',
      submenu: [
        { title: 'Circunscrição', path: '/registro-de-imoveis/circunscricao' },
        { title: 'Documentos Mínimos Necessários', path: '/registro-de-imoveis/documentos' },
        { title: 'Consultar Protocolos', path: '/registro-de-imoveis/protocolos' },
        { title: 'Pedido de Busca Indicador Pessoal', path: '/registro-de-imoveis/busca' },
        { title: 'Requerimentos', path: '/registro-de-imoveis/requerimentos' },
        { title: 'Serviços Eletrônicos', path: '/registro-de-imoveis/servicos-eletronicos' },
        { title: 'Usucapião Extrajudicial', path: '/registro-de-imoveis/usucapiao' }
      ]
    },
    {
      id: 'titulos-e-documentos',
      title: 'Títulos e Documentos',
      path: '/titulos-e-documentos',
      submenu: [
        { title: 'Consulta de Protocolos de TD', path: '/titulos-e-documentos/protocolos' },
        { title: 'Requerimentos', path: '/titulos-e-documentos/requerimentos' },
        { title: 'Serviço Eletrônico TD', path: '/titulos-e-documentos/servico-eletronico' }
      ]
    },
    {
      id: 'pessoa-juridica',
      title: 'Pessoa Jurídica',
      path: '/pessoa-juridica',
      submenu: [
        { title: 'Consulta de Protocolos de PJ', path: '/pessoa-juridica/protocolos' },
        { title: 'Requerimentos', path: '/pessoa-juridica/requerimentos' },
        { title: 'Serviço Eletrônico PJ', path: '/pessoa-juridica/servico-eletronico' }
      ]
    },
    {
      id: 'protecao-de-dados',
      title: 'Proteção de Dados',
      path: '/protecao-de-dados',
      submenu: [
        { title: 'Política de Privacidade - LGPD', path: '/protecao-de-dados/politica-privacidade' },
        { title: 'LGPD', path: '/protecao-de-dados/lgpd' }
      ]
    }
  ];

  const sideMenuItems = [
    {
      id: 'pesquisa-de-satisfacao',
      title: 'Pesquisa de Satisfação',
      path: '/pesquisa-de-satisfacao',
      icon: MessageSquare,
      description: 'Avalie nossos serviços'
    },
    {
      id: 'fale-conosco',
      title: 'Fale Conosco',
      path: '/fale-conosco',
      icon: Phone,
      description: 'Entre em contato'
    },
    {
      id: 'serventia',
      title: 'Serventia',
      path: '/serventia',
      icon: Home,
      description: 'Sobre nós'
    },
    {
      id: 'trabalhe-conosco',
      title: 'Trabalhe Conosco',
      path: '/trabalhe-conosco',
      icon: Briefcase,
      description: 'Oportunidades de carreira'
    },
    {
      id: 'mapa-do-site',
      title: 'Mapa do Site',
      path: '#',
      icon: MapPin,
      description: 'Navegação do site'
    }
  ];

  const handleMouseEnter = (serviceId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredService(serviceId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredService(null);
    }, 500);
  };

  const handleSubmenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleSideItemMouseEnter = (itemId: string) => {
    setHoveredSideItem(itemId);
  };

  const handleSideItemMouseLeave = () => {
    setHoveredSideItem(null);
  };

  return (
    <section className="bg-gradient-to-br from-stone-100 via-amber-50 to-red-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 flex">
        {/* Lado esquerdo com menu */}
        <div className="w-64 flex-shrink-0 mr-8">
          {/* Side Menu */}
          <div className="rounded-lg shadow-lg p-4 bg-lime-900">
            <nav className="space-y-2 mb-4">
              {sideMenuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleSideItemMouseEnter(item.id)}
                    onMouseLeave={handleSideItemMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center text-sm text-white hover:text-green-200 hover:bg-green-900 px-2 py-2 rounded transition-all duration-300 transform hover:scale-105"
                    >
                      <IconComponent size={16} className="mr-2 transition-transform duration-300 hover:rotate-12" />
                      <span className={`transition-all duration-300 ${hoveredSideItem === item.id ? 'opacity-100' : 'opacity-80'}`}>
                        {item.title}
                      </span>
                    </Link>
                    
                    {/* Animated description tooltip */}
                    {hoveredSideItem === item.id && (
                      <div className="absolute left-full ml-2 top-0 bg-green-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50 whitespace-nowrap animate-fade-in">
                        {item.description}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent border-r-green-800"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            
            {/* Social Media Icons */}
            <div className="border-t border-green-700 pt-4">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-green-200 transition-colors transform hover:scale-110 duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors transform hover:scale-110 duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors transform hover:scale-110 duration-300">
                  <span className="text-xl">📱</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 relative">
          {/* Background watermark image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 transition-all duration-1000 pointer-events-none"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Logo destacada acima dos blocos */}
          <div className="mb-12 text-center relative z-10">
            <div className="inline-block">
              <img 
                src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                alt="Logo do Cartório" 
                className="h-48 w-auto mx-auto relative z-20" 
              />
            </div>
          </div>

          {/* Main Content - Títulos dos serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {services.map((service, serviceIndex) => {
              return (
                <div
                  key={service.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={service.path}
                    className="block text-center p-4 hover:bg-white/50 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="font-bold text-red-900 text-lg hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Dropdown Menu */}
                  {service.submenu && hoveredService === service.id && (
                    <div
                      className="absolute top-full left-0 mt-2 rounded-lg shadow-lg border-2 p-4 z-[9999] min-w-64 animate-fade-in"
                      style={{
                        backgroundColor: '#798146',
                        borderColor: '#6b7239'
                      }}
                      onMouseEnter={handleSubmenuMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h4 className="font-bold text-white mb-3 text-sm">{service.title}</h4>
                      <ul className="space-y-2">
                        {service.submenu.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.path}
                              className="block text-sm text-green-100 hover:text-white hover:bg-black/20 px-2 py-1 rounded transition-colors"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
