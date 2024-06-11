
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <div className='bg-black w-full h-[100vh] flex flex-col items-center justify-center text-white gap-10' key="page1">
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl'>Tap and earn coins</h1>
        <p className='text-lg'>You can use booster and tricky strategies</p>
      </div>
      <img className='w-[400px] h-[400px]' src="/tapEarn.svg" alt="" />
      <div className='flex flex-row gap-3 items-center justify-center'>
        <div className='w-[10px] h-[10px] rounded-full bg-[#00FC87]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
      </div>
    </div>,

    <div className='bg-black w-full h-[100vh] flex flex-col gap-6 items-center justify-center text-white gap-10' key="page1">
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl'>Upgrade your exchange</h1>
        <p className='text-lg'>You can use booster and tricky strategies</p>
      </div>
      <img className='w-[400px] h-[400px]' src="/exchangeOnboard.svg" alt="" />
      <div className='flex flex-row gap-3 items-center justify-center'>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[#00FC87]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
      </div>
    </div>,

    <div className='bg-black w-full h-[100vh] flex flex-col items-center justify-center text-white gap-10' key="page1">
      <div className='flex flex-col items-center'>

        <h1 className='font-bold text-2xl text-center'>Invite friends and get bonuses together</h1>
        <p className='text-lg'>You can use booster and tricky strategies</p>
      </div>
      <img className='w-[400px] h-[400px]' src="/inviteFriend.svg" alt="" />
      <div className='flex flex-row gap-3 items-center justify-center'>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[#00FC87]'></div>
        <div className='w-[10px] h-[10px] rounded-full bg-[grey]'></div>
      </div>
    </div>,

    <div className='bg-black w-full h-[100vh] flex flex-col items-center justify-center text-white' key="page1">
      <h1 className='font-bold text-2xl text-center'>Use coin to get an Airdrop at token listing</h1>
      <p className='text-lg'>Dont forget to invite your friends. Good luck!</p>
      <img width={300} src="/coin2.svg" alt="" />
      <div className='flex w-full px-[7%]'>
        <Link to={"/exchange"} className='bg-gradient-to-r from-[#10a042] text-2xl to-[#00FC87] flex items-center justify-center w-full py-2 rounded-[8px]'>Play</Link>
      </div>
      {/* <Link to={"/exchange"} className='w-full rounded-lg p-4 font-bold text-2xl bg-[#00FC87] flex items-center justify-center'>Play</Link> */}
    </div>,
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...swipeHandlers} className='text-white'>
      {pages[currentPage]}
      <div className="navigation-buttons flex items-center justify-between px-4">
        {currentPage > 0 && (
          <div className='w-[40px] mt-[-70px] items-center justify-center h-[40px] relative bg-[#00FC87] rounded-full flex'>
            <TbChevronLeft className="text-3xl text-black " onClick={prevPage} />
          </div>
        )}
        {currentPage < pages.length - 1 && (
          <div className='w-[40px] mt-[-70px] items-center justify-center h-[40px] relative bg-[#00FC87] rounded-full flex'>
            <TbChevronRight className="text-3xl text-black " onClick={nextPage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

