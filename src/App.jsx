import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import CatelogPage from "./components/Catelog";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/catalog" element={<CatelogPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:type" element={<CategoryProducts />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default App;