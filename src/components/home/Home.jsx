import React, { useState, useEffect } from "react";
import { card } from "../../assests/assests";
import { FaMicrophone, FaArrowRight, FaRegStar } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import FeaturedCategories from "./FeaturedCategories";
import TrendingNow from "./TrendingNow";
import Testimonial from "./Testimonial";
import Form from "./Form";
import Inspiration from "./Inspiration";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === card.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [card.length]);

  const currentCard = card[currentIndex];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#FAF7F2] hero-pattern">
        <div className="grid lg:grid-cols-2 gap-10 px-4 sm:px-10 lg:px-20 pt-24 pb-12">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C9A24D] bg-white px-4 py-2 rounded-2xl">
              <FaMicrophone className="text-[#C9A24D]" />
              <span className="text-sm">The Best Online Furniture Store</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-black leading-tight text-[#3E2723]">
              Explore Our <br />
              <span className="text-[#C9A24D] italic">Modern</span> <br />
              Furniture Collection
            </h1>

            <p className="mt-4 text-black/50 max-w-xl">
              Premium craftsmanship meets contemporary design. Discover pieces
              that transform your house into a home.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/categories">
                <button className="bg-[#C9A24D] px-8 py-3 text-white rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition">
                  Shop Now
                  <FaArrowRight />
                </button>
              </Link>

              <Link to="/catalogue">
                <button className="px-8 py-3 border border-[#C9A24D] rounded-full hover:bg-[#C9A24D] hover:text-white transition">
                  View All Products
                </button>
              </Link>
            </div>

            {/* RATING */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  "https://randomuser.me/api/portraits/men/75.jpg",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="user"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center text-[#C9A24D]">
                  <FaRegStar />
                  <span className="ml-2 font-medium">4.9 Ratings+</span>
                </div>
                <p className="text-sm text-black/50">
                  Trusted by 50k+ Customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center items-center">
            <img
              src={currentCard.image}
              alt="Furniture"
              className="w-full max-w-lg h-[420px] sm:h-[500px] object-cover rounded-xl transition-all duration-700"
            />
          </div>
        </div>

        {/* FEATURES BAR */}
        <div className="bg-[#E6D5C3] border-y border-[#C9A24D]/30 px-4 sm:px-10 lg:px-20 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FiTruck />, title: "Free Shipping", text: "Orders above ₹180" },
              { icon: <LuWallet />, title: "Flexible Payment", text: "Secure options" },
              { icon: <RiCustomerService2Fill />, title: "24x7 Support", text: "Always available" },
              { icon: <MdOutlineVerifiedUser />, title: "Secure Payment", text: "100% protection" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-4 bg-white border rounded-full border-[#C9A24D]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#3E2723]">{item.title}</h4>
                  <p className="text-xs text-black/50">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section className="bg-[#FAF7F2] px-4 sm:px-20 py-16">
        <FeaturedCategories />
      </section>

      <section className="px-4 sm:px-20 py-16">
        <TrendingNow />
      </section>

      <section className="bg-[#FAF7F2] px-4 sm:px-20 py-16">
        <Form />
      </section>

      <section className="px-4 sm:px-20 py-16">
        <Inspiration />
      </section>

      <section className="bg-[#E6D5C3]/20 px-4 sm:px-20 py-16">
        <Testimonial />
      </section>
    </>
  );
};

export default Home;
