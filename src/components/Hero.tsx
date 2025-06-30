
import React, { useState } from 'react';
import { FileText, Edit, CheckSquare, Calculator, Shield, Lock } from 'lucide-react';
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
      {/* Side Menu */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-white rounded-lg shadow-lg border-2 border-red-200 p-4">
          <nav className="space-y-2">
            {sideMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-sm text-red-800 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pl-32">
        {/* Logo destacada acima dos blocos */}
        <div className="mb-12 text-center">
          <div className="bg-white rounded-lg shadow-lg border-2 border-red-300 p-8 inline-block">
            <img 
              src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
              alt="Logo do Cartório"
              className="h-24 w-auto mx-auto"
            />
          </div>
        </div>

        {/* Main Content - Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
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
                    <div className="bg-red-900 p-4 rounded-full mb-4 border-4 border-red-300 shadow-md">
                      <IconComponent className="text-white" size={24} strokeWidth={1} />
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
                  <div className="absolute top-0 left-full ml-2 bg-white rounded-lg shadow-lg border-2 border-red-200 p-4 z-50 min-w-64">
                    <h4 className="font-bold text-red-900 mb-3 text-sm">{service.title}</h4>
                    <ul className="space-y-2">
                      {service.submenu.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block text-sm text-red-700 hover:text-red-900 hover:bg-red-50 px-2 py-1 rounded transition-colors"
                          >
                            {item}
                          </a>
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
    </section>
  );
};

export default Hero;
