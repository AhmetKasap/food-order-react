import React from 'react'
import Navbar from '@/components/navbar'
import Link from 'next/link'

const Page = () => {
  return (
    <>
        <Navbar></Navbar>
        <form>
        <div className='w-96 mx-auto mt-10'>
          <label htmlFor='email' className='text-sm font-bold'>E-Mail</label>
          <input id='email' type='email' className='mt-2 mb-5 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 
          
          <label htmlFor='name' className='text-sm font-bold'>Ad</label>
          <input id='name' type='text' className='mt-2 mb-5 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 

          <label htmlFor='lastname' className='text-sm font-bold'>Soyad</label>
          <input id='lastname' type='text' className='mt-2 mb-5 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 

          <label htmlFor='phone' className='text-sm font-bold'>Telefon</label>
          <input id='phone' type='tel' className='mt-2 mb-5 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 

          <label htmlFor='address' className='text-sm font-bold'>Adres</label>
          <input id='address' type='address' className='mt-2 mb-5 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 

          <label htmlFor='password' className='text-sm font-bold'>Şifre</label>
          <input id='password' type='password' className='mt-2 w-96 h-10 border-2 border-gray-500 rounded-xl text-sm text-black focus:border-red-500 focus:outline-none'></input> 
          
          <div className='text-center'>
            <button type='button' className='bg-blue-700 hover:bg-blue-800 p-3 rounded-xl mt-5 mb-3 text-sm text-white'>Kayıt Ol</button>
          </div>
          
        </div>
      </form>
    </>
  )
}

export default Page