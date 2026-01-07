import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useCart } from "./context/AddtocartContext";
import WishlistButton from "./WishlistButton";

// ✅ Correct way to import image in Vite
import bannerimg from "/Catelogimg/banner.png";

function FilterContent({
  isMobile = false,
  search,
  setSearch,
  category,
  setCategory,
  material,
  setMaterial,
  maxPrice,
  setMaxPrice,
  tempCategory,
  setTempCategory,
  tempMaterial,
  setTempMaterial,
  tempMaxPrice,
  setTempMaxPrice,
  clearFilters,
  setShowFilter,
}) {
  const MIN = 500;
  const MAX = 12000;
  const value = isMobile ? tempMaxPrice : maxPrice;
  const percent = ((value - MIN) / (MAX - MIN)) * 100;
  const setValue = (val) => (isMobile ? setTempMaxPrice(val) : setMaxPrice(val));


  return (
    <div className="space-y-6">
      {isMobile && (
        <input
          type="text"
          placeholder="Search collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      )}

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
                checked={(isMobile ? tempCategory : category) === cat}
                onChange={() =>
                  isMobile ? setTempCategory(cat) : setCategory(cat)
                }
                className="accent-[#3e2723]"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-4 tracking-wide">PRICE RANGE</h3>
        <>
          <div className="relative h-10">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-[#c9a24d]/30" />
            <Motion.div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-[#c9a24d]"
              style={{ width: `${percent}%` }}
              transition={{ type: "spring", stiffness: 110, damping: 22 }}
            />
            <input
              type="range"
              min={MIN}
              max={MAX}
              step="1"
              value={value}
              onInput={(e) => setValue(Number(e.target.value))}
              onChange={(e) => setValue(Number(e.target.value))}
              className="absolute inset-0 w-full bg-transparent appearance-none cursor-pointer z-10 transition-all duration-150
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#3e2723] [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:active:scale-140
              [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#3e2723] [&::-moz-range-thumb]:border-none"
            />
          </div>
          <div className="flex justify-between mt-3 text-xs font-medium text-[#3e2723]">
            <span>₹500</span>
            <span>₹{value.toLocaleString()}</span>
          </div>
        </>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-3">MATERIAL</h3>
        <div className="flex flex-wrap gap-2">
          {["Velvet", "Leather", "Walnut", "Marble", "Brass"].map((m) => (
            <button
              key={m}
              onClick={() =>
                isMobile ? setTempMaterial(m) : setMaterial(m)
              }
              className={`border px-3 py-1 rounded-full text-xs transition ${(isMobile ? tempMaterial : material) === m
                ? "bg-[#3e2723] text-white"
                : "hover:bg-[#3e2723] hover:text-white"
                }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => {
              setCategory(tempCategory);
              setMaterial(tempMaterial);
              setMaxPrice(tempMaxPrice);
              setShowFilter(false);
            }}
            className="flex-1 py-2 rounded-lg bg-[#3e2723] text-white"
          >
            Apply
          </button>

          <button
            onClick={() => {
              setTempCategory("");
              setTempMaterial("");
              setTempMaxPrice(12000);
              clearFilters();
              setShowFilter(false);
            }}
            className="flex-1 py-2 rounded-lg border border-[#3e2723]"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

const CatalogPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate()

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

  /* ---------------- MOBILE FILTER STATES ---------------- */
  const [showFilter, setShowFilter] = useState(false);
  const [tempCategory, setTempCategory] = useState(category);
  const [tempMaterial, setTempMaterial] = useState(material);
  const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);

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

  /* ---------------- FILTER CONTENT (REUSABLE) ---------------- */

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b2b2b]">
      {/* ---------------- HERO ---------------- */}
      <section className="md:m-8 relative h-[420px] rounded-3xl overflow-hidden m-6">
        <img
          src={bannerimg}
          alt="Catalog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000]/55" />

        <Motion.div
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
        </Motion.div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ---------------- DESKTOP SIDEBAR ---------------- */}
        <aside className="hidden lg:block space-y-6 bg-[#E6D5C3] rounded-2xl p-4 h-fit">
          <button
            onClick={clearFilters}
            className="w-full text-sm bg-[#3e2723] text-white py-2 rounded-lg"
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

          <FilterContent
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            material={material}
            setMaterial={setMaterial}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            tempCategory={tempCategory}
            setTempCategory={setTempCategory}
            tempMaterial={tempMaterial}
            setTempMaterial={setTempMaterial}
            tempMaxPrice={tempMaxPrice}
            setTempMaxPrice={setTempMaxPrice}
            clearFilters={clearFilters}
            setShowFilter={setShowFilter}
          />
        </aside>

        {/* ---------------- PRODUCTS ---------------- */}
        <main className="lg:col-span-3">
          {/* MOBILE FILTER BUTTON */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilter(true)}
              className="px-4 py-2 rounded-full bg-[#3e2723] text-white"
            >
              ☰ Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="rounded-xl overflow-hidden bg-[#E6D5C3] relative group">
                <Link to={`/product/${p.id}`}>
                  <div className="relative">
                    <img src={p.img} className="h-56 w-full object-cover" alt={p.name} />
                    {/* Wishlist Button */}
                    <div className="absolute top-3 right-3 z-10">
                      <WishlistButton
                        product={p}
                        className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md"
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-medium hover:text-[#C9A24D] transition">{p.name}</h3>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </Link>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">₹{p.price.toLocaleString()}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(p);
                        navigate("/cart");
                      }}
                      className="px-4 py-1.5 text-sm rounded-full bg-[#3e2723] text-white hover:bg-[#C9A24D] transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ---------------- MOBILE FILTER DRAWER ---------------- */}
      <AnimatePresence>
        {showFilter && (
          <>
            <Motion.div
              className="fixed inset-0 bg-black z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilter(false)}
            />

            <Motion.div
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#E6D5C3] z-50 p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between mb-6">
                <h3 className="font-semibold">Filters</h3>
                <button onClick={() => setShowFilter(false)}>✕</button>
              </div>

              <FilterContent
                isMobile
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                material={material}
                setMaterial={setMaterial}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                tempCategory={tempCategory}
                setTempCategory={setTempCategory}
                tempMaterial={tempMaterial}
                setTempMaterial={setTempMaterial}
                tempMaxPrice={tempMaxPrice}
                setTempMaxPrice={setTempMaxPrice}
                clearFilters={clearFilters}
                setShowFilter={setShowFilter}
              />
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogPage;
