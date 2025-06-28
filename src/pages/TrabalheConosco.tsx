
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Briefcase, GraduationCap, Send } from 'lucide-react';

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    curriculo: null as File | null,
    carta: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      curriculo: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Candidatura enviada:', formData);
    alert('Sua candidatura foi enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cargo: '',
      experiencia: '',
      curriculo: null,
      carta: ''
    });
  };

  const vagas = [
    {
      titulo: 'Auxiliar de Cartório',
      tipo: 'Efetivo',
      requisitos: ['Ensino Médio completo', 'Conhecimentos básicos de informática', 'Boa comunicação'],
      descricao: 'Auxiliar no atendimento ao público e organização de documentos.'
    },
    {
      titulo: 'Escrevente',
      tipo: 'Efetivo',
      requisitos: ['Ensino Superior', 'Experiência em cartório', 'Conhecimento jurídico básico'],
      descricao: 'Responsável pela análise e processamento de documentos registrais.'
    },
    {
      titulo: 'Estagiário de Direito',
      tipo: 'Estágio',
      requisitos: ['Cursando Direito (a partir do 3º semestre)', 'Disponibilidade 6 horas/dia'],
      descricao: 'Apoio nas atividades jurídicas e atendimento ao público.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="text-red-800 mr-4" size={32} />
            <h1 className="text-3xl font-bold text-red-900">Trabalhe Conosco</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Faça parte da nossa equipe! Buscamos profissionais comprometidos com a 
            excelência no atendimento e o crescimento profissional. Conheça nossas 
            oportunidades e candidate-se.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Briefcase className="text-blue-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-blue-800 mb-2">Oportunidades</h3>
              <p className="text-sm text-blue-700">Vagas para diferentes níveis de experiência</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <GraduationCap className="text-green-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-green-800 mb-2">Desenvolvimento</h3>
              <p className="text-sm text-green-700">Treinamento e capacitação contínua</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <Users className="text-purple-700 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-purple-800 mb-2">Ambiente</h3>
              <p className="text-sm text-purple-700">Trabalho em equipe e clima positivo</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Vagas Disponíveis</h2>
            <div className="space-y-6">
              {vagas.map((vaga, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{vaga.titulo}</h3>
                      <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                        {vaga.tipo}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{vaga.descricao}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Requisitos:</h4>
                    <ul className="space-y-1">
                      {vaga.requisitos.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <Send className="mr-2" size={24} />
                Candidatar-se
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
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo de Interesse *
                  </label>
                  <select
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Selecione...</option>
                    <option value="auxiliar">Auxiliar de Cartório</option>
                    <option value="escrevente">Escrevente</option>
                    <option value="estagiario">Estagiário de Direito</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experiência Profissional
                  </label>
                  <textarea
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Descreva sua experiência profissional..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currículo (PDF) *
                  </label>
                  <input
                    type="file"
                    name="curriculo"
                    onChange={handleFileChange}
                    accept=".pdf"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carta de Apresentação
                  </label>
                  <textarea
                    name="carta"
                    value={formData.carta}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Conte-nos por que você gostaria de trabalhar conosco..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-800 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Enviar Candidatura
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">Benefícios</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-green-800 mb-2">Remuneração Competitiva</h3>
                  <p className="text-sm text-green-700">Salário compatível com o mercado e experiência</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-blue-800 mb-2">Vale Refeição</h3>
                  <p className="text-sm text-blue-700">Auxílio alimentação para todos os funcionários</p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-bold text-purple-800 mb-2">Plano de Saúde</h3>
                  <p className="text-sm text-purple-700">Assistência médica para o funcionário</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-bold text-amber-800 mb-2">Capacitação</h3>
                  <p className="text-sm text-amber-700">Cursos e treinamentos para desenvolvimento profissional</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3">Processo Seletivo</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                    Análise de currículo
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                    Entrevista por competências
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                    Teste prático (quando aplicável)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                    Contratação
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
