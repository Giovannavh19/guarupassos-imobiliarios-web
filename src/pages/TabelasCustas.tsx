
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, FileText, CreditCard, Download } from 'lucide-react';

const TabelasCustas = () => {
  const custas = [
    {
      servico: 'Registro de Escritura de Compra e Venda',
      valor: 'R$ 350,00',
      observacao: 'Valor base para imóveis até R$ 100.000,00'
    },
    {
      servico: 'Certidão de Matrícula',
      valor: 'R$ 45,00',
      observacao: 'Por certidão expedida'
    },
    {
      servico: 'Averbação de Construção',
      valor: 'R$ 180,00',
      observacao: 'Valor base'
    },
    {
      servico: 'Registro de Escritura de Doação',
      valor: 'R$ 280,00',
      observacao: 'Valor base'
    },
    {
      servico: 'Certidão Negativa',
      valor: 'R$ 35,00',
      observacao: 'Por certidão expedida'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Calculator className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Tabelas de Custas e Emolumentos</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Consulte os valores atualizados dos nossos serviços registrais. 
            Os valores podem variar conforme o tipo e valor do imóvel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <FileText className="text-red-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-red-800 mb-2">Registros</h3>
              <p className="text-sm text-red-700">Escrituras, contratos e documentos</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CreditCard className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Certidões</h3>
              <p className="text-sm text-green-700">Certidões e consultas</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Download className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Averbações</h3>
              <p className="text-sm text-blue-700">Atualizações e modificações</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">Serviço</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Valor</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Observação</th>
                </tr>
              </thead>
              <tbody>
                {custas.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-3 font-medium">{item.servico}</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">{item.valor}</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{item.observacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-bold text-amber-800 mb-2">Importante:</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Os valores são baseados na tabela de emolumentos vigente</li>
              <li>• Alguns serviços podem ter custos adicionais conforme a complexidade</li>
              <li>• Consulte sempre os valores atualizados antes de solicitar o serviço</li>
              <li>• Aceitamos pagamento em dinheiro, cartão de débito e crédito</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TabelasCustas;
