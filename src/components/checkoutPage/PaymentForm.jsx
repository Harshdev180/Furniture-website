import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PaymentForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        <label className="flex-1 min-w-[140px] cursor-pointer group">
          <input
            defaultchecked
            className="custom-radio sr-only"
            name="payment_method"
            type="radio"
          />
          <div className="h-24 flex flex-col items-center justify-center rounded-xl border border-[#3E2723]/30 bg-white transition-all duration-200 relative hover:border-[#3E2723]/50 hover:shadow-sm">
            <div className="check-mark absolute top-2 right-2 text-[#3E2723] opacity-0 transition-all scale-75">
              <FaRegCheckCircle className="text-lg font-bold" />
            </div>
            <span className="font-serif italic font-bold text-2xl text-[#1A1F71]">
              VISA
            </span>
            <span className="text-[10px] font-bold text-text-[#E6D5C3] mt-1 tracking-widest">
              CREDIT CARD
            </span>
          </div>
        </label>

        <label className="flex-1 min-w-[140px] cursor-pointer group">
          <input
            className="custom-radio sr-only"
            name="payment_method"
            type="radio"
          />
          <div className="h-24 flex flex-col items-center justify-center rounded-xl border border-[#3E2723]/30 bg-white transition-all duration-200 relative hover:border-[#3E2723]/50 hover:shadow-sm">
            <div className="check-mark absolute top-2 right-2 text-[#3E2723] opacity-0 transition-all scale-75">
              <FaRegCheckCircle className="text-lg font-bold" />
            </div>
            <span className="flex items-center gap-1 font-bold text-lg text-black">
              <span className="material-symbols-outlined">ios</span> Pay
            </span>
          </div>
        </label>

        <label className="flex-1 min-w-[140px] cursor-pointer group">
          <input
            className="custom-radio sr-only"
            name="payment_method"
            type="radio"
          />
          <div className="h-24 flex flex-col items-center justify-center rounded-xl border border-[#3E2723]/30 bg-white transition-all duration-200 relative hover:border-[#3E2723]/50 hover:shadow-sm">
            <div className="check-mark absolute top-2 right-2 text-[#3E2723] opacity-0 transition-all scale-75">
              <FaRegCheckCircle className="text-lg font-bold" />
            </div>
            <span className="font-bold text-lg text-[#003087] italic">PayPal</span>
          </div>
        </label>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#3E2723]/30 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-text-[#E6D5C3] ml-1">
              Card Number
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 pr-12 rounded-xl border border-[#3E2723]/30 bg-background-light focus:border-[#3E2723] focus:ring-1 focus:ring-primary outline-none transition-all text-text-main font-medium"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-[#E6D5C3]">
                credit_card
              </span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-text-[#E6D5C3] ml-1">
              Expiration Date
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-background-light focus:border-[#3E2723] focus:ring-1 focus:ring-primary outline-none transition-all text-text-main font-medium"
              placeholder="MM/YY"
              type="text"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-text-[#E6D5C3] ml-1">
              CVV
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-xl border border-[#3E2723]/30 bg-background-light focus:border-[#3E2723] focus:ring-1 focus:ring-primary outline-none transition-all text-text-main font-medium"
                placeholder="123"
                type="text"
              />
              <span
                className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-[#E6D5C3] text-lg cursor-help"
                title="3 digits on back of card"
              >
                help
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
