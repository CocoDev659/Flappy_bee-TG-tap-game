import React from 'react'


const CardProps2 = ({ title, value }) => {
    return (
        <div data-aos={"fade-up"} className='flex w-full flex-col py-2 z-[5000] bg-black px-3 items-center justify-center gap-1 rounded-md shadow-sm border-[#1ED760] border-[1px] shadow-[#1ED760]'>
            <p className={"text-[#2B6AFF] text-[10px]"}>{title}</p>
            <div className='flex flex-row gap-3 items-center'>
                <p className='text-[16px] font-bold text-white'>{value}</p>
            </div>
        </div>
    )
}

export default CardProps2
