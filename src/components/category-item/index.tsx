import { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

type TCategoryItemProps = {
  categoryTitle: string;
  image: string;
  link: string;
};
const CategoryItem = memo(function CategoryItem(props: TCategoryItemProps) {
  const navigate = useNavigate();

  const navigateToProductDetails = useCallback(
    function navigateToProductDetails() {
      const formattedTitle = props?.categoryTitle?.trim().toLowerCase();
      navigate(`/product-by-category/${formattedTitle}`);
      window.scroll({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <div
      className="w-full  max-w-[600px] relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      onClick={navigateToProductDetails}
    >
      {/* <Link to={`/product-details/${props.link}`} className="block"> */}
      <div className="relative w-full h-[300px] max-sm:h-[250px] overflow-hidden rounded-lg p-1">
        <img
          src={props.image}
          alt={props.categoryTitle}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay for text */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black opacity-60 px-6 py-3 text-white flex justify-center items-center h-16 max-sm:h-12">
          <h3 className="text-2xl font-semibold max-sm:text-lg">
            {props.categoryTitle}
          </h3>
        </div>
      </div>
      {/* </Link> */}
      <div className="inset-0 hover:bg-black/35 cursor-pointer transition-all ease-in-out duration-300 absolute top-0 left-0" />
    </div>
  );
});

export default CategoryItem;
