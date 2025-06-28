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
    <section className="bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Consulta de Protocolos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Registro de Imóveis */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <FileText className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">REGISTRO DE IMÓVEIS</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.imoveis}
                  onChange={(e) => handleProtocolChange('imoveis', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'titulo')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Títulos e Documentos */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <Edit className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">TÍTULOS E DOCUMENTOS</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.titulos}
                  onChange={(e) => handleProtocolChange('titulos', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'titulo')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pessoa Jurídica */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <CheckSquare className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">PESSOA JURÍDICA</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={protocols.juridica}
                  onChange={(e) => handleProtocolChange('juridica', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Senha</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite a senha"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'titulo')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consulta de Certidões */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Certidões Registro de Imóveis */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <Search className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">CERTIDÕES - REGISTRO DE IMÓVEIS</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.imoveis.protocol}
                  onChange={(e) => handleCertidaoChange('imoveis', 'protocol', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-900 text-stone-100 px-2 py-1 rounded font-mono text-xs">QJ1351</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.imoveis.codigo}
                    onChange={(e) => handleCertidaoChange('imoveis', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('imoveis', 'certidao')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Títulos e Documentos */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <File className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">CERTIDÕES - TÍTULOS E DOCUMENTOS</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.titulos.protocol}
                  onChange={(e) => handleCertidaoChange('titulos', 'protocol', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-900 text-stone-100 px-2 py-1 rounded font-mono text-xs">KE3505</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.titulos.codigo}
                    onChange={(e) => handleCertidaoChange('titulos', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('titulos', 'certidao')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Certidões Pessoa Jurídica */}
          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-lg shadow-lg border-2 border-amber-800 p-3">
            <div className="flex items-center mb-2">
              <CheckSquare className="text-amber-800 mr-2" size={18} />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">CERTIDÕES - PESSOA JURÍDICA</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-amber-700 mb-1">Protocolo Nº</label>
                <input
                  type="text"
                  value={certidoes.juridica.protocol}
                  onChange={(e) => handleCertidaoChange('juridica', 'protocol', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Digite o protocolo"
                />
              </div>
              
              <div>
                <label className="block text-xs text-amber-700 mb-1">Código de Segurança:</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-900 text-stone-100 px-2 py-1 rounded font-mono text-xs">LP8850</div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={certidoes.juridica.codigo}
                    onChange={(e) => handleCertidaoChange('juridica', 'codigo', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-amber-300 rounded bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Digite o Código Aqui"
                  />
                  <button
                    onClick={() => handleConsulta('juridica', 'certidao')}
                    className="bg-amber-800 text-stone-100 px-3 py-1 text-sm rounded hover:bg-amber-900 transition-colors"
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
