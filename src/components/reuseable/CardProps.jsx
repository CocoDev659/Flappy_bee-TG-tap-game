import React from 'react'
// import Image from 'next/image';


const CardProps = ({ style, title, img1, value }) => {
    return (
            <div data-aos={"fade-up"} className='flex flex-col w-full py-2 px-3 z-[5000] items-center justify-center gap-1 rounded-md border-[#1ED760] border-[1px] shadow-sm shadow-[#1ED760]'>
                <p className={style}>{title}</p>
                <div className='flex flex-row gap-3 items-center'>
                    <img width={20} height={20} src={img1} alt='' />
                    <p className='text-[16px] font-bold text-white'>{value}</p>
                </div>
            </div>
    )
}

export default CardProps
