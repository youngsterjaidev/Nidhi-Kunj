import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage: React.FC = () => {
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
              About Luxe Haven
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Discover the story behind our commitment to exceptional luxury and service.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hotel exterior" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-8 -right-8 hidden md:block">
                  <img 
                    src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Hotel interior" 
                    className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Our Story" 
                subtitle="A legacy of luxury and exceptional service."
                centered={false}
              />
              
              <p className="text-neutral-600 mb-4">
                Founded in 2005, Luxe Haven began with a singular vision: to create a sanctuary where luxury meets authentic hospitality. What started as a boutique property has evolved into one of the most prestigious hotel brands, known for our commitment to personalized service and attention to detail.
              </p>
              
              <p className="text-neutral-600 mb-4">
                Our founder, Isabella Laurent, a seasoned traveler with discerning taste, recognized a gap in the luxury hospitality market. She envisioned a place where guests wouldn't just stay, but would experience a transformative journey of relaxation and rejuvenation. 
              </p>
              
              <p className="text-neutral-600">
                Today, Luxe Haven stands as a testament to that vision, having welcomed distinguished guests from around the world, including celebrities, business leaders, and discerning travelers seeking the extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="The principles that guide our approach to luxury hospitality."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl font-bold text-primary-950">01</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-3">Exceptional Service</h3>
              <p className="text-neutral-600">
                We believe that true luxury is defined by impeccable service. Our team is dedicated to anticipating your needs and exceeding your expectations at every touchpoint.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl font-bold text-primary-950">02</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-3">Attention to Detail</h3>
              <p className="text-neutral-600">
                From the architectural elements to the smallest amenities in your room, we believe that thoughtful details create memorable experiences and elevate the ordinary to extraordinary.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl font-bold text-primary-950">03</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-3">Sustainable Luxury</h3>
              <p className="text-neutral-600">
                We are committed to responsible luxury that respects our environment and communities. Our practices are designed to minimize our ecological footprint while maximizing guest comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the visionaries guiding our pursuit of excellence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 overflow-hidden rounded-full h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Isabella Laurent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-1">Isabella Laurent</h3>
              <p className="text-secondary-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-neutral-600 text-sm">
                With over 25 years of experience in luxury hospitality, Isabella's vision and leadership have established Luxe Haven as a pinnacle of excellence in the industry.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 overflow-hidden rounded-full h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jonathan Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-1">Jonathan Chen</h3>
              <p className="text-secondary-600 font-medium mb-3">Chief Operating Officer</p>
              <p className="text-neutral-600 text-sm">
                Jonathan oversees all operational aspects of our properties, ensuring that every guest experience meets our exacting standards of luxury and service.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 overflow-hidden rounded-full h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sofia Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-1">Sofia Martinez</h3>
              <p className="text-secondary-600 font-medium mb-3">Executive Chef</p>
              <p className="text-neutral-600 text-sm">
                An award-winning culinary artist, Sofia creates unforgettable dining experiences that blend innovative techniques with locally-sourced, seasonal ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Awards & Recognition" 
            subtitle="Our commitment to excellence has been acknowledged by these prestigious organizations."
            light={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="bg-primary-900 p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-950">★</span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Five Star Excellence</h3>
              <p className="text-sm text-neutral-300">2023, 2022, 2021</p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-900 p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-950">⭑</span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">World Luxury Hotel Awards</h3>
              <p className="text-sm text-neutral-300">2023, 2021</p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-900 p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-950">✓</span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Green Hospitality Certificate</h3>
              <p className="text-sm text-neutral-300">2022, 2020</p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-900 p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary-950">♛</span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Travelers' Choice Award</h3>
              <p className="text-sm text-neutral-300">2023, 2022, 2021</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;