import { useState, useEffect } from "react";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/AddtocartContext";
import WishlistButton from "../WishlistButton";

export default function CartPage() {

  const navigate = useNavigate();
  const { cart, updateQty, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  /* ---------------- CART LOGIC ---------------- */

  const handleUpdateQty = (cartItemId, qty) => {
    updateQty(cartItemId, qty);
  };

  const handleRemoveItem = (cartItemId) => {
    {
      removeFromCart(cartItemId);
      // Reset discount when item is removed
      if (cart.length === 1) {
        setDiscount(0);
        setCoupon("");
        setError("");
      }
    }
  };

  // Normalize price to number (handle string prices)
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

  const subtotal = cart.reduce(
    (sum, item) => {
      const price = normalizePrice(item.price);
      const qty = item.qty || 1;
      return sum + (price * qty);
    },
    0
  );

  // Reset discount when cart changes
  useEffect(() => {
    if (cart.length === 0) {
      setDiscount(0);
      setCoupon("");
      setError("");
    }
  }, [cart.length]);

  /* ---------------- COUPON LOGIC ---------------- */

  const applyCoupon = () => {
    if (!coupon.trim()) {
      setError("Please enter a coupon code");
      return;
    }

    if (coupon === "SAVE10") {
      setDiscount(subtotal * 0.1);
      setError("");
    } else if (coupon === "FLAT500") {
      setDiscount(Math.min(500, subtotal));
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    setCoupon("");
    setDiscount(0);
    setError("");
  };

  const total = Math.max(0, subtotal - discount);

  /* ---------------- CHECKOUT ---------------- */

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }
    navigate("/checkoutPage");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B]">
      {/* Header */}
      <div className="bg-[#FAF7F2] text-[#2B2B2B] py-6 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-[#2B2B2B/80 hover:text-[#C9A24D] transition mb-4"
          >
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-3xl font-serif font-bold">Your Cart</h1>
          <p className="text-[#2B2B2B]/70 mt-1">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 bg-[#E6D5C3] rounded-2xl border-2 border-dashed border-[#C9A24D]/30">
              <ShoppingBag size={64} className="mx-auto text-[#C9A24D] mb-4 opacity-50" />
              <h2 className="text-2xl font-serif font-bold text-[#3E2723] mb-2">
                Your cart is empty
              </h2>
              <p className="text-[#3E2723]/70 mb-6 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
              </p>
              <Link
                to="/categories"
                className="inline-block px-8 py-3 bg-[#3E2723] text-white rounded-full hover:bg-[#C9A24D] transition font-medium"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => {
              const itemPrice = normalizePrice(item.price);
              const itemQty = item.qty || 1;
              const itemTotal = itemPrice * itemQty;
              const cartItemId = item.cartItemId || item.id; // Fallback to id for backward compatibility
              return (
                <div
                  key={cartItemId}
                  className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-[#E6D5C3]"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.name || "Product"}
                    className="w-full sm:w-32 h-32 sm:h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#3E2723] mb-1">
                        {item.name || "Product"}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-[#2B2B2B]/70 mb-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 mb-3">
                        <p className="text-[#C9A24D] font-bold text-lg">
                          ₹{normalizePrice(item.price).toLocaleString()}
                        </p>
                        {itemQty > 1 && (
                          <span className="text-sm text-gray-500">
                            × {itemQty}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 border rounded-lg">
                        <button
                          onClick={() => handleUpdateQty(cartItemId, itemQty - 1)}
                          className="px-4 py-2 hover:bg-[#FAF7F2] transition rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 font-medium min-w-12 text-center">
                          {itemQty}
                        </span>
                        <button
                          onClick={() => handleUpdateQty(cartItemId, itemQty + 1)}
                          className="px-4 py-2 hover:bg-[#FAF7F2] transition rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <WishlistButton product={item} size={20} />

                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">Item Total</p>
                        <p className="text-lg font-bold text-[#3E2723]">
                          ₹{itemTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(cartItemId)}
                    className="self-start sm:self-center p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl p-6 h-fit space-y-6 shadow-lg border border-[#E6D5C3] sticky top-24">
          <h2 className="text-2xl font-serif font-bold text-[#3E2723] border-b pb-3">
            Order Summary
          </h2>

          {/* Coupon Section */}
          {cart.length > 0 && (
            <div>
              <label className="text-sm font-medium block mb-2 text-[#3E2723]">
                Apply Coupon
              </label>

              {discount > 0 ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800">
                      Coupon <span className="font-bold">{coupon}</span> applied
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-green-700 hover:text-green-900 text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-xs text-green-600">
                    You saved ₹{discount.toLocaleString()}!
                  </p>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value.toUpperCase());
                      setError("");
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        applyCoupon();
                      }
                    }}
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2 rounded-lg border border-[#D1C4B2] focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-[#3E2723] text-white px-4 rounded-lg hover:bg-[#C9A24D] transition font-medium"
                  >
                    Apply
                  </button>
                </div>
              )}

              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>
          )}

          {/* Price Breakdown */}
          <div className="border-t border-[#E6D5C3] pt-4 space-y-3">
            <div className="flex justify-between text-[#3E2723]">
              <span>Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"})</span>
              <span className="font-medium">₹{subtotal.toLocaleString()}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-700">
                <span>Discount</span>
                <span className="font-medium">− ₹{discount.toLocaleString()}</span>
              </div>
            )}

            <div className="border-t border-[#E6D5C3] pt-3 flex justify-between items-center">
              <span className="text-lg font-semibold text-[#3E2723]">Total</span>
              <span className="text-2xl font-serif font-bold text-[#C9A24D]">
                ₹{total.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full bg-[#3E2723] text-white py-4 rounded-xl hover:bg-[#C9A24D] transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {cart.length === 0 ? "Cart is Empty" : "Proceed to Checkout"}
          </button>

          {cart.length > 0 && (
            <p className="text-xs text-center text-gray-500">
              Free delivery on orders above ₹5,000
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
