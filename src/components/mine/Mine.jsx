import React, { useEffect } from 'react'
import Card from '../exchange/Cards'
import { TbChevronRight } from 'react-icons/tb'
import AOS from 'aos'
import "aos/dist/aos.css";
const Mine = () => {

    // useEffect(() => {
    //     AOS.init({
    //         easing: 'ease-in-out',
    //         duration: 700,
    //     });
    // }, [])

    return (
        <div className='pt-[20px] h-[100vh] overflow-y-scroll flex flex-col gap-2 px-[10px]'>
            <div className='w-full flex items-center text-white z-[5000]'>
                <div className='w-full border-[1px] border-[#00FC87] flex gap-2 bg-black rounded-md items-center py-2 justify-center'>
                    <img width={20} height={20} src={"/assets/images/Yuki.png"} alt='' />
                    <p>YUKI (Yuki)</p>
                </div>
            </div>
            <Card />
            <div className='flex flex-col gap-1'>
                <div className='text-white flex w-full justify-between'>
                    <span className='flex items-center gap-2'>
                        <p>Bronze </p>
                        <TbChevronRight />
                    </span>
                    <span className='flex items-center gap-2'>
                        <p className='text-[#B0B4CF]'>Level</p>
                        <p>1/9</p>
                    </span>
                </div>
                <div>
                    <div className='parent-div'>
                        <div className='child-div'></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" className='flex relative flex-col items-center justify-center'>
                <div className='flex w-[270px] h-[270px] bg-green-600 rounded-[100%] items-center justify-center'>
                <img src={"/assets/images/Yuki.png"} width={"45%"}  className="" alt='' />
                </div>
            </div>
            <div className='flex flex-row justify-between text-white'>
                <div className='flex flex-row text-white items-center gap-2'>
                    <img width={20} height={20} src={"/strike.svg"} alt='' />
                    <p>1000/1000</p>
                </div>
                <div className='flex flex-row text-white items-center gap-2'>
                    <img width={20} height={20} src={"/boost.svg"} alt='' />
                    <p>Boost</p>
                </div>
            </div>
        </div>
    )
}

export default Mine