import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/home/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import CatalogPage from "./components/Catelog";
import ProductDetail from "./components/ProductDetail";
import Contact from "./pages/contact/Contact";
import AboutHero from "./components/about/AboutHero";
import ScrollTop from "./components/ScrollTop";
import "./App.css";
import Template from "./components/home/Template";
import AuthFlip from "./components/AuthFlip";
import Customize from "./components/customization/Customize";


function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Catalog & Categories */}
        <Route path="/catalogue" element={<CatalogPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:typeKey" element={<CategoryProducts />} />
        <Route path="/customize" element={<Customize />} />

        {/* Product Detail (WITH PARAM) */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/template" element={<Template />} />

        {/* About */}
        <Route path="/aboutus" element={<AboutHero />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
          

          {/*add to cart */}
        <Route path="/cart" element={<AddToCart />} />

        {/* Auth */}
        <Route path="/auth" element={<AuthFlip />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

