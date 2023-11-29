import React from 'react'
import { Navigation, Pagination, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SliderOne() {
  return (
    <div className='flex justify-between w-screen items-center bg-stone-300 px-20 h-[700px] overflow-x-hidden lg:p-20'>
        <div className='lg:flex hidden flex-col'>
            <div className='flex w-80 h-60'>
        <img src="f1.jpg" alt="f1" className='md:w-40 md:h-60 mr-1 rounded-lg opacity-50 hover:opacity-100 duration-200 ease-in cursor-pointer object-cover'/>
        <img src="f2.jpg" alt="f2" className='md:w-40 md:h-60 mr-1 rounded-lg opacity-50 hover:opacity-100 duration-200 ease-in cursor-pointer object-cover'/>
            </div>
        <img src="f3.jpg" alt="f3" className='md:w-full md:h-80 rounded-md shadow-lg opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer object-center' />
        </div>    

        <div className='h-96 w-[2px] rounded-full shadow-2xl bg-white md:ml-10'>
        </div>
    <Swiper className='bg-red-600 border-transparent rounded-lg shadow-lg w-[280px] md:w-[400px] md:h-[500px] flex justify-center h-80'
      modules={[Navigation, Pagination, A11y,Autoplay]}
      slidesPerView={1}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
    
    >  
      <SwiperSlide><img src="f1.jpg" alt="f1" className='w-full h-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="f2.jpg" alt="f2" className='w-full h-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="f3.jpg" alt="f3"className='w-full h-full object-cover' /></SwiperSlide>

    </Swiper>
    <div className='h-96 w-[2px] rounded-full shadow-2xl bg-white md:mr-10'>
    </div>
    <div className='lg:flex hidden flex-col'>
            <div className='flex w-80 h-60'>
        <img src="f7.jpg" alt="f7" className='md:w-40 md:h-60 mr-1 rounded-lg opacity-50 hover:opacity-100 duration-200 ease-in cursor-pointer object-cover'/>
        <img src="f6.jpg" alt="f6" className='md:w-40 md:h-60 mr-1 rounded-lg opacity-50 hover:opacity-100 duration-200 ease-in cursor-pointer object-cover'/>
            </div>
        <img src="f5.jpg" alt="f5" className='md:w-full md:h-80 rounded-md shadow-lg opacity-70 hover:opacity-100 duration-200 ease-in cursor-pointer object-center' />
        </div>    
    
    </div>
  )
}
