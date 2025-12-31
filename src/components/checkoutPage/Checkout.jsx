import { useEffect, useState } from "react";
import InputGrid from "./InputGrid";
import DeliveryForm from "./DeliveryForm";
import Section from "./section";
import Row from "./Row";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { openRazorpay } from "../../assests/razorpay";
import { groupCartItems } from "../../assests/cartUtils";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCcw, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitDeliveryForm, submitOrder } from "../../utils/googleSheets";
import { useCart } from "../context/AddtocartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    deliveryMethod: "delivery",
    deliveryDate: "",
    timeSlot: "",
  });

  useEffect(() => {
    if (cart.length > 0) {
      const groupedItems = groupCartItems(cart);
      setItems(groupedItems);
    } else {
      setItems([]);
    }
  }, [cart]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const shipping = 70;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#3E2723]/70 hover:text-[#3E2723] transition-colors mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mb-2">
            Checkout
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Complete your order with secure payment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Section title="Contact Information" value="1">
                <InputGrid formData={formData} onChange={setFormData} />
              </Section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Section title="Delivery Method" value="2">
                <DeliveryForm formData={formData} onChange={setFormData} />
              </Section>
            </motion.div>
          </div>

          {/* ORDER SUMMARY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 overflow-hidden border border-[#E6D5C3]/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E6D5C3]">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723]">
                  Order Summary
                </h2>
                <CreditCard className="text-[#C9A24D] w-5 h-5" />
              </div>

              {/* Scrollable Items */}
              <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar mb-6">
                {items.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-sm">No items in cart</p>
                  </div>
                ) : (
                  items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3 p-3 rounded-lg hover:bg-[#FAF7F2] transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0 border border-[#E6D5C3]"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-[#3E2723] mb-1 line-clamp-1">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-[#3E2723]/60 font-medium uppercase tracking-wide mb-1">
                            {item.variant}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm font-medium text-[#C9A24D]">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm sm:text-base font-bold text-[#3E2723]">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-500 mt-1">
                            ₹{item.price.toLocaleString()} each
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Pricing */}
              <div className="border-t border-[#E6D5C3] pt-4 space-y-3 mb-4">
                <Row label="Subtotal" value={`₹${subtotal.toLocaleString()}`} />
                <Row
                  label="Discount (10%)"
                  value={`-₹${discount.toLocaleString()}`}
                  isDiscount={true}
                />
                <Row label="Shipping" value={`₹${shipping.toLocaleString()}`} />
              </div>

              <div className="border-t-2 border-[#C9A24D] pt-4 pb-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#3E2723]">Total</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#C9A24D]">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <button
                onClick={async (e) => {
                  e.preventDefault();

                  // Validate form data
                  if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
                    alert("Please fill in all required contact information (Name, Email, Phone)");
                    return;
                  }

                  if (!formData.address || !formData.city || !formData.zipCode || !formData.country) {
                    alert("Please fill in all required delivery information (Address, City, Zip Code, Country)");
                    return;
                  }

                  if (items.length === 0) {
                    alert("Your cart is empty");
                    return;
                  }

                  try {
                    const orderId = `ORD-${Date.now()}`;
                    const orderData = {
                      orderId,
                      items: items.map(item => ({
                        name: item.name,
                        quantity: item.quantity,
                        price: item.price * item.quantity,
                      })),
                      subtotal,
                      discount,
                      shipping,
                      total,
                      customerName: `${formData.firstName} ${formData.lastName}`.trim(),
                      customerEmail: formData.email,
                      customerPhone: formData.phone,
                      address: `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`,
                      deliveryMethod: formData.deliveryMethod || "delivery",
                      deliveryDate: formData.deliveryDate || "",
                      timeSlot: formData.timeSlot || "",
                      paymentStatus: "pending",
                    };

                    // Save order to Google Sheets (optional - can be done after payment too)
                    try {
                      await submitOrder(orderData);
                    } catch (sheetError) {
                      console.warn("Failed to save to Google Sheets:", sheetError);
                      // Continue with payment even if sheet save fails
                    }

                    // Open Razorpay payment
                    openRazorpay({
                      total,
                      orderData,
                      onSuccess: async (response) => {
                        try {
                          // Update payment status in Google Sheets
                          await submitOrder({
                            ...orderData,
                            paymentStatus: "completed",
                            paymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                          });
                        } catch (sheetError) {
                          console.warn("Failed to update order status:", sheetError);
                          // Still navigate to thank you page even if sheet update fails
                        }

                        // Navigate to thank you page
                        navigate("/thankyou", {
                          state: {
                            orderData: {
                              ...orderData,
                              paymentId: response.razorpay_payment_id,
                              razorpayOrderId: response.razorpay_order_id,
                            },
                          },
                        });
                      },
                      onError: (error) => {
                        console.error("Payment error:", error);
                        // Optionally show error message to user
                        // alert("Payment failed. Please try again.");
                      },
                    });
                  } catch (error) {
                    console.error("Checkout error:", error);
                    alert("An error occurred. Please try again.");
                  }
                }}
                className="w-full bg-[#3E2723] text-white py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#C9A24D] transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Payment
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#E6D5C3]">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-1 text-[#C9A24D]" />
                  <p className="text-xs font-medium text-gray-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RefreshCcw className="w-5 h-5 mx-auto mb-1 text-[#C9A24D]" />
                  <p className="text-xs font-medium text-gray-600">Easy Returns</p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-[#C9A24D]" />
                  <p className="text-xs font-medium text-gray-600">Secure Payment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
