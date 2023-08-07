import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>

    <navbar className="bg-slate-50 w-full h-16 flex flex-row mb-8">
        <div className='basis-1/4 text-center m-auto'>
            <Link href="/" className='logo-color font-bold text-2xl'>YemekYE.com</Link>
        </div>
        <div className='basis-1/2'> </div>

        <div className='basis-1/6 m-auto'>
            <ul className='flex flex-row'>
               <li className='ml-3'><Link href="/login" className='button-bg-color hover:bg-red-600 focus:bg-green-600 p-3 rounded-xl text-sm text-white'>Kayıt Ol</Link></li>
                <li className='ml-3'><Link href="/register" className='button-bg-color hover:bg-red-600 focus:bg-green-600 p-3 rounded-xl text-sm text-white'>Giriş Yap</Link></li>

            </ul>
        </div>
    </navbar>
        


    </>
  )
}

export default Navbar