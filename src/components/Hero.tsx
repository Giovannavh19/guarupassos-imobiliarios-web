
import React, { useState } from 'react';
import { FileText, Edit, CheckSquare, Calculator, Lock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
        'Circunscrição',
        'Documentos Mínimos Necessários',
        'Consultar Protocolos',
        'Pedido de Busca Indicador Pessoal',
        'Requerimentos',
        'Serviços Eletrônicos',
        'Usucapião Extrajudicial'
      ]
    },
    {
      id: 'titulos-e-documentos',
      icon: Edit,
      title: 'Títulos e Documentos',
      description: 'Registro de títulos diversos',
      path: '/titulos-e-documentos',
      submenu: [
        'Consulta de Protocolos de TD',
        'Requerimentos',
        'Serviço Eletrônico TD'
      ]
    },
    {
      id: 'pessoa-juridica',
      icon: CheckSquare,
      title: 'Pessoa Jurídica',
      description: 'Serviços para empresas',
      path: '/pessoa-juridica',
      submenu: [
        'Consulta de Protocolos de PJ',
        'Requerimentos',
        'Serviço Eletrônico PJ'
      ]
    },
    {
      id: 'protecao-de-dados',
      icon: Lock,
      title: 'Proteção de Dados',
      description: 'LGPD e proteção de dados',
      path: '/protecao-de-dados',
      submenu: [
        'Política de Privacidade - LGPD',
        'LGPD'
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

  return (
    <section className="bg-gradient-to-br from-stone-100 via-amber-50 to-red-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 flex">
        {/* Lado esquerdo com imagem e menu */}
        <div className="w-64 flex-shrink-0 mr-8">
          {/* Imagem */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/ff3ebd3b-7b7c-4387-bc68-f1db360bcf83.png" 
              alt="Vista aérea de Guarulhos"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Side Menu */}
          <div className="bg-green-600 rounded-lg shadow-lg p-4 relative overflow-hidden">
            {/* Marca d'água */}
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/lovable-uploads/ff3ebd3b-7b7c-4387-bc68-f1db360bcf83.png')`
              }}
            ></div>
            
            {/* Conteúdo do menu */}
            <div className="relative z-10">
              <nav className="space-y-2 mb-4">
                {sideMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-sm text-white hover:text-green-200 hover:bg-green-700 px-2 py-1 rounded transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              
              {/* Social Media Icons */}
              <div className="border-t border-green-500 pt-4">
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
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Link
                    to={service.path}
                    className="bg-white rounded-lg shadow-md border-2 border-red-200 p-6 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer block"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white p-4 rounded-full mb-4 border-2 border-red-900 shadow-md">
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
                    <div className="absolute top-full left-0 mt-2 bg-green-600 rounded-lg shadow-lg border-2 border-green-500 p-4 z-50 min-w-64 relative overflow-hidden">
                      {/* Marca d'água */}
                      <div 
                        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('/lovable-uploads/ff3ebd3b-7b7c-4387-bc68-f1db360bcf83.png')`
                        }}
                      ></div>
                      
                      {/* Conteúdo do dropdown */}
                      <div className="relative z-10">
                        <h4 className="font-bold text-white mb-3 text-sm">{service.title}</h4>
                        <ul className="space-y-2">
                          {service.submenu.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="block text-sm text-green-100 hover:text-white hover:bg-green-700 px-2 py-1 rounded transition-colors"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
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
