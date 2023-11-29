import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductsDetail from "./pages/ProductsDetail"
import Products from "./pages/Products"
import Messages from "./pages/messages"

export const AppContect = createContext()
const myProducts = [
  {
    title:'مبل چستر برند رینول',
    price:'2000000',
    each: 3,
    src:'f1.jpg',
    colors:['سیاه' , 'سفید']
  },
  {
    title:'مبل چرم لویی ویتون',
    price:'5800000',
    each: 1,
    src:'f2.jpg',
    colors:['سیاه' , 'سفید', 'زرد']
  },
  {
    title:'مبل سلتنطی',
    price:'8970000',
    each: 2,
    src:'f3.jpg',
    colors:['سفید']
  },
  {
    title:'مبل چرم ایرانی',
    price:'3520000',
    each: 3,
    src:'f5.jpg',
    colors:['سیاه' , 'سفید', 'زرد']
  },
  {
    title:'مبل اسپرت',
    price:'1500000',
    each: 2,
    src:'f6.jpg',
    colors:['سیاه' , 'سبز']
  },
  {
    title:'کاناپه راحتی',
    price:'8000000',
    each: 3,
    src:'f7.jpg',
    colors:['سیاه' , 'سفید', 'آبی', 'زرد']
  }
]

function App() {
  const [pishnahad,setPishnahad] = useState(false)
  const [contact,setContact] = useState( [{
    name:'',
    email:'',
    message:''
  }])

  return (
    <AppContect.Provider value={{myProducts,contact,setContact,pishnahad,setPishnahad}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/:title" element={<ProductsDetail/>}/>
        <Route path="messages" element={<Messages/>}/>
      </Routes>
      </BrowserRouter>
    </AppContect.Provider>

  )
}

export default App
