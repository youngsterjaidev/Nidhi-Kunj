import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import RoomDetail from '../components/ui/RoomDetail';
import roomsData from '../data/roomsData';

const RoomDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const room = roomsData.find(room => room.id === id);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <div>
      <section className="relative bg-primary-950 py-32">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-center">
            {room.name}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <RoomDetail room={room} />
      </section>
    </div>
  );
};

export default RoomDetailPage;