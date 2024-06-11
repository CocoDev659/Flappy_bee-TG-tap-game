// Nav.tsx
import React from 'react';
import { TbChevronLeft } from 'react-icons/tb';
// import Image from 'next/image';
// import { HiOutlineDotsVertical } from "react-icons/hi";



const Nav = ({ handleClick, showNav }) => {
    return (
        <div className={`py-2 flex pb-2 items-center gap-[25%] w-full text-white px-[4%] bg-black`}>
            {/* <TbX className='text-3xl font-bold' onClick={handleClick} />  */}
            <a href={"/"}>
                <TbChevronLeft className='text-3xl'/>
            </a>
            <div className='flex flex-row items-center gap-3'>
                <img width={25} height={25} src={"/logo.svg"} alt='' />
                <p className='text-[18px] font-bold text-[#FEFEFE]'>MIKE BOT</p>
            </div>
            {/* <HiOutlineDotsVertical className='text-[#FEFEFE] text-3xl hidden' /> */}
        </div>
    );
}

export default Nav;
