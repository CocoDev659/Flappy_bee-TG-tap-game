import React from 'react'
// import Image from 'next/image';

const CardProps3 = ({ style, title, img2, img1, value }) => {
    return (
        <div data-aos={"fade-up"} className='flex w-full flex-col py-2 bg-black z-[5000] px-3 items-center justify-center gap-1 rounded-md shadow-sm border-[#1ED760] border-[1px] shadow-[#1ED760]'>
            <p className={style}>{title}</p>
            <div className='flex flex-row gap-1 items-center'>
                <img width={20} height={20} src={img1} alt='' />
                <p className='text-[16px] font-bold text-white'>{value}</p>
                <img width={20} height={20} src={img2} alt='' />
            </div>
        </div>
    )
}

export default CardProps3
