'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectImage {
  src: string;
  alt: string;
}

const ImageCarousel = ({ images }: { images: ProjectImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden rounded-lg flex items-center justify-center">
      <div
        className="flex transition-transform duration-300 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
            <div className="max-w-full max-h-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}            
                height={800}
                quality={90}
                priority={index === 0}
                className="object-contain max-h-full max-w-full"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
              />
            </div>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Imagen anterior"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Siguiente imagen"
          >
            →
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;