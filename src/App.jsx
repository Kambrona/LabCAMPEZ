import React, { useState } from 'react';
import IntroSplash from './components/IntroSplash';
import Navbar from './components/Navbar';
import TechBackground from './components/TechBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 3-Second Logo Intro Screen */}
      <IntroSplash onFinish={() => setSplashFinished(true)} />

      {/* Main Website */}
      <div className={`relative min-h-screen bg-[#090D16] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300 transition-opacity duration-700 ${
        splashFinished ? 'opacity-100' : 'opacity-90'
      }`}>
        {/* High-End Ambient Aurora Background */}
        <TechBackground />

        {/* Navigation Header */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenContact={handleOpenContact} />
          <Services onOpenContact={handleOpenContact} />
          <WhyUs />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
