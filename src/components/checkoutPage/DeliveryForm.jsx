import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const DeliveryForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex p-1.5 bg-[#E6D5C3]/30 rounded-xl w-full sm:w-fit">
        <label className="flex-1 sm:flex-none cursor-pointer relative">
          <input
            defaultChecked
            className="peer sr-only"
            name="delivery_mode"
            type="radio"
          />
          <div className="px-6 py-2.5 rounded-lg text-sm font-bold text-[#3E2723]/50 transition-all peer-checked:bg-white peer-checked:text-[#3E2723] peer-checked:shadow-sm flex items-center justify-center gap-2">
            <RiTruckLine className="text-lg" />
            Delivery
          </div>
        </label>
        <label className="flex-1 sm:flex-none cursor-pointer relative">
          <input className="peer sr-only" name="delivery_mode" type="radio" />
          <div className="px-6 py-2.5 rounded-lg text-sm font-bold text-[#3E2723]/50 transition-all peer-checked:bg-white peer-checked:text-[#3E2723] peer-checked:shadow-sm flex items-center justify-center gap-2">
            <FaStore className="text-lg" />
            Pickup
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            Delivery Date
          </label>
          <input
            className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
            type="date"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            Time Slot
          </label>
          <div className="relative">
            <select className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main appearance-none cursor-pointer">
              <option>9:00 AM - 12:00 PM</option>
              <option>1:00 PM - 5:00 PM</option>
              <option>6:00 PM - 9:00 PM</option>
            </select>
            <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]/50 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            Street Address
          </label>
          <input
            className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
            type="text"
            placeholder="Enter Your Address"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            City
          </label>
          <input
            className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
            type="text"
            placeholder="Enter Your City"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            Zip Code
          </label>
          <input
            className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
            type="text"
            placeholder="Enter ZIP Code"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
            Country
          </label>
          <div className="relative">
            <select
              required
              defaultValue=""
              className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all text-[#3E2723]/50-main appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="US">United States</option>
              <option value="IN">India</option>
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
