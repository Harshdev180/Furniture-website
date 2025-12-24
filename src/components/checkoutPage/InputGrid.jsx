import React from "react";

const InputGrid = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="space-y-1.5">
        <label class="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
          First Name
        </label>
        <input
          class="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
          placeholder="Enter Your Name"
          type="text"
        />
      </div>
      <div class="space-y-1.5">
        <label class="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
          Last Name
        </label>
        <input
          class="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
          placeholder="Enter Your Last Name"
          type="text"
        />
      </div>
      <div class="space-y-1.5">
        <label class="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
          Phone Number
        </label>
        <div class="relative">
          {/* <div class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-200 pr-3 h-5">
            <span>🇺🇸</span>
            <span class="text-sm font-medium">+1</span>
          </div> */}
          <input
            class="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
            placeholder="+91 1235875452"
            type="tel"
          />
        </div>
      </div>
      <div class="space-y-1.5">
        <label class="text-xs font-bold uppercase tracking-wider text-[#3E2723]/50 ml-1">
          Email Address
        </label>
        <input
          class="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-white focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] outline-none transition-all placeholder:text-gray-400 text-[#3E2723]/50-main"
          placeholder="Enter Your Email"
          type="email"
        />
      </div>
    </div>
  );
};

export default InputGrid;
