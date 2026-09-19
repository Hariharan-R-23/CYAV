
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Assembly from './components/Assembly';
import Impact from './components/Impact';
import Leadership from './components/Leadership';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="py-24 px-4 border-t border-zinc-900 scroll-mt-24">
          <About />
        </section>

        <section id="assembly" className="relative py-24 px-4 bg-zinc-950/50 border-t border-zinc-900 overflow-hidden scroll-mt-24">
          {/* Background with Real Assembly Delegates Voting Photo */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="/images/assemblypic2.png" 
              alt="Assembly Delegates Raising Hands in Vote" 
              className="w-full h-full object-cover object-center opacity-20 filter contrast-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/90 to-black"></div>
          </div>
          <div className="relative z-10">
            <Assembly />
          </div>
        </section>

        <section id="impact" className="py-24 px-4 border-t border-zinc-900 scroll-mt-24">
          <Impact />
        </section>

        <section id="leadership" className="py-24 px-4 bg-zinc-950/50 border-t border-zinc-900 scroll-mt-24">
          <Leadership />
        </section>

        <section id="benefits" className="py-24 px-4 border-t border-zinc-900 scroll-mt-24">
          <Benefits />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
