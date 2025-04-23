import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

interface RoomDetailProps {
  room: {
    name: string;
    longDescription: string;
    price: number;
    galleryImages: string[];
    amenities: string[];
    size: string;
    capacity: string;
    bedType: string;
  };
}

const RoomDetail: React.FC<RoomDetailProps> = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-700 hover:text-primary-800 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Rooms
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {room.galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${room.name} - View ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-3xl font-bold text-primary-950 mb-4">{room.name}</h1>
            <p className="text-2xl text-secondary-600 font-semibold mb-6">
              ${room.price} <span className="text-neutral-500 text-base">per night</span>
            </p>

            <div className="prose prose-lg text-neutral-600 mb-8">
              <p>{room.longDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary-950 mb-2">Room Details</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>Size: {room.size}</li>
                  <li>Capacity: {room.capacity}</li>
                  <li>Bed: {room.bedType}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-primary-950 mb-2">Amenities</h3>
                <ul className="space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-neutral-600">
                      <Check size={16} className="text-secondary-600 mr-2" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <BookingForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;