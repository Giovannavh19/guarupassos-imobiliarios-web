
import React, { useState } from 'react';
import { Home, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/lovable-uploads/a27477de-5683-44c3-ba8e-cd370b8f12b2.png',
    '/lovable-uploads/4f164e4b-4860-4aa1-9f58-ebdf010aef5a.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(11) 2408-4500</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Guarulhos - SP</span>
            </div>
          </div>
          <div className="text-xs">
            Horário de Atendimento: Segunda a Sexta, 09h às 16h
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-red-900 shadow-lg sticky top-0 z-50 relative overflow-hidden">
        {/* Background Image with Watermark Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-500"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronRight size={24} />
        </button>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center py-4">
            {/* Home Icon */}
            <Link to="/" className="text-white hover:text-red-200 transition-colors absolute left-4">
              <Home size={28} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
