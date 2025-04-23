import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import BookingForm from '../components/ui/BookingForm';
import RoomCard from '../components/ui/RoomCard';
import AmenityCard from '../components/ui/AmenityCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionHeading from '../components/ui/SectionHeading';

import roomsData from '../data/roomsData';
import amenitiesData from '../data/amenitiesData';
import testimonialsData from '../data/testimonialsData';

const HomePage: React.FC = () => {
  const featuredRooms = roomsData.filter(room => room.featured);
  const highlightedAmenities = amenitiesData.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen bg-hero-pattern bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-primary-950 opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The cottage of happiness
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the warmth of home away from home
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/rooms" 
              className="inline-block bg-secondary-600 text-primary-950 px-8 py-3 font-medium rounded-sm hover:bg-secondary-500 transition-colors duration-300"
            >
              Explore Our Rooms
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="container mx-auto px-4 -mt-24 relative z-20 mb-20">
        <BookingForm />
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <SectionHeading 
                title="Welcome to Luxe Haven" 
                subtitle="A sanctuary of sophistication nestled in the heart of paradise."
                centered={false}
              />
              <p className="text-neutral-600 mb-6">
                Since 2005, Luxe Haven has redefined luxury hospitality by creating extraordinary experiences that connect our guests with the essence of our destination. Our commitment to impeccable service, attention to detail, and sustainable luxury practices has earned us recognition among the world's finest hotels.
              </p>
              <p className="text-neutral-600 mb-8">
                Every aspect of your stay is meticulously crafted to ensure perfection, from our locally-inspired cuisine to our thoughtfully designed accommodations and rejuvenating spa treatments.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium text-primary-700 hover:text-primary-800 transition-colors"
              >
                Discover Our Story <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                className="h-64 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hotel exterior" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="h-64 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hotel lobby" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="h-64 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luxury room" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="h-64 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fine dining" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Luxury Accommodations" 
            subtitle="Experience the perfect blend of comfort and elegance in our meticulously designed rooms and suites."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard 
                key={room.id}
                id={room.id}
                name={room.name}
                description={room.description}
                price={room.price}
                imageUrl={room.imageUrl}
                features={room.features}
                size={room.size}
                capacity={room.capacity}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/rooms" 
              className="inline-flex items-center font-medium text-primary-700 hover:text-primary-800 transition-colors"
            >
              View All Accommodations <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-amenities-pattern bg-cover bg-fixed bg-center">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Experience Our Amenities" 
            subtitle="Indulge in our premium services and facilities designed for your ultimate comfort and enjoyment."
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightedAmenities.map((amenity, index) => (
              <AmenityCard 
                key={amenity.id}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/amenities" 
              className="inline-flex items-center font-medium text-white hover:text-secondary-600 transition-colors"
            >
              Explore All Amenities <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Guest Experiences" 
            subtitle="Discover what our guests have to say about their stay at Luxe Haven."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imageUrl={testimonial.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Experience Luxe Haven?
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book your stay today and indulge in the ultimate luxury experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-secondary-600 text-primary-950 px-8 py-3 font-medium rounded-sm hover:bg-secondary-500 transition-colors duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;