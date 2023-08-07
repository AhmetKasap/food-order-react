'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Basket from '@/components/Basket'


const page = ({ params }) => {

  const [restaurants, setResturants] = useState([])
  useEffect(() => {
    const api = async () => {
      const result = await fetch('http://localhost:3001/resturants')
      const data = await result.json()
      setResturants(data)
    }
    api()

  }, [])

  const [basket, setBasket] = useState([])

  const addToBasket = (food) => {
    
    setBasket([...basket, food]);
  };

  console.log(basket)


  return (
    <>
      <Navbar/>
     
      {
        restaurants.map(result => {
          if (result.id === parseInt(params.id)) {
            return (
              <>
                <div className='border w-full h-44'>
                  <div className='text-center'>
                    <h1 className='text-3xl text-dark '>{result.title}</h1>
                  </div>
                  <div className='container mx-auto gap-0 grid grid-cols-4 mt-16'>
                    <div>
                      <Link className='font-bold flex items-center text-sm' href="/">
                        {result.favorite}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      </Link>
                    </div>
                    <div className='text-sm text-black font-bold'>Ücretsiz Gönderim</div>
                    <div className='text-sm text-black font-bold'>Minimum : {result.price}</div>
                    <div className='text-black text-sm font-bold'>Yorumlar</div>
                  </div>
                </div>
              </>


            )
          }
        })

      }


        <Basket 
        basket = {basket}
        setBasket = {setBasket}
        />


     


{
  restaurants.map(result => {
    if (result.id === parseInt(params.id)) {
      return (
        <div key={result.id}>
          <div className='w-1/2 mx-auto h-full mt-8'>
            {result.menus_title.map(data => (
              <div key={data.id}>
                <h1 className='text-2xl'>{data.title}</h1>
                <div className='grid grid-cols-2'>
                  {result.foods.map(food => (
                    <div key={food.id} className='border-2 h-36 m-4 mr-4'>
                      <div className='grid grid-cols-2'> 
                        <div> 
                          <h1 className='text-lg text-gray-800 m-3'>{food.food_title}</h1>
                          <p className='text-xs font-light mr-3 ml-3 mt-6'>{food.content}</p>
                        </div>
                        <div className='justify-self-end'> 
                          <p className='m-3'>{food.price} TL</p> 
                          <button onClick={() => addToBasket(food)} className='m-3 text-sm rounded-xl text-white bg-blue-700 hover:bg-blue-800 p-2'>+ Ekle</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  })
}



	













      

    <Footer></Footer>
    </>

      
    )


    

      
  
}

export default page