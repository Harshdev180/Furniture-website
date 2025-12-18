import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [tempCategory, setTempCategory] = useState("All");
    const [showFilter, setShowFilter] = useState(false);

    const furnitureSections = [
        {
            heading: "Bedroom Furniture",
            category: "Bedroom",
            description:
                "Transform your bedroom into a refined retreat with thoughtfully designed beds and storage that blend comfort, elegance, and functionality.",
            items: [
                {
                    name: "Luxury Bed",
                    type: "King Size Bed",
                    typeKey: "bed",
                    bg: "#D1C4B2",
                    image:
                        "https://i.pinimg.com/736x/b5/57/db/b557dbebd3293a12d6f47a6faa70108c.jpg",
                },
                {
                    name: "Modern Wardrobe",
                    type: "Storage",
                    typeKey: "wardrobe",
                    bg: "#BFDCE5",
                    image:
                        "https://images.unsplash.com/photo-1618220179428-22790b461013",
                },
            ],
        },

        {
            heading: "Living Room Furniture",
            category: "Living",
            description:
                "Create an inviting living space with modern sofas and accent seating crafted for comfort, style, and everyday luxury.",
            items: [
                {
                    name: "Luxury Sofa Set",
                    type: "Sofa",
                    typeKey: "sofa",
                    bg: "#1E5F74",
                    image:
                        "https://images.unsplash.com/photo-1615873968403-89e068629265",
                },
                {
                    name: "Accent Chair",
                    type: "Chair",
                    typeKey: "chair",
                    bg: "#B6A44C",
                    image:
                        "https://images.unsplash.com/photo-1616627451515-cbc80e5ece2c",
                },
            ],
        },

        {
            heading: "Study Furniture",
            category: "Study",
            description:
                "Design a focused and inspiring workspace with ergonomic furniture that supports productivity and modern work lifestyles.",
            items: [
                {
                    name: "Study Table",
                    type: "Work Desk",
                    typeKey: "studytable",
                    bg: "#E3B23C",
                    image:
                        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
                },
            ],
        },
    ];

    const filteredSections =
        activeCategory === "All"
            ? furnitureSections
            : furnitureSections.filter(
                (section) => section.category === activeCategory
            );

    /* ================= FILTER CONTENT ================= */
    const FilterContent = () => (
        <div className="space-y-6">
            {/* CATEGORY */}
            <div>
                <p className="font-semibold mb-3 text-[#3E2723]">Category</p>
                {["All", "Bedroom", "Living", "Study"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setTempCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition cursor-pointer
              ${tempCategory === cat
                                ? "bg-[#3E2723] text-[#FAF7F2]"
                                : "hover:bg-[#3E2723]/10 text-[#3E2723]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <hr className="border-[#3E2723]/20" />

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 pt-4">
                <button
                    onClick={() => {
                        setActiveCategory(tempCategory);
                        setShowFilter(false);
                    }}
                    className="flex-1 py-2 rounded-lg bg-[#3E2723] text-[#FAF7F2] text-sm cursor-pointer hover:bg-[#3E2723]/90"
                >
                    Apply Filters
                </button>

                <button
                    onClick={() => {
                        setTempCategory("All");
                        setActiveCategory("All");
                        setShowFilter(false);
                    }}
                    className="flex-1 py-2 rounded-lg border border-[#3E2723] text-[#3E2723] text-sm cursor-pointer hover:bg-[#3E2723]/10"
                >
                    Clear
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-[#FAF7F2]">
            {/* ================= HERO ================= */}
            <section className="m-6 md:m-10 relative h-[420px] rounded-3xl overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/49/b2/2b/49b22b5021990ecd73a47db4ec50d273.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Hero"
                />
                <div className="absolute inset-0 bg-black/60" />

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
                        Curated Furniture Categories
                    </h1>
                    <p className="text-gray-300 max-w-xl mt-4">
                        Explore premium furniture collections crafted for modern luxury living and style.
                    </p>
                </motion.div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* DESKTOP FILTER */}
                    <aside className="hidden lg:block sticky top-24 h-fit rounded-2xl p-6 bg-[#E6D5C3] shadow-md">
                        <h3 className="text-lg font-semibold mb-6 text-[#3E2723] font-serif">
                            Filters
                        </h3>
                        <FilterContent />
                    </aside>

                    {/* MAIN */}
                    <div className="lg:col-span-3 space-y-20">
                        {/* MOBILE FILTER BUTTON */}
                        <div className="lg:hidden flex justify-start mb-10 mt-2">
                            <button
                                onClick={() => setShowFilter(true)}
                                className="px-4 py-2 rounded-full bg-[#3E2723] text-[#FAF7F2]"
                            >
                                ☰ Filters
                            </button>
                        </div>

                        {filteredSections.map((section, idx) => (
                            <motion.div
                                key={section.heading}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="mb-8">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-2xl md:text-3xl font-serif text-[#3E2723]"
                                    >
                                        {section.heading}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-[#2B2B2B]/70 max-w-2xl mt-3 leading-relaxed"
                                    >
                                        {section.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 80 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-[2px] bg-[#C9A24D] mt-4"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -10 }}
                                            className="bg-[#E6D5C3] rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <Link to={`/category/${item.typeKey}`}>
                                                <div
                                                    className="h-52"
                                                    style={{ backgroundColor: item.bg }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover hover:scale-105 transition"
                                                    />
                                                </div>

                                                <div className="p-4 relative">
                                                    <p className="text-xs uppercase text-gray-500">
                                                        {item.type}
                                                    </p>

                                                    <h3 className="font-semibold text-lg text-[#3E2723]">
                                                        {item.name}
                                                    </h3>

                                                    <span className="right-4 bottom-4 px-4 py-2 rounded-full bg-[#3E2723] text-[#FAF7F2] text-sm flex items-center gap-2">
                                                        See more →
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE FILTER DRAWER */}
            <AnimatePresence>
                {showFilter && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowFilter(false)}
                        />

                        <motion.div
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#E6D5C3] z-50 p-6 overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 280, damping: 30 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-[#3E2723]">
                                    Filters
                                </h3>
                                <button onClick={() => setShowFilter(false)}>✕</button>
                            </div>

                            <FilterContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Categories;
