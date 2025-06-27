
import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Serviços Registrais
              <span className="block text-red-700">Confiáveis e Seguros</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O 2º Registro de Imóveis e Anexos de Guarulhos oferece serviços especializados 
              em registro de imóveis, títulos e documentos, e registro de pessoa jurídica 
              com excelência e tradição.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-red-700 p-3 rounded-full">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Segurança</h3>
                  <p className="text-sm text-gray-600">Jurídica garantida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-700 p-3 rounded-full">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Agilidade</h3>
                  <p className="text-sm text-gray-600">No atendimento</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-red-700 p-3 rounded-full">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Tradição</h3>
                  <p className="text-sm text-gray-600">E confiabilidade</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicos"
                className="bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors text-center"
              >
                Nossos Serviços
              </a>
              <a
                href="#fale-conosco"
                className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors text-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/fb45b759-a39c-40f4-8d01-26b1ce494cb2.png"
              alt="Edifício do 2º Registro de Imóveis"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-red-700">35+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
