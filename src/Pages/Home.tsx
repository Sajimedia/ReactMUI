import { Button,Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './Home.css'
import { useState,useEffect } from 'react';

interface cartpagedata{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{rate: number;count:number};
}
interface DatasetPoints {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{rate: number;count:number};
}

interface Cartpage{
  cartfeedbak:(item:cartpagedata[])=>void
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Home(props:Cartpage) {

 const[counter,setcounter]=useState<number>(0);
 const[dataset,setdataset]=useState<DatasetPoints[]>([]);
 const[cartItems,setCartItems]=useState<DatasetPoints[]>([]);  

 useEffect(()=>{
    setcounter(1000);
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((json)=>{setdataset(json)});
 },[])


 useEffect(()=>{
  console.log(cartItems);
  props.cartfeedbak(cartItems)
 },[cartItems])
 
 const increment=()=>{
    setcounter(counter+1)
 }

 const Showdataset=()=>{
    console.log(dataset)
 }

  const patchclick=(a:number)=>{
    const result=dataset.find((arritm)=>arritm.id===a);
    if(result)
    setCartItems((prev:any)=>[...prev,result])
  }

  return (
    <div className="Homepagetop">
      Home Page
      <Button onClick={increment}>Counter {counter}</Button>
      <Button onClick={Showdataset}>Show Data</Button>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          dataset.map((item)=>{
            return(
              <Grid size={3} key={item.id}>
                <Item onClick={()=>{patchclick(item.id)}}>{item.title}</Item>
              </Grid>
            )  
          })
        }   
      </Grid>
    </Box>
  </div>
  )
}

