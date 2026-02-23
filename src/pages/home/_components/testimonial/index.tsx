import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Home Buyer",
    message:
      "MHP Consultants helped me find my dream home in Peshawar. The team was professional, patient, and got me the best deal. Highly recommended!",
    rating: 5,
  },
  {
    name: "Riaz afridi",
    role: "Property Seller",
    message:
      "I sold my commercial property through Madina and the process was seamless. They handled everything from listing to final paperwork. Excellent service!",
    rating: 5,
  },
  {
    name: " Ibrahim",
    role: "Interior Design Client",
    message:
      "The interior design team transformed my living room completely. The result exceeded my expectations — modern, elegant, and exactly what I envisioned.",
    rating: 5,
  },
  {
    name: "Taj Muhammad",
    role: "Home Buyer",
    message:
      "Very trustworthy agency. They showed me multiple properties within my budget and never pressured me. Found the perfect family home within two weeks.",
    rating: 4,
  },
  {
    name: "Ibrahim Malik",
    role: "Renovation Client",
    message:
      "Had my kitchen and bathrooms renovated by their team. Quality workmanship, on-time delivery, and fair pricing. Will definitely use them again.",
    rating: 5,
  },
  {
    name: "Haji Sahib",
    role: "Exterior Design Client",
    message:
      "Our building's exterior was completely redesigned — new facade, landscaping, and lighting. The transformation was incredible. Our property value increased significantly.",
    rating: 5,
  },
  {
    name: "Musa Farid",
    role: "Commercial Buyer",
    message:
      "Purchased a retail shop through Madina Real Estate. They were knowledgeable about the market and helped me negotiate a great price. Very satisfied.",
    rating: 4,
  },
  {
    name: "Tariq Jameel",
    role: "Construction Client",
    message:
      "Hired them for full home construction. The quality of materials and craftsmanship was outstanding. The project was completed on schedule and within budget.",
    rating: 5,
  },
];

const Testimonial = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
            Testimonials
          </p>
          <h2 className="font-black text-gray-800 text-3xl md:text-4xl leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real stories from real clients who bought, sold, and designed with
            MHP Consultants
          </p>
        </motion.div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FaQuoteLeft className="text-primary/20 text-4xl" />
                <p className="text-gray-600 italic flex-1 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="border-t pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
