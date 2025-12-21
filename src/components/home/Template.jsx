// src/pages/CatalogPage.jsx
import { useState } from "react";
import tembanner from "../../../public/templateimg/templatebanner.jpg"

const categories = [
  "All Templates",
  "Seating",
  "Tables",
  "Storage",
  "Lighting",
];


const products = [
  {
    id: 1,
    name: "The Sorrento Sectional",
    category: "Seating",
    price: 4200,
    tag: "NEW ARRIVAL",
    desc: "Modular seating system with deep cushions.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265",
  },
  {
    id: 2,
    name: "Milano Dining Table",
    category: "Tables",
    price: 3500,
    tag: "WALNUT",
    desc: "Solid walnut base with beveled edge top.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    name: "Aria Lounge Chair",
    category: "Seating",
    price: 1800,
    tag: "LEATHER",
    desc: "Full grain leather with brass accents.",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
  },
  {
    id: 4,
    name: "Vienna Console",
    category: "Storage",
    price: 2900,
    tag: "OAK",
    desc: "Hand-finished solid oak console drawers.",
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a",
  },
  {
    id: 5,
    name: "Luxe Bed Frame",
    category: "Seating",
    price: 3200,
    tag: "LINEN",
    desc: "Upholstered headboard with floating base.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    id: 6,
    name: "Orbital Pendant",
    category: "Lighting",
    price: 950,
    tag: "BRASS",
    desc: "Brushed brass housing with LED filament.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

export default function Template() {
  const [activeCategory, setActiveCategory] = useState("All Templates");

  const filteredProducts =
    activeCategory === "All Templates"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
      {/* HERO BANNER */}
<section className="max-w-7xl mx-auto  px-6 pt-10">
  <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[480px]">

    {/* Background Image */}
    <img
      src={tembanner}
      alt="Luxury Furniture"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#000]/65" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14 text-white">
      <p className="text-xs tracking-widest text-[#C9A24D] mb-3">
        READY FOR PRODUCTION
      </p>

      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Curated Luxury <br /> Templates
      </h1>

      <p className="text-sm md:text-base text-[#E6D5C3] max-w-md mt-4">
        Explore our pre-designed furniture templates. Crafted for elegance,
        dimensionally accurate, and ready for bespoke finishes.
      </p>

      <div className="flex gap-4 mt-7">
        <button className="bg-[#C9A24D] text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
          Browse All
        </button>

        <button className="border border-[#E6D5C3]/60 text-[#E6D5C3] px-7 py-3 rounded-full text-sm hover:bg-[#E6D5C3] hover:text-[#2B2B2B] transition">
          How it Works
        </button>
      </div>
    </div>
  </div>
</section>
      {/* FILTERS */}
      {/* FILTERS */}
<section className="max-w-7xl mx-auto px-6 mt-8">
  <div className="flex flex-wrap gap-3 items-center">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-4 py-2 rounded-full text-sm transition 
          ${
            activeCategory === cat
              ? "bg-[#3e2723] text-white"
              : "bg-white border  hover:text-white hover:bg-[#3e2723]"
          }`}
      >
        {cat}
      </button>
    ))}

    {/* CLEAR FILTER BUTTON */}
    {/* {activeCategory !== "All Templates" && (
      <button
        onClick={() => setActiveCategory("All Templates")}
        className="px-2 text-sm border border-[#3e2723] text-[#3e2723] py-2 rounded-lg hover:bg-[#3e2723] hover:text-white transition"
      >
        Clear Filters
      </button>
    )} */}
  </div>
</section>


      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-[#F4EBDD] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-[#2B2B2B]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

                <p className="text-[#C9A24D] font-medium mt-3">
                  ${item.price.toLocaleString()}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-1.5 text-sm rounded-full bg-[#3e2723] text-white hover:bg-[#C9A24D] transition cursor-pointer">
                    REQUEST QUOTE
                  </button>
                  <button className="px-4 py-1.5 text-sm rounded-full bg-[#3e2723] text-white hover:bg-[#C9A24D] transition cursor-pointer">
                    CUSTOMIZE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found.
          </p>
        )}
      </section>
    </div>
  );
}
