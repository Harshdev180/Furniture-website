import React, { useState } from "react";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assests/images/logo White.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>

    `block px-4 py-3 font-medium transition ${isActive
      ? "text-[#C9A24D]"
      : "hover:text-[#C9A24D]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#3E2723] text-[#E6D5C3] px-8 sm:px-20 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <img src={logo} alt="Logo" className="w-40" />

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>

            <li><NavLink to="/catalogue" className={navLinkClass}>Catalogue</NavLink></li>
            <li><NavLink to="/categories" className={navLinkClass}>Categories</NavLink></li>
            <li><NavLink to="/template" className={navLinkClass}>Templates</NavLink></li>
            <li><NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink></li>

            <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          </ul >

          {/* ICONS */}

          <div className="flex items-center gap-4">
            <FaRegHeart className="hidden sm:block text-[20px] cursor-pointer hover:text-[#C9A24D]" />
            <FaRegUser className="hidden sm:block text-[20px] cursor-pointer hover:text-[#C9A24D]" />
            <FaShoppingCart className="text-[20px] cursor-pointer hover:text-[#C9A24D]" />

            {/* MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              aria-label="Toggle Menu"
            >
              <IoMenu className="text-[22px]" />
            </button>
          </div >
        </div >
      </nav >

      {/* SPACE FOR FIXED NAVBAR */}
      < div className="h-[80px]" />

      {/* OVERLAY */}
      {
        open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )
      }

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#3E2723] z-50 transform transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white">Menu</h3>
          <button onClick={() => setOpen(false)}>
            <HiOutlineX className="text-2xl text-white hover:text-[#C9A24D]" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="mt-4">
          <li><NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/catalogue" onClick={() => setOpen(false)} className={navLinkClass}>Catalogue</NavLink></li>
          <li><NavLink to="/categories" onClick={() => setOpen(false)} className={navLinkClass}>Categories</NavLink></li>
          <li><NavLink to="/template" onClick={() => setOpen(false)} className={navLinkClass}>Templates</NavLink></li>
          <li><NavLink to="/aboutus" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact Us</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
