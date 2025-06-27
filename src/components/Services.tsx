
import React from 'react';
import { Home, FileText, Building2, Calculator, MessageSquare, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'registro-de-imoveis',
      icon: Home,
      title: 'Registro de Imóveis',
      description: 'Registros, certidões e informações sobre imóveis em Guarulhos.',
      items: [
        'Registro de escrituras',
        'Certidões de propriedade',
        'Averbações diversas',
        'Consultas online'
      ]
    },
    {
      id: 'titulos-e-documentos',
      icon: FileText,
      title: 'Títulos e Documentos',
      description: 'Registro e autenticação de documentos diversos.',
      items: [
        'Registro de contratos',
        'Autenticação de documentos',
        'Reconhecimento de firmas',
        'Procurações'
      ]
    },
    {
      id: 'pessoa-juridica',
      icon: Building2,
      title: 'Pessoa Jurídica',
      description: 'Serviços especializados para empresas e organizações.',
      items: [
        'Registro de estatutos',
        'Atas de assembleias',
        'Alterações contratuais',
        'Certidões empresariais'
      ]
    },
    {
      id: 'tabelas-de-custas',
      icon: Calculator,
      title: 'Tabelas de Custas e Emolumentos',
      description: 'Consulte os valores atualizados dos nossos serviços.',
      items: [
        'Valores de registro',
        'Custas de certidões',
        'Emolumentos diversos',
        'Formas de pagamento'
      ]
    },
    {
      id: 'pesquisa-de-satisfacao',
      icon: MessageSquare,
      title: 'Pesquisa de Satisfação',
      description: 'Sua opinião é importante para nós. Avalie nossos serviços.',
      items: [
        'Avaliação do atendimento',
        'Sugestões de melhoria',
        'Feedback dos serviços',
        'Questionário online'
      ]
    },
    {
      id: 'fale-conosco',
      icon: Phone,
      title: 'Fale Conosco',
      description: 'Entre em contato conosco para esclarecimentos e informações.',
      items: [
        'Atendimento telefônico',
        'E-mail institucional',
        'Formulário de contato',
        'Endereço e horários'
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços registrais com qualidade, 
            segurança jurídica e atendimento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-red-700 to-green-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-gradient-to-r from-red-700 to-green-700 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Saiba Mais
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
