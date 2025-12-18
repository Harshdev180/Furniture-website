import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
          Featured Categories
        </h2>
        <Link
          to="/categories"
          className="text-sm font-bold text-[#C9A24D] hover:text-[#3E2723] flex items-center gap-1 transition-colors"
        >
          View All
          <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 bg-white rounded-3xl p-8 relative overflow-hidden group shadow-soft hover:shadow-xl transition-shadow border border-[#C9A24D]/50">
          {/* LEDT CARD */}
          <div className="relative z-10 mb-32 md:mb-0">
            <span className="bg-[#E6D5C3] text-[#3E2723] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
              1500+ Items
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
              Chairs
            </h3>
            <p className="text-sm text-[#2B2B2B]/60 mb-6 max-w-50">
              Comfort meets style in our premium seating collection.
            </p>
            <ul className="text-sm text-[#2B2B2B]/80 space-y-1">
              <li className="hover:text-[#C9A24D] cursor-pointer transition-colors">
                Gaming Chair
              </li>
              <li className="hover:text-[#C9A24D] cursor-pointer transition-colors">
                Lounge Chair
              </li>
              <li className="hover:text-[#C9A24D] cursor-pointer transition-colors">
                Dining Chair
              </li>
              <li className="hover:text-[#C9A24D] cursor-pointer font-bold text-[#C9A24D] mt-2 flex items-center gap-1 group transition">
                Explore More
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] md:w-[70%] h-[70%] md:h-[80%]">
            <img
              alt="Chair"
              className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyFGNMOsU2-2Ud42KCjtAMMOq44h_zhjgqEKWBriTTiauESLzAzxa1JNk-aIPielA0nTsuAd3Wo8uJYxR5lNrn-W0VV_BhnUvq6kLLFLF8BPb7lxbBUCU5luWUf_FJXuTJ9TLTv3SlqadntKxZZRQsoWdEDAigpvqauzlWGCDO0vCsuVo4NnaX4E4-zj-bhbwHjHf0bkoD6naFqOUH_zgiKimBDzS6QWmpO4S0l3tz5pjM_1mFFCv_kkrGExXw4_oHdOZIv0KQDmTR"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-75 group shadow-soft hover:shadow-xl transition-shadow flex items-center border border-[#C9A24D]/50">
            <div className="w-1/2 relative z-10">
              <span className="bg-[#E6D5C3] text-[#3E2723] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                750+ Items
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
                Sofa
              </h3>
              <p className="text-sm text-[#2B2B2B]/60 mb-4">
                Reception Sofa, Sectional Sofa, Armless Sofa
              </p>
              <button className="text-sm font-bold text-[#C9A24D] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                Browse Collection
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img
                alt="Sofa"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9FeUTMced0-A9co76x7LfpULoCRj7VjyVpWiBBJAUcblgwfe9_2-jfSGFBkNHqlLi2aXOrAvUQqqYl1LXd_hNTZHrNChCyyRHRQLCXuMNCVWQx7s5DK99yF5SXlaHZVk9nn4QxdhaB49b47Cqj4XjZcDsbo3Ci6ewJJ2k3AYiY9IWKgOj96r-0R_v5fBAcLFTS62k6xbiQ6Zkgof8YeR0_U8OQcdjgpNP3qteTwa9gj8G8HzzMQxvbNvVzrv2lF_-LW83kPgayZDE"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-62.5 group shadow-soft hover:shadow-xl transition-shadow flex items-center border border-[#C9A24D]/50">
            <div className="w-1/2 relative z-10">
              <span className="bg-[#E6D5C3] text-[#3E2723] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                450+ Items
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
                Bed
              </h3>
              <p className="text-sm text-[#2B2B2B]/60 mb-4">
                Modern Bedroom with Blue Accent Wall
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img
                alt="Lighting"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="https://img.freepik.com/free-photo/modern-bedroom-interior-design-with-blue-accent-wall_23-2151995362.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
