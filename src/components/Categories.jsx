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
                    type: "Bed",
                    typeKey: "bed",
                    bg: "#D1C4B2",
                    image:
                        "https://i.pinimg.com/736x/ef/ff/34/efff34937ef6991f999af0dc07a723ff.jpg",
                },
                {
                    name: "Modern Wardrobe",
                    type: "Storage",
                    typeKey: "wardrobe",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/1200x/32/b3/9e/32b39e7a85a97f1a07df6484a14c82b1.jpg",
                },
                {
                    name: "Modern Selves",
                    type: "Selves",
                    typeKey: "shelf",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/736x/ea/9a/21/ea9a21ba60809ebf869fa7657dca4f75.jpg",
                },
                {
                    name: "Bed Table",
                    type: "Bed Table",
                    typeKey: "bedTable",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/736x/d5/cc/45/d5cc45061fd43a0849632c31465e9163.jpg",
                },
                {
                    name: "Dressing Table",
                    type: "Dressing Table",
                    typeKey: "dressingTable",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/736x/42/83/2d/42832d420b649e2481f26357b886382e.jpg",
                },
                {
                    name: "Bed Room Couch",
                    type: "Couch",
                    typeKey: "bedroomCouch",
                    bg: "#BFDCE5",
                    image:
                        "https://i.pinimg.com/736x/4f/7f/5d/4f7f5d5538a30b604c742ffa0ccc5147.jpg",
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
                        "https://i.pinimg.com/1200x/af/bd/cf/afbdcf71db5b292e7f58d84ba6bc407d.jpg",
                },
                {
                    name: "Tv Unit",
                    type: "Tv Unit",
                    typeKey: "tvunit",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/736x/09/2d/d0/092dd08a04be3e31bdebed561e798447.jpg",
                },
                {
                    name: "Central Table",
                    type: "Central Table",
                    typeKey: "centraltable",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/1200x/e4/bf/0d/e4bf0d153891129dd98aa01142dc4e25.jpg",
                },
                {
                    name: "Accent Chair",
                    type: "Chair",
                    typeKey: "chair",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/1200x/00/71/11/0071110882356dcfe138a82494212e1f.jpg",
                },
                {
                    name: "Side Table",
                    type: "Side Table",
                    typeKey: "sidetable",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/736x/99/04/81/99048189af5e75574815fa3791cda778.jpg",
                },
                {
                    name: "Recliner Sofa",
                    type: "Recliner Sofa",
                    typeKey: "reclinersofa",
                    bg: "#B6A44C",
                    image:
                        "https://i.pinimg.com/1200x/a9/09/37/a909376014e837f1d30ba0201e295193.jpg",
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
                        "https://i.pinimg.com/1200x/d5/fb/23/d5fb23f8a9a02376da29570e9d70157a.jpg",
                },
                {
                    name: "Study Chair",
                    type: "Work Chair",
                    typeKey: "studychair",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/736x/fa/8f/0f/fa8f0f9c983630fdf5240b50d980592d.jpg",
                },
                {
                    name: "Rack Shelf",
                    type: "Shelf",
                    typeKey: "rackshelf",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/1200x/15/59/f9/1559f90eab63e6d6eaddce2010163952.jpg",
                },
                {
                    name: "Revolving Chair",
                    type: "Work Chair",
                    typeKey: "revolvingchair",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/736x/85/b7/42/85b742544e7760cd9a5c89c60cd54bf8.jpg",
                },
                {
                    name: "Shelves Unit",
                    type: "Shelf",
                    typeKey: "shelvesunit",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/736x/10/9b/02/109b02298f4ca5718476c4ff2e95f67c.jpg",
                },
                {
                    name: "Study Bed Table",
                    type: "Bed Table",
                    typeKey: "studybedtable",
                    bg: "#E3B23C",
                    image:
                        "https://i.pinimg.com/1200x/52/38/2d/52382d0ef3e257a9d27df38df1d06795.jpg",
                },

            ],
        },
        {
            heading: "Bathroom Furniture",
            category: "Bathroom",
            description:
                "Elevate your bathroom with sleek storage and functional furniture designed to enhance organization, comfort, and modern aesthetics.",
            items: [
                {
                    name: "Vanity Unit",
                    type: "Bathroom Vanity",
                    typeKey: "vanity",
                    bg: "#E2DED6",
                    image:
                        "https://i.pinimg.com/1200x/8b/49/25/8b49255acfa55b3177ceb58a7d728e62.jpg",
                },
                {
                    name: "Mirror Cabinet",
                    type: "Storage",
                    typeKey: "mirrorcabinet",
                    bg: "#D6E4E5",
                    image:
                        "https://i.pinimg.com/1200x/fa/31/1d/fa311dcf664e3df5cc4bfa4bfb307879.jpg",
                },
                {
                    name: "Under Sink Cabinet",
                    type: "Cabinet",
                    typeKey: "undersink",
                    bg: "#E5D8C8",
                    image:
                        "https://i.pinimg.com/736x/69/ea/ff/69eaff512bfab7a9497cd9f5008a92f0.jpg",
                },
                {
                    name: "Bathroom Shelves",
                    type: "Wall Storage",
                    typeKey: "bathroomshelves",
                    bg: "#DDE6E8",
                    image:
                        "https://i.pinimg.com/736x/97/30/24/9730248ee967ffebec999867580bd76b.jpg",
                },
                {
                    name: "Laundry Cabinet",
                    type: "Utility Storage",
                    typeKey: "laundrycabinet",
                    bg: "#E1E0DA",
                    image:
                        "https://i.pinimg.com/1200x/4a/17/72/4a17728f1e2bf942dfcafa8205d87cd3.jpg",
                },
                {
                    name: "Bathroom Stool",
                    type: "Seating",
                    typeKey: "bathroomstool",
                    bg: "#E8DCCF",
                    image:
                        "https://i.pinimg.com/1200x/cb/ea/72/cbea72531922c10f7e1c1d3f554f253a.jpg",
                },
            ],
        },
        {
            heading: "Garden Furniture",
            category: "Garden",
            description:
                "Create a relaxing outdoor retreat with elegant garden furniture designed for comfort, durability, and effortless open-air living.",
            items: [
                {
                    name: "Outdoor Sofa Set",
                    type: "Seating",
                    typeKey: "outdoorsofa",
                    bg: "#D6E2D1",
                    image:
                        "https://i.pinimg.com/1200x/38/46/bc/3846bc52ece40f7926c1e3a8be68caea.jpg",
                },
                {
                    name: "Garden Dining Set",
                    type: "Dining",
                    typeKey: "gardendining",
                    bg: "#E2D8C3",
                    image:
                        "https://i.pinimg.com/1200x/57/38/59/5738598db637bc052f234ad55c67590c.jpg",
                },
                {
                    name: "Outdoor Lounge Chair",
                    type: "Chair",
                    typeKey: "loungechair",
                    bg: "#DCE6E1",
                    image:
                        "https://i.pinimg.com/1200x/4c/f0/4e/4cf04e6511e319de03de6660b1b8f408.jpg",
                },
                {
                    name: "Garden Coffee Table",
                    type: "Table",
                    typeKey: "gardentable",
                    bg: "#E7DED0",
                    image:
                        "https://i.pinimg.com/736x/ee/99/7e/ee997ed3288a0ece3b7115e23ea9efd3.jpg",
                },
                {
                    name: "Sun Lounger",
                    type: "Relaxation",
                    typeKey: "sunlounger",
                    bg: "#E1E5DA",
                    image:
                        "https://i.pinimg.com/736x/44/cc/54/44cc5436b127c49f608bf734b7472b47.jpg",
                },
                {
                    name: "Garden Bench",
                    type: "Seating",
                    typeKey: "gardenbench",
                    bg: "#DED6C8",
                    image:
                        "https://i.pinimg.com/736x/4b/50/6a/4b506ab7424c5ad9e8ea0cc38643c14a.jpg",
                },
            ],
        },
        {
            heading: "Kitchen Furniture",
            category: "Kitchen",
            description:
                "Enhance your kitchen with functional and elegant furniture designed to optimize space, organization, and everyday cooking comfort.",
            items: [
                {
                    name: "Modular Kitchen Cabinet",
                    type: "Cabinet",
                    typeKey: "kitchencabinet",
                    bg: "#E7DED0",
                    image:
                        "https://i.pinimg.com/1200x/03/29/cc/0329cc61e86bab86f44cf9170fe5373d.jpg",
                },
                {
                    name: "Kitchen Island",
                    type: "Island",
                    typeKey: "kitchenisland",
                    bg: "#DAD1C3",
                    image:
                        "https://i.pinimg.com/1200x/71/bb/cb/71bbcb9c8561f9c9ad34dbe68982d67a.jpg",
                },
                {
                    name: "Bar Stool Set",
                    type: "Seating",
                    typeKey: "barstool",
                    bg: "#E3D9CB",
                    image:
                        "https://i.pinimg.com/1200x/32/01/00/3201002dff24003ec351f9879251556b.jpg",
                },
                {
                    name: "Kitchen Dining Table",
                    type: "Table",
                    typeKey: "kitchentable",
                    bg: "#DED4C5",
                    image:
                        "https://i.pinimg.com/1200x/08/ad/01/08ad017a44d55058c343febe07e8bb43.jpg",
                },
                {
                    name: "Open Kitchen Shelves",
                    type: "Storage",
                    typeKey: "kitchenshelf",
                    bg: "#E1D8C9",
                    image:
                        "https://i.pinimg.com/1200x/76/dc/2e/76dc2ee8a650106fea2354ccb2beacc0.jpg",
                },
                {
                    name: "Pantry Storage Unit",
                    type: "Pantry",
                    typeKey: "pantryunit",
                    bg: "#D8CFC0",
                    image:
                        "https://i.pinimg.com/736x/d8/98/02/d89802713e231b4ea221148b0f92ff3d.jpg",
                },
            ],
        }



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
                {["All", "Bedroom", "Living", "Study", "Bathroom", "Garden", "Kitchen"].map((cat) => (
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
                    className="flex-1 py-2 rounded-lg bg-[#3E2723] text-[#FAF7F2] text-sm cursor-pointer hover:bg-[#C9A24D]/90"
                >
                    Apply Filters
                </button>

                <button
                    onClick={() => {
                        setTempCategory("All");
                        setActiveCategory("All");
                        setShowFilter(false);
                    }}
                    className="flex-1 py-2 rounded-lg border border-[#3E2723] text-[#3E2723] text-sm cursor-pointer hover:bg-[#C9A24D] hover:text-[#FAF7F2]"
                >
                    Clear
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-[#FAF7F2] mt-27">
            {/* ================= HERO ================= */}
            <section className="m-6 md:m-10 relative h-[420px] rounded-3xl overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/49/b2/2b/49b22b5021990ecd73a47db4ec50d273.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Hero"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
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
                                            whileHover={{ y: -8 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                            className="group bg-[#E6D5C3] rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
                                        >
                                            <Link to={`/category/${item.typeKey}`} className="block h-full">
                                                {/* IMAGE */}
                                                <div
                                                    className="relative w-full aspect-4/3 overflow-hidden"
                                                    style={{ backgroundColor: item.bg }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>

                                                {/* CONTENT */}
                                                <div className="relative p-5 pb-14">
                                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                                        {item.type}
                                                    </p>

                                                    <h3 className="font-semibold text-lg text-[#3E2723]">
                                                        {item.name}
                                                    </h3>

                                                    {/* SEE MORE BUTTON */}
                                                    <span
                                                        className="absolute right-4 bottom-4 inline-flex items-center gap-2
            px-4 py-2 rounded-full bg-[#3E2723] text-[#FAF7F2] text-xs
            transition-all duration-300 group-hover:bg-[#C9A24D]"
                                                    >
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
