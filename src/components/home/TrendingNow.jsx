import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { products, productActions } from "../../assests/assests";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import WishlistButton from "../WishlistButton";
import { useCart } from "../context/AddtocartContext";

const TrendingNow = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <section>
      <div className="mx-auto">
        {/* HEADING */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[#C9A24D] font-bold tracking-wider text-sm uppercase">
              Best Sellers
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2 text-[#3E2723]">
              Trending Now
            </h2>
          </div>

          {/* ARROWS */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="size-10 rounded-full border border-[#E6D5C3] hover:bg-[#E6D5C3] flex items-center justify-center text-[#3E2723] cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="size-10 rounded-full border border-[#E6D5C3] hover:bg-[#E6D5C3] flex items-center justify-center text-[#3E2723] cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start rounded-2xl overflow-hidden group bg-[#E6D5C3] border border-[#E6D5C3]/20 shadow-xl/20 min-w-full sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[23.2%]"
            >
              {/* IMAGE */}
              <div className="aspect-4/5 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* BADGE */}
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* ACTION ICONS */}
                <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-3
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-all translate-y-4 group-hover:translate-y-0">

                  {productActions.map(({ id, icon: Icon }) => {
                    if (id === "wishlist") {
                      return (
                        <div
                          key={id}
                          className="w-12 h-12 flex items-center justify-center
                     bg-white rounded-full shadow-lg
                     hover:bg-[#C9A24D] transition-all"
                        >
                          <WishlistButton
                            product={product}
                            size={22}
                            className="text-[#3E2723] hover:text-white transition"
                          />
                        </div>
                      );
                    }

                    return (
                      <button
                        key={id}
                        onClick={() => {
                          if (id === "cart") addToCart(product);
                          if (id === "view") setSelectedProduct(product);
                        }}
                        className="w-12 h-12 flex items-center justify-center
                   bg-white text-[#3E2723]
                   rounded-full shadow-lg
                   hover:bg-[#C9A24D] hover:text-white
                   transition-all"
                      >
                        <Icon size={22} />
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* DETAILS */}
              <div className="p-4 text-center">
                <p className="text-xs uppercase font-bold text-[#2B2B2B]/50">
                  {product.category}
                </p>
                <h3 className="font-serif font-bold text-lg text-[#3E2723]">
                  {product.title}
                </h3>

                <div className="flex justify-center gap-2">
                  <span className="font-bold text-[#C9A24D]">
                    ₹{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="line-through text-sm text-[#2B2B2B]/40">
                      ₹{product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >

      {selectedProduct && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
        >
          {/* MODAL CARD */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#E6D5C3] rounded-2xl w-full max-w-md sm:max-w-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          >
            {/* CLOSE ICON */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-[#3E2723] hover:text-red-600 z-10"
            >
              <FaTimes size={22} />
            </button>

            {/* IMAGE */}
            <div className="w-full h-[250px] sm:h-[300px] md:h-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-6 flex flex-col justify-center text-center md:text-left">
              <p className="text-xs uppercase font-bold text-[#2B2B2B]/60">
                {selectedProduct.category}
              </p>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723] mt-1 sm:mt-2">
                {selectedProduct.title}
              </h2>

              <p className="text-black/50 leading-relaxed text-sm sm:text-base mt-2">
                {selectedProduct.description}
              </p>

              {/* PRICE */}
              <div className="flex justify-center md:justify-start gap-3 mt-3">
                <span className="text-lg sm:text-xl font-bold text-[#C9A24D]">
                  ₹{selectedProduct.price}
                </span>
                {selectedProduct.oldPrice && (
                  <span className="line-through text-[#2B2B2B]/50 text-sm sm:text-base">
                    ₹{selectedProduct.oldPrice}
                  </span>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeModal();
                  }}
                  className="px-5 py-2 bg-[#3E2723] text-white font-semibold rounded-full hover:bg-[#C9A24D] transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeModal();
                    navigate("/checkoutPage");
                  }}
                  className="px-5 py-2 bg-[#3E2723] text-white font-semibold rounded-full hover:bg-[#C9A24D] transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section >
  );
};

export default TrendingNow;
