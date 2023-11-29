import React, { useContext } from 'react'
import { AppContect } from '../App'
import { useParams } from 'react-router-dom'

export default function ProductsDetail() {
  const {myProducts} = useContext(AppContect) 
  const {title} = useParams()
  return (
    <div className='w-screen flex justify-center items-center h-screen'>
      {myProducts.filter(item=>item.title == title).map(item=><div key={item.title} className='bg-stone-300 flex flex-col items-center w-92 h-96 shadow-xl rounded-md lg:w-96 lg:h-96 cursor-pointer hover:scale-110 duration-500 hover:bg-stone-200'>
                    <img src='f' alt={item.title} className='w-96 h-80 object-cover rounded-md lg:w-64 lg:h-72 mt-1' />
                    <h2 className='font-bold text-xl text-black/70'>{item.title}</h2>      
        </div>)}
    </div>
  )
}
