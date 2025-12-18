import React, { useState } from "react";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assests/images/logo White.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-3 font-medium transition ${isActive ? "text-white" : "hover:text-[#C9A24D]"
    }`;

  return (
    <div className="bg-[#3E2723] text-[#E6D5C3]">
      {/* NAVBAR */}
      <nav className="px-2 sm:px-20 py-4 bg-[#3E2723] fixed top-0 left-0 w-full z-40">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-40" />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex">
            <ul className="flex">
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink></li>
              <li><NavLink to="/catalogue" className={navLinkClass}>Catalogue</NavLink></li>
              <li><NavLink to="/categories" className={navLinkClass}>Categories</NavLink></li>
              <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4 ml-5 sm:ml-0">
            <FaRegHeart className="text-[20px] cursor-pointer hover:text-[#C9A24D] hidden sm:block" />
            <FaRegUser className="text-[20px] cursor-pointer hover:text-[#C9A24D] hidden sm:block" />
            <FaShoppingCart className="text-[20px] cursor-pointer hover:text-[#C9A24D]" />

            {/* MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
              className="lg:hidden"
            >
              <IoMenu className="text-[20px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#3E2723] z-50 transform transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white">Menu</h3>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="text-2xl text-white hover:text-[#C9A24D]"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col mt-4">
          <li><NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/aboutus" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink></li>
          <li><NavLink to="/catalogue" onClick={() => setOpen(false)} className={navLinkClass}>Catalogue</NavLink></li>
          <li><NavLink to="/categories" onClick={() => setOpen(false)} className={navLinkClass}>Categories</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setOpen(false)} className={navLinkClass}>Blog</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
