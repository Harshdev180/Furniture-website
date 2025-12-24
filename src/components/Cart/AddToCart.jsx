import { useState } from "react";
import { Trash2, Tag, CreditCard, Wallet } from "lucide-react";

export default function CartPage() {
 const [cartItems, setCartItems] = useState([
  {
    id: 1,
    name: "Oslo Dining Table",
    description: "Solid oak dining table with premium matte finish.",
    price: 2450,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    name: "Vintner Chair",
    description: "Ergonomic chair with soft cushioning and walnut legs.",
    price: 1200,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265",
  },
]);


  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  /* ---------------- CART LOGIC ---------------- */

  const updateQty = (id, qty) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* ---------------- COUPON LOGIC ---------------- */

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(subtotal * 0.1);
      setError("");
    } else if (coupon === "FLAT500") {
      setDiscount(500);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon code");
    }
  };

  const total = subtotal - discount;

  /* ---------------- CHECKOUT ---------------- */

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    alert(`Order placed using ${paymentMethod}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B]">
      {/* Header */}
      {/* <div className="bg-[#3E2723] text-white py-6">
        <h1 className="text-2xl font-semibold text-center">Your Cart</h1>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-[#E6D5C3] rounded-xl p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-[#2B2B2B]/70 mt-1">
  {item.description}
</p>

                <p className="text-[#C9A24D] font-semibold mt-1">
                  ₹{item.price.toLocaleString()}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1 border rounded-md"
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 border rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-[#E6D5C3] rounded-xl p-6 h-fit space-y-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          {/* Coupon */}
         {/* Coupon Section */}
<div>
  <label className="text-sm font-medium block">
    Apply Coupon
  </label>


  <div className="flex gap-2 mt-2">
    <input
      type="text"
      value={coupon}
      onChange={(e) => setCoupon(e.target.value.toUpperCase())}
      placeholder="Enter coupon code"
      className="flex-1 px-3 py-2 rounded-lg border focus:outline-none"
      />
    <button
      onClick={applyCoupon}
      className="bg-[#3E2723] text-white px-4 rounded-lg hover:opacity-90"
      >
      Apply
    </button>
  </div>

  {/* Success message BELOW label */}
  {discount > 0 && !error && (
    <p className="text-green-700 text-sm mt-1">
      Coupon <span className="font-semibold">{coupon}</span> applied successfully
    </p>
  )}
  {error && (
    <p className="text-red-600 text-sm mt-1">{error}</p>
  )}
</div>


          
          {/* Price */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">
                − ₹{discount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-[#C9A24D]">
                ₹{total.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#3E2723] text-white py-3 rounded-xl hover:opacity-90 cursor-pointer"
          >
            Place Order
          </button>

{/* Payment Method */}

          <div>
            <h3 className="font-semibold mb-3">Payment Method</h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-[#FAF7F2]">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Wallet size={18} />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-[#FAF7F2]">
                <input
                  type="radio"
                  name="payment"
                  value="UPI / Wallet"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Tag size={18} />
                UPI / Wallet
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-[#FAF7F2]">
                <input
                  type="radio"
                  name="payment"
                  value="Credit / Debit Card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <CreditCard size={18} />
                Credit / Debit Card
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
