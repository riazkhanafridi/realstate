import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined, FaStar, FaMapMarkerAlt } from "react-icons/fa";

// Category badge colors
const categoryColors: Record<string, string> = {
  "Residential Properties": "bg-blue-100 text-blue-700",
  "Commercial Properties": "bg-purple-100 text-purple-700",
  "Interior Design": "bg-amber-100 text-amber-700",
  "Exterior Design": "bg-green-100 text-green-700",
  "Construction Services": "bg-red-100 text-red-700",
  "Renovation": "bg-teal-100 text-teal-700",
};

// Format price with commas
function formatPrice(price: number) {
  if (price >= 1_000_000) {
    return `PKR ${(price / 1_000_000).toFixed(1)}M`;
  }
  if (price >= 1_000) {
    return `PKR ${(price / 1_000).toFixed(0)}K`;
  }
  return `PKR ${price}`;
}

const ProductCard = memo(function ProductCard(props: any) {
  const navigate = useNavigate();

  const navigateToProductDetails = useCallback(
    function navigateToProductDetails() {
      const formattedTitle = props?.product?.title.trim().toLowerCase();
      navigate(`/product-details/${formattedTitle}`);
      window.scroll({ top: 0, behavior: "smooth" });
    },
    [navigate, props?.product?.title]
  );

  const badgeClass =
    categoryColors[props.product.category] || "bg-gray-100 text-gray-700";

  const isDesign =
    props.product.category === "Interior Design" ||
    props.product.category === "Exterior Design";
  const isService =
    props.product.category === "Construction Services" ||
    props.product.category === "Renovation";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (props.index ?? 0) * 0.1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={navigateToProductDetails}
    >
      {/* Image */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}
        >
          {props.product.category}
        </span>
        {/* Rating Badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-yellow-500 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {props.product.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {props.product.title}
          </h3>
        </div>

        {/* Location indicator */}
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
          <FaMapMarkerAlt />
          <span>Peshawar, KPK</span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {props.product.description}
        </p>

        {/* Stats row */}
        {!isDesign && !isService && (
          <div className="flex items-center gap-4 text-gray-500 text-xs mb-4 border-t pt-3">
            <span className="flex items-center gap-1">
              <FaBed className="text-primary" /> 4 Beds
            </span>
            <span className="flex items-center gap-1">
              <FaBath className="text-primary" /> 3 Baths
            </span>
            <span className="flex items-center gap-1">
              <FaRulerCombined className="text-primary" /> 2,400 sqft
            </span>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between border-t pt-3">
          <span className="text-xl font-extrabold text-primary">
            {formatPrice(props.product.price)}
          </span>
          <button className="text-xs font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
            {isDesign || isService ? "Get Quote" : "View Details"}
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default ProductCard;
