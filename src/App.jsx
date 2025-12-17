import { Routes, Route, Navigate } from "react-router-dom";
// import Categories from "./components/Categories";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;