import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0a25] flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <Showcase />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;