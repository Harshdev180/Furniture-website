import React, { useState } from "react";
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
import { Link } from "react-router-dom"

/* ===================== MAY WE SUGGEST (5 PRODUCTS) ===================== */
const mayWeSuggest = [
  {
    id: 1,
    name: "Oakwood Side Table",
    price: "₹9,999",
    rating: 4.2,
    reviews: 18,
    colors: {
      Oak: {
        colorCode: "#E2D8C3",
        images: [
          "https://i.pinimg.com/1200x/58/68/9f/58689ff8068023795f5e6aa2c7cdd20b.jpg",
          "https://i.pinimg.com/736x/16/33/6c/16336c3a50cb20615658c3f5a038a20f.jpg",
          "https://i.pinimg.com/736x/ae/89/69/ae89697bf960c3cbebec5f0a923c817e.jpg",
        ],
      },
    },
  },
  {
    id: 2,
    name: "Classic Arm Chair",
    price: "₹18,499",
    rating: 4.0,
    reviews: 20,
    colors: {
      Walnut: {
        colorCode: "#6B4F2A",
        images: [
          "https://i.pinimg.com/736x/ad/0e/d9/ad0ed94f250af3cf2ea46ba6f183d43a.jpg",
          "https://i.pinimg.com/736x/03/dd/46/03dd462eec8f2584200c469663c96075.jpg",
          "https://i.pinimg.com/1200x/84/ac/8b/84ac8b1b71d33f0e2ec913bf02e5b6cc.jpg",
        ],
      },
    },
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: "₹14,299",
    rating: 4.3,
    reviews: 31,
    colors: {
      Brown: {
        colorCode: "#8B5E3C",
        images: [
          "https://i.pinimg.com/736x/f1/30/22/f130229242db444ae2e29ece8f3858dd.jpg",
          "https://i.pinimg.com/736x/fc/b3/0d/fcb30da0cc15852a115376bfb9ad2ad6.jpg",
          "https://i.pinimg.com/736x/5b/3d/b3/5b3db332a7e116855e9a85ae9a5472d7.jpg",
        ],
      },
    },
  },
  {
    id: 4,
    name: "Minimal Sofa",
    price: "₹55,999",
    rating: 4.1,
    reviews: 12,
    colors: {
      Grey: {
        colorCode: "#B8B8B8",
        images: [
          "https://i.pinimg.com/1200x/87/87/76/878776b41c2a608e357392baddac952b.jpg",
          "https://i.pinimg.com/736x/ef/33/5f/ef335fe793ac8ae5837c6dbd1651070c.jpg",
          "https://i.pinimg.com/736x/87/ff/59/87ff598b18de6b3ef220a7d2f114ca8c.jpg",
        ],
      },
    },
  },
  {
    id: 5,
    name: "Royal Upholstered Bed",
    price: "₹74,799",
    rating: 4.5,
    reviews: 24,
    colors: {
      Beige: {
        colorCode: "#D6C5B3",
        images: [
          "https://i.pinimg.com/736x/2e/33/73/2e3373090d86a0542792bd3dc02ab83f.jpg",
          "https://i.pinimg.com/1200x/8d/24/8b/8d248b25776f7683d0ed01d19b2e6924.jpg",
          "https://i.pinimg.com/1200x/2e/6f/6a/2e6f6a1f7b78312785442c0b2ad202c2.jpg",
        ],
      },
    },
  },
];

/* ===================== COMPONENT ===================== */
export default function ProductDetailPage() {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("info");
  const [activeImage, setActiveImage] = useState(0);
  const [suggestIndex, setSuggestIndex] = useState(0);

  const [mainProduct, setMainProduct] = useState(mayWeSuggest[0]);
  const [activeColor, setActiveColor] = useState(
    Object.keys(mayWeSuggest[0].colors)[0]
  );

  const activeImages = mainProduct.colors[activeColor].images;

  /* ===================== HANDLERS ===================== */
  const handleSuggestClick = (item) => {
    const firstColor = Object.keys(item.colors)[0];
    setMainProduct(item);
    setActiveColor(firstColor);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSuggest = () =>
    setSuggestIndex((p) =>
      p + 3 >= mayWeSuggest.length ? 0 : p + 3
    );

  const prevSuggest = () =>
    setSuggestIndex((p) =>
      p - 3 < 0 ? Math.max(mayWeSuggest.length - 3, 0) : p - 3
    );

  /* ===================== UI ===================== */
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] mt-20">

      {/* PRODUCT */}
      <section className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <img
            src={activeImages[activeImage]}
            className="rounded-2xl w-full h-[420px] object-cover"
          />

          <div className="flex gap-3 mt-4">
            {activeImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 cursor-pointer rounded-lg border-2 ${activeImage === i
                  ? "border-[#C9A24D]"
                  : "border-[#E6D5C3]"
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl font-serif mb-3">{mainProduct.name}</h2>
          <p className="text-2xl text-[#C9A24D] mb-4">{mainProduct.price}</p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#C9A24D]" />
            ))}
            <span className="text-sm ml-2">({mainProduct.reviews} reviews)</span>
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
                  className={`w-10 h-10 rounded-full border-2 ${activeColor === color ? "ring-2 ring-black" : ""
                    }`}
                  style={{ backgroundColor: data.colorCode }}
                />
              ))}
            </div>
          </div>

          {/* QTY + CTA */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex border rounded-lg">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4">−</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4">+</button>
            </div>

            <Link to="#">
              <button className="bg-[#3E2723] text-white px-6 py-3 rounded-xl">
                Add to Cart
              </button></Link>


            <Link to="/"><button className="bg-[#C9A24D] text-white px-6 py-3 rounded-xl">
              Buy Now
            </button></Link>

            <Heart />
          </div>

          {/* TRUST */}
          <div className="grid grid-cols-3 gap-4 text-sm mb-8">
            <div className="flex items-center gap-2"><Truck size={16} /> Free Delivery</div>
            <div className="flex items-center gap-2"><RefreshCcw size={16} /> Easy Returns</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> 5 Yr Warranty</div>
          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b mb-6">
            {["info", "delivery", "reviews"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 ${activeTab === tab ? "border-b-2 border-[#C9A24D]" : ""
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
              <p>⭐ ⭐ ⭐ ⭐ ⭐ – “Excellent quality & finish”</p>
              <p>⭐ ⭐ ⭐ ⭐ – “Looks premium in living room”</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* MAY WE SUGGEST */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <h3 className="text-xl mb-10 font-serif">May We Suggest</h3>

        <div className="relative">
          <button onClick={prevSuggest} className="absolute -left-10 top-1/2">
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-5 gap-16">
            {mayWeSuggest.slice(suggestIndex, suggestIndex + 5).map(item => (
              <div
                key={item.id}
                onClick={() => handleSuggestClick(item)}
                className="cursor-pointer hover:scale-105 transition text-center"
              >
                <img
                  src={Object.values(item.colors)[0].images[0]}
                  className="h-40 mx-auto rounded-xl object-cover"
                />
                <p className="mt-4 font-medium">{item.name}</p>
                <p className="opacity-70">{item.price}</p>
              </div>
            ))}
          </div>

          <button onClick={nextSuggest} className="absolute -right-10 top-1/2">
            <ChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}
