import './Home.css'
import { useEffect,useState } from 'react'

interface productdatatype {
  price: number;
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating:{rate: number,count:number}
}

function About() {
  const[data,setdata]=useState<productdatatype[]>([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').
    then(res=>res.json()).
    then(json=>setdata(json))
    
  },[])


  return (
    <div className="Homepagetop">
      {
        data.map((item)=>{
          return(
            <div key={item.id}>{item.title}</div>
          )
        })
      } 
    </div>
  )
}

export default About
