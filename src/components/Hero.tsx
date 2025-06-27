
import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  const handleButtonClick = (action: string) => {
    console.log(`Botão clicado: ${action}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Serviços Registrais
            <span className="block text-red-700">Confiáveis e Seguros</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Oferecemos serviços especializados em registro de imóveis, títulos e documentos, 
            e registro de pessoa jurídica com excelência e tradição há mais de 35 anos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md">
              <div className="bg-red-700 p-3 rounded-full">
                <Shield className="text-white" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800">Segurança Jurídica</h3>
                <p className="text-sm text-gray-600">Garantida em todos os processos</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md">
              <div className="bg-green-700 p-3 rounded-full">
                <Clock className="text-white" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800">Agilidade</h3>
                <p className="text-sm text-gray-600">No atendimento e processamento</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md">
              <div className="bg-red-700 p-3 rounded-full">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800">Tradição</h3>
                <p className="text-sm text-gray-600">Mais de 35 anos de experiência</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleButtonClick('Nossos Serviços')}
              className="bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => handleButtonClick('Fale Conosco')}
              className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
      
      {/* Logo positioned at bottom */}
      <div className="text-center mt-16">
        <div className="flex flex-col items-center space-y-3">
          <img 
            src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
            alt="2º Registro de Imóveis e Anexos de Guarulhos"
            className="h-16 w-auto"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              2º Registro de Imóveis
            </h1>
            <p className="text-lg text-gray-600">e Anexos de Guarulhos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
