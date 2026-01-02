import { Trash2, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "./context/WishlistContext";
import { useCart } from "./context/AddtocartContext";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    if (wishlist.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <Heart size={48} className="text-[#C9A24D] mb-4" />
                <h2 className="text-3xl font-serif font-bold text-[#3E2723]">
                    Your Wishlist is Empty
                </h2>
                <p className="text-[#3E2723]/60 mt-2 max-w-md">
                    Save your favorite furniture pieces here and come back anytime to buy them.
                </p>

                <Link
                    to="/categories"
                    className="mt-6 px-6 py-3 bg-[#3E2723] text-white rounded-full hover:bg-[#C9A24D] transition"
                >
                    Explore Collection
                </Link>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* HEADER */}
            <div className="mb-10 text-center">
                <span className="uppercase tracking-wider text-sm font-bold text-[#C9A24D]">
                    Saved Items
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E2723] mt-2">
                    My Wishlist
                </h1>
            </div>

            {/* GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-[#E6D5C3] border border-[#E6D5C3]/40 rounded-2xl overflow-hidden shadow-xl/20 hover:shadow-xl transition"
                    >
                        {/* IMAGE */}
                        <div className="relative overflow-hidden aspect-3/2">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* REMOVE ICON */}
                            <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        {/* DETAILS */}
                        <div className="p-5 text-center">
                            <p className="text-xs uppercase tracking-wide font-bold text-[#3E2723]/50">
                                {item.category || "Furniture"}
                            </p>

                            <h3 className="font-serif font-bold text-lg text-[#3E2723] mt-1">
                                {item.name}
                            </h3>

                            <p className="text-lg font-bold text-[#C9A24D] mt-2">
                                ₹{item.price}
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() => addToCart(item)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#3E2723] text-white py-2 rounded-full hover:bg-[#C9A24D] transition"
                                >
                                    <ShoppingBag size={16} />
                                    Add to Cart
                                </button>

                                <Link
                                    to={`/product/${item.id}`}
                                    className="flex-1 border border-[#3E2723] text-[#3E2723] py-2 rounded-full hover:bg-[#3E2723] hover:text-white transition"
                                >
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Wishlist;
