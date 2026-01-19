import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Picture from "../../utils/Picture";

const FeaturedCategories = () => {
  return (
    <section>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
          Featured Categories
        </h2>
        <Link
          to="/categories"
          className="text-sm font-bold text-[#C9A24D] hover:text-[#3E2723] flex items-center gap-1 transition"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT LARGE CARD */}
        <div className="lg:col-span-5 bg-[#E6D5C3]/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden group border border-[#C9A24D]/40 hover:shadow-xl transition">
          <div className="relative z-10 max-w-sm">
            <span className="inline-block bg-[#C9A24D] text-[#3E2723] text-xs font-bold px-3 py-1 rounded mb-3">
              1500+ Items
            </span>

            <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
              Chairs
            </h3>

            <p className="text-sm text-[#2B2B2B]/60 mb-6">
              Comfort meets style in our premium seating collection.
            </p>

            <ul className="space-y-2 text-sm text-[#2B2B2B]/80">
              <li>Gaming Chair</li>
              <li>Lounge Chair</li>
              <li>Dining Chair</li>

              <li>
                <Link
                  to="/category/studychair"
                  className="font-bold text-[#C9A24D] flex items-center gap-1 group pb-4"
                >
                  Explore More
                  <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Picture
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyFGNMOsU2-2Ud42KCjtAMMOq44h_zhjgqEKWBriTTiauESLzAzxa1JNk-aIPielA0nTsuAd3Wo8uJYxR5lNrn-W0VV_BhnUvq6kLLFLF8BPb7lxbBUCU5luWUf_FJXuTJ9TLTv3SlqadntKxZZRQsoWdEDAigpvqauzlWGCDO0vCsuVo4NnaX4E4-zj-bhbwHjHf0bkoD6naFqOUH_zgiKimBDzS6QWmpO4S0l3tz5pjM_1mFFCv_kkrGExXw4_oHdOZIv0KQDmTR"
              alt="Furniture"
              className="w-full h-[320px] sm:h-[320px] object-cover rounded-xl transition-all duration-700"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* SOFA */}
          <div className="bg-[#E6D5C3]/40 rounded-3xl p-6 sm:p-8 border border-[#C9A24D]/40 hover:shadow-xl transition flex flex-col md:flex-row md:items-center items-left overflow-hidden group">
            <div className="md:w-3/5 z-10">
              <span className="inline-block bg-[#C9A24D] text-xs font-bold px-3 py-1 rounded mb-3">
                750+ Items
              </span>

              <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
                Sofa
              </h3>

              <p className="text-sm text-[#2B2B2B]/60 mb-4">
                Reception, Sectional, Armless Sofas
              </p>

              <Link
                to="/category/sofa"
                className="text-sm font-bold text-[#C9A24D] flex items-center gap-1 group"
              >
                Browse Collection
                <FaArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <Picture
              src="/Catelogimg/TheOsloTablerr.webp"
              alt="Sofa"
              className="mt-6 md:mt-0 h-[240px] object-cover rounded-xl transition-transform group-hover:scale-105"
            />
          </div>

          {/* BED */}
          <div className="bg-[#E6D5C3]/40 rounded-3xl p-6 sm:p-8 border border-[#C9A24D]/40 hover:shadow-xl transition flex flex-col md:flex-row items-left overflow-hidden group">
            <div className="md:w-3/5 z-10">
              <span className="inline-block bg-[#C9A24D] text-xs font-bold px-3 py-1 rounded mb-3">
                450+ Items
              </span>

              <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2">
                Bed
              </h3>

              <p className="text-sm text-[#2B2B2B]/60 mb-4">
                Modern bedroom collections
              </p>

              <Link
                to="/category/bed"
                className="text-sm font-bold text-[#C9A24D] flex items-center gap-1 group"
              >
                Browse Collection
                <FaArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <Picture
              src="https://img.freepik.com/free-photo/modern-bedroom-interior-design-with-blue-accent-wall_23-2151995362.jpg"
              alt="Bed"
              className="mt-6 md:mt-0 h-[240px] object-cover rounded-xl transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
