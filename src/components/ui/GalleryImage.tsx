import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImageProps {
  imageUrl: string;
  alt: string;
  index?: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ imageUrl, alt, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <motion.div 
        className="overflow-hidden rounded-lg shadow-md cursor-pointer group h-72"
        onClick={openLightbox}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary-600 focus:outline-none"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={imageUrl} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;