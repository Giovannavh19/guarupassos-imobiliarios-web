
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onDropdownToggle={handleDropdownToggle} />
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen ? 'mt-64' : 'mt-0'
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
