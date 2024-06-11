import React from 'react'
// import Image from 'next/image';


const CoinCard = ({ image, value }) => {
  return (
    <div data-aos={"fade-up"} className='w-[205px] rounded-lg border-2 bg-[black] z-[5000] border-[#1ED760] py-3 flex items-center justify-center'>
      <img width={40} height={40} src={image} alt="" />
      <p className='text-[28px] font-bold text-white'> = {value}</p>
    </div>
  )
}

export default CoinCard