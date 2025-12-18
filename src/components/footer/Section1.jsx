import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram  } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../../assests/images/logo White.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="sm:flex justify-between">
      <img src={logo} alt="" className="w-50 mb-5" />

      {/* Social icons */}
      <div className="flex space-x-4 sm:ml-4 mb-5">
        {/* Facebook */}
        <Link
          to="https://www.facebook.com/Graphura.in?rdid=ChlLZKbRZpHi39kB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nKAMTopZ%2F#"
          className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:scale-110 transition duration-300 flex-shrink-0"
          target="blank"
        >
          <FaFacebookF />
        </Link>

        {/* Twitter */}
        <Link
          to="https://x.com/Graphura"
          className="flex items-center justify-center w-10 h-10 bg-[#579DF9] text-white rounded-full hover:scale-110 transition duration-300 flex-shrink-0"
          target="blank"
        >
          <FaTwitter />
        </Link>

        {/* Instagram */}
        <Link
          to="https://www.instagram.com/graphura.in?igsh=MXNqNmtidzljNDJlag%3D%3D"
          className="flex items-center justify-center w-10 h-10 bg-[#D1226E] text-white rounded-full hover:scale-110 transition duration-300 flex-shrink-0"
          target="blank"
        >
          <BsInstagram />
        </Link>

        {/* LinkedIn */}
        <Link
          to="https://www.linkedin.com/company/graphura-india-private-limited/posts/?feedView=all"
          className="flex items-center justify-center w-10 h-10 bg-[#146CC6] text-white rounded-full hover:scale-110 transition duration-300 flex-shrink-0"
          target="blank"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Section1;