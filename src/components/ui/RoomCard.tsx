import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  size: string;
  capacity: string;
  index?: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ 
  id, 
  name, 
  description, 
  price, 
  imageUrl, 
  features, 
  size, 
  capacity,
  index = 0
}) => {
  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-lg bg-white group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950 to-transparent h-24 opacity-70"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-primary-950">{name}</h3>
          <p className="text-secondary-600 font-semibold">${price}<span className="text-neutral-500 text-sm">/night</span></p>
        </div>
        
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-neutral-100 px-3 py-1 rounded-full text-xs text-neutral-700">
            {size}
          </div>
          <div className="bg-neutral-100 px-3 py-1 rounded-full text-xs text-neutral-700">
            {capacity}
          </div>
          {features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="bg-neutral-100 px-3 py-1 rounded-full text-xs text-neutral-700">
              {feature}
            </div>
          ))}
        </div>
        
        <Link 
          to={`/rooms/${id}`} 
          className="inline-flex items-center font-medium text-primary-700 hover:text-primary-800 transition-colors"
        >
          View Details <ArrowRight size={18} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default RoomCard;