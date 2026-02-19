import { categories } from "./categories";

type TProduct = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}[];

export const products: TProduct = [
  {
    id: 1,
    title: "Modern Family Villa",
    category: categories.residential,
    description:
      "Spacious 5-bedroom family villa with a large garden, modern kitchen, and stunning mountain views. Perfect for families seeking comfort and luxury.",
    price: 25000000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 2,
    title: "City Center Apartment",
    category: categories.residential,
    description:
      "Elegant 3-bedroom apartment located in the heart of the city. Features open-plan living, floor-to-ceiling windows, and premium finishes.",
    price: 12000000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    category: categories.residential,
    description:
      "Exclusive penthouse with panoramic city views, private rooftop terrace, and high-end interior finishes. The pinnacle of urban living.",
    price: 45000000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    category: categories.residential,
    description:
      "Affordable and well-designed studio apartment ideal for young professionals. Located near public transport and key amenities.",
    price: 4500000,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    id: 5,
    title: "Suburban Family Home",
    category: categories.residential,
    description:
      "Beautiful 4-bedroom house in a quiet suburban neighborhood with a large backyard, garage, and close proximity to top schools.",
    price: 18000000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    id: 6,
    title: "Commercial Office Space",
    category: categories.commercial,
    description:
      "Prime commercial office space in a high-traffic business district. Fully fitted with modern facilities, meeting rooms, and parking.",
    price: 35000000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 7,
    title: "Retail Shop Unit",
    category: categories.commercial,
    description:
      "Ground-floor retail unit in a busy shopping area with high footfall. Ideal for businesses looking for maximum visibility.",
    price: 9000000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 8,
    title: "Warehouse & Storage Facility",
    category: categories.commercial,
    description:
      "Large industrial warehouse with loading docks, high ceilings, and secure access. Suitable for logistics and storage businesses.",
    price: 22000000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 9,
    title: "Modern Living Room Design",
    category: categories.interior,
    description:
      "Transform your living room into a modern masterpiece. Our designers create elegant, functional spaces using premium materials and contemporary styles.",
    price: 500000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: 10,
    title: "Luxury Kitchen Interior",
    category: categories.interior,
    description:
      "Complete kitchen redesign with custom cabinetry, marble countertops, and smart appliances. A kitchen that is as beautiful as it is functional.",
    price: 750000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 11,
    title: "Master Bedroom Suite Design",
    category: categories.interior,
    description:
      "Create your perfect sanctuary with our master bedroom design service. We combine comfort, style, and functionality for the ultimate retreat.",
    price: 350000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: 12,
    title: "Office Interior Design",
    category: categories.interior,
    description:
      "Professional office interior design that boosts productivity and impresses clients. Ergonomic layouts, branded aesthetics, and quality furnishings.",
    price: 600000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: 13,
    title: "Building Facade Design",
    category: categories.exterior,
    description:
      "Stunning exterior facade design that enhances your building's curb appeal and value. Modern cladding, lighting, and landscaping solutions.",
    price: 1200000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: 14,
    title: "Garden & Landscape Design",
    category: categories.exterior,
    description:
      "Beautiful garden and landscape design for residential and commercial properties. From lush lawns to elegant hardscaping and water features.",
    price: 450000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: 15,
    title: "Outdoor Patio & Terrace",
    category: categories.exterior,
    description:
      "Design your perfect outdoor living space. Custom patios, terraces, and pergolas that extend your home and create beautiful outdoor environments.",
    price: 380000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: 16,
    title: "Commercial Building Exterior",
    category: categories.exterior,
    description:
      "Professional exterior design for commercial buildings. We create impressive, brand-aligned exteriors that attract customers and stand out.",
    price: 2500000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80",
  },
  {
    id: 17,
    title: "Full Home Construction",
    category: categories.construction,
    description:
      "End-to-end home construction service from foundation to finishing. We build your dream home with quality materials and skilled craftsmen.",
    price: 50000000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 18,
    title: "Commercial Building Construction",
    category: categories.construction,
    description:
      "Professional commercial construction services for offices, retail spaces, and industrial buildings. On-time delivery and quality guaranteed.",
    price: 80000000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=800&q=80",
  },
  {
    id: 19,
    title: "Home Renovation Package",
    category: categories.renovation,
    description:
      "Complete home renovation service covering structural changes, interior updates, and exterior improvements. Breathe new life into your property.",
    price: 3000000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
  {
    id: 20,
    title: "Kitchen & Bathroom Renovation",
    category: categories.renovation,
    description:
      "Specialized kitchen and bathroom renovation service. Modern fixtures, quality tiling, and expert plumbing for a fresh, updated look.",
    price: 1500000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
];
