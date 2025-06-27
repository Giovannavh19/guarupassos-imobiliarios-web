
import React from 'react';
import { Shield, Users, FileCheck, AlertTriangle } from 'lucide-react';

const AdditionalInfo = () => {
  const infoSections = [
    {
      id: 'compliance',
      icon: Shield,
      title: 'Compliance/Denúncia/Ouvidoria',
      description: 'Canal oficial para denúncias, sugestões e ouvidoria.',
      color: 'red'
    },
    {
      id: 'protecao-dados',
      icon: FileCheck,
      title: 'Proteção de Dados',
      description: 'Informações sobre LGPD e proteção de dados pessoais.',
      color: 'green',
      items: [
        'Política de Privacidade - LGPD',
        'LGPD'
      ]
    },
    {
      id: 'serventia',
      icon: Users,
      title: 'Serventia',
      description: 'Informações institucionais e histórico da serventia.',
      color: 'red',
      items: [
        'Missão, Visão e Valores',
        'O que fazemos',
        'Política da Qualidade',
        'Responsabilidade Socioambiental',
        'Mapa de Localização'
      ]
    },
    {
      id: 'trabalhe-conosco',
      icon: AlertTriangle,
      title: 'Trabalhe Conosco',
      description: 'Oportunidades de carreira e processo seletivo.',
      color: 'green'
    }
  ];

  const handleClick = (sectionTitle: string, item?: string) => {
    console.log(`Navegando para: ${sectionTitle}${item ? ` > ${item}` : ''}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Informações Institucionais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparência, ética e compromisso com a excelência no atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoSections.map((section) => {
            const IconComponent = section.icon;
            const colorClass = section.color === 'red' ? 'red-700' : 'green-700';
            
            return (
              <div
                key={section.id}
                className="text-center group"
              >
                <div className={`bg-${colorClass} p-6 rounded-full inline-flex mb-6 group-hover:scale-110 transition-transform cursor-pointer`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {section.description}
                </p>
                
                {section.items && (
                  <div className="space-y-2 mb-4">
                    {section.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleClick(section.title, item)}
                        className={`block w-full text-sm text-${colorClass} hover:underline transition-colors`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => handleClick(section.title)}
                  className={`text-${colorClass} font-medium hover:underline transition-colors`}
                >
                  Saiba mais →
                </button>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/f35b8183-fa0c-4d98-8b97-6387b55153d6.png"
              alt="Vista aérea de Guarulhos"
              className="w-full h-64 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Servindo Guarulhos com Excelência
                </h3>
                <p className="text-lg opacity-90">
                  Tradição e modernidade em serviços registrais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
