import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-9xl font-bold text-primary-950">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-serif text-3xl font-semibold text-primary-950 mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center bg-secondary-600 text-primary-950 px-6 py-3 rounded-sm hover:bg-secondary-500 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;