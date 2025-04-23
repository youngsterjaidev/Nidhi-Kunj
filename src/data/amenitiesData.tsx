import React from 'react';
import { Utensils, Wifi, Car, School as Pool, Dumbbell, Heart, Coffee, Calendar } from 'lucide-react';

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  detailedDescription: string;
}

const amenitiesData: Amenity[] = [
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    description: 'Experience exquisite cuisine crafted by world-class chefs using locally sourced ingredients.',
    icon: <Utensils size={24} />,
    imageUrl: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our award-winning restaurant offers an unforgettable culinary journey featuring seasonal menus crafted by internationally renowned chefs. Enjoy innovative dishes made with the finest locally sourced ingredients, complemented by an extensive wine list curated by our resident sommelier. The elegant dining room, with its stunning views and sophisticated ambiance, provides the perfect setting for a memorable dining experience.'
  },
  {
    id: 'high-speed-wifi',
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access throughout the property.',
    icon: <Wifi size={24} />,
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Never miss a beat with our complimentary, ultra-fast WiFi available throughout the entire property. Whether you\'re finalizing business presentations, video calling loved ones, or streaming your favorite content, our secure network ensures seamless connectivity with speeds up to 1 Gbps. Our IT support team is available 24/7 to assist with any connectivity needs.'
  },
  {
    id: 'valet-parking',
    title: 'Valet Parking',
    description: 'Enjoy the convenience of our professional valet parking service for a hassle-free arrival.',
    icon: <Car size={24} />,
    imageUrl: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our attentive valet parking service ensures a smooth arrival and departure experience. Our professional staff will greet you upon arrival, safely park your vehicle in our secure garage, and have it waiting for you whenever you\'re ready to depart. With 24-hour availability and insurance coverage, you can rest assured that your vehicle is in excellent hands throughout your stay.'
  },
  {
    id: 'infinity-pool',
    title: 'Infinity Pool',
    description: 'Relax in our stunning infinity pool with breathtaking views of the surrounding landscape.',
    icon: <Pool size={24} />,
    imageUrl: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our spectacular infinity pool appears to seamlessly merge with the horizon, offering panoramic views of the surrounding landscape. Maintained at an ideal temperature year-round, the pool features underwater music, comfortable loungers, and attentive poolside service. Enjoy signature cocktails and light fare from our pool bar as you soak in the sun or relax in private cabanas available for reservation.'
  },
  {
    id: 'fitness-center',
    title: 'Fitness Center',
    description: 'Maintain your workout routine in our state-of-the-art fitness center with personal trainers.',
    icon: <Dumbbell size={24} />,
    imageUrl: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our comprehensive fitness center features the latest cardio and strength training equipment from top brands like Technogym and Life Fitness. Open 24/7, the center offers spectacular views through floor-to-ceiling windows, personalized fitness assessments, and professional trainers available for one-on-one sessions. Complimentary fitness classes including yoga, pilates, and HIIT are offered daily in our dedicated studio space.'
  },
  {
    id: 'spa-wellness',
    title: 'Spa & Wellness',
    description: 'Indulge in rejuvenating treatments at our luxury spa featuring premium products and services.',
    icon: <Heart size={24} />,
    imageUrl: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our tranquil spa sanctuary offers a comprehensive menu of rejuvenating treatments performed by certified therapists using premium products from Elemis and La Prairie. Facilities include aromatic steam rooms, experience showers, a vitality pool, relaxation lounges, and private treatment suites. Our holistic approach to wellness combines ancient healing traditions with modern techniques to restore balance to body and mind.'
  },
  {
    id: 'concierge-service',
    title: 'Concierge Service',
    description: 'Our dedicated concierge team is available to assist with all your needs and special requests.',
    icon: <Coffee size={24} />,
    imageUrl: 'https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our multilingual concierge team provides unparalleled service 24 hours a day. From securing reservations at exclusive restaurants and arranging personalized tours, to fulfilling special requests and sharing insider knowledge of the area, our team is dedicated to enhancing your stay. With extensive local connections and attention to detail, they ensure every aspect of your experience exceeds expectations.'
  },
  {
    id: 'event-spaces',
    title: 'Event Spaces',
    description: 'Host memorable events in our versatile spaces equipped with cutting-edge technology.',
    icon: <Calendar size={24} />,
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    detailedDescription: 'Our elegant event spaces accommodate everything from intimate gatherings to grand celebrations. Featuring state-of-the-art audiovisual equipment, customizable lighting, and flexible layouts, each venue can be tailored to your specific vision. Our dedicated events team provides comprehensive planning assistance, while our executive chef creates custom menus featuring innovative cuisine. From corporate meetings to dream weddings, we ensure flawless execution and memorable experiences.'
  }
];

export default amenitiesData;