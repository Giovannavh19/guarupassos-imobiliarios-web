
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
    }, 500);
  };

  const handleSubmenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <section className="bg-gradient-to-br from-stone-100 via-amber-50 to-red-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 flex">
        {/* Lado esquerdo com menu */}
        <div className="w-64 flex-shrink-0 mr-8">
          {/* Side Menu */}
          <div className="bg-green-800 rounded-lg shadow-lg p-4">
            <nav className="space-y-2 mb-4">
              {sideMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-sm text-white hover:text-green-200 hover:bg-green-900 px-2 py-1 rounded transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            
            {/* Social Media Icons */}
            <div className="border-t border-green-700 pt-4">
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-200 transition-colors"
                >
                  <span className="text-xl">📱</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1">
          {/* Logo destacada acima dos blocos */}
          <div className="mb-12 text-center">
            <div className="inline-block">
              <img 
                src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                alt="Logo do Cartório"
                className="h-48 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Main Content - Grid de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, serviceIndex) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={service.path}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer block"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white p-4 rounded-full mb-4 shadow-md">
                        <IconComponent className="text-red-900" size={24} strokeWidth={1} />
                      </div>
                      <h3 className="font-bold text-red-900 text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-red-700 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </Link>

                  {/* Dropdown Menu */}
                  {service.submenu && hoveredService === service.id && (
                    <div 
                      className="absolute top-full left-0 mt-2 rounded-lg shadow-lg border-2 p-4 z-[9999] min-w-64"
                      style={{ backgroundColor: '#798146', borderColor: '#6b7239' }}
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
