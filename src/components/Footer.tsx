
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/55df47ec-5819-4e0c-80cd-18172df26f47.png" 
                alt="2º Registro de Imóveis"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">2º Registro de Imóveis</h3>
                <p className="text-sm text-gray-300">Anexos de Guarulhos</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Prestando serviços registrais com segurança jurídica, 
              transparência e excelência há mais de 35 anos.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              <Linkedin size={20} className="text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Rua das Flores, 123</p>
                  <p>Centro - Guarulhos/SP</p>
                  <p>CEP: 07010-000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">(11) 2408-4500</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">contato@2registro.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Registro de Imóveis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Títulos e Documentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pessoa Jurídica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certidões</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Autenticações</a></li>
            </ul>
          </div>

          {/* Hours and Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Atendimento</h4>
            <div className="flex items-start space-x-3 mb-6">
              <Clock size={16} className="text-green-400 mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p>Segunda a Sexta</p>
                <p>9h às 17h</p>
                <p className="text-xs mt-1 text-gray-400">
                  *Exceto feriados
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Links Úteis</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Mapa do Site</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 2º Registro de Imóveis e Anexos de Guarulhos. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
