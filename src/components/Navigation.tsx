import { Brain } from 'lucide-react';

export function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="absolute top-0 w-full z-10 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Brain className="w-8 h-8 text-teal-400" />
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text">
            Brand Crafters Ai
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <a href="#what-we-do" className="hover:text-gray-300 transition-colors">WHAT WE DO</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">ABOUT</a>
          <a href="#faqs" className="hover:text-gray-300 transition-colors">FAQs</a>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-6 py-2 rounded-full 
              hover:from-blue-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
}