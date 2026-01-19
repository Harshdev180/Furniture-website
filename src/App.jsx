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
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/cart", "/wishlist", "/checkoutPage"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <WishlistProvider>
      <CartProvider>
        <ScrollTop />
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<CatalogPage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:typeKey" element={<CategoryProducts />} />
              <Route path="/customize" element={<Customize />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/template" element={<Template />} />
              <Route path="/aboutus" element={<AboutHero />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/privacy" element={<Newprivacy />} />
              <Route path="/return" element={<Newreturn />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <AddToCart />
                  </ProtectedRoute>
                }
              />

              <Route path="/quoteRequest" element={<QuoteRequest />} />
              <Route path="/checkoutPage" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/tracking/:orderId?" element={<Tracking />} />
              <Route path="/auth" element={<AuthFlip />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<Wishlist />} />

              <Route
                path="*"
                element={
                  <div className="min-h-[60vh] flex items-center justify-center">
                    <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>

        {!shouldHideFooter && <Footer />}
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
