import React from "react";
import { Link } from 'react-router-dom';

const CopyRight = () => {

    const currentYear = new Date().getFullYear()
    return (
        <div className='mt-3 flex justify-center items-center'>
            <h4 className='mb-3 md:text-[16px] text-[14px] font-bold'>&copy; {currentYear} <span className='text-[#C9A24D]'> Graphura India Private Limited.</span> All Rights Reserved.</h4>

            {/* <ul className='flex gap-5 text-gray-400 justify-center'>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[11px]'>
                <Link to=''>Term of Service</Link>
            </li>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[11px]'>
                <Link to=''>Privacy Policy</Link>
            </li>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[11px]'>
                <Link to=''>Cookie Policy</Link>
            </li>
        </ul> */}
        </div>
    );
};

export default CopyRight;
