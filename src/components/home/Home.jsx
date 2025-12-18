import React, { useState, useEffect } from "react";
import { card } from "../../assests/assests";
import { FaMicrophone, FaArrowRight, FaRegStar } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import FeaturedCategories from "./FeaturedCategories";
import { Link} from 'react-router-dom'
import TrendingNow from "./TrendingNow";
import Testimonial from "./Testimonial";
import Form from "./Form";
import Inspiration from "./Inspiration";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? card.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === card.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === card.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const currentCard = card[currentIndex];

  return (
    <>
      <div className="bg-[#FAF7F2] hero-pattern">
        <div className="grid lg:grid-cols-2 sm:px-20 pt-28 pb-15 px-8">
          {/* LEFT SIDE */}
          <div className="mb-5">
            <div className="flex">
              <div className="border border-[#C9A24D] rounded-2xl px-4 py-2 bg-white flex items-center gap-2">
                <FaMicrophone className="text-[#C9A24D]" />
                <span className="text-sm">The Best online Furniture Store</span>
              </div>
            </div>

            <div className="mt-5 mb-5">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-serif font-black leading-[1.1] text-[#3E2723] mb-5 font-bolder">
                Explore Our <br />{" "}
                <span className="text-[#C9A24D] italic">Modern</span> <br />{" "}
                Furniture <br /> Collection
              </h1>
              <p className="text-black/40 leading-relaxed sm:text-lg text-sm sm:pr-40">
                Premium craftsmanship meets contemporary design. Discover pieces
                that transform your house into a home.
              </p>
            </div>

            {/* BUTTONS OF LEFT SIDE */}
            <div className="flex gap-4 homeBtn mb-20">
              <Link to="/shop">
                <button className="bg-[#3E2723] px-10 py-3 text-white rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.35),0_4px_12px_#3E2723] hover:shadow-[0_12px_20px_rgba(0,0,0,0.45),0_6px_18px_#3E2723] transition group cursor-pointer place-content-center">
                  Shop Now
                  <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </Link>

              <Link to="/categories">
                <button className="px-10 py-3 border border-[#3E2723] text-[#3E2723] rounded-full cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.35),0_4px_12px_#FAF7F2] hover:shadow-[0_12px_20px_rgba(0,0,0,0.45),0_6px_18px_#FAF7F2] transition duration-300 hover:bg-[#3E2723] hover:text-white">
                  View All Products
                </button>
              </Link>
            </div>

            {/* RATING */}
            <div className="flex items-center sm:flex-row flex-col">
              <div className="flex -space-x-3 pr-1">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="image"
                  className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="image"
                  className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="image"
                  className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="image"
                  className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"
                />
              </div>
              <div className="pl-3">
                <div className="flex items-center text-[#C9A24D]">
                  <FaRegStar />
                  <p className="font-medium ml-2">4.9 Ratings+</p>
                </div>
                <p className="text-sm text-black/40">
                  Trusted by 50k+ Customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center mb-5">
            <div className="relative">
              {/* Image */}
              <img
                src={currentCard.image}
                alt="Card"
                className="rounded-xl w-full h-100 object-cover transition-opacity duration-700"
              />

              {/* Left Button */}
              {/* <button
                onClick={handlePrev}
                className="absolute -left-5 top-1/2 -translate-y-1/2 
                bg-[#3E2723] text-[#C9A24D] p-2 rounded-full
                hover:bg-(--accent) hover:text-[#3E2723] transition-all cursor-pointer duration-300"
              >
                <MdKeyboardArrowLeft className="text-3xl" />
              </button> */}

              {/* Right Button */}
              {/* <button
                onClick={handleNext}
                className="absolute -right-5 top-1/2 -translate-y-1/2 
                bg-[#3E2723] text-[#C9A24D] p-2 rounded-full
                hover:bg-(--accent) hover:text-[#3E2723] transition-all cursor-pointer duration-300"
              >
                <MdKeyboardArrowRight className="text-3xl" />
              </button> */}
            </div>
          </div>
        </div>

        <div className="bg-[#E6D5C3] border-y border-[#C9A24D]/30 px-8 sm:px-20 py-5">
          <div className="grid grid-cols-4 gap-2 optionsHome">
            <div className="flex items-center gap-2">
              <div className="p-4 border rounded-full border-[#C9A24D] bg-white">
                <FiTruck />
              </div>
              <div>
                <h4 className=" text-[#3E2723] font-bold">Free Shippings</h4>
                <p className="text-black/50 text-xs">For orders above $180</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-4 border rounded-full border-[#C9A24D] bg-white">
                <LuWallet />
              </div>
              <div>
                <h4 className=" text-[#3E2723] font-bold">Flexible Payment</h4>
                <p className="text-black/50 text-xs">Multiple secure options</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-4 border rounded-full border-[#C9A24D] bg-white">
                <RiCustomerService2Fill />
              </div>
              <div>
                <h4 className="text-[#3E2723] font-bold">24x7 Supports</h4>
                <p className="text-black/50 text-xs">We support online all days</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-4 border rounded-full border-[#C9A24D] bg-white">
                <MdOutlineVerifiedUser />
              </div>
              <div>
                <h4 className=" text-[#3E2723] font-bold">Secure Payment</h4>
                <p className="text-black/50 text-xs">100% Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <div className="bg-[#FAF7F2] sm:px-20 py-15 px-8">
        <FeaturedCategories />
      </div>
      
      {/* TRENDING NOW */}
      <div className="sm:px-20 py-15 px-8">
        <TrendingNow />
      </div>

      {/* CUSTOMIZATION FORM */}
      <div className="bg-[#FAF7F2] sm:px-20 py-15 px-8">
        <Form />
      </div>

      {/* INSPIRATION */}
      <div className="sm:px-20 py-15 px-8">
        <Inspiration />
      </div>

      {/* TESTIMONIALS */}
      <div className="sm:px-20 py-15 px-8 bg-[#E6D5C3]/20">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
