import React from 'react'

export default function Information() {
  return (
    <div className='w-screen h-auto bg-gray-200 text-center grid gap-2 place-items-center md:grid-cols-2 lg:grid-cols-3 items-center lg:p-10'>
        <div className='w-96 h-64 bg-stone-100 text-stone-500 flex flex-col items-center p-8 md:hover:scale-110 duration-200 ease-in-out '>
            <h1 className='text-[40px] hover:scale-100'>خدمات طراحی داخلی</h1>
            <p className='w-64  opacity-60 mt-4 hover:scale-100'>متن نمونه برای انتخاب کادر متن کلیک کنید. دوباره کلیک کنید یا دوبار کلیک کنید تا ویرایش متن شروع شود</p>
        </div>
        <div  className='w-96 h-64 bg-black  text-white flex flex-col items-center p-5  space-y-5 md:hover:scale-110 duration-200 ease-in-out '>
            <h1>کلاژ محصول</h1>
            <p>در توبیخ در لذتی که می خواهد مویی از درد باشد غضب نکن به امید اینکه پرورشی نباشد</p>
            <button className='border-b-2 border-green-400 text-xl capitalize hover:w-52 w-20 duration-200 ease-in'>more</button>
        </div>
        <img src="f2.jpg" alt="f2" className='w-[320px] md:hidden lg:flex rounded-lg  shadow-2xl h-80' />
        <img src="f5.jpg" alt="f2" className='w-[320px] md:hidden lg:flex rounded-lg shadow-lg h-80' />
        <div className='w-96 h-64 bg-stone-100 text-stone-500 flex flex-col items-center p-8 md:hover:scale-110 duration-200 ease-in-out '>
            <h1 className='text-[40px]'>فصای دنج</h1>
            <p className='w-64  opacity-60 mt-4'>متن نمونه برای انتخاب کادر متن کلیک کنید. دوباره کلیک کنید یا دوبار کلیک کنید تا ویرایش متن شروع شود</p>
        </div>
        <div  className='w-96 h-64 bg-black  text-white flex flex-col items-center p-5  space-y-5 md:hover:scale-110 duration-200 ease-in-out '>
            <h1>دیزاین سه بعدی</h1>
            <p>در توبیخ در لذتی که می خواهد مویی از درد باشد غضب نکن به امید اینکه پرورشی نباشد</p>
            <button className='border-b-2 border-green-400 text-xl capitalize hover:w-52 w-20 duration-200 ease-in'>more</button>
        </div>
    </div>
  )
}
