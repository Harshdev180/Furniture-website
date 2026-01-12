import { Routes, Route, useLocation } from "react-router-dom";
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
import AddToCart from "./components/Cart/AddToCart";
import Checkout from "./components/checkoutPage/Checkout";
import ThankYou from "./pages/ThankYou";
import Tracking from "./pages/Tracking";
import QuoteRequest from "./components/QuoteRequest";
import Wishlist from "./components/Wishlist";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { WishlistProvider } from "./components/context/WishlistContext";
import { CartProvider } from "./components/context/AddtocartContext";
import Terms from "./components/policy/Terms";
import Cookies from "./components/policy/Cookies";
import Newprivacy from "./components/policy/Newprivacy";
import Newreturn from "./components/policy/Newreturn";
function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/cart", "/wishlist", "/checkoutPage"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <ScrollTop />
          <Navbar />

          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Catalog & Categories */}
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/category/:typeKey"
              element={<CategoryProducts />}
              key={location.pathname}
            />
            <Route path="/customize" element={<Customize />} />

            {/* Product Detail (WITH PARAM) */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/template" element={<Template />} />

            {/* About */}
            <Route path="/aboutus" element={<AboutHero />} />

            {/* Policy */}
            <Route path="/terms" element={<Terms />} />

            {/* Cookies */}
            <Route path="/cookies" element={<Cookies />} />

            {/* Privacy */}
            <Route path="/privacy" element={<Newprivacy />} />

            {/*Return */}
            <Route path="/return" element={<Newreturn />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/*add to cart */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <AddToCart />
                </ProtectedRoute>
              }
            />

            <Route path="/quoteRequest" element={<QuoteRequest />} />

            {/* Checkout */}
            <Route path="/checkoutPage" element={<Checkout />} />

            {/* Thank You & Tracking */}
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/tracking/:orderId?" element={<Tracking />} />

            {/* Auth */}
            <Route path="/auth" element={<AuthFlip />} />

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />

            {/* Wishlist */}
            <Route path="/wishlist" element={<Wishlist />} />

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
          {!shouldHideFooter && <Footer />}
        </CartProvider>
      </WishlistProvider>
    </>
  );
}
export default App;
