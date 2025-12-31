import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import { submitQuoteRequest } from "../utils/googleSheets";

export default function QuoteRequest({ onClose, initialProduct = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: initialProduct,
    quantity: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Update product field when initialProduct changes
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        product: initialProduct,
      }));
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitQuoteRequest(formData);
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Quote request submitted successfully! We'll contact you soon." });
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          budget: "",
          message: "",
        });
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Failed to submit. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-[#E6D5C3] p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E6D5C3] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#3E2723]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723]">
              Request a Quote
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#FAF7F2] transition-colors"
            >
              <X className="w-5 h-5 text-[#3E2723]" />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="+91 12345 67890"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Product/Item
              </label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="Product Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="Quantity"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
                Budget Range
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium"
                placeholder="e.g., ₹50,000 - ₹1,00,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium resize-none"
              placeholder="Tell us more about your requirements..."
            ></textarea>
          </div>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${submitStatus.type === "success"
                  ? "bg-green-50 border-2 border-green-200 text-green-800"
                  : "bg-red-50 border-2 border-red-200 text-red-800"
                }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-white text-[#3E2723] px-6 py-3 rounded-xl font-semibold border-2 border-[#3E2723] hover:bg-[#FAF7F2] transition-all"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#3E2723] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#C9A24D] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

