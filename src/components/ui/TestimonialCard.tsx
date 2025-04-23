import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  imageUrl: string;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  testimonial, 
  rating, 
  imageUrl,
  index = 0
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl}
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-serif text-lg font-semibold text-primary-950">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-secondary-600 fill-secondary-600' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-neutral-600 flex-grow italic">"{testimonial}"</p>
    </motion.div>
  );
};

export default TestimonialCard;