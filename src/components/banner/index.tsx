import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type TBannerProps = {
  images: string[];
  title: string;
  description?: string;
};

type TLink = {
  name: string;
  to: string;
};

const links: TLink[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Properties", to: "/products" },
  { name: "Contact", to: "/contact" },
];

const Banner = memo(function Banner(props: TBannerProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden pb-12">
      {/* Header */}
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-sm md:text-xl">
            Madina Real Estate & Design
          </div>
          <div className="flex items-center">
            {/* Desktop Menu */}
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className="py-2 px-6 border-b-2 border-b-transparent transition-all duration-300 ease-in-out  flex"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden flex flex-col items-center justify-center space-y-1"
              onClick={toggleMenu}
            >
              <span
                className={`w-6 h-1 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`w-6 h-1 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`w-6 h-1 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary absolute top-24 left-0 w-full z-50 text-white duration-1000 delay-300 transition-all ease-linear">
          <nav className="flex flex-col items-center py-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className="py-2 px-6 text-white uppercase text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Banner Content */}
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center py-16 gax-6 justify-between gap-x-12">
          {/* Left Side: Swiper Slider */}
          <div className="lg:w-1/2 flex flex-col relative z-20 text-center lg:text-left">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-8 lg:mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-2xl sm:text-6xl lg:text-3xl font-black leading-tight dark:text-white text-gray-800">
              {props.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {props.description}
            </p>
            <div className="flex mt-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="uppercase  py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </a>
              <Link
                to="/products"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                View Properties
              </Link>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex mt-8 lg:mt-0 border">
            <Swiper
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              effect="fade"
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="w-full"
            >
              {props.images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="h-[60vh] lg:h-[700px] max-h-screen"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full  object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
});

export default Banner;
