import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Clock, Home, Search } from "lucide-react";

const trackingSteps = [
  { id: 1, label: "Order Placed", icon: Package, status: "completed" },
  { id: 2, label: "Processing", icon: Clock, status: "completed" },
  { id: 3, label: "Shipped", icon: Truck, status: "active" },
  { id: 4, label: "Delivered", icon: CheckCircle, status: "pending" },
];

export default function Tracking() {
  const { orderId } = useParams();
  const [orderIdInput, setOrderIdInput] = useState(orderId || "");
  const [currentOrderId, setCurrentOrderId] = useState(orderId || "");
  const [orderStatus, setOrderStatus] = useState("shipped"); // placed, processing, shipped, delivered

  useEffect(() => {
    if (orderId) {
      setCurrentOrderId(orderId);
      // Simulate fetching order status
      fetchOrderStatus(orderId);
    }
  }, [orderId]);

  const fetchOrderStatus = async (id) => {
    // This would fetch from your backend/Google Sheets
    // For now, simulating with different statuses
    const statuses = ["placed", "processing", "shipped", "delivered"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setOrderStatus(randomStatus);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (orderIdInput.trim()) {
      setCurrentOrderId(orderIdInput.trim());
      fetchOrderStatus(orderIdInput.trim());
    }
  };

  const getStatusIndex = () => {
    const statusMap = {
      placed: 0,
      processing: 1,
      shipped: 2,
      delivered: 3,
    };
    return statusMap[orderStatus] || 0;
  };

  const currentStepIndex = getStatusIndex();

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mb-4">
            Track Your Order
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your order ID to track the status of your shipment
          </p>
        </div>

        {/* Search Form */}
        {!currentOrderId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-[#E6D5C3]/50"
          >
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E2723]/50 w-5 h-5" />
                <input
                  type="text"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  placeholder="Enter Order ID (e.g., ORD-1234567890)"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#3E2723] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#C9A24D] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Track Order
              </button>
            </form>
          </motion.div>
        )}

        {/* Order Status */}
        {currentOrderId && (
          <>
            {/* Order Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-[#E6D5C3]/50"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-[#E6D5C3]">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order ID</p>
                  <p className="text-xl font-bold text-[#3E2723] font-mono">{currentOrderId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    orderStatus === "delivered" 
                      ? "bg-green-100 text-green-700"
                      : orderStatus === "shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-[#E6D5C3] text-[#3E2723]"
                  }`}>
                    {orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1)}
                  </span>
                </div>
              </div>

              {/* Tracking Steps */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-[#E6D5C3] z-0 hidden sm:block" />
                <div
                  className="absolute top-6 left-0 h-1 bg-[#C9A24D] z-0 hidden sm:block transition-all duration-500"
                  style={{ width: `${(currentStepIndex / (trackingSteps.length - 1)) * 100}%` }}
                />

                {/* Steps */}
                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
                  {trackingSteps.map((step, index) => {
                    const isCompleted = index <= currentStepIndex;
                    const isActive = index === currentStepIndex;
                    const Icon = step.icon;

                    return (
                      <div key={step.id} className="flex flex-col items-center">
                        <div
                          className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 transition-all ${
                            isCompleted
                              ? "bg-[#C9A24D] text-white shadow-lg scale-110"
                              : "bg-[#E6D5C3] text-[#3E2723]/50"
                          }`}
                        >
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                          {isCompleted && !isActive && (
                            <CheckCircle className="absolute -top-1 -right-1 w-5 h-5 text-[#3E2723] bg-white rounded-full" />
                          )}
                        </div>
                        <p
                          className={`text-xs sm:text-sm font-medium text-center ${
                            isCompleted ? "text-[#3E2723]" : "text-gray-400"
                          }`}
                        >
                          {step.label}
                        </p>
                        {isActive && (
                          <p className="text-xs text-[#C9A24D] font-semibold mt-1">
                            Current
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Estimated Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#E6D5C3] to-[#F4E8D9] rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-[#E6D5C3]/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#3E2723]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3E2723] mb-1">Estimated Delivery</h3>
                  <p className="text-sm text-gray-600">
                    {orderStatus === "delivered"
                      ? "Delivered"
                      : orderStatus === "shipped"
                      ? "3-5 business days"
                      : "5-7 business days"}
                  </p>
                </div>
              </div>
              {orderStatus !== "delivered" && (
                <p className="text-sm text-gray-600 pl-16">
                  We'll send you an email with tracking updates as your order progresses.
                </p>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-[#3E2723] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#C9A24D] transition-all shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setCurrentOrderId("");
                  setOrderIdInput("");
                }}
                className="flex items-center justify-center gap-2 bg-white text-[#3E2723] px-8 py-3.5 rounded-xl font-semibold border-2 border-[#3E2723] hover:bg-[#FAF7F2] transition-all"
              >
                Track Another Order
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

