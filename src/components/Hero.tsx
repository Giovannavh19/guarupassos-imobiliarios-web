
import React, { useState, useRef } from 'react';
import { FileText, Edit, CheckSquare, Calculator, Lock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      id: 'tabelas-de-custas',
      icon: Calculator,
      title: 'Tabelas de Custas',
      description: 'Consulte os valores dos serviços',
      path: '/tabelas-de-custas'
    },
    {
      id: 'registro-de-imoveis',
      icon: FileText,
      title: 'Registro de Imóveis',
      description: 'Serviços de registro imobiliário',
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
      icon: Edit,
      title: 'Títulos e Documentos',
      description: 'Registro de títulos diversos',
      path: '/titulos-e-documentos',
      submenu: [
        { title: 'Consulta de Protocolos de TD', path: '/titulos-e-documentos/protocolos' },
        { title: 'Requerimentos', path: '/titulos-e-documentos/requerimentos' },
        { title: 'Serviço Eletrônico TD', path: '/titulos-e-documentos/servico-eletronico' }
      ]
    },
    {
      id: 'pessoa-juridica',
      icon: CheckSquare,
      title: 'Pessoa Jurídica',
      description: 'Serviços para empresas',
      path: '/pessoa-juridica',
      submenu: [
        { title: 'Consulta de Protocolos de PJ', path: '/pessoa-juridica/protocolos' },
        { title: 'Requerimentos', path: '/pessoa-juridica/requerimentos' },
        { title: 'Serviço Eletrônico PJ', path: '/pessoa-juridica/servico-eletronico' }
      ]
    },
    {
      id: 'protecao-de-dados',
      icon: Lock,
      title: 'Proteção de Dados',
      description: 'LGPD e proteção de dados',
      path: '/protecao-de-dados',
      submenu: [
        { title: 'Política de Privacidade - LGPD', path: '/protecao-de-dados/politica-privacidade' },
        { title: 'LGPD', path: '/protecao-de-dados/lgpd' }
      ]
    }
  ];

  const sideMenuItems = [
    { title: 'Pesquisa de Satisfação', path: '/pesquisa-de-satisfacao' },
    { title: 'Fale Conosco', path: '/fale-conosco' },
    { title: 'Serventia', path: '/serventia' },
    { title: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
    { title: 'Mapa do Site', path: '#' }
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
    }, 750);
  };

  const handleSubmenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <section className="bg-gradient-to-br from-stone-100 via-amber-50 to-red-50 py-8 lg:py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-900 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-800 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-600 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Side Menu - Mobile: Top, Desktop: Left */}
        <div className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1">
          <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-xl shadow-2xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-300">
            <nav className="space-y-2 mb-6">
              {sideMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="group block text-sm text-white hover:text-green-200 hover:bg-green-700/50 px-3 py-2 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                >
                  <span className="relative">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </nav>
            
            {/* Social Media Icons */}
            <div className="border-t border-green-700/50 pt-4">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <span className="text-2xl">📱</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 order-1 lg:order-2">
          {/* Logo destacada acima dos blocos */}
          <div className="mb-8 lg:mb-12 text-center animate-fade-in">
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                alt="Logo do Cartório"
                className="h-32 sm:h-40 lg:h-48 w-auto mx-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Main Content - Grid de serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {services.map((service, serviceIndex) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={service.path}
                    className="bg-white rounded-xl shadow-lg border-2 border-red-200 p-4 lg:p-6 hover:shadow-2xl hover:border-red-400 transition-all duration-300 cursor-pointer block transform hover:-translate-y-2 hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-red-50"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-white to-red-50 p-3 lg:p-4 rounded-full mb-3 lg:mb-4 border-2 border-red-900 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                        <IconComponent className="text-red-900" size={20} strokeWidth={1} />
                      </div>
                      <h3 className="font-bold text-red-900 text-base lg:text-lg mb-2 group-hover:text-red-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-red-700 text-xs lg:text-sm group-hover:text-red-600 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Dropdown Menu */}
                  {service.submenu && hoveredService === service.id && (
                    <div 
                      className="absolute top-full left-0 mt-2 bg-gradient-to-br from-green-800 to-green-900 rounded-xl shadow-2xl border-2 border-green-700 p-4 z-50 min-w-64 transform animate-scale-in"
                      onMouseEnter={handleSubmenuMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h4 className="font-bold text-white mb-3 text-sm border-b border-green-700 pb-2">{service.title}</h4>
                      <ul className="space-y-2">
                        {service.submenu.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.path}
                              className="group/item block text-sm text-green-100 hover:text-white hover:bg-green-700/50 px-3 py-2 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                            >
                              <span className="relative">
                                {item.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover/item:w-full transition-all duration-300"></span>
                              </span>
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
