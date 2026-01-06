import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { furnitureOptions } from "../../assests/customizeData";
import { furnitureData } from "../../assests/furnitureData";
import { motion } from "framer-motion";
import { useCart } from "../context/AddtocartContext";
import { RefreshCcw, Shield, Truck } from "lucide-react";

// Furniture type mapping for display
const furnitureTypeMap = {
    bed: "Bed",
    chair: "Chair",
    studytable: "Study Table",
    kitchentable: "Dining Table",
    wardrobe: "Wardrobe",
    dressingTable: "Dressing Table",
    sofa: "Sofa",
    shelf: "Shelves",
    rackshelf: "Shelves",
    shelvesunit: "Shelves",
    bathroomshelves: "Shelves",
    kitchenshelf: "Shelves",
};

// Popular furniture types to show prominently
const popularTypes = [
    { key: "bed", label: "Bed", icon: "🛏️" },
    { key: "chair", label: "Chair", icon: "🪑" },
    { key: "studytable", label: "Study Table", icon: "📚" },
    { key: "kitchentable", label: "Dining Table", icon: "🍽️" },
    { key: "wardrobe", label: "Wardrobe", icon: "👔" },
    { key: "dressingTable", label: "Dressing Table", icon: "💄" },
    { key: "sofa", label: "Sofa", icon: "🛋️" },
    { key: "shelf", label: "Shelves", icon: "📦" },
];

