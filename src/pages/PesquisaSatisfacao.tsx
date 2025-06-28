
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageSquare, Star, ThumbsUp, Send } from 'lucide-react';

const PesquisaSatisfacao = () => {
  const [formData, setFormData] = useState({
    servico: '',
    atendimento: 0,
    agilidade: 0,
    qualidade: 0,
    instalacoes: 0,
    geral: 0,
    comentarios: '',
    recomendaria: '',
    melhorias: '',
    nome: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pesquisa enviada:', formData);
    alert('Obrigado pela sua avaliação! Sua opinião é muito importante para nós.');
    setFormData({
      servico: '',
      atendimento: 0,
      agilidade: 0,
      qualidade: 0,
      instalacoes: 0,
      geral: 0,
      comentarios: '',
      recomendaria: '',
      melhorias: '',
      nome: '',
      email: ''
    });
  };

  const renderStars = (category: string, currentRating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(category, star)}
            className={`p-1 ${
              star <= currentRating ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            <Star size={24} fill={star <= currentRating ? 'currentColor' : 'none'} />
          </button>
        ))}
      </div>
    );
  };

  const avaliacoes = [
    { categoria: 'atendimento', label: 'Atendimento da Equipe' },
    { categoria: 'agilidade', label: 'Agilidade no Serviço' },
    { categoria: 'qualidade', label: 'Qualidade do Serviço' },
    { categoria: 'instalacoes', label: 'Instalações' },
    { categoria: 'geral', label: 'Avaliação Geral' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Pesquisa de Satisfação</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Sua opinião é fundamental para melhorarmos nossos serviços. Por favor, 
            avalie sua experiência conosco e nos ajude a oferecer um atendimento 
            cada vez melhor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <ThumbsUp className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Sua Opinião</h3>
              <p className="text-sm text-blue-700">É importante para nós</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <Star className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Avaliação</h3>
              <p className="text-sm text-green-700">Rápida e fácil</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <Send className="text-purple-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-purple-800 mb-2">Melhoria</h3>
              <p className="text-sm text-purple-700">Contínua dos serviços</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qual serviço você utilizou? *
              </label>
              <select
                name="servico"
                value={formData.servico}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Selecione o serviço...</option>
                <option value="registro-imoveis">Registro de Imóveis</option>
                <option value="titulos-documentos">Títulos e Documentos</option>
                <option value="pessoa-juridica">Pessoa Jurídica</option>
                <option value="certidoes">Certidões</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">Avalie os seguintes aspectos:</h3>
              
              {avaliacoes.map((item) => (
                <div key={item.categoria} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4">
                  <label className="text-sm font-medium text-gray-700 mb-2 sm:mb-0">
                    {item.label}
                  </label>
                  {renderStars(item.categoria, formData[item.categoria as keyof typeof formData] as number)}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Você recomendaria nossos serviços? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="sim"
                    checked={formData.recomendaria === 'sim'}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Sim, definitivamente</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="talvez"
                    checked={formData.recomendaria === 'talvez'}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Talvez</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="recomendaria"
                    value="nao"
                    checked={formData.recomendaria === 'nao'}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Não</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comentários e Sugestões
              </label>
              <textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Compartilhe sua experiência, elogios ou sugestões..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                O que podemos melhorar?
              </label>
              <textarea
                name="melhorias"
                value={formData.melhorias}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Suas sugestões de melhoria são muito valiosas..."
              />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Dados para Contato (Opcional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Deixe seus dados apenas se desejar que entremos em contato com você sobre sua avaliação.
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-800 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Enviar Avaliação
              </button>
            </div>
          </form>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-800 mb-2">Obrigado pela sua participação!</h3>
            <p className="text-sm text-amber-700">
              Todas as avaliações são analisadas pela nossa equipe e utilizadas para 
              implementar melhorias contínuas em nossos serviços.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PesquisaSatisfacao;
