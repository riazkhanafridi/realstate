import { memo } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../constants/productsArray";
import BackButton from "../../components/back-button";
import ProductCard from "../../components/product-card";

const ProductByCategory = memo(function ProductByCategory() {
  const { category } = useParams();
  const findProduct = products.filter(
    (it) => it.category.toLowerCase() === category?.toLowerCase()
  );
  console.log("hello", findProduct);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="px-12 pt-4">
        <BackButton />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8 max-w-[1250px] mx-auto ">
        {findProduct?.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
});

export default ProductByCategory;
