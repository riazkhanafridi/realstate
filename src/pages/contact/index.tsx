import { memo } from "react";
import Banner from "../../components/banner";
import { images } from "../../assets";
import ContactForm from "../home/_components/contact-form";

const ContactPage = memo(function ContactPage() {
  return (
    <>
      <Banner
        title="Contact Us"
        description="Have a property in mind, or ready to list yours? Our expert team at Madina Real Estate & Design is here to help. Reach out to us via phone, WhatsApp, or the contact form below and we'll get back to you promptly."
        images={[images.home.contactHero]}
      />
      <ContactForm />
    </>
  );
});

export default ContactPage;
