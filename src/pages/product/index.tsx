import { memo, useState } from "react";
import Banner from "../../components/banner";
import { images } from "../../assets";
import ProductCard from "../../components/product-card";
import { products } from "../../constants/productsArray";
import { categories } from "../../constants/categories";
import { motion } from "framer-motion";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "🏠 Residential", value: categories.residential },
  { label: "🏢 Commercial", value: categories.commercial },
  { label: "🛋️ Interior Design", value: categories.interior },
  { label: "🏡 Exterior Design", value: categories.exterior },
  { label: "🔨 Construction", value: categories.construction },
  { label: "🔧 Renovation", value: categories.renovation },
];

const ProductsPage = memo(function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);

  const bannerImages = [
    images.home.hero,
    images.home.hero1,
    images.home.hero3,
    images.home.hero4,
    images.home.hero5,
    images.home.hero6,
    images.home.hero7,
    images.home.hero8,
  ];

  return (
    <>
      <Banner
        title="Our Properties & Design Services"
        description="Browse our curated selection of residential and commercial properties for sale, alongside our premium interior and exterior design services. Whether you're buying, selling, or transforming a space — we have you covered."
        images={bannerImages}
      />

      <div className="py-12 max-w-[1250px] mx-auto px-4">
        <h1 className="text-2xl md:text-4xl text-center font-semibold text-primary mb-4">
          All Properties & Services
        </h1>
        <p className="text-center text-gray-500 mb-8">
          {filtered.length} listing{filtered.length !== 1 ? "s" : ""} available
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categoryFilters.map((f) => (
            <motion.button
              key={f.value}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(f.value);
                setVisibleCount(9);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeFilter === f.value
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-20 text-xl">
            No listings found for this category.
          </div>
        )}
      </div>
    </>
  );
});

export default ProductsPage;
