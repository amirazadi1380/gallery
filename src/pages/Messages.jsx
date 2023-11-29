import React, { useContext, useState } from 'react'
import { AppContect } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function Messages() {
    const {contact,setContact,pishnahad,setPishnahad} = useContext(AppContect)
    const [selectedIndex,setSelectedIndex] = useState(!0)
  return (
    <div className='w-screen space-y-6 h-full bg-stone-400 justify-center items-center flex flex-col'>
        <button onClick={()=>{
            setContact([])
            setPishnahad(false)
            
        }} className='absolute left-2 top-1 bg-slate-500/80 hover:bg-slate-600 hover:text-red-500 font-bold duration-200 hover:w-32 w-28 h-8 rounded-md text-white'>پاک کردن همه</button>
        { pishnahad ?  contact.filter((item,index)=> index > 0).filter((item,index)=> selectedIndex !== index).map((item,index)=> <div key={Math.random()*1000} className='w-[560px] h-96 bg-gradient-to-r from-slate-600 space-y-5 to-slate-900 rounded-lg shadow-xl text-white text-center flex flex-col relative'>
            <FontAwesomeIcon onClick={()=>{
                setSelectedIndex(index)
                console.log(index)
                console.log(selectedIndex)
            }} icon={faClose} className='text-4xl absolute left-1 top-1 text-white'/>
            <div>
                <h1><span className='text-green-400 '>{item.name}</span>عزیز</h1>
                <p className='opacity-70'><FontAwesomeIcon icon={faCheck} className='text-green-400 text-2xl'/>پیشنهاد شما در سامانه ما ثبت شد </p>
            </div>
            <div className='w-full flex flex-col justify-center items-center space-y-5 h-64'>
                <p className='text-green-400 text-3xl'>پیشنهاد / انتقاد شما</p>
                <FontAwesomeIcon icon={faMessage}/>
                <div className='w-60  h-28 rounded-md border-white bg-green-400 font-mono text-white text-center flex justify-center items-center'>
                    <p>{item.message}</p>
                </div>
            </div>

        </div>) : <div  className='absolute top-1/3 w-[300px] md:w-[500px] h-80 bg-gradient-to-r from-slate-600 space-y-5 to-slate-900 rounded-lg shadow-xl text-white text-center flex flex-col'>
            <div className='h-full flex justify-center items-center'>
                <p className='opacity-70 text-lg md:text-3xl'><FontAwesomeIcon icon={faClose} className='text-red-600 text-3xl md:text-4xl'/>پیشنهادی از شما در سامانه ما ثبت نشده است </p>
            </div>

        </div>}

        
    </div>
  )
}
