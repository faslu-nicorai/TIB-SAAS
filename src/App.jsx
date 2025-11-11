import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ProductShowcase from './components/sections/ProductShowcase';
import AppShowcase from './components/sections/AppShowcase';
import Flows from './components/sections/Flows';
import Creation from './components/sections/Creation';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import LogoPage from './components/sections/LogoPage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* <div className="relative z-10"> */}
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
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;