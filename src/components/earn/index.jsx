import React, { useEffect } from 'react'
import CoinCard from '../reuseable/CoinCard'
// import Image from 'next/image'
import { taskList } from '../data'
import AOS from 'aos'
import "aos/dist/aos.css";

const Earn = () => {

//   useEffect(() => {
//     AOS.init({
//         easing: 'ease-in-out',
//         duration: 700,
//     });
// }, [])

  return (
    <div className='pt-[20px] px-[20px] h-[100vh] flex flex-col gap-2'>
      <div className='w-full justify-center flex'>
        <CoinCard
          image='/coin1.svg'
          value='5534'
        />
      </div>
      <button className='bg-gradient-to-r from-[#1ED760] to-[#00FC87] w-full py-2 rounded-[8px]'>Earn Your Coins</button>

      <div className='text-white flex flex-col gap-1 '>
        <p>Daily tasks</p>
        <div className='px-4 py-1 bg-black border border-[#00FC87] flex w-full justify-between items-center rounded-[8px]'>
          <div className=' flex gap-3'>
            <img width={40} height={30} src={"/calendar.svg"} alt='' />
            <div>
              <p className='text-[12px]'>Daily reward</p>
              <span className='flex flex-row gap-1'>
                <img width={20} height={20} src={"/coin1.svg"} alt='' />
                <p className='text-[12px] font-bold'>+6,649,000</p>
              </span>
            </div>
          </div>
          <div>
            <img width={20} height={20} src={"/mark.png"} alt='' />
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col gap-1'>
        <p>Tasks list</p>
        <div data-aos="fade-up" className='flex flex-col gap-3'>
          {
            taskList.map((t, i) => (
              <div key={i} className='px-4 py-1 bg-black border border-[#00FC87] flex w-full justify-between items-center rounded-[8px]'>

                <div className=' flex gap-3'>
                  <img width={40} height={30} src={t.image1} alt='' />
                  <div>
                    <p className='text-[12px]'>{t.desc}</p>
                    <span className='flex flex-row gap-1'>
                      <img width={20} height={20} src={t.image2} alt='' />
                      <p className='text-[12px] font-bold'>{t.amount}</p>
                    </span>
                  </div>
                </div>
                <div>
                  <img width={20} height={20} src={t.image3} alt='' />
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Earn