import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    // Helper function to normalize price to number
    const normalizePrice = (price) => {
        if (typeof price === 'number') return price;
        if (typeof price === 'string') {
            // Remove currency symbols, commas, and whitespace
            const cleaned = price.replace(/[₹,\s]/g, '');
            const num = parseFloat(cleaned);
            return isNaN(num) ? 0 : num;
        }
        return 0;
    };

    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem("cart");
            if (stored) {
                const parsed = JSON.parse(stored);
                // Normalize prices for existing cart items
                return parsed.map(item => ({
                    ...item,
                    price: normalizePrice(item.price),
                    // Ensure cartItemId exists for backward compatibility
                    cartItemId: item.cartItemId || `${item.id}_${item.color || ''}_${item.variant || ''}_${Date.now()}`
                }));
            }
            return [];
        } catch (error) {
            console.error("Error loading cart from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            // Normalize the incoming product price
            const normalizedPrice = normalizePrice(product.price);

            // Create a unique key for product identification
            // Use id + color + variant to differentiate products with same ID
            // If no color/variant, just use ID (treat as same product)
            const hasVariants = product.color || product.variant;
            const productKey = hasVariants
                ? `${product.id}_${product.color || ''}_${product.variant || ''}`
                : `${product.id}`;

            // Check if exact same product exists
            const existingIndex = prev.findIndex((item) => {
                if (hasVariants) {
                    const itemKey = `${item.id}_${item.color || ''}_${item.variant || ''}`;
                    return itemKey === productKey;
                } else {
                    // For products without variants, only match by ID
                    return item.id === product.id && !item.color && !item.variant;
                }
            });

            if (existingIndex !== -1) {
                // Same product exists, increase quantity
                return prev.map((item, index) =>
                    index === existingIndex
                        ? {
                            ...item,
                            qty: (item.qty || 1) + (product.qty || product.quantity || 1),
                            price: normalizePrice(item.price) // Ensure price is number
                        }
                        : item
                );
            }

            // New product, add to cart with normalized price and unique cartItemId
            const normalizedProduct = {
                ...product,
                qty: product.qty || product.quantity || 1,
                price: normalizedPrice,
                cartItemId: `${productKey}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` // Unique ID for cart item
            };

            return [...prev, normalizedProduct];
        });
    };

    const removeFromCart = (cartItemId) => {
        // Remove by cartItemId (unique identifier for each cart item)
        setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    };

    const updateQty = (cartItemId, qty) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.cartItemId === cartItemId) {
                    return {
                        ...item,
                        qty: Math.max(1, qty),
                        price: normalizePrice(item.price)
                    };
                }
                return item;
            })
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
