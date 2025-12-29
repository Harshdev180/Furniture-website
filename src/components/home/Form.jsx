import React from "react";
import { IoMdSend } from "react-icons/io";
import {Link} from 'react-router-dom';

const Form = () => {
  return (
   <div className="md:grid lg:grid-cols-2 bg-white md:mx-auto rounded-4xl max-h-[50rem] overflow-hidden border border-[#3E2723]/20 shadow-xl shadow-[#3E2723]/80">
      
      {/* IMAGE stays the same */}
      <img
        src="https://img.freepik.com/free-photo/handsome-carpenter-working-with-wood_1157-26131.jpg"
        alt="carpenter img"
        className="hidden lg:block w-full h-full object-cover"
      />

      {/* RIGHT SIDE */}
      <div className="relative flex bg-[#3E2723]">
        <div className="w-full rounded-xl px-5 sm:px-15 py-10 place-content-center">

          {/* HEADING */}
          <div className="mb-8">
            <span className="text-[#C9A24D] text-sm font-bold">
              CUSTOMIZATION
            </span>
            <h3 className="font-serif text-white text-3xl font-bold">
              Design it Your Way
            </h3>
            <p className="text-[#E6D5C3]/60 mt-2">
              Start customizing your furniture with our design team.
            </p>
          </div>

          {/* CTA CONTENT (replaces form) */}
          <div className="space-y-6 text-[#E6D5C3]/80">
            <p>
              Choose materials, dimensions, colors, and finishes that fit your
              space perfectly.
            </p>

           <Link to="/customization">
             <button
              className="w-full bg-[#C9A24D] text-[#3E2723] font-bold py-4 rounded-lg hover:bg-white transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Go to Customization</span>
              <IoMdSend />
            </button>
           </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Form;
