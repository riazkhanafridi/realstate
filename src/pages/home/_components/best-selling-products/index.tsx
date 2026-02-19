import { memo } from "react";
import { products } from "../../../../constants/productsArray";
import { Link } from "react-router-dom";
import ProductCard from "../../../../components/product-card";

const BestSellingProducts = memo(function BestSellingProducts() {
  return (
    <div className="py-12">
      <h1 className="text-2xl md:text-4xl text-center font-semibold text-primary">
        Featured Properties & Design Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8 max-w-[1250px] mx-auto">
        {products.slice(0, 9).map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-end max-w-[1250px] mx-auto  px-8 ">
        <Link
          to={"/products"}
          className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
        >
          View All Properties
        </Link>
      </div>
    </div>
  );
});

export default BestSellingProducts;
