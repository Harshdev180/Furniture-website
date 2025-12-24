import React from "react";

const Section = ({ title, children, value }) => {
  return (
    <div className="mb-15">
      <div className="flex items-center font-serif text-2xl font-bold gap-5 pb-5">
        <h2 class="font-serif text-2xl font-bold text-[#3E2723] flex items-center gap-4">
          <span class="flex items-center justify-center size-8 rounded-full bg-[#3E2723] text-white text-sm font-bold step-num">
            {value}
          </span>
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
