"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
  const [search, setSearch] = useState('')


    const found =  props.restaurants.filter(data => {
      console.log(data)
      if(data.title.toUpperCase().includes(search.toUpperCase())) {
        return data
      }
     
    })


  return (
    <>

    <div className='w-full h-96 mt-5 flex flex-row items-center justify-center rounded '>
            <Image width={400} height={400} className=""  src="https://img.freepik.com/premium-photo/burger-with-flying-elements_147620-1942.jpg?w=740"></Image>
            <input onChange={(e) => setSearch(e.target.value)} className='w-1/2 h-12 rounded-lg border-2 border-gray-500 focus:border-red-500 focus:outline-none'></input>
            <button className='button-bg-color p-3 rounded-lg text-white text-sm hover:bg-red-600 h-12 ml-4'>Restorant Ara</button>
      </div>

     <div className='text-center mt-14 mb-14'>
        <h1 className='tex-tcenter text-3xl text-color-red'> RESTORANTLARIMIZ    </h1>
      </div>

        <div className='container mx-auto mt-4'>
            
            <div className=' grid grid-cols-3 gap-5 mt-5 mb-5'>
               

                {
                found.map(data => {

                    //console.log(data.img)
                    //console.log(data.id)
                    //console.log(data.title)
                    //console.log(data.price)
                    //console.log(data.favorite)
                    //console.log(data)

                    
                    

                    return(
                        <div className='card w-96 h-96  rounded-xl border-2 hover:border-red-200'>
                        <Link href={`/restorants/${data.id}`}>
                            
                            <Image src={data.img} width={450} height={450}  className='roundex-xl w-96 h-64' ></Image>
                        </Link>
                        <div className='footer'>
                            <h1 className='text-center text-medium text-black mt-5 mb-5 text-2xl'>{data.title}</h1>
                        </div>
                        <div className='footer2 flex flex-row'>
                        <p className='self-center mr-20 ml-2'>Min Gönderim: {data.price}</p>

                        <Link className='text-red-500 flex items-center ' href="/">
                            {data.favorite}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </Link>
                        </div>

                        </div>
                    )
           
                })
                }
                
                

                
                
            

            
            </div>

        </div>
       

    </>
  )
}

export default Card