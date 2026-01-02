import { Heart } from "lucide-react";
import { useWishlist } from "./context/WishlistContext";

const WishlistButton = ({ product, size = 20, className = "" }) => {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`cursor-pointer transition-all duration-300 hover:scale-110 ${className}`}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            <Heart
                size={size}
                className={`transition-all duration-300 ${
                    isInWishlist
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400 hover:text-red-500"
                }`}
            />
        </button>
    );
};

export default WishlistButton;

