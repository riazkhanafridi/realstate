import { memo } from "react";
import Banner from "../../components/banner";
import { images } from "../../assets";
import About from "../home/_components/about";
import LawyerDetails from "../home/_components/lawyer-details";

const AboutPage = memo(function AboutPage() {
  return (
    <>
      <Banner
        title="About Us"
        description="Madina Real Estate & Design is your trusted partner for buying, selling, and designing properties in Peshawar and beyond. With years of experience and a passionate team, we deliver exceptional results for every client."
        images={[images.home.aboutHero]}
      />
      <About />
      <LawyerDetails />
    </>
  );
});

export default AboutPage;
