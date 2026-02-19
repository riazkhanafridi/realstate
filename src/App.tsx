import { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import TestimonialPageg from "./pages/testimonial";
import ProductsPage from "./pages/product";
import ProductDetails from "./pages/productDetails";
import ProductByCategory from "./pages/productsByCategory";

const App = memo(function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details/:name" element={<ProductDetails />} />
        <Route
          path="/product-by-category/:category"
          element={<ProductByCategory />}
        />
        <Route path="/testimonials" element={<TestimonialPageg />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
});

export default App;
