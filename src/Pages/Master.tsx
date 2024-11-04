import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Topbar from '../Components/Topbar';
import Service from './Service';
import Cart from './Cart';
import { useState } from 'react';

interface cartpagedata{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{rate: number;count:number};
}

export default function Master() {
  
  const[cartpage,setCartpage]=useState<cartpagedata[]>([]);
   
  const cartsetting=(data:cartpagedata[])=>{
    setCartpage(data)
  }  

   return (
    <BrowserRouter>
      <Topbar cartcount={cartpage}/>  
      <Routes>
        <Route path="/" element={<Home cartfeedbak={cartsetting} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cart" element={<Cart cartpagedetails={cartpage}/>} />
      </Routes>
    </BrowserRouter>
  )
}

