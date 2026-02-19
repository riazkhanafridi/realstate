import { memo } from "react";
import Banner from "../../components/banner";
import { images } from "../../assets";
import Testimonial from "../home/_components/testimonial";

const TestimonialPage = memo(function TestimonialPage() {
  return (
    <>
      <Banner
        title="Client Testimonials"
        description="Hear from our satisfied clients who bought, sold, and designed with Madina Real Estate & Design."
        images={[images.home.testimonialHero]}
      />
      <Testimonial />
    </>
  );
});

export default TestimonialPage;
