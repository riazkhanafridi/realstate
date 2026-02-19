// import CategoryItem from "../../../../components/category-item";
// import { products } from "../../../../constants/productsArray";

// const CategoriesSection = () => {
//   return (
//     <div className="max-w-screen-xl pb-12 px-5  mx-auto mt-24">
//       <h2 className="text-black text-center font-bold text-5xl  tracking-[1.56px] max-sm:text-4xl mb-12">
//         Our Categories
//       </h2>
//       <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3  gap-10">
//         {products.map((it) => {
//           return (
//             <CategoryItem
//               categoryTitle={it.category}
//               image={it.image}
//               link={it.category}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default CategoriesSection;

import CategoryItem from "../../../../components/category-item";
import { products } from "../../../../constants/productsArray";

const CategoriesSection = () => {
  // Get unique categories
  const uniqueCategories = [
    ...new Set(products.map((it) => it.category)), // Extract unique categories
  ];

  return (
    <div className="max-w-screen-xl pb-12 px-5 mx-auto mt-24">
      <h2 className="text-black text-center font-bold text-5xl tracking-[1.56px] max-sm:text-4xl mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-10">
        {uniqueCategories.map((category) => {
          // Find an image for each unique category (assuming it's the first one in the array)
          const categoryImage = products.find(
            (product) => product.category === category
          )?.image;

          return (
            <CategoryItem
              key={category} // Use category as a unique key
              categoryTitle={category}
              image={categoryImage ?? ""} // Pass the image with fallback
              link={category} // Link to the category page (assuming you want to link by category name)
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
