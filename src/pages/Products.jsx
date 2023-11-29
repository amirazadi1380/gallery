import React, { useContext, useState } from 'react'
import { AppContect } from '../App'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDown, faArrowDown19, faArrowDownAZ, faRefresh } from '@fortawesome/free-solid-svg-icons'

export default function Products() {
    const [eachInput, setEachInput] = useState(0)
    const [priceInput,setPriceInput] = useState(0)
    const [price, setPrice] = useState(false)
    const [each, setEach] = useState(false)
    const { myProducts } = useContext(AppContect)
    const navigate = useNavigate()
    return (
        <div >
            <div className='w-screen relative text-xs  h-10 items-center bg-stone-300 text-white flex justify-end pr-10'>
                <div className='flex space-x-1 mr-8 h-8 justify-center items-center cursor-pointer hover:text-stone-500 duration-200 ease-in' onClick={()=>{
                    setEachInput(0)
                    setPriceInput(0)
                    }}>
                    <FontAwesomeIcon icon={faRefresh} />
                    <h2>ریست</h2>
                    
                </div>
                <div className='flex mr-8 space-x-1 h-8 justify-center items-center cursor-pointer hover:text-stone-500 duration-200 ease-in' onClick={() => {
                    setEach(!each)
                    setPrice(false)
                }}>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <h2>تعداد </h2>

                </div>
                <div className='flex space-x-1 mr-8 h-8 justify-center items-center cursor-pointer hover:text-stone-500 duration-200 ease-in'  onClick={() => {
                    setEach(false)
                    setPrice(!price)
                }}>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <h2>قیمت</h2>
                </div>
                <div>
                    <h1 className='text-stone-400'>فیلتر</h1>
                </div>

                    {each && <div className='absolute rounded-md flex flex-col justify-center items-center w-[400px] h-60 z-50 bg-stone-400 top-10'>
                        <h1 className='text-stone-500 mb-3'>چند نفره</h1>
                        <input type="text" className='bg-stone-500 text-yellow-400 outline-none p-1 rounded-md' onChange={(e) => setEachInput(e.target.value)} />
                        <button className='bg-stone-500 w-40 h-8 mt-2 rounded-lg text-md text-green-200 hover:text-green-500 hover:bg-stone-100 duration-300 ease-in font-extrabold text-xl lg:h-10' onClick={()=>setEach(false)}>اعمال تغییر</button>

                    </div>}
                    {price && <div className='absolute rounded-md flex flex-col justify-center items-center w-[400px] h-60 z-50 bg-stone-400 top-10 '>
                        <input type='range' onChange={(e)=>setPriceInput(e.target.value)} className='w-64 accent-stone-950 ' max={10000000}/>
                       <div className='flex space-x-5'>
                        <h2>{priceInput}</h2>
                        <h2>تا سقف</h2>
                       </div>
                        <button className='bg-stone-500 w-40 h-8 mt-2 rounded-lg text-md text-green-200 hover:text-green-500 hover:bg-stone-100 duration-300 ease-in font-extrabold text-xl lg:h-10' onClick={()=>setPrice(false)}>اعمال تغییر</button>
                    </div>}
            </div>
            


            <div className='bg-stone-200 w-screen place-items-center h-screen grid grid-cols-2 md:grid-cols-3 pt-10 lg:gap-2'>
                {myProducts.filter(item=>eachInput == 0 ? item : item.each == eachInput).filter(item=>priceInput == 0 ? item : item.price >= priceInput).map(item => <div key={item.title} className='bg-stone-300 flex flex-col items-center w-52 h-60 shadow-xl rounded-md lg:w-96 lg:h-96 cursor-pointer hover:scale-110 duration-500 hover:bg-stone-200'>
                    <img src={item.src} alt={item.title} className='w-44 h-40 object-cover rounded-md lg:w-64 lg:h-72 mt-1' />
                    <h2 className='font-bold text-xl text-black/70'>{item.title}</h2>
                    {/* <p>
                    
                        {item.colors.map(color=><div>
                           {color}
                        </div>)}
                    </p> */}
                    <button className='bg-stone-400 w-40 h-8 mt-2 rounded-lg text-md text-green-200 hover:text-green-500 hover:bg-stone-100 duration-300 ease-in font-extrabold text-xl lg:h-10' onClick={()=>navigate(`${item.title}`)}>خرید</button>
                </div>)}

            </div>
        </div>
    )
}
