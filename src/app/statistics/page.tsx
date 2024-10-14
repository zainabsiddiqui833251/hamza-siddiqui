'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/stats1.png',
  '/images/stats2.png',
  '/images/stats3.jpg',
  '/images/stats4.jpg',
  '/images/stats5.jpg',
  '/images/stats6.jpg',
  '/images/stats7.jpg',
  '/images/stats8.jpg',
  '/images/stats9.jpg',
  '/images/stats10.jpg',
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openOverlay = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full">
      <h1 className='text-[48px] m-3 font-bold font-serif capitalize text-center' style={{ color: '#2B2C28' }}>Statistics</h1>
      
      {/* Flex container for images */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className={`relative ${index === 9 ? 'flex justify-center items-center' : ''}`}>
            <Image
              width={300} // Set the fixed width in pixels
              height={200} // Adjust the height proportionally
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[300px] h-[200px] object-cover border-4 border-black cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
              onClick={() => openOverlay(image)}
              loading="lazy" // Improve performance
              style={{ imageRendering: 'crisp-edges' }} // or 'pixelated'
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeOverlay}
            aria-label="Close Image Overlay"
          >
            &times;
          </button>
          <Image
            width={600}
            height={600}
            src={selectedImage}
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            loading="lazy" // Improve performance
          />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
