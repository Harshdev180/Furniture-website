import React from 'react';

const Row = ({label, value, isDiscount = false}) => {
  return (
    <div className="flex justify-between items-center text-sm sm:text-base">
      <span className={`${isDiscount ? 'text-[#C9A24D]' : 'text-gray-600'} font-medium`}>
        {label}
      </span>
      <span className={`font-bold font-serif ${isDiscount ? 'text-[#C9A24D]' : 'text-[#3E2723]'}`}>
        {value}
      </span>
    </div>
  );
}

export default Row;
