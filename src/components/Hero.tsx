
import React from 'react';
import { FileText, Edit, CheckSquare, Calculator, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
      path: '/registro-de-imoveis'
    },
    {
      id: 'titulos-e-documentos',
      icon: Edit,
      title: 'Títulos e Documentos',
      description: 'Registro de títulos diversos',
      path: '/titulos-e-documentos'
    },
    {
      id: 'pessoa-juridica',
      icon: CheckSquare,
      title: 'Pessoa Jurídica',
      description: 'Serviços para empresas',
      path: '/pessoa-juridica'
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Compliance/Denúncia/Ouvidoria',
      description: 'Canal de denúncias e ouvidoria',
      path: '/compliance'
    },
    {
      id: 'protecao-de-dados',
      icon: Lock,
      title: 'Proteção de Dados',
      description: 'LGPD e proteção de dados',
      path: '/protecao-de-dados'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-stone-100 via-amber-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-red-900 mb-4">
            2º Registro de Imóveis e Anexos de Guarulhos
          </h1>
          <p className="text-lg text-red-800">
            Serviços registrais com qualidade e segurança jurídica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={service.path}
                className="bg-white rounded-lg shadow-md border-2 border-red-200 p-6 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-900 p-4 rounded-full mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-red-900 text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-red-700 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
