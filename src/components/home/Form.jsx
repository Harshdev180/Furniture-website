import React from "react";
import { IoMdSend } from "react-icons/io";

const Form = () => {
  return (
    <div className="md:grid lg:grid-cols-2 bg-white md:mx-auto rounded-4xl max-h-[40rem] overflow-hidden border border-[#3E2723]/20 shadow-xl shadow-[#3E2723]/80">
      <img
        src="https://img.freepik.com/free-photo/handsome-carpenter-working-with-wood_1157-26131.jpg"
        alt="carpenter img"
        className="hidden lg:block w-full h-full object-cover"
      />

      <div className="relative flex bg-[#3E2723]">
        <div className="w-full rounded-xl px-5 sm:px-15 py-10">
          {/* HEADING */}
          <div className="mb-5">
            <span className="text-[#C9A24D] text-sm font-bold">
              CUSTOMIZATION
            </span>
            <h3 className="font-serif text-white text-3xl font-bold">
              Design it Your Way
            </h3>
            <p className="text-[#E6D5C3]/40">
              Fill out the form below to connect with our design team via Google
              Sheets.
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full bg-white/2 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full bg-white/2 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold uppercase text-[#E6D5C3]/80">
                Project Type
              </label>
              <select class="rounded-lg bg-white/2 border border-white/20 focus:border-[#C9A24D] focus:ring-[#C9A24D] text-white [&>option]:text-[#2B2B2B] px-2 py-2">
                <option>Custom Sofa</option>
                <option>Dining Table</option>
                <option>Full Room Design</option>
                <option>Wardrobe Unit</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                required
                className="w-full bg-white/2 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition resize-none"
              ></textarea>
            </div>

            <button
              class="mt-4 w-full bg-[#C9A24D] text-[#3E2723] font-bold py-4 rounded-lg hover:bg-white hover:text-[#3E2723] transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              type="button"
            >
              <span>Send Request</span>
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
