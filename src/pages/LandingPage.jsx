// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import ProductShowcase from '../components/sections/ProductShowcase';
import AppShowcase from '../components/sections/AppShowcase';
import Flows from '../components/sections/Flows';
import Creation from '../components/sections/Creation';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import LogoSection from '../components/sections/LogoSection';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <AppShowcase />
      <Flows />
      <Creation />
      <Testimonials />
      <CTA />
      <div className="bg-black">
        <LogoSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
