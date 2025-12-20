import React, { useState } from "react";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Correct way to import image in Vite
import bannerimg from "/Catelogimg/banner.png";

const CatalogPage = () => {
  /* ---------------- PRODUCT DATA ---------------- */
  const products = [
    {
      id: 1,
      name: "The Oslo Table",
      price: 2450,
      tag: "New",
      desc: "Solid Oak + Seater",
      category: "Dining Tables",
      material: "Walnut",
      img: "/Catelogimg/TheOsloTablerr.jpg",
    },
    {
      id: 2,
      name: "Carrara Round",
      price: 1890,
      tag: "Best Seller",
      desc: "Italian Marble · Brass Legs",
      category: "Dining Tables",
      material: "Marble",
      img: "/Catelogimg/CarraraRound.jpg",
    },
    {
      id: 3,
      name: "Vintner Chair",
      price: 3200,
      desc: "Full-grain Leather",
      category: "Sofas & Armchairs",
      material: "Leather",
      img: "/Catelogimg/VintnerChair.jpg",
    },
    {
      id: 4,
      name: "Cloud Modular",
      price: 5600,
      desc: "Velvet · Customizable",
      category: "Sofas & Armchairs",
      material: "Velvet",
      img: "/Catelogimg/CloudModular.jpg",
    },
    {
      id: 5,
      name: "Arc Lamp",
      price: 850,
      desc: "Matte Black · LED",
      category: "Lighting",
      material: "Brass",
      img: "/Catelogimg/ArcLamp.jpg",
    },
    {
      id: 6,
      name: "Nesting Tables",
      price: 480,
      old: 690,
      tag: "-20%",
      desc: "Walnut Finish · Set of 2",
      category: "Storage & Shelving",
      material: "Walnut",
      img: "/Catelogimg/NestingTables.jpg",
    },
  ];

  /* ---------------- FILTER STATES ---------------- */
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [maxPrice, setMaxPrice] = useState(12000);
  const [sort, setSort] = useState("recommended");

  /* ---------------- CLEAR FILTERS ---------------- */
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setMaterial("");
    setMaxPrice(12000);
    setSort("recommended");
  };

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => (category ? p.category === category : true))
    .filter((p) => (material ? p.material === material : true))
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });


  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b2b2b] ">
      {/* ---------------- HERO ---------------- */}
      <section className="m-6 md:m-8 relative h-[420px] rounded-3xl overflow-hidden">
        <img
          src={bannerimg}
          alt="Catalog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3E2723]/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        >
          <p className="tracking-widest text-[#C9A24D] text-sm">
            Redefine Your Space
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-serif font-bold mt-2">
            Elevate Your Living Experience
          </h1>
          <p className="text-gray-300 max-w-xl mt-4">
            Curated furniture designed for comfort, quality, and timeless appeal.
          </p>
        </motion.div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="space-y-6 bg-[#E6D5C3] rounded-2xl p-4 h-fit">
          <button
            onClick={clearFilters}
            className="w-full text-sm border border-[#3e2723] bg-[#3e2723] text-[#FAF7F2] py-2 rounded-lg hover:bg-[#C9A24D] hover:text-[#FAF7F2] transition"
          >
            Clear All Filters
          </button>

          <input
            type="text"
            placeholder="Search collection..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold mb-3">CATEGORIES</h3>
            <div className="space-y-2 text-sm">
              {[
                "Sofas & Armchairs",
                "Dining Tables",
                "Lighting",
                "Storage & Shelving",
              ].map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="accent-[#3e2723]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="text-xs font-semibold mb-3">PRICE RANGE</h3>
            <input
              type="range"
              min="500"
              max="12000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#c9a24d]"
            />
            <div className="flex justify-between text-xs mt-1">
              <span>₹500</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>

          {/* Material */}
          <div>
            <h3 className="text-xs font-semibold mb-3">MATERIAL</h3>
            <div className="flex flex-wrap gap-2">
              {["Velvet", "Leather", "Walnut", "Marble", "Brass"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`border px-3 py-1 rounded-full text-xs transition ${material === m
                    ? "bg-[#3e2723] text-white"
                    : "hover:bg-[#3e2723] hover:text-white"
                    }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#3e2723] text-white p-5 rounded-xl">
            <h4 className="font-semibold">Summer Studio Collection</h4>
            <p className="text-xs mt-2 opacity-80">
              Discover new arrivals for your outdoor sanctuary.
            </p>
            <button className="mt-4 text-sm font-medium text-[#c9a24d] hover:text-[#A6853D] cursor-pointer">
              Explore Now →
            </button>
          </div>
        </aside>

        {/* ---------------- PRODUCTS ---------------- */}
        <main className="lg:col-span-3">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold">Products</h2>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded-md px-2 py-1 text-sm hover:border-[#C9A24D]
    focus:outline-none
    focus:ring-2 focus:ring-[#C9A24D]
    focus:border-[#C9A24D]
    transition"
            >
              <option value="recommended">Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-sm text-gray-500">No products found.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ✅ Proper Link */}
            {filteredProducts.map((p) => (
              <Link to={`/product/${p.id}`}>
                <div
                  key={p.id}
                  className="rounded-xl overflow-hidden bg-[#E6D5C3] hover:shadow-md transition"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-xs text-gray-600">{p.desc}</p>

                    <div className="flex justify-between items-center mt-3">
                      <span className="font-semibold">₹{p.price}</span>


                      <button className="px-4 py-1.5 text-sm rounded-full bg-[#3e2723] text-white hover:bg-[#C9A24D] transition">
                        Add to Cart
                      </button>

                    </div>
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </main>
      </div >
    </div >
  );
};

export default CatalogPage;
