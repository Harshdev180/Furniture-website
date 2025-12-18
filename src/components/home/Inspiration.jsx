import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";

const Inspiration = () => {
  return (
    <section>
      <div className="mx-auto">
        {/* HEADING */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#C9A24D] font-bold tracking-wider text-sm uppercase">
              Inspiration
            </span>
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#3E2723] mt-2">
              Interior Design Templates
            </h2>
            <p className="text-[#2B2B2B]/70">
              Browse our pre-configured room setups designed by top interior
              experts.
            </p>
          </div>
          <Link to="/categories" className="hidden md:flex items-center gap-2 font-bold text-[#C9A24D] hover:text-[#3E2723] transition-colors">
            See all Templates
            <FaArrowRightLong />
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden aspect-video mb-6 relative shadow-soft border border-[#E6D5C3]/20">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Scandinavian living room template light grey"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA51N9ZBg6rJ9wFO6f9jeGSxS8qgax3CxQq_vyBQpZsXOoR31loiuAHBSPi0hDHcNg-VRHZnB7JdFlZV3IunTCvOc6Qoys7C0UPJXW2PBKdMaOtoj3FPJ4tjtFzLvCGkOhn6aRT-qzbJuEC7cQwf5OsvB-IuRHH2oovommdtx_nQm0vDy9HgoHxlapyr31cTEi0DquEATLwyIqfq1i_k4lt84W4fW-r_4Vt8vLU7qu7uEwEYD3uXJpQQ5hdSuffhK-ilB60GVUZQEBg"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <button className="absolute top-4 right-4 bg-white size-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#C9A24D] hover:text-white transition-colors text-[#3E2723]">
                <LuHeart />
              </button>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition-colors">
                  Nordic Serenity
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                  Includes: Sofa, Coffee Table, Rug, Floor Lamp
                </p>
              </div>
              <div className="text-lg font-bold text-[#C9A24D]">₹5,400</div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden aspect-video mb-6 relative shadow-soft border border-[#E6D5C3]/20">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Modern dark industrial living room"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB65deF0NWq-SekokENWURad98cOsyhO3uLspOOkgyflHxnwQU9XgSi1MZve_6td9fVm7m1esIbwD_az97LlLZIdisR01ywM79JulK0UJbPTDKPq63MDGRdj4GPoviKdvR36eyJ-OAAL_cB9jOr_-BM1spCqq0SjrZEX5NS60C6_KkTgKGqJ75lv-JO90lSWhqet0RPNcluyNDrWtS6SfsAdR0tRsZpc8rKOddevJuedrMAgxNBQ5ICvh1TIIikmOPD_1uMbAmlROPO"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <button className="absolute top-4 right-4 bg-white size-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#C9A24D] hover:text-white transition-colors text-[#3E2723]">
                <LuHeart />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition-colors">
                  Urban Loft
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                  Includes: Leather Sofa, Metal Shelving, Accent Chair
                </p>
              </div>
              <div className="text-lg font-bold text-[#C9A24D]">₹6,100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
