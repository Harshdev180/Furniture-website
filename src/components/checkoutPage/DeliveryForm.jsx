import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MapPin, Calendar, Clock, Home } from "lucide-react";

const DeliveryForm = ({ formData, onChange }) => {
  const handleChange = (field, value) => {
    if (onChange) {
      onChange({ ...formData, [field]: value });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Delivery Method Toggle */}
      <div className="flex p-1.5 bg-[#E6D5C3]/30 rounded-xl w-full sm:w-fit border border-[#E6D5C3]">
        <label className="flex-1 sm:flex-none cursor-pointer relative">
          <input
            checked={formData?.deliveryMethod === "delivery"}
            onChange={() => handleChange("deliveryMethod", "delivery")}
            className="peer sr-only"
            name="delivery_mode"
            type="radio"
          />
          <div className="px-6 py-3 rounded-lg text-sm font-bold text-[#3E2723]/70 transition-all peer-checked:bg-white peer-checked:text-[#3E2723] peer-checked:shadow-md flex items-center justify-center gap-2 hover:bg-white/50">
            <RiTruckLine className="text-lg" />
            Delivery
          </div>
        </label>
        <label className="flex-1 sm:flex-none cursor-pointer relative">
          <input
            checked={formData?.deliveryMethod === "pickup"}
            onChange={() => handleChange("deliveryMethod", "pickup")}
            className="peer sr-only"
            name="delivery_mode"
            type="radio"
          />
          <div className="px-6 py-3 rounded-lg text-sm font-bold text-[#3E2723]/70 transition-all peer-checked:bg-white peer-checked:text-[#3E2723] peer-checked:shadow-md flex items-center justify-center gap-2 hover:bg-white/50">
            <FaStore className="text-lg" />
            Pickup
          </div>
        </label>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            Delivery Date
          </label>
          <input
            className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium cursor-pointer"
            type="date"
            value={formData?.deliveryDate || ""}
            onChange={(e) => handleChange("deliveryDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <Clock className="w-3 h-3" />
            Time Slot
          </label>
          <div className="relative">
            <select
              className="w-full h-12 sm:h-14 px-4 pr-10 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium appearance-none cursor-pointer"
              value={formData?.timeSlot || ""}
              onChange={(e) => handleChange("timeSlot", e.target.value)}
            >
              <option value="">Select Time Slot</option>
              <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
              <option value="1:00 PM - 5:00 PM">1:00 PM - 5:00 PM</option>
              <option value="6:00 PM - 9:00 PM">6:00 PM - 9:00 PM</option>
            </select>
            <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]/50 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Address Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <Home className="w-3 h-3" />
            Street Address
          </label>
          <input
            className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
            type="text"
            placeholder="Enter Your Complete Address"
            value={formData?.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            City
          </label>
          <input
            className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
            type="text"
            placeholder="Enter Your City"
            value={formData?.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Zip Code
          </label>
          <input
            className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
            type="text"
            placeholder="Enter ZIP Code"
            value={formData?.zipCode || ""}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Country
          </label>
          <div className="relative">
            <select
              required
              className="w-full h-12 sm:h-14 px-4 pr-10 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723] font-medium appearance-none cursor-pointer"
              value={formData?.country || ""}
              onChange={(e) => handleChange("country", e.target.value)}
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
            <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]/50 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
