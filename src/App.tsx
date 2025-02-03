import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ImageRhombus } from './components/ImageRhombus';
import { ServiceCards } from './components/ServiceCards';
import { ContactForm } from './components/ContactForm';
import { FAQSection } from './components/FAQs/FAQSection';
import { AboutUs } from './components/AboutUs';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navigation  */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative flex flex-col items-center justify-center">
        <Hero />
      </section>

      {/* Images Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        <ImageRhombus />
      </section>

      {/* Service Cards Section */}
      <ServiceCards />

      {/* Contact Form Section */}
      <ContactForm />

      {/* About Us Section */}
      <AboutUs />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Brand Name */}
      <footer className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform duration-300">
            Brand Crafters Ai
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default App;