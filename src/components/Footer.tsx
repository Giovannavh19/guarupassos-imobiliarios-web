
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                  alt="2º Registro de Imóveis"
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-lg font-bold">2º Registro de Imóveis</h3>
                  <p className="text-sm text-red-200">Anexos de Guarulhos</p>
                </div>
              </Link>
            </div>
            <p className="text-red-200 text-sm leading-relaxed mb-4">
              Prestando serviços registrais com segurança jurídica, 
              transparência e excelência há mais de 35 anos.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-red-200 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-red-200 hover:text-white cursor-pointer" />
              <Linkedin size={20} className="text-red-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-300 mt-1 flex-shrink-0" />
                <div className="text-sm text-red-200">
                  <p>Rua das Flores, 123</p>
                  <p>Centro - Guarulhos/SP</p>
                  <p>CEP: 07010-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-300 flex-shrink-0" />
                <span className="text-sm text-red-200">(11) 2408-4500</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-300 flex-shrink-0" />
                <span className="text-sm text-red-200">contato@2registro.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-red-200">
              <li><Link to="/registro-de-imoveis" className="hover:text-white transition-colors">Registro de Imóveis</Link></li>
              <li><Link to="/titulos-e-documentos" className="hover:text-white transition-colors">Títulos e Documentos</Link></li>
              <li><Link to="/pessoa-juridica" className="hover:text-white transition-colors">Pessoa Jurídica</Link></li>
              <li><Link to="/tabelas-de-custas" className="hover:text-white transition-colors">Tabelas de Custas</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Hours and Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Atendimento</h4>
            <div className="flex items-start space-x-3 mb-6">
              <Clock size={16} className="text-red-300 mt-1 flex-shrink-0" />
              <div className="text-sm text-red-200">
                <p>Segunda a Sexta</p>
                <p>9h às 17h</p>
                <p className="text-xs mt-1 text-red-300">
                  *Exceto feriados
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Links Úteis</h5>
              <ul className="space-y-1 text-sm text-red-200">
                <li><Link to="/serventia" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/protecao-de-dados" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/fale-conosco" className="hover:text-white transition-colors">Fale Conosco</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-sm text-red-300">
            © 2024 2º Registro de Imóveis e Anexos de Guarulhos. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
