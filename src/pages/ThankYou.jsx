import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, Home, ShoppingBag } from "lucide-react";

export default function ThankYou() {
  const location = useLocation();
  const orderData = location.state?.orderData || {};

  const [orderId] = useState(
    () => orderData.orderId || `ORD-${Date.now()}`
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* SUCCESS ICON */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C9A24D] to-[#B8923D] rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-14 h-14 sm:w-20 sm:h-20 text-white" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-[#3E2723] rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-5 h-5 text-[#C9A24D]" />
            </motion.div>
          </div>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Your order has been successfully placed and is being processed.
          </p>

          <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-md border border-[#E6D5C3]">
            <p className="text-xs text-gray-600 mb-1">Order ID</p>
            <p className="text-lg font-bold text-[#3E2723] font-mono">
              {orderId}
            </p>
          </div>
        </motion.div>

        {/* ORDER SUMMARY */}
        {orderData?.total && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-[#E6D5C3]/50"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723] mb-6 pb-4 border-b">
              Order Summary
            </h2>

            <div className="space-y-4">
              {orderData.items?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between gap-2 py-3 border-b last:border-0"
                >
                  <div>
                    <p className="font-semibold text-[#3E2723]">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-[#C9A24D]">
                    ₹{Number(item.price).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t-2 border-[#C9A24D] flex justify-between items-center">
                <span className="text-lg font-semibold text-[#3E2723]">
                  Total
                </span>
                <span className="text-2xl font-serif font-bold text-[#C9A24D]">
                  ₹{Number(orderData.total).toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* NEXT STEPS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-[#E6D5C3]/50"
        >
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723] mb-6">
            What's Next?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Package />,
                title: "Order Confirmation",
                desc: "You’ll receive an email confirmation shortly.",
              },
              {
                icon: <ShoppingBag />,
                title: "Processing",
                desc: "Your order is being prepared for shipment.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-[#E6D5C3] rounded-lg flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#3E2723]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to={`/tracking/${orderId}`}
            className="flex items-center justify-center gap-2 bg-[#3E2723] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A24D] transition shadow-lg"
          >
            <Package className="w-5 h-5" />
            Track Order
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-white text-[#3E2723] px-8 py-3 rounded-xl font-semibold border-2 border-[#3E2723] hover:bg-[#FAF7F2] transition"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* TRUST */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
        >
          {[
            { emoji: "🚚", label: "Free Delivery" },
            { emoji: "🔄", label: "Easy Returns" },
            { emoji: "🛡️", label: "Secure Payment" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 shadow-sm"
            >
              <p className="text-2xl mb-2">{item.emoji}</p>
              <p className="text-xs font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
