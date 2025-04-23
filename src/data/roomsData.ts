export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  galleryImages: string[];
  features: string[];
  size: string;
  capacity: string;
  bedType: string;
  amenities: string[];
  featured: boolean;
}

const roomsData: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    description:
      "Our spacious deluxe rooms offer premium comfort with elegant furnishings and modern amenities.",
    longDescription:
      "Indulge in the perfect blend of sophistication and comfort in our Deluxe King Room. This spacious accommodation features a luxurious king-size bed with premium linens, an elegant sitting area, and a marble bathroom with a deep soaking tub and separate rainfall shower. Large windows offer spectacular views while maintaining your privacy. Every detail has been carefully considered to create an environment of refined luxury and comfort.",
    price: 350,
    imageUrl: "/interior.jpeg",
    galleryImages: [
      "/interior-two.jpeg",
      "/interior-three.jpeg",
      "/interior-four.jpeg",
      "/interior-five.jpeg",
    ],
    features: ["Mountain View", "Balcony", "Smart TV"],
    size: "45 m²",
    capacity: "2 Adults",
    bedType: "King Size Bed",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Minibar",
      "Safe",
      "Flat-screen TV",
      "Coffee Machine",
      "Bathroom Toiletries",
      "Hairdryer",
      "Iron & Board",
      "Room Service",
    ],
    featured: true,
  },
  {
    id: "luxury-suite",
    name: "Luxury Suite",
    description:
      "Experience ultimate luxury in our spacious suites with separate living areas and premium amenities.",
    longDescription:
      "Our Luxury Suite represents the pinnacle of sophisticated accommodation. With a generous floor plan featuring a separate bedroom and living area, this suite provides an ideal space for both relaxation and entertaining. The king-size bed is dressed in the finest linens, while the marble bathroom features dual vanities, a deep soaking tub, and a separate rainfall shower. The suite also includes a dining area, wet bar, and a private balcony overlooking breathtaking scenery. Every detail has been meticulously designed to provide an unforgettable luxury experience.",
    price: 650,
    imageUrl: "/interior-three.jpeg",
    galleryImages: [
      "/interior-two.jpeg",
      "/interior-three.jpeg",
      "/interior-four.jpeg",
      "/interior-five.jpeg",
    ],
    features: ["Ocean View", "Private Balcony", "Living Room"],
    size: "85 m²",
    capacity: "2 Adults, 2 Children",
    bedType: "King Size Bed + Sofa Bed",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Fully Stocked Bar",
      "Safe",
      "Smart TV",
      "Espresso Machine",
      "Luxury Bathroom Amenities",
      "Bathrobe & Slippers",
      "Dining Area",
      "Exclusive Lounge Access",
      "Butler Service",
    ],
    featured: true,
  },
  {
    id: "premium-double",
    name: "Premium Double Room",
    description:
      "Perfect for families or groups, our premium double rooms offer two queen beds and ample space.",
    longDescription:
      "Our Premium Double Room provides generous space and comfort, ideal for families or small groups. Featuring two plush queen-size beds with premium linens, this room offers a perfect balance of luxury and functionality. The room includes a comfortable seating area and a well-appointed bathroom with a combination tub and shower. Modern amenities and thoughtful touches ensure a comfortable and enjoyable stay for all guests. The warm, inviting ambiance creates a perfect retreat after a day of exploration or business.",
    price: 420,
    imageUrl: "/interior-two.jpeg",
    galleryImages: [
      "/interior-two.jpeg",
      "/interior-three.jpeg",
      "/interior-four.jpeg",
      "/interior-five.jpeg",
    ],
    features: ["Garden View", "Work Desk", "Lounge Area"],
    size: "55 m²",
    capacity: "4 Adults",
    bedType: "Two Queen Beds",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Minibar",
      "Safe",
      "Flat-screen TV",
      "Coffee Maker",
      "Premium Toiletries",
      "Hairdryer",
      "Iron & Board",
      "Room Service",
    ],
    featured: false,
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "Our most exclusive accommodation featuring luxurious living spaces and personalized service.",
    longDescription:
      "The Presidential Suite represents the ultimate in luxury and exclusivity. This expansive suite features a master bedroom with a king-size bed dressed in premium linens, a spacious living room with elegant furnishings, a formal dining area that seats eight, and a fully equipped kitchen. The marble master bathroom boasts a whirlpool tub, separate rainfall shower, and dual vanities. Additional features include a guest bathroom, private office, and a wraparound balcony offering panoramic views. Guests of the Presidential Suite enjoy personalized butler service, exclusive amenities, and unparalleled privacy.",
    price: 1200,
    imageUrl: "/interior-five.jpeg",
    galleryImages: [
      "/interior-two.jpeg",
      "/interior-three.jpeg",
      "/interior-four.jpeg",
      "/interior-five.jpeg",
    ],
    features: ["Panoramic View", "Private Terrace", "Dining Room"],
    size: "150 m²",
    capacity: "4 Adults",
    bedType: "King Size Bed + Additional Bedroom",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Full Bar",
      "Safe",
      "Multiple Smart TVs",
      "Full Kitchen",
      "Luxury Bathroom Spa",
      "Premium Toiletries",
      "Dining Area for 8",
      "Private Check-in/out",
      "24/7 Butler Service",
      "Personal Chef Option",
      "Private Elevator",
    ],
    featured: true,
  },
];

export default roomsData;
