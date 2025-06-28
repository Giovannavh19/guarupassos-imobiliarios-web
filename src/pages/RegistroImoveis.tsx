
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, FileText, MapPin, Clock } from 'lucide-react';

const RegistroImoveis = () => {
  const servicos = [
    {
      titulo: 'Registro de Escrituras',
      descricao: 'Registro de escrituras de compra e venda, doação, permuta e outros',
      prazo: '5 dias úteis'
    },
    {
      titulo: 'Certidões',
      descricao: 'Certidões de matrícula, negativas e de inteiro teor',
      prazo: '24 horas'
    },
    {
      titulo: 'Averbações',
      descricao: 'Averbação de construção, demolição, alteração e outros',
      prazo: '3 dias úteis'
    },
    {
      titulo: 'Usucapião Extrajudicial',
      descricao: 'Processamento de usucapião pela via administrativa',
      prazo: '30 dias úteis'
    }
  ];

  const documentos = [
    'Escritura pública ou contrato de compra e venda',
    'Certidão de casamento ou nascimento',
    'CPF e RG das partes',
    'Comprovante de pagamento do ITBI',
    'Certidão negativa de débitos municipais',
    'Planta do imóvel (quando necessário)'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Home className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Registro de Imóveis</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            O 2º Registro de Imóveis e Anexos de Guarulhos é responsável pela publicidade, 
            autenticidade, segurança e eficácia dos atos jurídicos relacionados a imóveis 
            em nossa circunscrição.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <FileText className="mr-2" size={24} />
                Nossos Serviços
              </h2>
              <div className="space-y-4">
                {servicos.map((servico, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                    <h3 className="font-bold text-gray-800">{servico.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-1">{servico.descricao}</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>Prazo: {servico.prazo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <MapPin className="mr-2" size={24} />
                Circunscrição
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-red-800 font-medium mb-2">Área de Abrangência:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Bairro Centro</li>
                  <li>• Vila Galvão</li>
                  <li>• Jardim Maia</li>
                  <li>• Vila Augusta</li>
                  <li>• Macedo</li>
                  <li>• E demais bairros da região</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-red-800 mb-4">Documentos Necessários</h3>
              <ul className="space-y-2">
                {documentos.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-800 to-red-700 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
            <p className="mb-6">Nossa equipe está pronta para orientá-lo em todos os procedimentos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(11)2408-4500" className="bg-white text-red-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Ligar: (11) 2408-4500
              </a>
              <a href="/fale-conosco" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-800 transition-colors">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistroImoveis;
