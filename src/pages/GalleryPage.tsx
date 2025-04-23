import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import GalleryImage from '../components/ui/GalleryImage';
import galleryData from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(galleryData.map(item => item.category.toLowerCase()))];
  
  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category.toLowerCase() === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-950 py-32">
        <div className="container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Explore our stunning spaces through our curated collection of images.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Visual Story" 
            subtitle="Experience the elegance and beauty of Luxe Haven through our carefully curated gallery."
          />
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-md shadow-sm p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-sm ${
                    filter === category 
                      ? 'bg-primary-950 text-white' 
                      : 'text-neutral-600 hover:bg-neutral-100'
                  } capitalize`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <GalleryImage 
                  key={image.id}
                  imageUrl={image.imageUrl}
                  alt={image.alt}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-neutral-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;