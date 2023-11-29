import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [showSide, setShowSide] = useState(false)
  const navigate = useNavigate()
  return (

    <nav className='flex w-full justify-between p-4 relative bg-stone-200'>
      <div>
        <h1 className='opacity-70 text-stone-500 pt-3'>گــــالــــری نمــــا</h1>
      </div>
      {showSide ? <FontAwesomeIcon onClick={() => setShowSide(!showSide)} className='absolute z-50 text-green-300 right-2 top-5 text-4xl cursor-pointer hover:opacity-50 duration-100 ease-in md:hidden' icon={faClose} /> : <FontAwesomeIcon onClick={() => setShowSide(!showSide)} className='absolute z-50 text-black right-2 top-5 text-4xl cursor-pointer hover:opacity-50 duration-100 ease-in md:hidden' icon={faBars} />}
      <ul className={`absolute text-green-300 md:text-green-400 right-0 rounded-xl z-30 top-5 ${showSide ? 'w-64 ' : 'w-0 hidden'}  transition-all duration-200  ease-linear bg-stone-400 bg-opacity-100 flex flex-col items-center space-y-10 pt-20 h-screen md:flex md:justify-between md:w-96 md:h-20 md:flex-row md:bg-transparent md:absolute md:-top-12 md:right-5 text-center`}>
        <li className='font-black md:hover:text-stone-500 ml-5 text-3xl pt-10 transition-all text-center   hover:scale-110 cursor-pointer hover:text-green-200 duration-100 ease-linear' onClick={()=>navigate('messages')}>پیشنهاد</li>
        <li className='font-black md:hover:text-stone-500  md:p-2 rounded-lg  ml-5 text-3xl transition-all text-center  hover:scale-110 cursor-pointer hover:text-green-200 duration-100 ease-linear' onClick={()=>navigate('/login')}>عضویت</li>
        <li className='font-black md:hover:text-stone-500  md:p-2 rounded-lg ml-5 text-3xl  transition-all text-center hover:scale-110 cursor-pointer hover:text-green-200 duration-100 ease-linear' onClick={()=>navigate('products')}>محصولات</li>
      </ul>
    </nav>

  )
}
