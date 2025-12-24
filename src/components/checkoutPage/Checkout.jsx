import { useEffect, useState } from "react";
import { orderItems } from "../../assests/assests";
import InputGrid from "./InputGrid";
import DeliveryForm from "./DeliveryForm";
// import PaymentForm from "./PaymentForm";
import Section from "./section";
import Row from "./Row";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { openRazorpay } from "../../assests/razorpay";
import { groupCartItems } from "../../assests/cartUtils";

export default function Checkout() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const groupedItems = groupCartItems(orderItems);
      setItems(groupedItems);
    }, 500);
  }, []);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const shipping = 70;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-[#E6D5C3]/20 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 pt-20 pb-5">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          <div className="inline-flex items-center gap-2 text-gray-500 mb-8 hover:text-[#3E2723]/80 font-bold">
            <FaArrowLeft />
            <Link to="/">Back to Home</Link>
          </div>

          <Section title="Contact Information" value="1">
            <InputGrid />
          </Section>

          <Section title="Delivery Method" value="2">
            <DeliveryForm />
          </Section>

          {/* <Section title="Payment Method" value="3">
            <PaymentForm />
          </Section> */}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow p-5 h-fit sticky top-6 overflow-hidden">
          <h2 className="font-serif text-2xl font-bold text-[#3E2723] mb-6 pb-4 border-b border-[#3E2723]/20">
            Order Summary
          </h2>

          {/* Scrollable Items */}
          <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-[#2B2B2B]-main truncate text-xs sm:text-lg font-serif">
                    {item.name}
                  </h3>
                  <p className="text-[8px] sm:text-xs text-[#3E2723]/50 font-medium tracking-wide uppercase">
                    {item.variant}
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold text-[#3E2723]">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="text-[12px] sm:text-[16px] font-bold font-serif">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="border-t mt-4 pt-4 space-y-2 text-sm">
            <Row label="Subtotal" value={`₹${subtotal.toFixed(2)}`} />
            <Row label="Discount (10%)" value={`-₹${discount.toFixed(2)}`} />
            <Row label="Shipping" value={`₹${shipping.toFixed(2)}`} />
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
            <span className="text-gray-600">Total</span>
            <span className="text-[15px] sm:text-[16px] font-serif">
              ₹{total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => openRazorpay({ total })}
            className="w-full mt-5 bg-[#3E2723]/90 text-white py-3 rounded-lg hover:bg-[#3E2723] transition"
          >
            Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
