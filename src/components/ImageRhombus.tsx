import { useEffect, useRef } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Content Creation"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "SEO Optimization"
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Software Development"
  },
  {
    url: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Brand Creation"
  }
];

export function ImageRhombus() {
  const rhombusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!rhombusRef.current) return;
      const scrollPosition = window.scrollY;
      const rotation = scrollPosition * 0.05;
      rhombusRef.current.style.transform = `rotate(${rotation}deg) scale(1.1)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="images-section" className="relative w-full py-32">
      <div 
        ref={rhombusRef}
        className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] mx-auto transition-transform duration-300"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-32 h-32 md:w-48 md:h-48 transition-all duration-500 hover:scale-110"
            style={{
              top: `${index === 0 ? '0' : index === 2 ? '100%' : '50%'}`,
              left: `${index === 3 ? '0' : index === 1 ? '100%' : '50%'}`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}