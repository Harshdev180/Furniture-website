import React, { useState } from "react";
import { Heart, Star, Truck, RefreshCcw, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const suggestions = [
  {
    id: 1,
    name: "Oakwood Side Table",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1582582429416-5c5e6c1b2b9a",
  },
  {
    id: 2,
    name: "Classic Arm Chair",
    price: "₹18,499",
    image: "https://images.unsplash.com/photo-1616628182506-2a8f5f92c409",
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: "₹14,299",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    id: 4,
    name: "Minimal Bookshelf",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default function ProductDetailPage() {
  const [qty, setQty] = useState(1);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % suggestions.length);
  const prev = () => setIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B]">
  
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-2 gap-14">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <div className="bg-[#E6D5C3] rounded-2xl p-6">
            <img
              src="https://images.unsplash.com/photo-1616628182506-2a8f5f92c409"
              alt="chair"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="font-serif text-3xl mb-3">Handcrafted Wooden Lounge Chair</h2>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#C9A24D] text-[#C9A24D]" />
            ))}
            <span className="text-sm">(24 Reviews)</span>
          </div>
          <p className="text-2xl text-[#C9A24D] font-semibold mb-4">₹28,999</p>
          <p className="text-sm mb-6">
            Premium solid teak wood lounge chair crafted for comfort and timeless design.
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex border border-[#E6D5C3] rounded-lg">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4">−</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4">+</button>
            </div>
            <button className="bg-[#3E2723] text-white px-8 py-3 rounded-xl hover:bg-[#2d1c19]">
              Add to Cart
            </button>
            <button className="border border-[#C9A24D] p-3 rounded-xl">
              <Heart size={20} />
            </button>
          </div>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-4 text-xs text-center">
            <div className="bg-[#E6D5C3] rounded-xl p-4"><Truck className="mx-auto mb-2" />Free Delivery</div>
            <div className="bg-[#E6D5C3] rounded-xl p-4"><RefreshCcw className="mx-auto mb-2" />Easy Returns</div>
            <div className="bg-[#E6D5C3] rounded-xl p-4"><ShieldCheck className="mx-auto mb-2" />5 Year Warranty</div>
          </div>
        </motion.div>
      </section>

      {/* Suggested Products Slider */}
      <section className="max-w-7xl mx-auto px-10 pb-20">
        <h3 className="font-serif text-2xl mb-6">You May Also Like</h3>
        <div className="relative bg-[#E6D5C3] rounded-2xl p-8">
          <motion.div
            key={suggestions[index].id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-8"
          >
            <img src={suggestions[index].image} alt="suggested" className="w-48 rounded-xl" />
            <div>
              <h4 className="font-serif text-xl">{suggestions[index].name}</h4>
              <p className="text-[#C9A24D] font-semibold mt-2">{suggestions[index].price}</p>
              <button className="mt-4 bg-[#3E2723] text-white px-6 py-2 rounded-lg">View Product</button>
            </div>
          </motion.div>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <ChevronLeft />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <ChevronRight />
          </button>
        </div>
      </section>

    
    </div>
  );
}
