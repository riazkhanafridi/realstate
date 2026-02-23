import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

const Footer = memo(function Footer() {
  const moveToTop = useCallback(function moveToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.footer
      className="bg-gradient-to-t from-primary to-slate-400 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Side - Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <div className="space-y-4 px-5">
            <motion.h3
              className="text-2xl font-semibold text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
            MHP Consultants 
            </motion.h3>
            <motion.p
              className="text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MHP Consultants offers expert property buying, selling,
              and stunning interior & exterior design services. Founded by
              Engineer Shahab Afridi, we are committed to finding your perfect
              property and creating beautiful spaces.
            </motion.p>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-xl font-semibold text-secondary">Quick Links</h3>
          <nav className="space-y-2">
            {links.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={moveToTop}
                className="text-white hover:text-blue-300"
              >
                <Link to={link.to}>{link.name}</Link>
              </motion.li>
            ))}
          </nav>
        </div>

        {/* Right Side - Social Icons & Contact Info */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-xl font-semibold text-white text-secondary">
            Follow Us
          </h3>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-white text-2xl"
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-white text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-white text-2xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
          </div>
          <div className="text-white text-sm">
            <div className="flex items-center gap-x-2">
              <FaPhoneAlt />
              <p>+923473283510</p>
              <p>+923337233608</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdEmail />
              <p>shahabafridi824@gmail,com</p>
            </div>
          </div>

          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Address: 91 plaza near Gul Haji plaza University Road Peshawar
          </motion.p>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Engineer Shahab Afridi. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
});

export default Footer;
