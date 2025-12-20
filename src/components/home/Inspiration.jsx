import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";

const Inspiration = () => {
  return (
    <section>
      <div className="mx-auto">
        {/* HEADING */}
        <div className="block sm:flex justify-between items-end mb-12">
          <div>
            <span className="text-[#C9A24D] font-bold tracking-wider text-sm uppercase">
              Inspiration
            </span>
            <div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 text-[#3E2723] mt-2">
              Furniture Templates
            </h2>
            </div>
            
            <p className="text-[#2B2B2B]/70 mb-2 sm:mb-0">
             Explore featured furniture templates with pre-selected furniture sets.
            </p>
          </div>
          <Link to="/categories" className="text-sm flex items-center gap-2 font-bold text-[#C9A24D] hover:text-[#3E2723] transition-colors">
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
                src="https://img.freepik.com/premium-photo/bed-with-white-headboard-brown-gray-comforter_520665-30664.jpg"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <button className="absolute top-4 right-4 bg-white size-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#C9A24D] hover:text-white transition-colors text-[#3E2723]">
                <LuHeart />
              </button>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition-colors">
                  Bed
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                  A bed with a white headboard and a brown and gray comforter
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
                src="https://img.freepik.com/free-photo/modern-fashionable-red-leather-couch-with-cushions-cropped-christmas-tree-brick-wall-loft-design_132075-11381.jpg"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <button className="absolute top-4 right-4 bg-white size-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#C9A24D] hover:text-white transition-colors text-[#3E2723]">
                <LuHeart />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition-colors">
                  Modern Sofa
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                 Modern fashionable red leather couch with cushions
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
