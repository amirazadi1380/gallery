import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Description() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div data-aos="fade-left" className='w-full  bg-gradient-to-r from-stone-300 to-gray-700  overflow-hidden rounded-lg my-5 shadow-lg text-white flex flex-col md:flex-row h-auto items-center md:items-baseline justify-between relative overflow-x-hidden pr-5'>
            <div className='flex border-none border-b-[1px] border-green-400 w-80 h-44 flex-col justify-center items-center text-center'>
                <h1 className='font-black text-4xl text-stone-500/90 mb-5'>وظیــفه مــا</h1>
                <p className=' font-serif md:text-md lg:text-lg w-44 h-auto'>متنی که در اینجا قرار دارد یک متن تمرینی در جهت استفاده در پاراگراف است</p>
            </div>
            <div className='flex md:border-none border-b-[1px] border-green-400 w-80 h-44 flex-col justify-center items-center text-center'>
                <h1 className='font-black text-4xl text-stone-500/90 mb-5 md:text-5xl'>خدمات</h1>
                <p className=' font-serif md:text-md lg:text-lg w-44 h-52'>این متن صرفا تمرینی است و در جهت پر کردن پاراگراف استفاده شده است</p>
            </div>
            <div className='flex md:border-none border-b-[1px] border-green-400 w-80 h-44 flex-col justify-center items-center text-center'>
                <h1 className='font-black text-4xl text-stone-500/90 mb-5 md:text-5xl md:text-stone-200'>کالا</h1>
                <p className=' font-serif md:text-md lg:text-lg w-52 h-60'>متن نمونه برای انتخاب کادر متن کلیک کنید. دوباره کلیک کنید یا دوبار کلیک کنید تا ویرایش متن شروع شود</p>
            </div>
            <div className='flex md:border-none border-b-[1px] border-green-400 w-80 h-52 flex-col justify-center items-center text-center'>
                <h1 className='font-black text-4xl text-stone-500 mb-5 md:text-5xl md:text-stone-300'>برنامه ها</h1>
                <p className=' font-serif md:text-md lg:text-lg w-52 h-auto'>در توبیخ در لذتی که می خواهد مویی از درد باشد غضب نکن به امید اینکه پرورشی نباشد.</p>
            </div>

        
    </div>
  )
}
