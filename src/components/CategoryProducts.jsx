import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { furnitureData } from "../assests/furnitureData";
import { useMemo, useState } from "react";
import { useCart } from "./context/AddtocartContext";
import WishlistButton from "./WishlistButton";

const CategoryProducts = () => {
    const { typeKey } = useParams();
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({});
    const navigate = useNavigate();
    const { addToCart } = useCart();

    /* ================= FIND DATA ================= */
    const matchedSection = furnitureData.find(
        (section) => section.products[typeKey]
    );

    if (!matchedSection) {
        return (
            <p className="text-center mt-20 text-xl text-gray-500">
                No products found
            </p>
        );
    }

    const productData = matchedSection.products[typeKey];

    /* ================= FILTER LOGIC ================= */
    const attributeConfig = [
        { key: "size", label: "Size" },
        { key: "material", label: "Material" },
        { key: "storage", label: "Storage" },
        { key: "headboard", label: "Headboard" },
        { key: "doors", label: "Doors" },
        { key: "style", label: "Style" },
        { key: "seating", label: "Seating" },
        { key: "shape", label: "Shape" },
        { key: "top", label: "Top" },
    ];

    const availableAttributes = useMemo(() => {
        return attributeConfig
            .map((attr) => {
                const options = new Set();
                productData.items.forEach((item) => {
                    const value = item[attr.key];
                    if (Array.isArray(value)) {
                        value.forEach((v) => options.add(v));
                    }
                });
                return { ...attr, options: Array.from(options) };
            })
            .filter((attr) => attr.options.length > 0);
    }, [attributeConfig, productData.items]);

    const activeFilters = Object.entries(filters).filter(
        ([, value]) => value && value !== ""
    );

    const filteredItems = productData.items.filter((item) =>
        activeFilters.every(
            ([key, value]) => Array.isArray(item[key]) && item[key].includes(value)
        )
    );

    /* ================= FILTER COMPONENT ================= */
    const FilterBlock = ({ title, options, value, onChange }) => (
        <div className="mb-6">
            <h4 className="font-semibold text-[#3E2723] mb-3">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={`px-4 py-2 rounded-full border transition-all text-sm font-medium
              ${value === opt
                                ? "bg-[#3E2723] text-white border-[#3E2723] shadow-md"
                                : "bg-[#FAF7F2] text-[#3E2723] border-[#D1C4B2] hover:bg-[#C9A24D]/80 hover:text-white"
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );

    const FilterContent = () => (
        <div>
            {availableAttributes.map((attr) => (
                <FilterBlock
                    key={attr.key}
                    title={attr.label}
                    options={attr.options}
                    value={filters[attr.key] || ""}
                    onChange={(v) =>
                        setFilters({
                            ...filters,
                            [attr.key]: filters[attr.key] === v ? "" : v,
                        })
                    }
                />
            ))}

            <button
                onClick={() => setFilters({})}
                className="mt-4 w-full py-2 rounded-lg bg-[#3E2723] text-white font-semibold hover:bg-[#C9A24D] transition"
            >
                Clear Filters
            </button>
        </div>
    );

    return (
        <div className="bg-[#FAF7F2] min-h-screen">
            {/* ================= HERO ================= */}
            <section className="relative h-[420px]">
                <img
                    src={matchedSection.heroImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={productData.title}
                />
                <div className="absolute inset-0 bg-[#3E2723]/70" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-4xl md:text-5xl font-serif font-bold">
                        {productData.title}
                    </h1>
                    <p className="text-gray-200 mt-3 max-w-xl">
                        {productData.description}
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-4 py-16">
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.length === 0 ? (
                                <div className="col-span-full text-center py-16 bg-[#F4E8D9] rounded-2xl border border-dashed border-[#C9A24D]/60">
                                    <h3 className="text-lg font-semibold text-[#3E2723] mb-3">
                                        No products available
                                    </h3>
                                    <p className="text-sm text-[#3E2723]/70 mb-6 max-w-md mx-auto">
                                        We couldn&apos;t find any products matching your current filters.
                                        Try clearing filters or exploring another category.
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <button
                                            onClick={() => setFilters({})}
                                            className="px-5 py-2 rounded-full bg-[#3E2723] text-white text-sm hover:bg-[#C9A24D] transition"
                                        >
                                            Clear Filters
                                        </button>
                                        <button
                                            onClick={() => navigate("/categories")}
                                            className="px-5 py-2 rounded-full border border-[#3E2723] text-[#3E2723] text-sm hover:bg-[#3E2723] hover:text-white transition"
                                        >
                                            Back to Categories
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                filteredItems.map((item) => (

                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -8 }}
                                        className="bg-[#E6D5C3] rounded-2xl shadow-md hover:shadow-xl transition-shadow
             h-full flex flex-col overflow-hidden"
                                    >
                                        {/* Image */}
                                        <div className="relative">
                                            <Link
                                                to={`/product/${item.id}`}
                                                state={{
                                                    product: item,
                                                    meta: {
                                                        typeKey,
                                                        sectionHeading: matchedSection.heading,
                                                        heroImage: matchedSection.heroImage,
                                                        title: productData.title,
                                                    },
                                                }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-56 w-full object-cover"
                                                />
                                            </Link>

                                            <div className="absolute top-3 right-3 z-10">
                                                <WishlistButton product={item} size={20} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3 className="text-lg font-semibold text-[#3E2723]">
                                                {item.name}
                                            </h3>

                                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                                {item.description}
                                            </p>

                                            <p className="font-bold text-[#3E2723] mt-2">
                                                ₹{item.price}
                                            </p>

                                            {/* Buttons pushed to bottom */}
                                            <div className="flex flex-col gap-2 pt-4 mt-auto">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            addToCart(item);
                                                            navigate("/cart");
                                                        }}
                                                        className="flex-1 py-2 rounded-lg border border-[#3E2723]
                     text-[#3E2723] hover:bg-[#C9A24D] hover:text-white
                     transition text-sm"
                                                    >
                                                        Add to Cart
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            addToCart(item);
                                                            navigate("/checkoutPage");
                                                        }}
                                                        className="flex-1 py-2 rounded-lg bg-[#3E2723]
                     text-white hover:bg-[#C9A24D]
                     transition text-sm"
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        navigate("/customize", {
                                                            state: {
                                                                product: item,
                                                                typeKey: typeKey,
                                                            },
                                                        })
                                                    }
                                                    className="w-full py-2 rounded-lg bg-[#C9A24D] text-white hover:bg-[#B8923D]transition font-medium text-sm"
                                                >
                                                    Customize
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>


                                ))
                            )}
                        </div>
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

export default CategoryProducts;