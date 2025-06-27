
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AdditionalInfo from '../components/AdditionalInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AdditionalInfo />
      <Footer />
    </div>
  );
};

export default Index;
