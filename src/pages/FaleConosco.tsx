
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensagem enviada:', formData);
    alert('Sua mensagem foi enviada com sucesso! Responderemos em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Fale Conosco</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Estamos aqui para ajudá-lo! Entre em contato conosco através dos canais 
            abaixo ou envie sua mensagem através do formulário. Responderemos o mais 
            breve possível.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <Phone className="text-red-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-red-800 mb-2">Telefone</h3>
              <p className="text-sm text-red-700">(11) 2408-4500</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Mail className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">E-mail</h3>
              <p className="text-sm text-blue-700">contato@2registro.com.br</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <MapPin className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Endereço</h3>
              <p className="text-sm text-green-700">Rua das Flores, 123<br />Centro - Guarulhos/SP</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <Clock className="text-purple-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-purple-800 mb-2">Horário</h3>
              <p className="text-sm text-purple-700">Seg. a Sex.<br />9h às 17h</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <Send className="mr-2" size={24} />
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
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
                    E-mail *
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Selecione o assunto...</option>
                    <option value="informacoes">Informações sobre serviços</option>
                    <option value="agendamento">Agendamento</option>
                    <option value="documentos">Dúvidas sobre documentos</option>
                    <option value="prazos">Consulta de prazos</option>
                    <option value="valores">Valores e custas</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Descreva sua dúvida ou solicitação..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-800 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Informações Adicionais</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Atendimento Presencial</h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p><strong>Endereço:</strong> Rua das Flores, 123 - Centro</p>
                    <p><strong>Guarulhos/SP</strong> - CEP: 07010-000</p>
                    <p><strong>Horário:</strong> Segunda a Sexta, 9h às 17h</p>
                    <p><strong>Telefone:</strong> (11) 2408-4500</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-800 mb-3">Serviços Online</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Consulta de protocolos</li>
                    <li>• Certidões digitais</li>
                    <li>• Agendamento online</li>
                    <li>• Acompanhamento de processos</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-bold text-amber-800 mb-3">Tempo de Resposta</h3>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• E-mail: até 24 horas</li>
                    <li>• Telefone: imediato</li>
                    <li>• Formulário: até 48 horas</li>
                    <li>• Presencial: imediato</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Documentos Necessários</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Para agilizar o atendimento, tenha em mãos:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Documentos de identificação</li>
                    <li>• Número do protocolo (se houver)</li>
                    <li>• Documentos relacionados ao serviço</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">Atendimento de Emergência</h3>
            <p className="text-red-700 text-sm">
              Para situações urgentes fora do horário comercial, entre em contato através 
              do telefone (11) 2408-4500. Deixe sua mensagem na secretária eletrônica 
              que retornaremos o mais breve possível.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FaleConosco;
