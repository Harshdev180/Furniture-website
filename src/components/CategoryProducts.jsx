import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const allProducts = [
    {
        name: "Luxury Bed",
        typeKey: "bed",
        image: "https://i.pinimg.com/736x/b5/57/db/b557dbebd3293a12d6f47a6faa70108c.jpg",
    },
    {
        name: "Modern Bed",
        typeKey: "bed",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    },
    {
        name: "Luxury Sofa",
        typeKey: "sofa",
        image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece2c",
    },
    {
        name: "Accent Sofa",
        typeKey: "sofa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
];

const CategoryProducts = () => {
    const { type } = useParams(); // bed / sofa

    const filteredProducts = allProducts.filter(
        (item) => item.typeKey === type
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
                        Curated Furniture <br /> Categories
                    </h1>
                    <p className="text-gray-300 max-w-xl mt-4">
                        Explore premium furniture collections crafted for modern luxury
                        living.
                    </p>
                </motion.div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* ================= FILTER ================= */}
                    <aside className="sticky top-24 h-fit rounded-2xl p-6 bg-[#E6D5C3]">
                        <h3 className="text-lg font-semibold mb-6 text-[#3E2723]">
                            Filters
                        </h3>

                        <div className="mb-6">
                            <p className="font-medium mb-3">Category</p>
                            {["All", "Bedroom", "Living", "Study"].map((cat) => (
                                <p
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`cursor-pointer mb-2 ${activeCategory === cat
                                        ? "text-[#C9A24D]"
                                        : "text-[#3E2723]"
                                        }`}
                                >
                                    {cat}
                                </p>
                            ))}
                        </div>

                        <div className="mb-6">
                            <p className="font-medium mb-3">Material</p>
                            {["Fabric", "Leather", "Wood"].map((m) => (
                                <label key={m} className="flex gap-2 text-sm">
                                    <input type="checkbox" />
                                    {m}
                                </label>
                            ))}
                        </div>

                        <div>
                            <p className="font-medium mb-3">Color</p>
                            <div className="flex gap-2 flex-wrap">
                                {["#1E5F74", "#B6A44C", "#D1D1D1"].map((c, i) => (
                                    <span
                                        key={i}
                                        className="w-6 h-6 rounded-full border"
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* ================= SECTIONS ================= */}
                    <div className="lg:col-span-3 space-y-20">
                        {furnitureSections.map((section, sIndex) => (
                            <motion.div
                                key={section.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: sIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* SECTION HEADING */}
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-serif text-[#3E2723]">
                                        {section.heading}
                                    </h2>
                                    <div className="w-20 h-[2px] bg-[#C9A24D] mt-2" />
                                </div>

                                {/* CARDS */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-[#E6D5C3] rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <Link to={`/category/${item.typeKey}`}>
                                                <div
                                                    className="h-52 flex items-center justify-center"
                                                    style={{ backgroundColor: item.bg }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                </div>

                                                <div className="p-4 relative">
                                                    <p className="text-xs uppercase text-gray-500">
                                                        {item.type}
                                                    </p>

                                                    <h3 className="font-semibold text-lg text-[#3E2723]">
                                                        {item.name}
                                                    </h3>

                                                    <span
                                                        className="absolute right-4 bottom-4 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                                                        style={{
                                                            backgroundColor: "#3E2723",
                                                            color: "#FAF7F2",
                                                        }}
                                                    >
                                                        →
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
        </div>
    );
};

export default CategoryProducts;
