import Aos from 'aos'
import React, { useContext, useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { AppContect } from '../App'
import Footer from '../components/Footer'

export default function Contact() {
    const {contact,setContact,setPishnahad} = useContext(AppContect)
    const [name,seetName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div className='bg-white w-full mt-5 h-[600px]  relative '>

        <img src='message.gif' alt='mgif' className='w-16 absolute left-1/2 -translate-x-1/2 lg:left-8' />

        <div className='grid grid-cols-1 lg:grid-cols-2 border-b-2 border-gray-200'>

             <form onClick={(e)=>{
                e.preventDefault()
                


             }}  className='w-full lg:ml-28 flex flex-col  items-center mt-16 space-y-10'>
                <h1 className='text-green-400 text-[50px]'>ارتباط با ما</h1>
                <label className=' w-60 h-20 flex flex-col text-right space-y-2'>
                <h2>اسم</h2>
                <input onChange={(e)=>seetName(e.target.value)} value={name} type="text" placeholder='اسم خود را وارد کنید' className='border-b-2 outline-none text-right px-1 border-black w-60' />
                </label>
                <label className=' w-60 h-20 flex flex-col text-right space-y-2'>
                <h2>ایمیل</h2>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='ایمیل خود را وارد کنید' className='border-b-2 outline-none text-right px-1 border-black w-60' />
                </label>
                <label className=' w-60 h-40 flex flex-col text-right space-y-2'>
                <h2>پیام</h2>
                <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text" placeholder='پیام خود را وارد کنید' className='border-b-2 text-right outline-none px-1 border-black w-60 h-40' />
                </label>
                <button onClick={()=>{
                                    seetName('')
                                    setEmail('')
                                    setMessage('')
                                    setContact((prev)=>[...prev,{
                                        name:name,
                                        email:email,
                                        message:message
                                    }])
                                    setPishnahad(true)
                }} className='bg-green-400 w-72 h-12 rounded-lg hover:w-96 duration-500 ease-in-out text-3xl font-bold text-white'>ثبت</button>
             </form>
             <div className='flex w-full items-center justify-center mt-5 'data-aos="fade-left">
             <img src="c1.jpg" alt="c1" className=' h-96 lg:w-[600px] lg:h-[700px]' />
             </div>
        </div>
        <div className='flex flex-col md:flex-row h-64 mt-10 lg:mt-0 w-full justify-center items-center text-center p-10 space-y-3 '>
            <div className='bg-gray-500 w-64 h-28 rounded-full hover:w-72 duration-200 ease-in'>
                <div className='flex cursor-pointer justify-center h-14 md:mt-2 items-center text-white  space-x-2'>
                    <FontAwesomeIcon icon={faPhone} className='opacity-75 text-lg'/>
                    <h1 className='text-white'>تماس</h1>
                </div>
                <p className='text-white opacity-60'>09175065996</p>
                <p className='text-white opacity-60'>09172045165</p>
            </div>
            <div className='bg-gray-500  w-64 h-28 rounded-full hover:w-72 duration-200 ease-in'>
                <div className='flex cursor-pointer justify-center h-14 items-center text-white  space-x-2'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-white text-xl opacity-75'/>
                    <h1 className='text-white'>مکان</h1>
                </div>
                <p className='text-white opacity-60'>شیراز - بلوار بهشت جنب کوچه 14</p>
            </div>
            <div className='bg-gray-500  w-64 h-28 rounded-full hover:w-72 duration-200 ease-in '>
                <div className='flex cursor-pointer justify-center h-14 items-center text-white  space-x-2'>
                    <FontAwesomeIcon icon={faClock} className='text-white text-xl opacity-75'/>
                    <h1 className='text-white'>ساعت</h1>
                </div>
                <p className='text-white opacity-60'> ساعت کار</p>
                <p className='text-white opacity-60'>صبح 8-12 - عصر 16-22</p>
           
            </div>
        </div>
        
        
        
      
    </div>
  )
}
