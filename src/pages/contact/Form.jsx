import React from "react";
import { MdMarkEmailUnread, MdOutlineCall, MdOutlineMail, MdLocationPin } from "react-icons/md";
import {Link} from 'react-router-dom'

const Form = () => {
  return (
    <div className=" mx-auto mb-20">
      {/* Main card container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-[50px] relative z-10 mb-20">
        {/* Left side - contact form */}
        <div className="lg:col-span-8 not-last:p-8 border border-[#3E2723]/30 rounded-3xl bg-white shadow-xl shadow-[#3E2723]/50">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full bg-[#FAF7F2] border border-[#3E2723]/20 rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/80 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Mail"
                  required
                  className="w-full bg-[#FAF7F2] border border-[#3E2723]/20 rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/80 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 1235875452"
                required
                className="w-full bg-[#FAF7F2] border border-[#3E2723]/20 rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/80 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition"
              />
            </div>

            <div>
              <label className="block text-[#2B2B2B]/90 text-sm font-bold mb-2 uppercase">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                required
                className="w-full bg-[#FAF7F2] border border-[#3E2723]/20 rounded-lg px-4 py-3 text-[#2B2B2B]/80 placeholder:text-[#2B2B2B]/80 placeholder:text-sm focus:outline-none focus:border-[#C9A24D] transition resize-none"
              ></textarea>
            </div>

            <button
              class="mt-4 w-full bg-[#3E2723] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#3E2723]/50 hover:shadow-[#3E2723]/80 transform flex items-center justify-center gap-2 cursor-pointer font-serif"
              type="submit"
            >
              <span className="text-lg">Send Request</span>
            </button>
          </form>
        </div>

        {/* Right Side Newsletter */}
        <div class="lg:col-span-4 flex flex-col">
          <div class="bg-[#FAF7F2] border-[#3E2723]/30 p-8 rounded-3xl border h-full flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-xl shadow-[#3E2723]/50">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/40 dark:bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div class="relative z-10 flex flex-col gap-4 items-center">
              <div class="bg-white p-3 rounded-full shadow-xl text-[#C9A24D] mb-2 border border-[#3E2723]/20">
                <MdMarkEmailUnread className="text-4xl" />
              </div>
              <h3 class="text-2xl font-serif font-bold text-[#3E2723] dark:text-surface-light">
                Our Newsletter
              </h3>
              <p class="text-sm text-[#2B2B2B]/50 dark:text-text-secondary-dark mb-4">
                Subscribe to our weekly newsletter to get the latest interior
                design trends and exclusive offers.
              </p>

              <form
                class="w-full flex flex-col gap-3"
                onsubmit="event.preventDefault();"
              >
                <input
                  class="w-full border border-[#3E2723]/20 rounded-lg bg-white text-center h-12 px-4 text-sm text-[#2B2B2B]/90 placeholder:text-[#2B2B2B]/80 focus:bg-white focus:outline-none focus:border-[#C9A24D] transition-all"
                  placeholder="Enter your Email"
                  required
                  type="email"
                />
                <button class="w-full bg-[#C9A24D] hover:bg-[#C9A24D]/90 text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-md cursor-pointer" type="submit">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="tel:+917378021327" className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div class="size-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdOutlineCall className="text-2xl" />
          </div>
          <div>
            <p class="font-bold text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Call Us
            </p>
            <p class="text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] dark:group-hover:text-[#C9A24D] transition-colors">
              +91 7378021327
            </p>
          </div>
        </Link>
        <Link to="mailto:official@graphura.in" className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div class="size-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdOutlineMail className="text-2xl" />
          </div>
          <div>
            <p class="font-bold text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Email Us
            </p>
            <p class="text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] dark:group-hover:text-[#C9A24D] transition-colors">
              official@graphura.in
            </p>
          </div>
        </Link>
        <Link to="https://maps.app.goo.gl/E9kYa6hi8wj5eA8z6"  target="_blank" className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#3E2723]/30 flex items-center gap-5 hover:border-[#C9A24D]/50 hover:shadow-md transition-all group shadow-md shadow-[#3E2723]/50">
          <div class="size-14 rounded-full bg-[#E6D5C3]/20 flex items-center justify-center text-[#3E2723] group-hover:bg-[#3E2723] group-hover:text-white transition-colors duration-300 shrink-0">
            <MdLocationPin className="text-2xl" />
          </div>
          <div>
            <p class="font-bold text-sm text-[#C9A24D] uppercase tracking-wider mb-1">
              Office
            </p>
            <p class="text-md text-[#2B2B2B]/80 group-hover:text-[#3E2723] dark:group-hover:text-[#C9A24D] transition-colors">
              near RSF, Pataudi, Gurgaon, Haryana 122503
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Form;
