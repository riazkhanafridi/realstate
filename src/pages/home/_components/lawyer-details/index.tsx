import { memo, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../../../assets";

const LawyerDetails = memo(function LawyerDetails() {
  const [activeSection, setActiveSection] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleSection = (sectionId: any) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Experienced Team
      </motion.h2>

      <div className="grid grid-cols-6 my-10 gap-10 sm:gap-5">
        <div className="col-span-8 hover:scale-90 transition-all duration-300 sm:col-span-4  lg:col-span-2 h-[350px] sm:h-[400px] shadow-md rounded-md overflow-hidden">
          <img className="h-[80%] w-full " src={images.home.owner} alt="" />
          <div className="w-full h-[20%] flex justify-center items-center px-4">
            <p className="text-black font-extrabold capitalize text-md text-center">
              Engineer Shahab Afridi <br /> ( Owner )
            </p>
          </div>
        </div>
        <div className="col-span-8 hover:scale-90 transition-all duration-300 sm:col-span-4  lg:col-span-2 h-[350px] sm:h-[400px] shadow-md rounded-md overflow-hidden">
          <img
            className="h-[80%] w-full "
            src="/images/ibrahim khan.jpeg"
            alt=""
          />
          <div className="w-full h-[20%] flex justify-center items-center px-4">
            <p className="text-black font-extrabold capitalize text-md text-center">
              Ibrahim Afridi
              <br /> ( Property Manager )
            </p>
          </div>
        </div>

        <div className="col-span-8 hover:scale-90 transition-all duration-300 sm:col-span-4  lg:col-span-2 h-[350px] sm:h-[400px] shadow-md rounded-md overflow-hidden">
          <img className="h-[80%] w-full" src="/images/afridi.jpg" alt="" />
          <div className="w-full h-[20%] flex justify-center items-center px-4">
            <p className="text-black font-extrabold capitalize text-md text-center">
              Riaz Afridi
              <br /> ( Design Consultant )
            </p>
          </div>
        </div>

        <div className="col-span-8 sm:col-span-4 hover:scale-90 transition-all duration-300  lg:col-span-2 h-[350px] sm:h-[400px] shadow-md overflow-hidden border-t-2 rounded-md">
          <img
            className="h-[80%] w-full rounded-md"
            src="/images/riaz.jpg"
            alt=""
          />
          <div className="w-full h-[20%] flex justify-center items-center px-4">
            <p className="text-black font-extrabold capitalize text-md text-center">
              Riaz Afridi
              <br /> ( Sales Associate )
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {/* Dropdown 1: Our Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            onClick={() => toggleSection("ourServices")}
            className="cursor-pointer bg-gray-200 p-4 rounded-lg flex justify-between items-center hover:bg-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Our Services
            </h3>
            <span>{activeSection === "ourServices" ? "−" : "+"}</span>
          </div>

          {activeSection === "ourServices" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-lg mt-4"
            >
              <ul className="space-y-2">
                <li>🏠 Residential Property Buying & Selling</li>
                <li>🏢 Commercial Property Buying & Selling</li>
                <li>🛋️ Interior Design & Decoration</li>
                <li>🏗️ Exterior Design & Landscaping</li>
                <li>🔨 Construction & Renovation</li>
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Dropdown 2: Buying Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            onClick={() => toggleSection("buyingProcess")}
            className="cursor-pointer bg-gray-200 p-4 rounded-lg flex justify-between items-center hover:bg-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              How to Buy a Property
            </h3>
            <span>{activeSection === "buyingProcess" ? "−" : "+"}</span>
          </div>

          {activeSection === "buyingProcess" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-lg mt-4"
            >
              <ul className="space-y-2">
                <li>1. Browse our available properties online or visit our office</li>
                <li>2. Schedule a property viewing with our agent</li>
                <li>3. Make an offer and negotiate the best price</li>
                <li>4. Complete legal documentation and verification</li>
                <li>5. Finalize payment and receive your keys</li>
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Dropdown 3: Selling Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div
            onClick={() => toggleSection("sellingProcess")}
            className="cursor-pointer bg-gray-200 p-4 rounded-lg flex justify-between items-center hover:bg-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              How to Sell Your Property
            </h3>
            <span>{activeSection === "sellingProcess" ? "−" : "+"}</span>
          </div>

          {activeSection === "sellingProcess" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-lg mt-4"
            >
              <ul className="space-y-2">
                <li>1. Contact us for a free property valuation</li>
                <li>2. We list your property on our platform and market it</li>
                <li>3. We arrange viewings with qualified buyers</li>
                <li>4. We negotiate the best price on your behalf</li>
                <li>5. We handle all paperwork for a smooth transaction</li>
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Dropdown 4: Design Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div
            onClick={() => toggleSection("designServices")}
            className="cursor-pointer bg-gray-200 p-4 rounded-lg flex justify-between items-center hover:bg-gray-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Interior & Exterior Design
            </h3>
            <span>{activeSection === "designServices" ? "−" : "+"}</span>
          </div>

          {activeSection === "designServices" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-lg mt-4"
            >
              <ul className="space-y-2">
                <li>🛋️ Interior: Living rooms, bedrooms, kitchens, offices</li>
                <li>🏡 Exterior: Facades, gardens, patios, driveways</li>
                <li>🎨 Custom design plans tailored to your style and budget</li>
                <li>🔧 Full project management from concept to completion</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
});

export default LawyerDetails;
