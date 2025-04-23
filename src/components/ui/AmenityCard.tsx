import React from 'react';
import { motion } from 'framer-motion';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ title, description, icon, index = 0 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-primary-100 p-4 rounded-full mb-4 text-primary-950">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-primary-950 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default AmenityCard;