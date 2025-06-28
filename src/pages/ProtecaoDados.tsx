
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Lock, Shield, FileText, User, AlertCircle } from 'lucide-react';

const ProtecaoDados = () => {
  const principios = [
    {
      titulo: 'Finalidade',
      descricao: 'Tratamos dados apenas para propósitos legítimos e específicos'
    },
    {
      titulo: 'Adequação',
      descricao: 'Coleta compatível com as finalidades informadas ao titular'
    },
    {
      titulo: 'Necessidade',
      descricao: 'Limitação ao mínimo necessário para alcançar suas finalidades'
    },
    {
      titulo: 'Transparência',
      descricao: 'Informações claras e acessíveis sobre o tratamento'
    },
    {
      titulo: 'Segurança',
      descricao: 'Medidas técnicas e administrativas para proteger os dados'
    },
    {
      titulo: 'Prevenção',
      descricao: 'Adoção de medidas para prevenir danos aos titulares'
    }
  ];

  const direitos = [
    'Confirmação da existência de tratamento',
    'Acesso aos dados pessoais',
    'Correção de dados incompletos ou inexatos',
    'Anonimização, bloqueio ou eliminação',
    'Portabilidade dos dados',
    'Eliminação após consentimento ou fim do tratamento',
    'Informação sobre compartilhamento',
    'Revogação do consentimento'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Proteção de Dados - LGPD</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            O 2º Registro de Imóveis e Anexos de Guarulhos está comprometido com a 
            proteção de dados pessoais, em conformidade com a Lei Geral de Proteção 
            de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Shield className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Segurança</h3>
              <p className="text-sm text-blue-700">Proteção adequada dos seus dados</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <User className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Privacidade</h3>
              <p className="text-sm text-green-700">Respeito aos seus direitos</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <FileText className="text-purple-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-purple-800 mb-2">Transparência</h3>
              <p className="text-sm text-purple-700">Informações claras sobre o tratamento</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Princípios que Seguimos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principios.map((principio, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{principio.titulo}</h3>
                  <p className="text-sm text-gray-600">{principio.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Seus Direitos</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-green-800 mb-4">Como titular de dados pessoais, você tem direito a:</p>
                <ul className="space-y-2">
                  {direitos.map((direito, index) => (
                    <li key={index} className="flex items-start text-sm text-green-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {direito}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Como Exercer seus Direitos</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Encarregado de Dados</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Entre em contato com nosso Encarregado de Proteção de Dados:
                  </p>
                  <p className="text-sm text-red-700 font-medium">
                    E-mail: lgpd@2registro.com.br<br />
                    Telefone: (11) 2408-4500
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Solicitações</h3>
                  <p className="text-sm text-gray-600">
                    Suas solicitações serão analisadas e respondidas em até 15 dias. 
                    Pode ser necessário prorrogar por mais 15 dias, mediante justificativa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="text-red-700 mr-4 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Tratamento de Dados</h3>
                <p className="text-red-700 text-sm mb-3">
                  Coletamos e tratamos dados pessoais para:
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Prestação de serviços registrais e notariais</li>
                  <li>• Cumprimento de obrigações legais</li>
                  <li>• Exercício regular de direitos</li>
                  <li>• Proteção da vida e segurança física</li>
                  <li>• Atendimento de interesses legítimos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4">Documentos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <FileText className="text-red-700 mr-3" size={20} />
                <span className="text-gray-800 hover:text-red-700">Política de Privacidade Completa</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <FileText className="text-red-700 mr-3" size={20} />
                <span className="text-gray-800 hover:text-red-700">Termos de Uso</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProtecaoDados;
