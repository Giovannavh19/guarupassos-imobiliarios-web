
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
    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo em destaque */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
              alt="2º Registro de Imóveis e Anexos de Guarulhos"
              className="h-20 w-auto"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                2º Registro de Imóveis
              </h1>
              <p className="text-xl text-gray-600">e Anexos de Guarulhos</p>
            </div>
          </div>
        </div>

        {/* Consulta de Protocolos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Registro de Imóveis */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <FileText className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">REGISTRO DE IMÓVEIS</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.imoveis}
                  onChange={(e) => handleProtocolChange('imoveis', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'titulo')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Títulos e Documentos */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <Edit className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">TÍTULOS E DOCUMENTOS</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.titulos}
                  onChange={(e) => handleProtocolChange('titulos', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'titulo')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pessoa Jurídica */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <CheckSquare className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">PESSOA JURÍDICA</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.juridica}
                  onChange={(e) => handleProtocolChange('juridica', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'titulo')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consulta de Certidões */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Certidões Registro de Imóveis */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <Search className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">CERTIDÕES - REGISTRO DE IMÓVEIS</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.imoveis.protocol}
                  onChange={(e) => handleCertidaoChange('imoveis', 'protocol', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-2 py-1 rounded font-mono text-xs">QJ1351</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.imoveis.codigo}
                    onChange={(e) => handleCertidaoChange('imoveis', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'certidao')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Títulos e Documentos */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <File className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">CERTIDÕES - TÍTULOS E DOCUMENTOS</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.titulos.protocol}
                  onChange={(e) => handleCertidaoChange('titulos', 'protocol', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-2 py-1 rounded font-mono text-xs">KE3505</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.titulos.codigo}
                    onChange={(e) => handleCertidaoChange('titulos', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'certidao')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Pessoa Jurídica */}
          <div className="bg-white rounded-lg shadow-md border-2 border-red-800 p-4">
            <div className="flex items-center mb-3">
              <CheckSquare className="text-red-800 mr-2" size={20} />
              <div>
                <h3 className="font-bold text-red-900 text-base">CERTIDÕES - PESSOA JURÍDICA</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.juridica.protocol}
                  onChange={(e) => handleCertidaoChange('juridica', 'protocol', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-600 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white px-2 py-1 rounded font-mono text-xs">LP8850</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.juridica.codigo}
                    onChange={(e) => handleCertidaoChange('juridica', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'certidao')}
                    className="bg-red-800 text-white px-3 py-1.5 text-sm rounded hover:bg-red-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
