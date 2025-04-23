interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    role: 'Business Executive',
    testimonial: 'The attention to detail and personalized service at Luxe Haven exceeded all my expectations. The staff anticipated my needs before I even expressed them. Truly a five-star experience from check-in to check-out.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Travel Blogger',
    testimonial: 'In my years of traveling the world and staying at luxury properties, Luxe Haven stands out for its perfect blend of elegant design and warm hospitality. The culinary offerings are exceptional and the spa treatments rejuvenating.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'Honeymoon Guest',
    testimonial: 'Our honeymoon at Luxe Haven was absolute perfection. The private dinner on our balcony as the sun set was magical. Every member of staff made us feel special and the suite was beyond luxurious.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Family Traveler',
    testimonial: 'We were amazed by how well the hotel caters to both adults and children. While we enjoyed the spa and fine dining, our children were thoroughly entertained by the kids\' program. The family suite was spacious and beautifully appointed.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default testimonialsData;