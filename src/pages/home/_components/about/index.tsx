import { memo } from "react";
import { motion } from "framer-motion";
import { images } from "../../../../assets";

const About = memo(function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 space-y-8 lg:space-y-0 max-w-[1250px] mx-auto">
      {/* Left Side: Title and Description */}
      <div className="flex flex-col items-start lg:w-1/2 space-y-6">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Welcome to MHP Consultants— your trusted partner for
          buying, selling, and designing properties. Founded by Engineer Shahab
          Afridi, we specialize in residential and commercial real estate,
          as well as stunning interior and exterior design solutions. Whether
          you are looking to buy your dream home, sell a property at the best
          price, or transform a space with beautiful interior or exterior
          design, our experienced team is here to guide you every step of the
          way.
        </motion.p>
      </div>

      {/* Right Side: Owner Image */}
      <div className="flex items-center justify-end lg:w-1/2">
        <motion.img
          src={images.home.owner}
          alt="Owner"
          className="h-[50vh] object-cover rounded-full border-4 border-white shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
});

export default About;
