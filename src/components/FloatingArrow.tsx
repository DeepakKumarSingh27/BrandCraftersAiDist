import { ChevronsDown } from 'lucide-react';

export function FloatingArrow() {
  const scrollToImages = () => {
    const imagesSection = document.getElementById('images-section');
    imagesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToImages}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer p-4"
    >
      <ChevronsDown className="w-12 h-12 text-white stroke-2" />
    </div>
  );
}