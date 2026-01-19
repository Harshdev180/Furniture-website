import React, { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Truck,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { furnitureData } from "../assests/furnitureData";
import { useWishlist } from "./context/WishlistContext";
import WishlistButton from "./WishlistButton";
import { useCart } from "./context/AddtocartContext";
import Picture from "../utils/Picture";

/* ===================== DATA ===================== */
const VISIBLE_COUNT = 5;

/* ===================== COMPONENT ===================== */
export default function ProductDetailPage() {
  const location = useLocation();
  const { id } = useParams();
  const productFromCategory = location.state?.product;
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("info");
  const [activeImage, setActiveImage] = useState(0);

  const [mainProduct, setMainProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [suggestIndex, setSuggestIndex] = useState(0);
  const maxIndex = Math.max(suggestions.length - VISIBLE_COUNT, 0);

  const navigate = useNavigate();

  const toRealINR = (price) => {
    if (typeof price === "number") {
      const v = price < 5000 ? price * 83 : price;
      return Math.round(v);
    }
    if (typeof price === "string") {
      const cleaned = price.replace(/[₹,\s]/g, "");
      const num = parseFloat(cleaned);
      if (isNaN(num)) return 0;
      const v = num < 5000 ? num * 83 : num;
      return Math.round(v);
    }
    return 0;
  };

  useEffect(() => {
    let product = productFromCategory;
    let foundSection = null;
    let foundTypeKey = null;

    if (!product && id) {
      furnitureData.forEach((section) => {
        Object.entries(section.products).forEach(([typeKey, category]) => {
          const found = category.items.find(
            (item) => String(item.id) === String(id),
          );
          if (found) {
            product = found;
            foundSection = section;
            foundTypeKey = typeKey;
          }
        });
      });
    }

    if (!product) return;

    if (!product.colors) {
      product.colors = {
        Default: {
          colorCode: "#C9A24D",
          images: [product.image],
        },
      };
    }

    product.rating = product.rating || 4.5;
    product.reviews = product.reviews || 10;

    setMainProduct(product);
    if (product && product.colors) {
      setActiveColor(Object.keys(product.colors)[0]);
    }
    setActiveImage(0);

    const ensureColors = (item) => {
      if (item.colors) return item;
      return {
        ...item,
        colors: {
          Default: {
            colorCode: "#C9A24D",
            images: [item.image],
          },
        },
      };
    };

    let pool = [];
    if (foundSection && foundTypeKey) {
      const items = foundSection.products[foundTypeKey]?.items || [];
      pool = items.filter((it) => String(it.id) !== String(product.id));
    }
    if (pool.length === 0) {
      furnitureData.forEach((section) => {
        Object.values(section.products).forEach((category) => {
          category.items.forEach((it) => {
            if (String(it.id) !== String(product.id)) {
              pool.push(it);
            }
          });
        });
      });
    }
    const professional = pool.slice(0, 15).map(ensureColors);
    setSuggestions(professional);
  }, [productFromCategory, id]);

  if (!mainProduct || !activeColor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading…
      </div>
    );
  }

  const activeImages = mainProduct.colors[activeColor].images;

  const selectedProduct = {
    id: mainProduct.id,
    name: mainProduct.name,
    price: toRealINR(mainProduct.price),
    rating: mainProduct.rating,
    reviews: mainProduct.reviews,
    color: activeColor,
    image: activeImages[activeImage],
    quantity: qty,
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < full ? "fill-[#C9A24D] text-[#C9A24D]" : "text-gray-300"}
      />
    ));
  };

  const handleSuggestClick = (item) => {
    setMainProduct(item);
    setActiveColor(Object.keys(item.colors)[0]);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSuggest = () =>
    setSuggestIndex((p) =>
      p + VISIBLE_COUNT > maxIndex ? maxIndex : p + VISIBLE_COUNT,
    );

  const prevSuggest = () =>
    setSuggestIndex((p) => (p - VISIBLE_COUNT < 0 ? 0 : p - VISIBLE_COUNT));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B]">
      {/* ================= PRODUCT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Picture
            src={activeImages[activeImage]}
            alt="product"
            className="rounded-2xl w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
          />

          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {activeImages.map((img, i) => (
              <Picture
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-16 sm:w-20 h-16 sm:h-20 cursor-pointer rounded-lg border-2 ${
                  activeImage === i ? "border-[#C9A24D]" : "border-[#E6D5C3]"
                }`}
                alt="thumb"
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">
            {mainProduct.name}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#C9A24D] mb-4">
            ₹{toRealINR(mainProduct.price).toLocaleString()}
          </p>

          <div className="flex items-center gap-1 mb-4">
            {renderStars(mainProduct.rating)}
            <span className="text-sm ml-2">
              ({mainProduct.reviews} reviews)
            </span>
          </div>

          {/* COLORS */}
          <div className="mb-6">
            <p className="text-sm mb-2">
              Color: <strong>{activeColor}</strong>
            </p>
            <div className="flex gap-3">
              {Object.entries(mainProduct.colors).map(([color, data]) => (
                <button
                  key={color}
                  onClick={() => {
                    setActiveColor(color);
                    setActiveImage(0);
                  }}
                  className={`w-9 h-9 rounded-full border-2 ${
                    activeColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: data.colorCode }}
                />
              ))}
            </div>
          </div>

          {/* QTY + CART */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex border rounded-lg">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-2"
                >
                  −
                </button>
                <span className="px-4 py-2">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2">
                  +
                </button>
              </div>
              <WishlistButton product={selectedProduct} size={20} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  navigate("/cart");
                }}
                className="w-full bg-[#3E2723] text-white px-6 py-3 rounded-xl hover:bg-[#C9A24D] transition flex-1"
              >
                Add to Cart
              </button>

              <Link to="/checkoutPage" className="flex-1">
                <button className="w-full bg-[#C9A24D] text-white px-6 py-3 rounded-xl hover:bg-[#B8923D] transition">
                  Buy Now
                </button>
              </Link>
            </div>

            <Link to="/customize" state={{ product: mainProduct }}>
              <button className="w-full bg-[#C9A24D] text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-[#B8923D] transition">
                Customize This Product
              </button>
            </Link>
          </div>

          {/* TRUST */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm mb-6">
            <div className="flex gap-2">
              <Truck size={16} /> Free Delivery
            </div>
            <div className="flex gap-2">
              <RefreshCcw size={16} /> Easy Returns
            </div>
            <div className="flex gap-2">
              <ShieldCheck size={16} /> 5 Yr Warranty
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b mb-6 overflow-x-auto">
            {["info", "delivery", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 ${
                  activeTab === tab ? "border-b-2 border-[#C9A24D]" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "info" && (
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium solid wood construction</li>
              <li>Handcrafted by skilled artisans</li>
              <li>Matte finish with scratch resistance</li>
              <li>Suitable for living & lounge areas</li>
            </ul>
          )}

          {activeTab === "delivery" && (
            <div className="text-sm space-y-2">
              <p>🚚 Delivery within 5–7 working days</p>
              <p>🔄 7-day hassle-free return</p>
              <p>🛠 Free installation assistance</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-sm space-y-3">
              <p>⭐ ⭐ ⭐ ⭐ ⭐ – Excellent quality & finish</p>
              <p>⭐ ⭐ ⭐ ⭐ – Looks premium</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ================= MAY WE SUGGEST ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <h3 className="text-xl mb-6 font-serif">May We Suggest</h3>

        {/* DESKTOP */}
        <div className="relative hidden md:block">
          <button
            onClick={prevSuggest}
            disabled={suggestIndex === 0}
            className="absolute -left-10 top-1/2"
          >
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {suggestions
              .slice(suggestIndex, suggestIndex + VISIBLE_COUNT)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSuggestClick(item)}
                  className="cursor-pointer text-center hover:scale-105 transition"
                >
                  <Picture
                    src={Object.values(item.colors)[0].images[0]}
                    className="h-36 mx-auto rounded-xl object-cover"
                  />
                  <p className="mt-2 font-medium">{item.name}</p>
                  <p className="opacity-70">₹{toRealINR(item.price).toLocaleString()}</p>
                </div>
              ))}
          </div>

          <button
            onClick={nextSuggest}
            disabled={suggestIndex === maxIndex}
            className="absolute -right-10 top-1/2"
          >
            <ChevronRight />
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSuggestClick(item)}
              className="min-w-[150px] text-center"
            >
              <Picture
                src={Object.values(item.colors)[0].images[0]}
                className="h-32 w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-sm font-medium">{item.name}</p>
              <p className="text-sm opacity-70">₹{toRealINR(item.price).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
