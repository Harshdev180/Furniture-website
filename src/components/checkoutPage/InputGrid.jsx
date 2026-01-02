import React from "react";
import { User, Phone, Mail } from "lucide-react";

const InputGrid = ({ formData, onChange }) => {
  const handleChange = (field, value) => {
    if (onChange) {
      onChange({ ...formData, [field]: value });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
          <User className="w-3 h-3" />
          First Name
        </label>
        <input
          className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
          placeholder="Enter Your First Name"
          type="text"
          value={formData?.firstName || ""}
          onChange={(e) => handleChange("firstName", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
          <User className="w-3 h-3" />
          Last Name
        </label>
        <input
          className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
          placeholder="Enter Your Last Name"
          type="text"
          value={formData?.lastName || ""}
          onChange={(e) => handleChange("lastName", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
          <Phone className="w-3 h-3" />
          Phone Number
        </label>
        <div className="relative">
          <input
            className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
            placeholder="+91 12345 67890"
            type="tel"
            value={formData?.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3E2723]/70 ml-1 flex items-center gap-2">
          <Mail className="w-3 h-3" />
          Email Address
        </label>
        <input
          className="w-full h-12 sm:h-14 px-4 rounded-xl border-2 border-[#E6D5C3] bg-white focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all placeholder:text-gray-400 text-[#3E2723] font-medium"
          placeholder="your.email@example.com"
          type="email"
          value={formData?.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default InputGrid;
