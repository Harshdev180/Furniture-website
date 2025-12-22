import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/home/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import CatelogPage from "./components/Catelog";
import ProductDetail from "./components/ProductDetail";
import Contact from "./pages/contact/Contact";
import ScrollTop from "./components/ScrollTop";
import AboutHero from "./components/about/AboutHero";
import "./App.css";

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Catalog & Categories */}
        <Route path="/catalogue" element={<CatelogPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:typeKey" element={<CategoryProducts />} />

        {/* Product Detail */}
        <Route path="/productdetails/:id" element={<ProductDetail />} />


        {/* About page */}
        <Route path="/aboutus" element={<AboutHero />} />


        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
