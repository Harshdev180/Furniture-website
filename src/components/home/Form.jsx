import React from "react";
import { IoMdSend } from "react-icons/io";

const Form = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-[#3E2723]/20 shadow-xl">

      {/* LEFT IMAGE */}
      <img
        src="https://img.freepik.com/free-photo/handsome-carpenter-working-with-wood_1157-26131.jpg"
        alt="Carpenter"
        className="hidden lg:block w-full h-full object-cover"
      />

      {/* RIGHT FORM */}
      <div className="flex bg-[#3E2723]">
        <div className="w-full px-6 sm:px-10 py-10">

          {/* HEADING */}
          <div className="mb-6">
            <span className="text-[#C9A24D] text-sm font-bold tracking-wide">
              CUSTOMIZATION
            </span>
            <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold mt-1">
              Design it Your Way
            </h3>
            <p className="text-[#E6D5C3]/60 text-sm mt-2">
              Fill out the form to connect with our design team.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5">

            {/* NAME & EMAIL */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A24D]"
                />
              </div>

              <div className="w-full">
                <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A24D]"
                />
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase text-[#E6D5C3]/80">
                Project Type
              </label>
              <select className="rounded-lg bg-white/10 border border-white/20 px-3 py-3 text-white focus:outline-none focus:border-[#C9A24D] [&>option]:text-[#2B2B2B]">
                <option>Custom Sofa</option>
                <option>Dining Table</option>
                <option>Full Room Design</option>
                <option>Wardrobe Unit</option>
                <option>Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-[#E6D5C3]/80 text-xs font-bold mb-2 uppercase">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A24D] resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-[#C9A24D] text-[#3E2723] font-bold py-4 rounded-lg hover:bg-white transition flex items-center justify-center gap-2 shadow-lg"
            >
              Send Request
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
