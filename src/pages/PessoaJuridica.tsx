
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, Users, FileText, CheckCircle } from 'lucide-react';

const PessoaJuridica = () => {
  const tiposEntidades = [
    {
      tipo: 'Associações',
      descricao: 'Entidades sem fins lucrativos com finalidade social, cultural, educativa, etc.',
      documentos: ['Ata de constituição', 'Estatuto social', 'RG e CPF dos fundadores']
    },
    {
      tipo: 'Fundações',
      descricao: 'Entidades criadas para fins específicos de utilidade pública',
      documentos: ['Escritura de instituição', 'Estatuto', 'Aprovação do MP']
    },
    {
      tipo: 'Organizações Religiosas',
      descricao: 'Igrejas, templos e outras organizações de cunho religioso',
      documentos: ['Ata de fundação', 'Estatuto', 'Comprovante de endereço']
    },
    {
      tipo: 'Partidos Políticos',
      descricao: 'Agremiações políticas conforme legislação eleitoral',
      documentos: ['Ata de fundação', 'Estatuto partidário', 'Programa partidário']
    }
  ];

  const servicos = [
    { nome: 'Constituição', descricao: 'Registro de nova pessoa jurídica', prazo: '5 dias úteis' },
    { nome: 'Alteração', descricao: 'Mudanças no estatuto ou quadro social', prazo: '3 dias úteis' },
    { nome: 'Extinção', descricao: 'Encerramento das atividades da entidade', prazo: '5 dias úteis' },
    { nome: 'Certidões', descricao: 'Certidões de inteiro teor e específicas', prazo: '24 horas' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Building2 className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Registro de Pessoas Jurídicas</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            O Registro Civil de Pessoas Jurídicas é responsável pelo registro de 
            associações, fundações, organizações religiosas, partidos políticos 
            e outras entidades sem fins lucrativos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6 text-center">
                <CheckCircle className="text-red-700 mx-auto mb-3" size={24} />
                <h3 className="font-bold text-red-800 mb-2">{servico.nome}</h3>
                <p className="text-sm text-red-700 mb-2">{servico.descricao}</p>
                <span className="text-xs text-red-600 font-medium">{servico.prazo}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
            <Users className="mr-2" size={24} />
            Tipos de Entidades
          </h2>

          <div className="space-y-6 mb-8">
            {tiposEntidades.map((entidade, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{entidade.tipo}</h3>
                <p className="text-gray-600 mb-4">{entidade.descricao}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <FileText className="mr-2" size={16} />
                    Documentos Necessários:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {entidade.documentos.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-4">Processo de Registro</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                <p className="text-sm text-blue-700">Protocolo dos documentos</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                <p className="text-sm text-blue-700">Análise jurídica</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                <p className="text-sm text-blue-700">Registro oficial</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                <p className="text-sm text-blue-700">Emissão de certidão</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-800 mb-3">Benefícios do Registro</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Personalidade jurídica
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Capacidade de contratar
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Abertura de conta bancária
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Emissão de documentos fiscais
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Participação em licitações
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                Recebimento de doações
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PessoaJuridica;
