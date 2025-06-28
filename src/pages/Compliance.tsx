
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, AlertTriangle, MessageSquare, Phone, Mail } from 'lucide-react';

const Compliance = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    anonimo: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Sua denúncia/sugestão foi enviada com sucesso. Obrigado!');
    setFormData({
      tipo: '',
      nome: '',
      email: '',
      telefone: '',
      descricao: '',
      anonimo: false
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Compliance/Denúncia/Ouvidoria</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Nosso canal de compliance, denúncias e ouvidoria está disponível para receber 
            informações sobre condutas inadequadas, sugestões de melhoria e elogios. 
            Sua participação é fundamental para a melhoria contínua dos nossos serviços.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <AlertTriangle className="text-red-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-red-800 mb-2">Denúncias</h3>
              <p className="text-sm text-red-700">Reporte condutas inadequadas ou irregularidades</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <MessageSquare className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Sugestões</h3>
              <p className="text-sm text-blue-700">Contribua com ideias para melhorar nossos serviços</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <Shield className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Elogios</h3>
              <p className="text-sm text-green-700">Reconheça o bom atendimento recebido</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Formulário de Contato</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Manifestação
                  </label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Selecione...</option>
                    <option value="denuncia">Denúncia</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="elogio">Elogio</option>
                    <option value="reclamacao">Reclamação</option>
                  </select>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="anonimo"
                    name="anonimo"
                    checked={formData.anonimo}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label htmlFor="anonimo" className="text-sm text-gray-700">
                    Manifestação anônima
                  </label>
                </div>

                {!formData.anonimo && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Descreva sua manifestação de forma detalhada..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-800 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Enviar Manifestação
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Outros Canais de Contato</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="text-red-700 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(11) 2408-4500</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="text-red-700 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800">E-mail</h3>
                    <p className="text-gray-600">ouvidoria@2registro.com.br</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-800 mb-3">Compromisso com a Ética</h3>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li>• Todas as manifestações são tratadas com sigilo</li>
                  <li>• Respondemos em até 10 dias úteis</li>
                  <li>• Não há retaliação por denúncias</li>
                  <li>• Investigamos todas as irregularidades</li>
                  <li>• Mantemos canal sempre disponível</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;
