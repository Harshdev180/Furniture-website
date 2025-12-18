import React from 'react'
import Section1 from '../components/footer/Section1'
import Section2 from '../components/footer/Section2'
import CopyRight from '../components/footer/CopyRight'

const Footer = () => {
  return (
    <div className='bg-[#3E2723] text-white'>
      <div className='py-10 sm:px-20 px-5'>
        <Section1 />
        <div className="border-t border-[#C9A24D]/20"></div>
        <Section2 />
        <div className="border-t border-[#C9A24D]/20"></div>
        <CopyRight />
      </div>
    </div>
  )
}

export default Footer