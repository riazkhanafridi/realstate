import { memo, useState } from "react";
import { motion } from "framer-motion";

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    // Simulating a successful form submission
    setTimeout(() => {
      setFormStatus("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-r from-primary via-secondary to-gray-700 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-white/80 mb-8 max-w-lg mx-auto">
          Whether you're looking to buy, sell, or design — fill in the form and
          our team will contact you within 24 hours.
        </p>

        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-xl p-8 rounded-lg shadow-xl bg-gray-800 text-gray-100"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 mt-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="email" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 mt-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Inquiry Type Field */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="subject" className="text-lg font-semibold">
                  Inquiry Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full p-4 mt-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select an inquiry type...</option>
                  <option value="Buy Property">🏠 I want to Buy a Property</option>
                  <option value="Sell Property">💰 I want to Sell a Property</option>
                  <option value="Interior Design">🛋️ Interior Design Service</option>
                  <option value="Exterior Design">🏡 Exterior Design Service</option>
                  <option value="Construction">🔨 Construction Project</option>
                  <option value="Renovation">🔧 Renovation Project</option>
                  <option value="General Inquiry">💬 General Inquiry</option>
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="text-lg font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 mt-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Form Status */}
            {formStatus && (
              <motion.div
                className="mt-4 text-center text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {formStatus}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ContactForm;
