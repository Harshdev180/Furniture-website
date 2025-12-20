import React from "react";

const TestimonialCard = ({ name, role, img }) => {
  return (
    <div className="text-sm w-70 mx-auto border border-gray-200 pb-6 rounded-lg bg-white shadow-xl shadow-black/30">
      {/* Profile */}
      <div className="flex flex-col items-center px-5 py-4 relative">
        <img
          className="h-24 w-24 rounded-full shrink-0"
          src={img}
          alt={name}
        />

        <div className="pt-8 text-center">
          <h1 className="text-lg font-medium text-[#3E2723] font-serif">
            {name}
          </h1>
          <p className="text-gray-800/80">{role}</p>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-500 px-6 text-center">
        I've been using imagify for nearly two years, primarily for Instagram,
        and it has been incredibly user-friendly, making my work much easier.
      </p>

      {/* Stars */}
      <div className="flex justify-center pt-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="18"
              height="18"
              viewBox="0 0 22 20"
              fill="#FF532E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
