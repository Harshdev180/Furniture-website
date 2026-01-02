import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children, value }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-6 lg:p-8 border border-[#E6D5C3]/50">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-6 pb-4 border-b border-[#E6D5C3]"
      >
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#3E2723] to-[#C9A24D] text-white text-lg sm:text-xl font-bold shadow-lg">
          {value}
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723]">
          {title}
        </h2>
      </motion.div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default Section;
