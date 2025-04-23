import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import RoomCard from '../components/ui/RoomCard';
import roomsData from '../data/roomsData';

const RoomsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredRooms = filter === 'all' 
    ? roomsData 
    : roomsData.filter(room => {
        if (filter === 'luxury' && room.price >= 600) return true;
        if (filter === 'deluxe' && room.price >= 300 && room.price < 600) return true;
        if (filter === 'standard' && room.price < 300) return true;
        return false;
      });

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
              Our Rooms & Suites
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Discover our collection of elegantly appointed accommodations designed for ultimate comfort and luxury.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-md shadow-sm p-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-sm ${
                  filter === 'all' 
                    ? 'bg-primary-950 text-white' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                All Rooms
              </button>
              <button
                onClick={() => setFilter('luxury')}
                className={`px-4 py-2 text-sm font-medium rounded-sm ${
                  filter === 'luxury' 
                    ? 'bg-primary-950 text-white' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                Luxury Suites
              </button>
              <button
                onClick={() => setFilter('deluxe')}
                className={`px-4 py-2 text-sm font-medium rounded-sm ${
                  filter === 'deluxe' 
                    ? 'bg-primary-950 text-white' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                Deluxe Rooms
              </button>
              <button
                onClick={() => setFilter('standard')}
                className={`px-4 py-2 text-sm font-medium rounded-sm ${
                  filter === 'standard' 
                    ? 'bg-primary-950 text-white' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                Standard Rooms
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, index) => (
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
          
          {filteredRooms.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-neutral-600">No rooms found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Room Information" 
            subtitle="Everything you need to know about your stay with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Check-In & Check-Out</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Check-in time: 3:00 PM</li>
                <li>• Check-out time: 12:00 PM</li>
                <li>• Early check-in and late check-out available upon request (additional charges may apply)</li>
                <li>• Express check-in/check-out service available</li>
              </ul>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Room Amenities</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Luxury bed linens</li>
                <li>• Pillow menu</li>
                <li>• Smart TV with streaming services</li>
                <li>• Minibar with premium selections</li>
                <li>• In-room safe</li>
                <li>• Climate control</li>
                <li>• Complimentary high-speed WiFi</li>
              </ul>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-primary-950 mb-4">Policies</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Non-smoking rooms</li>
                <li>• Pet-friendly rooms available (fee applies)</li>
                <li>• Children of all ages welcome</li>
                <li>• Extra bed/crib available upon request</li>
                <li>• Credit card required at check-in</li>
                <li>• Cancellation policy varies by room type and rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;