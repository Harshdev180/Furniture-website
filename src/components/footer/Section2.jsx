import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { MdCall, MdMailOutline } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const Section2 = () => {
  return (
    <div className="mt-8">
      {/* Left Content */}
      <div className="left grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Head Office address */}
        <div>
          <h4 className="text-xl font-bold mb-3 font-serif">Head Office</h4>
          <ul className="text-gray-300">
            <li className="flex place-items-center gap-2 mb-2">
              <TfiLocationPin className="w-10 h-5" />
              Graphura India Private Limited, near Renu Sharma Foundation,
              Pataudi, Gurgaon, Haryana 122503
            </li>
            <li className="flex place-items-center gap-2 mb-2">
              <MdCall className="h-5" />
              +91 7378021327
            </li>
            <li className="flex place-items-center gap-2 mb-2">
              <MdMailOutline className="h-5" />
              official@graphura.in
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-3 font-serif">Quick Links</h4>
          <ul className="text-gray-300">
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/template">Templates</Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Shop list */}
        <div>
          <h4 className="text-xl font-bold mb-3 font-serif">Shop</h4>
          <ul className="text-gray-300">
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/category/sofa" className="">
                Sofa
              </Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/category/bed" className="">
                Bed
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/category/kitchentable" className="">
                Dinning Table
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/category/chair" className="">
                Chair
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/customize" className="">
                Customize
              </Link>
            </li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h4 className="text-xl font-bold mb-3 font-serif">Policy</h4>
          <ul className="text-gray-300">
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/terms" className="">
                Term of Services
              </Link>
            </li>
            <li className="hover:text-white hover:font-semibold cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/privacy" className="">
                Privacy policy
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/cookies" className="">
                Cookie Policy
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer hover:pl-[9px] transition duration-150 ease-in-out flex place-items-center mb-1">
              <GoChevronRight className="h-5" />
              <Link to="/return" className="">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
