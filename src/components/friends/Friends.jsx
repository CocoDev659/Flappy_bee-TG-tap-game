import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Friends = () => {
  // useEffect(() => {
  //     AOS.init({
  //         easing: 'ease-in-out',
  //         duration: 700,
  //     });
  // }, [])

  return (
    <div className="pt-[20px] px-[10px] h-[100vh] overflow-y-scroll flex flex-col relative">
      {/* <div className='absolute w-[200px] h-[200px] rounded-full bg-[#00FC87] top-0 right-[-100px] z-[20] blur-lg opacity-10'></div> */}
      <div className="flex flex-col items-center">
        <p className="text-[28px] text-white font-bold">Invite friends!</p>
        <p className="text-[#BDC3C7] text-[12px]">
          You and Your Friend will receive Bonuses
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="px-4 py-1 bg-black text-white border-[#272A2F] border-[1px] flex w-full justify-between items-center rounded-[8px]"
        >
          <div className=" flex gap-3 py-2">
            <img width={45} height={30} src={"/gift (2).svg"} alt="" />
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-bold">Invite a friend</p>
              <span className="flex flex-row gap-1">
                <img width={25} height={25} src={"/coin1.svg"} alt="" />
                <p className="text-[12px] ">
                  {" "}
                  <span className="text-[#E6C91B]">+5,000</span> for you and
                  your friend
                </p>
              </span>
            </div>
          </div>
        </div>
        <div
          className="px-4 py-1 bg-black text-white border-[#272A2F] border-[1px] flex w-full justify-between items-center rounded-[8px]"
        >
          <div className=" flex gap-3 py-2">
            <img width={45} height={30} src={"/gift (2).svg"} alt="" />
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-bold">
                Invite a friend with Telegram Premium
              </p>
              <span className="flex flex-row gap-1">
                <img width={25} height={25} src={"/coin1.svg"} alt="" />
                <p className="text-[12px] ">
                  {" "}
                  <span className="text-[#E6C91B]">+5,000</span> for you and
                  your friend
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-center flex my-2">
        <p className="text-[#1DCD5C] font-bold">More bonuses</p>
      </div>
      <div className="flex relative flex-col gap-2">
        {/* <div className='absolute w-[300px] h-[300px] rounded-full bg-[#00FC87] left-[-100px] z-[20] blur-xl opacity-10'></div> */}

        <div className="flex w-full justify-between">
          <p className="text-white font-bold">List of your friends</p>
          <img src={"/reload.png"} width={25} height={20} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="w-full relative flex items-center justify-center bg-[black] z-[5000] rounded-[8px] border-t-[2px]  py-4 border-t-[#1DCD5C]">
            <div className='before:absolute before:inset-y-0 before:w-[0.8px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent before:right-0'></div>
            <div className='before:absolute before:inset-0 before:w-[0.5px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent'></div>
            <p className="text-[#7C7C7C] text-[16px]">
              You haven’t invited anyone yet
            </p>
          </div>
          <img src={"/monsters.svg"} alt={""} width={430} height={100} />
        </div>
        {/* <button className='bg-gradient-to-r from-[#1ED760] to-[#00FC87] w-full py-2 rounded-[8px]'>Invite a Friend</button> */}
        <button className="bg-gradient-to-r from-[#1ED760] to-[#00FC87] w-full py-2 rounded-[8px] animate-ease-in-out">
          Invite a Friend
        </button>
      </div>
    </div>
  );
};

export default Friends;
