interface GalleryImage {
  id: string;
  imageUrl: string;
  category: string;
  alt: string;
}

const galleryData: GalleryImage[] = [
  {
    id: "1",
    imageUrl: "/front-view.jpeg",
    category: "Exterior",
    alt: "Hotel exterior with grand entrance",
  },
  {
    id: "2",
    imageUrl: "/interior.jpeg",
    category: "Lobby",
    alt: "Elegant hotel lobby with chandelier",
  },
  {
    id: "3",
    imageUrl: "/interior-four.jpeg",
    category: "Rooms",
    alt: "Luxury suite with mountain view",
  },
  {
    id: "4",
    imageUrl: "/interior-three.jpeg",
    category: "Dining",
    alt: "Fine dining restaurant with elegant table settings",
  },
  {
    id: "5",
    imageUrl: "/washroom.jpeg",
    category: "Pool",
    alt: "Infinity pool overlooking the ocean",
  },
  {
    id: "6",
    imageUrl: "/interior-two.jpeg",
    category: "Spa",
    alt: "Luxurious spa treatment room",
  },
  {
    id: "7",
    imageUrl: "/outdoor.jpeg",
    category: "Exterior",
    alt: "Hotel exterior at sunset",
  },
  {
    id: "8",
    imageUrl: "/courtyard.jpeg",
    category: "Rooms",
    alt: "Presidential suite living area",
  },
  {
    id: "9",
    imageUrl: "/interior-five.jpeg",
    category: "Rooms",
    alt: "Premium bathroom with marble finishes",
  },
  {
    id: "10",
    imageUrl:
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dining",
    alt: "Hotel bar with premium selections",
  },
  {
    id: "11",
    imageUrl:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Exterior",
    alt: "Aerial view of the hotel and surroundings",
  },
  {
    id: "12",
    imageUrl:
      "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Amenities",
    alt: "Hotel gym with modern equipment",
  },
];

export default galleryData;
