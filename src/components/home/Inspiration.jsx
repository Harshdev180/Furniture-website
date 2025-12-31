import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import WishlistButton from "../WishlistButton";

const Inspiration = () => {
  // Product data for wishlist functionality
  const bedProduct = {
    id: 'bed-template',
    name: 'Bed',
    price: 5400,
    image: 'https://img.freepik.com/premium-photo/bed-with-white-headboard-brown-gray-comforter_520665-30664.jpg',
    description: 'A bed with a white headboard and a brown and gray comforter'
  };

  const sofaProduct = {
    id: 'sofa-template',
    name: 'Modern Sofa',
    price: 6100,
    image: 'https://img.freepik.com/free-photo/modern-fashionable-red-leather-couch-with-cushions-cropped-christmas-tree-brick-wall-loft-design_132075-11381.jpg',
    description: 'Modern fashionable red leather couch with cushions'
  };

  return (
    <section>
      <div className="mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#C9A24D] font-bold tracking-wider text-sm uppercase">
              Inspiration
            </span>

            <h2 className="mt-2 text-2xl sm:text-4xl font-serif font-bold text-[#3E2723]">
              Furniture Templates
            </h2>

            <p className="mt-2 text-[#2B2B2B]/70 max-w-xl">
              Explore featured furniture templates with pre-selected furniture sets.
            </p>
          </div>

          <Link
            to="/template"
            className="self-start sm:self-auto text-sm font-bold text-[#C9A24D] flex items-center gap-2 hover:text-[#3E2723] transition"
          >
            See all Templates
            <FaArrowRightLong />
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <Link to="/template/bed" className="group">
            <div className="rounded-2xl overflow-hidden aspect-video mb-5 relative shadow-soft border border-[#E6D5C3]/30">
              <img
                src="https://img.freepik.com/premium-photo/bed-with-white-headboard-brown-gray-comforter_520665-30664.jpg"
                alt="Bed with white headboard and brown-gray comforter"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

              <div className="absolute top-4 right-4 z-10">
                <WishlistButton 
                  product={bedProduct} 
                  className="bg-white hover:bg-[#C9A24D] rounded-full p-2 shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition">
                  Bed
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                  A bed with a white headboard and a brown and gray comforter
                </p>
              </div>
              <div className="text-lg font-bold text-[#C9A24D]">
                ₹5,400
              </div>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link to="/template/sofa" className="group">
            <div className="rounded-2xl overflow-hidden aspect-video mb-5 relative shadow-soft border border-[#E6D5C3]/30">
              <img
                src="https://img.freepik.com/free-photo/modern-fashionable-red-leather-couch-with-cushions-cropped-christmas-tree-brick-wall-loft-design_132075-11381.jpg"
                alt="Modern red leather sofa in loft-style living room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

              <div className="absolute top-4 right-4 z-10">
                <WishlistButton 
                  product={sofaProduct} 
                  className="bg-white hover:bg-[#C9A24D] rounded-full p-2 shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] group-hover:text-[#C9A24D] transition">
                  Modern Sofa
                </h3>
                <p className="text-sm text-[#2B2B2B]/60 mt-1">
                  Modern fashionable red leather couch with cushions
                </p>
              </div>
              <div className="text-lg font-bold text-[#C9A24D]">
                ₹6,100
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Inspiration;