export default function FurnitureCustomizer() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const productFromRoute = location.state?.product;
    const typeKeyFromRoute = location.state?.typeKey;

    // Determine product type
    const getInitialType = () => {
        // Priority 1: typeKey from route state
        if (typeKeyFromRoute && furnitureOptions[typeKeyFromRoute]) {
            return typeKeyFromRoute;
        }
        // Priority 2: Find from product data
        if (productFromRoute) {
            const section = furnitureData.find((s) =>
                Object.values(s.products).some((p) =>
                    p.items.some((item) => item.id === productFromRoute.id)
                )
            );
            if (section) {
                const productKey = Object.keys(section.products).find((key) =>
                    section.products[key].items.some((item) => item.id === productFromRoute.id)
                );
                if (productKey && furnitureOptions[productKey]) {
                    return productKey;
                }
            }
        }
        // Default: first popular type
        return "bed";
    };

    const [type, setType] = useState(getInitialType());
    const [selections, setSelections] = useState({});
    const [showAllTypes, setShowAllTypes] = useState(false);

    const furniture = furnitureOptions[type];

    // Initialize selections based on available options
    useEffect(() => {
        if (furniture) {
            const initialSelections = {};
            if (furniture.materials) initialSelections.material = 0;
            if (furniture.sizes) initialSelections.size = 0;
            if (furniture.colors) initialSelections.color = 0;
            if (furniture.storage) initialSelections.storage = 0;
            if (furniture.headboard) initialSelections.headboard = 0;
            if (furniture.doors) initialSelections.doors = 0;
            if (furniture.style) initialSelections.style = 0;
            if (furniture.seating) initialSelections.seating = 0;
            if (furniture.shape) initialSelections.shape = 0;
            setSelections(initialSelections);
        }
    }, [type]);

    if (!furniture) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
                <p className="text-xl text-[#3E2723]">Product type not found</p>
            </div>
        );
    }

    // Calculate total price
    const calculatePrice = () => {
        let total = furniture.basePrice || 0;
        if (furniture.materials && selections.material !== undefined) {
            total += furniture.materials[selections.material]?.price || 0;
        }
        if (furniture.sizes && selections.size !== undefined) {
            total += furniture.sizes[selections.size]?.price || 0;
        }
        if (furniture.storage && selections.storage !== undefined) {
            total += furniture.storage[selections.storage]?.price || 0;
        }
        if (furniture.headboard && selections.headboard !== undefined) {
            total += furniture.headboard[selections.headboard]?.price || 0;
        }
        if (furniture.doors && selections.doors !== undefined) {
            total += furniture.doors[selections.doors]?.price || 0;
        }
        if (furniture.style && selections.style !== undefined) {
            total += furniture.style[selections.style]?.price || 0;
        }
        if (furniture.seating && selections.seating !== undefined) {
            total += furniture.seating[selections.seating]?.price || 0;
        }
        if (furniture.shape && selections.shape !== undefined) {
            total += furniture.shape[selections.shape]?.price || 0;
        }
        return total;
    };

    const totalPrice = calculatePrice();

    const handleSelection = (key, index) => {
        setSelections((prev) => ({ ...prev, [key]: index }));
    };

    const handleAddToCart = () => {
        // Create a product object for the cart
        const productName = getDisplayName(type);
        const selectedOptions = [];

        // Build description from selections
        Object.keys(selections).forEach((key) => {
            const optionIndex = selections[key];
            const optionArray = furniture[key];
            if (optionArray && optionArray[optionIndex]) {
                selectedOptions.push(optionArray[optionIndex].name);
            }
        });

        const customizedProduct = {
            id: `custom-${type}-${Date.now()}`,
            name: `Custom ${productName}`,
            price: totalPrice,
            image: furniture.image,
            desc: selectedOptions.length > 0 ? selectedOptions.join(", ") : `Customized ${productName}`,
            category: productName,
            customized: true,
            customizationData: {
                type,
                selections,
                basePrice: furniture.basePrice,
            },
            qty: 1,
        };

        addToCart(customizedProduct);
        navigate("/cart");
    };

    const handleBuyNow = () => {
        // Add to cart first
        handleAddToCart();
        // Then navigate to checkout
        setTimeout(() => {
            navigate("/checkoutPage");
        }, 100);
    };

    const getDisplayName = (key) => {
        return furnitureTypeMap[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
    };

    const OptionSection = ({ title, options, selectionKey, type = "button" }) => {
        if (!options || options.length === 0) return null;

        return (
            <div className="space-y-3">
                <p className="font-semibold text-[#3E2723] text-base sm:text-lg">{title}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {options.map((option, i) => {
                        const isSelected = selections[selectionKey] === i;
                        const priceText = option.price > 0
                            ? `+₹${option.price.toLocaleString()}`
                            : option.price < 0
                                ? `₹${option.price.toLocaleString()}`
                                : "";

                        if (type === "color") {
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelection(selectionKey, i)}
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${isSelected
                                        ? "border-[#C9A24D] ring-2 ring-[#C9A24D] ring-offset-2 scale-110"
                                        : "border-gray-300 hover:border-[#C9A24D] hover:scale-105"
                                        }`}
                                    style={{ backgroundColor: option.code }}
                                    title={option.name}
                                />
                            );
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handleSelection(selectionKey, i)}
                                className={`px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg border-2 transition-all font-medium text-sm sm:text-base ${isSelected
                                    ? "bg-[#3E2723] text-white border-[#3E2723] shadow-md"
                                    : "bg-white text-[#3E2723] border-[#D1C4B2] hover:border-[#C9A24D] hover:bg-[#FAF7F2]"
                                    }`}
                            >
                                <span className="whitespace-nowrap">{option.name}</span>
                                {priceText && (
                                    <span className={`ml-1 sm:ml-2 text-xs ${isSelected ? "text-gray-300" : "text-[#C9A24D]"}`}>
                                        {priceText}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    // Get all available furniture types
    const allTypes = Object.keys(furnitureOptions).map((key) => ({
        key,
        label: getDisplayName(key),
        icon: popularTypes.find((p) => p.key === key)?.icon || "🪑",
    }));

    return (
        <div className="min-h-screen bg-[#FAF7F2] pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mb-2 sm:mb-4">
                        Customize Your Furniture
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Personalize your furniture with our wide range of customization options
                    </p>
                </div>

                {/* Furniture Type Selector - Always Visible */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md mb-6 sm:mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <p className="font-semibold text-[#3E2723] text-base sm:text-lg">Select Furniture Type</p>
                        {!productFromRoute && (
                            <button
                                onClick={() => setShowAllTypes(!showAllTypes)}
                                className="text-sm text-[#C9A24D] hover:text-[#B8923D] font-medium"
                            >
                                {showAllTypes ? "Show Less" : "View All"}
                            </button>
                        )}
                    </div>

                    {/* Popular Types Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                        {(showAllTypes ? allTypes : popularTypes).map((item) => {
                            const isAvailable = furnitureOptions[item.key];
                            const isSelected = type === item.key;

                            if (!isAvailable) return null;

                            return (
                                <button
                                    key={item.key}
                                    onClick={() => setType(item.key)}
                                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all ${isSelected
                                        ? "bg-[#3E2723] text-white border-[#3E2723] shadow-lg scale-105"
                                        : "bg-white text-[#3E2723] border-[#D1C4B2] hover:border-[#C9A24D] hover:bg-[#FAF7F2] hover:scale-105"
                                        }`}
                                >
                                    <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</span>
                                    <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Preview Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:sticky lg:top-24 h-fit order-2 lg:order-1"
                    >
                        <div className="bg-gradient-to-br from-[#E6D5C3] to-[#F4E8D9] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                            <div className="bg-white rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:min-h-[400px]">
                                <img
                                    src={furniture.image}
                                    alt={type}
                                    className="rounded-lg w-full h-auto object-contain max-h-[250px] sm:max-h-[350px] lg:max-h-[400px]"
                                    style={{
                                        filter: furniture.colors && selections.color !== undefined
                                            ? `drop-shadow(0 8px 16px ${furniture.colors[selections.color]?.code}40)`
                                            : "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                                    }}
                                />
                            </div>

                            {/* Product Info */}
                            <div className="bg-white rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723] mb-2">
                                        {getDisplayName(type)}
                                    </h3>
                                    <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                                        <span className="text-2xl sm:text-3xl font-bold text-[#C9A24D]">
                                            ₹{totalPrice.toLocaleString()}
                                        </span>
                                        {furniture.basePrice < totalPrice && (
                                            <span className="text-xs sm:text-sm text-gray-500 line-through">
                                                ₹{furniture.basePrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Selected Options Summary */}
                                <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-1 sm:space-y-2">
                                    <p className="text-xs sm:text-sm font-semibold text-gray-700">Selected Options:</p>
                                    <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                                        {furniture.materials && selections.material !== undefined && (
                                            <p>• Material: {furniture.materials[selections.material]?.name}</p>
                                        )}
                                        {furniture.sizes && selections.size !== undefined && (
                                            <p>• Size: {furniture.sizes[selections.size]?.name}</p>
                                        )}
                                        {furniture.seating && selections.seating !== undefined && (
                                            <p>• Seating: {furniture.seating[selections.seating]?.name}</p>
                                        )}
                                        {furniture.colors && selections.color !== undefined && (
                                            <p>• Color: {furniture.colors[selections.color]?.name}</p>
                                        )}
                                        {furniture.storage && selections.storage !== undefined && (
                                            <p>• Storage: {furniture.storage[selections.storage]?.name}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Customization Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6 sm:space-y-8 order-1 lg:order-2"
                    >
                        {/* Customization Options */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md space-y-6 sm:space-y-8">
                            {furniture.materials && (
                                <OptionSection
                                    title="Material"
                                    options={furniture.materials}
                                    selectionKey="material"
                                />
                            )}

                            {furniture.sizes && (
                                <OptionSection
                                    title="Size"
                                    options={furniture.sizes}
                                    selectionKey="size"
                                />
                            )}

                            {furniture.seating && (
                                <OptionSection
                                    title="Seating Capacity"
                                    options={furniture.seating}
                                    selectionKey="seating"
                                />
                            )}

                            {furniture.colors && (
                                <OptionSection
                                    title="Color"
                                    options={furniture.colors}
                                    selectionKey="color"
                                    type="color"
                                />
                            )}

                            {furniture.storage && (
                                <OptionSection
                                    title="Storage"
                                    options={furniture.storage}
                                    selectionKey="storage"
                                />
                            )}

                            {furniture.headboard && (
                                <OptionSection
                                    title="Headboard Style"
                                    options={furniture.headboard}
                                    selectionKey="headboard"
                                />
                            )}

                            {furniture.doors && (
                                <OptionSection
                                    title="Door Style"
                                    options={furniture.doors}
                                    selectionKey="doors"
                                />
                            )}

                            {furniture.style && (
                                <OptionSection
                                    title="Style"
                                    options={furniture.style}
                                    selectionKey="style"
                                />
                            )}

                            {furniture.shape && (
                                <OptionSection
                                    title="Shape"
                                    options={furniture.shape}
                                    selectionKey="shape"
                                />
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md space-y-3 sm:space-y-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-[#3E2723] text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#C9A24D] transition-all shadow-lg hover:shadow-xl"
                            >
                                Add to Cart - ₹{totalPrice.toLocaleString()}
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="w-full bg-[#C9A24D] text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#B8923D] transition-all"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                            {/* Fast Delivery */}
                            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex flex-col items-center gap-2">
                                <Truck className="w-6 h-6 text-[#3E2723]" />
                                <p className="text-xs font-medium text-gray-700">
                                    Fast Delivery
                                </p>
                            </div>

                            {/* Easy Returns */}
                            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex flex-col items-center gap-2">
                                <RefreshCcw className="w-6 h-6 text-[#3E2723]" />
                                <p className="text-xs font-medium text-gray-700">
                                    Easy Returns
                                </p>
                            </div>

                            {/* Warranty */}
                            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex flex-col items-center gap-2">
                                <Shield className="w-6 h-6 text-[#3E2723]" />
                                <p className="text-xs font-medium text-gray-700">
                                    5 Yr Warranty
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
