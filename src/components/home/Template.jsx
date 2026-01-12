import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuoteRequest from "../QuoteRequest";
import { useCart } from "../context/AddtocartContext";
import WishlistButton from "../WishlistButton";
import { motion } from "framer-motion";
const tembanner = "/templateimg/templatebanner.jpg";

const categories = [
  "All Templates",
  "Seating",
  "Tables",
  "Storage",
  "Lighting",
  "Beds",
];

const products = [
  {
    id: 1,
    name: "The Sorrento Sectional",
    category: "Seating",
    price: 4200,
    tag: "NEW ARRIVAL",
    desc: "Modular seating system with deep cushions.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
  },
  {
    id: 2,
    name: "Milano Dining Table",
    category: "Tables",
    price: 3500,
    tag: "WALNUT",
    desc: "Solid walnut base with beveled edge top.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    name: "Aria Lounge Chair",
    category: "Seating",
    price: 1800,
    tag: "LEATHER",
    desc: "Full grain leather with brass accents.",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
  },
  {
    id: 4,
    name: "Vienna Console",
    category: "Storage",
    price: 2900,
    tag: "OAK",
    desc: "Hand-finished solid oak console drawers.",
    image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a",
  },
  {
    id: 5,
    name: "Luxe Bed Frame",
    category: "Beds",
    price: 3200,
    tag: "LINEN",
    desc: "Upholstered headboard with floating base.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    id: 6,
    name: "Orbital Pendant",
    category: "Lighting",
    price: 950,
    tag: "BRASS",
    desc: "Brushed brass housing with LED filament.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

export default function Template() {
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [showQuoteRequest, setShowQuoteRequest] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "All Templates"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleRequestQuote = (product) => {
    setSelectedProduct(product);
    setShowQuoteRequest(true);
  };

  const handleCloseQuoteRequest = () => {
    setShowQuoteRequest(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
      <section className="md:m-8 relative h-[420px] rounded-3xl overflow-hidden m-6">
        <img
          src={tembanner}
          alt="Catalog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-[#000]/55" /> */}
        <div className="absolute inset-0 bg-[#3E2723]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        >
          <p className="tracking-widest text-[#C9A24D] text-sm">
            READY FOR PRODUCTION
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-serif font-bold mt-2">
            Curated Luxury Templates
          </h1>
          <p className="text-gray-300 max-w-xl mt-4">
            Explore pre-designed furniture templates crafted for elegance and
            precision.
          </p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 whitespace-nowrap rounded-full text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-[#3E2723] text-white"
                    : "bg-white border border-[#3E2723] hover:bg-[#3E2723] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-[#F4EBDD] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </span>
                {/* Wishlist Button */}
                <div className="absolute top-3 right-3 z-10">
                  <WishlistButton
                    product={item}
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-[#2B2B2B]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 flex-1">{item.desc}</p>

                <p className="text-[#C9A24D] font-medium mt-3">
                  ₹{item.price.toLocaleString()}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(item);
                      navigate("/cart");
                    }}
                    className="flex-1 py-2 text-sm rounded-full bg-[#3E2723] text-white hover:bg-[#C9A24D] transition font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRequestQuote(item);
                    }}
                    className="flex-1 py-2 text-sm rounded-full border-2 border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition font-medium"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </section>

      {/* Quote Request Modal */}
      {showQuoteRequest && (
        <QuoteRequest
          onClose={handleCloseQuoteRequest}
          initialProduct={selectedProduct?.name || ""}
        />
      )}
    </div>
  );
}
