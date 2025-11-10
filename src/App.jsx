import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AppShowcase from './components/AppShowcase';
import LogoPage from './components/LogoPage';
import CTA from './components/CTA';
import ProductShowcase from './components/ProductShowcase';
import Flows from './components/Flows';
import Creation from './components/Creation';

function App() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <Header />
        <Hero />
        <ProductShowcase />
        <AppShowcase />
        <Flows />
        <Creation />
        <Testimonials />
        <CTA />
        <div className='bg-black'>
        <LogoPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;