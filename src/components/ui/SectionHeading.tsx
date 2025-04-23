import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-primary-950'
      }`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${
          light ? 'text-neutral-200' : 'text-neutral-600'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className={`w-24 h-1 ${centered ? 'mx-auto' : 'ml-0'} mt-4 ${
        light ? 'bg-secondary-600' : 'bg-secondary-600'
      }`}></div>
    </motion.div>
  );
};

export default SectionHeading;