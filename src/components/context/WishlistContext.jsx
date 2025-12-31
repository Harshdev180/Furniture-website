import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const stored = localStorage.getItem("wishlist");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Error loading wishlist from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } catch (error) {
            console.error("Error saving wishlist to localStorage:", error);
        }
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            if (prev.find((item) => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

/* ✅ MUST BE DEFAULT FUNCTION */
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used inside WishlistProvider");
    }
    return context;
};
