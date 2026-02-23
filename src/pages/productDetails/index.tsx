import { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../constants/productsArray";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

function formatPrice(price: number) {
  if (price >= 1_000_000) return `PKR ${(price / 1_000_000).toFixed(1)}M`;
  if (price >= 1_000) return `PKR ${(price / 1_000).toFixed(0)}K`;
  return `PKR ${price}`;
}

const ProductDetails = memo(function ProductDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (it) => it.title.toLowerCase() === name?.toLowerCase()
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-500">
        <p className="text-2xl font-semibold mb-4">Listing not found</p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          Back to Listings
        </button>
      </div>
    );
  }

  const isDesign =
    product.category === "Interior Design" ||
    product.category === "Exterior Design";
  const isService =
    product.category === "Construction Services" ||
    product.category === "Renovation";

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline"
      >
        <FaArrowLeft /> Back to Listings
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[55vh] lg:h-[70vh] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
              <FaStar /> {product.rating} / 5.0
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-black text-gray-800">{product.title}</h1>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaMapMarkerAlt className="text-primary" />
            <span>Khalid Shopping Plaza, Karkhano Market, Peshawar</span>
          </div>

          {/* Property Stats */}
          {!isDesign && !isService && (
            <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4">
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FaBed className="text-primary text-xl" />
                <span className="font-bold text-lg">4</span>
                <span className="text-xs text-gray-400">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FaBath className="text-primary text-xl" />
                <span className="font-bold text-lg">3</span>
                <span className="text-xs text-gray-400">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FaRulerCombined className="text-primary text-xl" />
                <span className="font-bold text-lg">2,400</span>
                <span className="text-xs text-gray-400">Sq. Ft.</span>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Price */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-gray-500 mb-1">
              {isDesign || isService ? "Starting from" : "Asking Price"}
            </p>
            <p className="text-4xl font-black text-primary">
              {formatPrice(product.price)}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="tel:+923473283510"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-opacity-90 transition"
            >
              <FaPhoneAlt /> Call Agent
            </a>
            <a
              href="https://wa.me/923473283510"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default ProductDetails;
