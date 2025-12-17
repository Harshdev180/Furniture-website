import React from "react";
import { MdShoppingBag } from "react-icons/md";


export default function CatalogPage() {
  const products = [
    {
      id: 1,
      name: "The Oslo Table",
      price: "$2,450",
      tag: "New",
      desc: "Solid Oak + Seater",
      img: "../../public/Catelogimg/TheOsloTablerr.jpg",
    button: "Add to Cart",
    },
    {
      id: 2,
      name: "Carrara Round",
      price: "$1,890",
      tag: "Best Seller",
      desc: "Italian Marble · Brass Legs",
      img: "../../public/Catelogimg/CarraraRound.jpg",
    button: "Add to Cart",
    },
    {
      id: 3,
      name: "Vintner Chair",
      price: "$3,200",
      desc: "Full-grain Leather",
      img: "../../public/Catelogimg/VintnerChair.jpg",
    button: "Add to Cart",
    },
    {
      id: 4,
      name: "Cloud Modular",
      price: "$5,600",
      desc: "Velvet · Customizable",
      img: "../../public/Catelogimg/CloudModular.jpg",
    button: "Add to Cart",
    },
    {
      id: 5,
      name: "Arc Lamp",
      price: "$850",
      desc: "Matte Black · LED",
      img: "../../public/Catelogimg/ArcLamp.jpg",
    button: "Add to Cart",
    },
    {
      id: 6,
      name: "Nesting Tables",
      price: "$480",
      old: "$690",
      tag: "-20%",
      desc: "Walnut Finish · Set of 2",
      img: "../../public/Catelogimg/NestingTables.jpg",
    button: "Add to Cart",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b2b2b]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-[#3E2723] text-white">
        <h1 className="text-xl font-bold">LUSSO</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Collections</a>
          <a href="#" className="font-semibold text-[#c9a24d]">
            Catalog
          </a>
          <a href="#">Design Studio</a>
          <a href="#">About</a>
        </nav>
        <div className="bg-[#C9A24D] hover:bg-[#A6853D] explore text-white px-3 py-2 rounded-full text-sm flex  ">
          <MdShoppingBag  className= "m-1" />
          <button>
          Cart (2)
        </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search collection..."
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          {/* Categories (Radio) */}
          <div>
            <h3 className="text-xs font-semibold mb-3">CATEGORIES</h3>

            <div className="space-y-2 text-sm text-gray-700">
              {[
                "Sofas & Armchairs",
                "Dining Tables",
                "Lighting",
                "Storage & Shelving",
              ].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    className="accent-[#3e2723]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <h3 className="text-xs font-semibold mb-3">PRICE RANGE</h3>
            <input
              type="range"
              min="500"
              max="12000"
              className="w-full accent-[#c9a24d]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$500</span>
              <span>$12k+</span>
            </div>
          </div>

          {/* Material (Pills) */}
          <div>
            <h3 className="text-xs font-semibold mb-3">MATERIAL</h3>
            <div className="flex flex-wrap gap-2">
              {["Velvet", "Leather", "Walnut", "Marble", "Brass"].map((m) => (
                <button
                  key={m}
                  className="border px-3 py-1 rounded-full text-xs hover:bg-[#3e2723] hover:text-white transition"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Promo Card */}
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

        {/* Products */}
        <main className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-gray-500">
                Home / Catalog / Dining Tables
              </p>
              <h2 className="text-2xl font-semibold">Dining Tables</h2>
            </div>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-56 w-full object-cover"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded-full shadow">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.desc}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold">{p.price}</span>
                    {p.old && (
                      <span className="text-xs line-through text-gray-400">
                        {p.old}
                      </span>
                    )}
                    <button className="px-4 py-1.5 text-sm rounded-full bg-[#3e2723] text-white hover:bg-[#C9A24D] transition cursor-pointer">{p.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer text */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h3 className="font-semibold mb-2">Curated Luxury for Modern Living</h3>
        <p className="text-sm text-gray-600">
          Explore our exclusive collection of dining tables designed to be the
          centerpiece of your home. Crafted with precision and timeless
          elegance.
        </p>
      </div>
    </div>
  );
}
