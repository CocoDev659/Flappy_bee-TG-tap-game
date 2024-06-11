import React from "react";
import { TbChevronLeft } from "react-icons/tb";
// import Image from 'next/image';
// import { HiOutlineDotsVertical } from "react-icons/hi";

const Header = ({ handleClick, showNav }) => {
  return (
    <div
      className={`flex h-[60px] items-center w-full text-white px-[20px] py-[10px] bg-black`}
    >
      {/* <TbX className='text-3xl font-bold' onClick={handleClick} />  */}
      <div className="flex">
        <a href={"/"}>
          <TbChevronLeft className="text-3xl" />
        </a>
      </div>
      <div className="flex flex-1 w-[100%] items-center justify-center gap-3">
        <img width={20} src={"/assets/images/Yuki.png"} alt="" />
        <p className="text-[18px] font-bold text-[#FEFEFE]">Yuki Tap Game</p>
      </div>
      {/* <HiOutlineDotsVertical className='text-[#FEFEFE] text-3xl hidden' /> */}
    </div>
  );
};

export default Header;
