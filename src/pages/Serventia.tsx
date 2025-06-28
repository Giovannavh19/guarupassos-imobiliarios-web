
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Target, Award, Leaf, MapPin } from 'lucide-react';

const Serventia = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Building className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Nossa Serventia</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Com mais de 35 anos de tradição em serviços registrais, o 2º Registro de 
            Imóveis e Anexos de Guarulhos tem o compromisso de oferecer segurança 
            jurídica e excelência no atendimento.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="text-red-700 mr-3" size={24} />
                <h2 className="text-xl font-bold text-red-800">Missão</h2>
              </div>
              <p className="text-red-700">
                Prestar serviços registrais com excelência, segurança jurídica e 
                transparência, contribuindo para o desenvolvimento social e econômico 
                da comunidade de Guarulhos.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="text-blue-700 mr-3" size={24} />
                <h2 className="text-xl font-bold text-blue-800">Visão</h2>
              </div>
              <p className="text-blue-700">
                Ser reconhecida como a melhor serventia registral da região, 
                referência em qualidade, inovação e atendimento humanizado.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <Award className="text-green-700 mr-3" size={24} />
              <h2 className="text-xl font-bold text-green-800">Nossos Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-bold text-green-800 mb-2">Ética</h3>
                <p className="text-sm text-green-700">Conduta íntegra e transparente</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-green-800 mb-2">Excelência</h3>
                <p className="text-sm text-green-700">Busca contínua pela qualidade</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-green-800 mb-2">Inovação</h3>
                <p className="text-sm text-green-700">Modernização constante</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">O que Fazemos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Registro de Imóveis</h3>
                <p className="text-gray-600 text-sm">
                  Registro de escrituras, contratos, certidões e averbações relacionadas a imóveis.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Títulos e Documentos</h3>
                <p className="text-gray-600 text-sm">
                  Registro de contratos, procurações e documentos que não sejam de competência específica.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Pessoa Jurídica</h3>
                <p className="text-gray-600 text-sm">
                  Registro de associações, fundações e outras entidades sem fins lucrativos.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Usucapião Extrajudicial</h3>
                <p className="text-gray-600 text-sm">
                  Processamento de usucapião pela via administrativa, mais rápida e econômica.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Award className="text-red-800 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-red-800">Política da Qualidade</h2>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-amber-800 mb-4">
                Nosso compromisso é prestar serviços que superem as expectativas dos usuários, 
                através de:
              </p>
              <ul className="space-y-2 text-amber-700">
                <li>• Melhoria contínua dos processos</li>
                <li>• Capacitação permanente da equipe</li>
                <li>• Modernização tecnológica</li>
                <li>• Atendimento humanizado</li>
                <li>• Cumprimento rigoroso da legislação</li>
                <li>• Transparência em todos os atos</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Leaf className="text-green-800 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-green-800">Responsabilidade Socioambiental</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-3">Meio Ambiente</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Digitalização de processos</li>
                  <li>• Redução do consumo de papel</li>
                  <li>• Coleta seletiva de resíduos</li>
                  <li>• Economia de energia elétrica</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-800 mb-3">Responsabilidade Social</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Programas de inclusão social</li>
                  <li>• Apoio a instituições de caridade</li>
                  <li>• Orientação jurídica gratuita</li>
                  <li>• Parcerias com ONGs locais</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="text-red-800 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-red-800">Localização</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Endereço</h3>
                <p className="text-gray-600 mb-4">
                  Rua das Flores, 123<br />
                  Centro - Guarulhos/SP<br />
                  CEP: 07010-000
                </p>
                <h3 className="font-bold text-gray-800 mb-3">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 9h às 17h<br />
                  Sábados, Domingos e Feriados: Fechado
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center">
                <p className="text-gray-500">Mapa da Localização</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Serventia;
