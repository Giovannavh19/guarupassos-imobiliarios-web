
import React, { useState } from 'react';
import { FileText, Edit, CheckSquare, Search, File } from 'lucide-react';

const Hero = () => {
  const [protocols, setProtocols] = useState({
    imoveis: '',
    titulos: '',
    juridica: ''
  });

  const [certidoes, setCertidoes] = useState({
    imoveis: { protocol: '', codigo: '' },
    titulos: { protocol: '', codigo: '' },
    juridica: { protocol: '', codigo: '' }
  });

  const handleProtocolChange = (type: string, value: string) => {
    setProtocols(prev => ({ ...prev, [type]: value }));
  };

  const handleCertidaoChange = (type: string, field: string, value: string) => {
    setCertidoes(prev => ({
      ...prev,
      [type]: { ...prev[type], [field]: value }
    }));
  };

  const handleConsulta = (type: string, service: string) => {
    console.log(`Consultando ${service} para ${type}`);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Consulta de Títulos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Registro de Imóveis */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-amber-600 p-6">
            <div className="flex items-center mb-4">
              <FileText className="text-amber-600 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-amber-800 text-lg">CONSULTA DE TÍTULOS</h3>
                <p className="text-sm text-amber-700">DE REGISTRO DE IMÓVEIS</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.imoveis}
                  onChange={(e) => handleProtocolChange('imoveis', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'titulo')}
                    className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Títulos e Documentos */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-amber-600 p-6">
            <div className="flex items-center mb-4">
              <Edit className="text-amber-600 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-amber-800 text-lg">CONSULTA DE TÍTULOS</h3>
                <p className="text-sm text-amber-700">DE TÍTULOS E DOCUMENTOS</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.titulos}
                  onChange={(e) => handleProtocolChange('titulos', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'titulo')}
                    className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pessoa Jurídica */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-amber-600 p-6">
            <div className="flex items-center mb-4">
              <CheckSquare className="text-amber-600 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-amber-800 text-lg">CONSULTA DE TÍTULOS</h3>
                <p className="text-sm text-amber-700">DE PESSOA JURÍDICA</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.juridica}
                  onChange={(e) => handleProtocolChange('juridica', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'titulo')}
                    className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consulta de Certidões */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certidões Registro de Imóveis */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-700 p-6">
            <div className="flex items-center mb-4">
              <Search className="text-green-700 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-green-800 text-lg">CONSULTA DE CERTIDÕES</h3>
                <p className="text-sm text-green-700">DE REGISTRO DE IMÓVEIS</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.imoveis.protocol}
                  onChange={(e) => handleCertidaoChange('imoveis', 'protocol', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-3 py-1 rounded font-mono text-sm">QJ1351</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.imoveis.codigo}
                    onChange={(e) => handleCertidaoChange('imoveis', 'codigo', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'certidao')}
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Títulos e Documentos */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-700 p-6">
            <div className="flex items-center mb-4">
              <File className="text-green-700 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-green-800 text-lg">CONSULTA DE CERTIDÕES</h3>
                <p className="text-sm text-green-700">DE TÍTULOS E DOCUMENTOS</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.titulos.protocol}
                  onChange={(e) => handleCertidaoChange('titulos', 'protocol', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-3 py-1 rounded font-mono text-sm">KE3505</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.titulos.codigo}
                    onChange={(e) => handleCertidaoChange('titulos', 'codigo', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'certidao')}
                    className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Pessoa Jurídica */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-green-700 p-6">
            <div className="flex items-center mb-4">
              <CheckSquare className="text-green-700 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-green-800 text-lg">CONSULTA DE CERTIDÕES</h3>
                <p className="text-sm text-green-700">DE PESSOA JURÍDICA</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.juridica.protocol}
                  onChange={(e) => handleCertidaoChange('juridica', 'protocol', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-3 py-1 rounded font-mono text-sm">LP8850</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.juridica.codigo}
                    onChange={(e) => handleCertidaoChange('juridica', 'codigo', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'certidao')}
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo positioned at bottom */}
        <div className="text-center mt-16">
          <div className="flex flex-col items-center space-y-3">
            <img 
              src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
              alt="2º Registro de Imóveis e Anexos de Guarulhos"
              className="h-16 w-auto"
            />
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">
                2º Registro de Imóveis
              </h1>
              <p className="text-lg text-gray-600">e Anexos de Guarulhos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
