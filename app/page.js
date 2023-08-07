"use client"
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { useState,useEffect } from "react";

export default function Home() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const api = async () => {
      const result =  await fetch("http://localhost:3001/resturants")
      const data = await result.json()
      //console.log(data[2].foods[4].food_title)
      setRestaurants(data)
   }
   api() 

  },[])
  
 

  return (
    
    <>
    
      <Navbar></Navbar>

      <Card restaurants={restaurants} ></Card>
      

      <Footer></Footer>
    </>
   
  )
}
