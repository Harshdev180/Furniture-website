import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import CatelogPage from "./components/Catelog";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/home/Home";
import Aboutus from "./components/about/AboutHero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Catalog and categories pages */}
        <Route path="/catalogue" element={<CatelogPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:type" element={<CategoryProducts />} />

        {/* Product detail page */}
        <Route path="/productdetails" element={<ProductDetail />} />

        {/* About page */}
        <Route path="/aboutus" element={<Aboutus />} />

        {/* 404 fallback */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
