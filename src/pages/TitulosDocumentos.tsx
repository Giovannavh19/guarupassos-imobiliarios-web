
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Edit, FileCheck, Shield, Clock } from 'lucide-react';

const TitulosDocumentos = () => {
  const servicos = [
    {
      titulo: 'Registro de Contratos',
      descricao: 'Contratos de prestação de serviços, locação, comodato e outros',
      documentos: ['Contrato original', 'RG e CPF das partes', 'Comprovante de endereço']
    },
    {
      titulo: 'Autenticação de Documentos',
      descricao: 'Reconhecimento de firma e autenticação de cópias',
      documentos: ['Documento original', 'RG do solicitante', 'Procuração (se necessário)']
    },
    {
      titulo: 'Registro de Pessoa Jurídica',
      descricao: 'Constituição, alteração e extinção de pessoas jurídicas',
      documentos: ['Ata ou contrato social', 'RG e CPF dos sócios', 'Comprovante de endereço']
    },
    {
      titulo: 'Protesto de Títulos',
      descricao: 'Protesto de duplicatas, notas promissórias e outros títulos',
      documentos: ['Título original', 'Comprovante de entrega', 'Dados do devedor']
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Edit className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Títulos e Documentos</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            O Registro de Títulos e Documentos tem por finalidade registrar documentos 
            que não sejam de competência de outro registro, proporcionando segurança 
            jurídica e publicidade aos atos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <FileCheck className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Segurança Jurídica</h3>
              <p className="text-sm text-blue-700">Documentos com fé pública</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <Shield className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Publicidade</h3>
              <p className="text-sm text-green-700">Oponibilidade contra terceiros</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <Clock className="text-purple-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-purple-800 mb-2">Agilidade</h3>
              <p className="text-sm text-purple-700">Atendimento rápido e eficiente</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Nossos Serviços</h2>
            
            {servicos.map((servico, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{servico.titulo}</h3>
                <p className="text-gray-600 mb-4">{servico.descricao}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Documentos Necessários:</h4>
                  <ul className="space-y-1">
                    {servico.documentos.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-800 mb-3">Documentos que podem ser registrados:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Contratos de prestação de serviços</li>
                <li>• Contratos de locação</li>
                <li>• Procurações</li>
                <li>• Estatutos sociais</li>
                <li>• Atas de assembleias</li>
              </ul>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Convenções de condomínio</li>
                <li>• Contratos de comodato</li>
                <li>• Cessões de direitos</li>
                <li>• Títulos de crédito</li>
                <li>• Outros documentos diversos</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-red-800 mb-4">Dúvidas sobre nossos serviços?</h3>
            <p className="text-gray-600 mb-6">Entre em contato conosco para mais informações</p>
            <a href="/fale-conosco" className="bg-red-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TitulosDocumentos;
