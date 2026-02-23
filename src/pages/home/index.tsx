import { memo } from "react";
import Banner from "../../components/banner";
import { images } from "../../assets";
import About from "./_components/about";
import ContactForm from "./_components/contact-form";
import Testimonial from "./_components/testimonial";
import LawyerDetails from "./_components/lawyer-details";
import BestSellingProducts from "./_components/best-selling-products";
import CategoriesSection from "./_components/categories";
import StatsSection from "./_components/stats";

const HomePage = memo(function HomePage() {
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
    <div>
      <Banner
        images={bannerImages}
        title="Welcome to MHP Consultant"
        description="Your trusted partner for buying and selling properties, and transforming spaces with stunning interior and exterior design. Find your dream home or create the perfect environment with us."
      />
      <img src={images.home.shopFront} alt="" className="w-full sm:h-[60vh]" />
      <StatsSection />
      <BestSellingProducts />
      <About />
      <Testimonial />
      <CategoriesSection />
      <LawyerDetails />
      <ContactForm />
    </div>
  );
});

export default HomePage;
