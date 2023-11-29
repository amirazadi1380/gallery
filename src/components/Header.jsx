import React from 'react'

export default function Header() {
  return (
    <div className='w-screen h-[800px] bg-stone-200 flex relative overflow-x-hidden'>
      <img src="wave.svg" alt="wave" />
        <div className='  border-opacity-50 w-full h-full'>
        <div className='w-[500px] md:w-[600px] h-[500px] md:h-[600px] shadow-sm'>    
         <div className='bg-green-600/30 h h-96 w-80 duration-300 ease-in  md:h-[600px] absolute  left-1/2 -translate-x-1/2 rounded-md md:w-[420px] lg:w-[1050px]'>

        </div>
        <img src="f1.jpg" alt="f1" className='w-[280px] h-[250px] sm:w-[470px] md:w-[550px] md:h-[400px] shadow-lg sm:h-[310px] absolute rounded-lg right-1/4 p-1 top-1/3 -translate-y-1/3' />
        </div>
        <div className='bg-white w-[200px] sm:w-[250px]   h-[250px] md:h-[320px] shadow-xl absolute right-1/2 rounded-md  top-1/2 md:w-[490px] flex  items-right  text-right p-5 md:p-10 flex-col'>
        <h1 className=' font-serif  text-stone-400 text-[20px] md:text-[22px]'>اســـتــــــایلـــ دیـــــزایــن</h1>
        <div className='w-full flex justify-end'>
        <p className='h-36 w-[300px] text-[30px]  md:text-[52px] md:w-[400px] font-serif font-bold text-green-400'>اســتــایل خانــه رویایی خود را به ما بسپـــارید</p>
        <img src="armchair.gif" alt="gif" className='w-16 h-16 absolute left-1/2 -translate-x-1/2 bottom-1' />
        </div>
        </div>
        </div>
    </div>
  )
}
