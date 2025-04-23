import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import amenitiesData from '../data/amenitiesData';

const AmenitiesPage: React.FC = () => {
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
              Hotel Amenities & Services
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Indulge in our exceptional range of amenities and services designed for your comfort and enjoyment.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Amenities List */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Premium Amenities" 
            subtitle="Discover the luxury facilities and services available at Luxe Haven."
          />
          
          <div className="space-y-16 mt-12">
            {amenitiesData.map((amenity, index) => (
              <motion.div 
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={amenity.imageUrl} 
                      alt={amenity.title} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full mr-4 text-primary-950">
                      {amenity.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-primary-950">{amenity.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {amenity.detailedDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Enhance your stay with our premium additional services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Airport Transfers</h3>
              <p className="text-neutral-600 mb-4">
                Enjoy a seamless journey from the airport to our hotel with our private chauffeur service. Luxury vehicles and professional drivers ensure a comfortable start to your stay.
              </p>
              <p className="text-sm text-neutral-500">
                Please contact our concierge at least 24 hours in advance to arrange your transfer.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Private Dining</h3>
              <p className="text-neutral-600 mb-4">
                Experience exceptional cuisine in the privacy of your room or in one of our exclusive private dining venues. Our chefs will create a personalized menu tailored to your preferences.
              </p>
              <p className="text-sm text-neutral-500">
                Advance reservation required. Special dietary requirements can be accommodated.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Childcare Services</h3>
              <p className="text-neutral-600 mb-4">
                Our professional childcare team offers babysitting services and engaging children's activities, allowing parents to enjoy some well-deserved relaxation time.
              </p>
              <p className="text-sm text-neutral-500">
                Available for children of all ages. Please reserve at least 4 hours in advance.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Personalized Excursions</h3>
              <p className="text-neutral-600 mb-4">
                Discover the surrounding area with custom-designed excursions created specifically for your interests. From cultural explorations to adventure activities, our concierge will arrange everything.
              </p>
              <p className="text-sm text-neutral-500">
                Private guides and transportation included. Both half-day and full-day options available.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Business Services</h3>
              <p className="text-neutral-600 mb-4">
                Our comprehensive business center offers secretarial services, document printing, meeting room facilities, and technical support to ensure your business needs are met.
              </p>
              <p className="text-sm text-neutral-500">
                Available 24/7 with advance notice for specialized requests.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Special Celebrations</h3>
              <p className="text-neutral-600 mb-4">
                Whether it's an anniversary, birthday, or proposal, our team can help create unforgettable moments with customized decorations, gifts, cakes, and special experiences.
              </p>
              <p className="text-sm text-neutral-500">
                Please inform our concierge at least 48 hours in advance to prepare for your special occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;