import React, { useState, useEffect } from "react";
import { FaRegHeart, FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/images/logo White.png";
import { useWishlist } from "../components/context/WishlistContext";
import { useCart } from "../components/context/AddtocartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  // Calculate cart count safely
  const cartCount = cart.reduce((total, item) => total + (item.qty || 1), 0);
  const wishlistCount = wishlist.length;

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userEmail = localStorage.getItem("userEmail");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-3 font-medium transition-colors duration-200 ${isActive ? "text-[#C9A24D]" : "text-[#E6D5C3] hover:text-[#C9A24D]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 bg-[#3E2723] transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
        }`}>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 py-3 sm:py-4">

          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Furniture Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/catalogue" className={navLinkClass}>Catalogue</NavLink></li>
            <li><NavLink to="/categories" className={navLinkClass}>Categories</NavLink></li>
            <li><NavLink to="/template" className={navLinkClass}>Templates</NavLink></li>
            <li><NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          </ul>

          {/* ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#E6D5C3]">

            {/* DESKTOP ICONS (Hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-3 sm:gap-4">

              {/* WISHLIST */}
              <Link to="/wishlist" className="relative group">
                {wishlistCount > 0 ? (
                  <FaHeart className="text-xl cursor-pointer hover:text-[#C9A24D] transition-colors" />
                ) : (
                  <FaRegHeart className="text-xl cursor-pointer hover:text-[#C9A24D] transition-colors" />
                )}

                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </Link>

              {/* USER */}
              <Link
                to={isAuthenticated ? "/profile" : "/auth"}
                className="relative group"
                title={isAuthenticated ? userEmail : "Sign In"}
              >
                <FaRegUser
                  className={`text-xl cursor-pointer hover:text-[#C9A24D] transition-colors ${isAuthenticated ? "text-[#C9A24D]" : ""
                    }`}
                />
                {isAuthenticated && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-[#3E2723]" />
                )}
              </Link>

              {/* CART */}
              <Link to="/cart" className="relative group">
                <FaShoppingCart className="text-xl cursor-pointer hover:text-[#C9A24D] transition-colors" />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* MOBILE MENU BUTTON (Visible only on mobile) */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-1 hover:text-[#C9A24D] transition-colors"
              aria-label="Open menu"
            >
              <IoMenu className="text-2xl" />
            </button>

          </div>

        </div>
      </nav>

      {/* NAVBAR SPACER */}
      <div className="h-[60px] sm:h-[64px] lg:h-[72px]" />

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#3E2723] z-50
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <HiOutlineX className="text-2xl text-white hover:text-[#C9A24D]" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="mt-2 space-y-1 overflow-y-auto pb-20">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogue"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/template"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* MOBILE MENU FOOTER ICONS */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#3E2723] p-4">
          <div className="flex items-center justify-around">
            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="relative flex flex-col items-center gap-1 text-[#E6D5C3] hover:text-[#C9A24D] transition-colors"
            >
              {wishlistCount > 0 ? (
                <FaHeart className="text-xl text-red-500" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
              <span className="text-xs">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to={isAuthenticated ? "/profile" : "/auth"}
              onClick={() => setOpen(false)}
              className="relative flex flex-col items-center gap-1 text-[#E6D5C3] hover:text-[#C9A24D] transition-colors"
            >
              <FaRegUser className={`text-xl ${isAuthenticated ? "text-[#C9A24D]" : ""}`} />
              <span className="text-xs">{isAuthenticated ? "Profile" : "Sign In"}</span>
            </Link>
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="relative flex flex-col items-center gap-1 text-[#E6D5C3] hover:text-[#C9A24D] transition-colors"
            >
              <FaShoppingCart className="text-xl" />
              <span className="text-xs">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
