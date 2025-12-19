import { Routes, Route, Navigate } from "react-router-dom";
// import Categories from "./components/Categories";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/home/Home";
import Contact from "./pages/contact/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <ScrollTop />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;