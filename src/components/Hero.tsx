import { FloatingArrow } from './FloatingArrow';
import { useState, useEffect } from 'react';

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const lines = [
    "Build your legacy",
    "Craft your Story",
    "Lead the Way"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => (prev < lines.length ? prev + 1 : 0));
    }, 2000); // Wait 2 seconds between each line

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight min-h-[3.6em] md:min-h-[3em]">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              index < visibleLines
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <span className="block bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              {line}
            </span>
          </div>
        ))}
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto mb-64">
        Empowering innovation, transforming ideas into reality, and 
        designing a future driven by imagination.
      </p>
      <FloatingArrow />
    </div>
  );
}