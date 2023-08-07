


import React from 'react'
import { MdOutlineAddCircle,MdDeleteOutline } from "react-icons/md";


const Basket = (props) => {



  const deleted = (id) => {
    const newBasket = props.basket.filter(data => {
      if(data.id !== id) {
        return data
      }
    })
    props.setBasket(newBasket)
  }


  const added = (data) => {
    props.setBasket([...props.basket, data]);
  }


  const groupBasketByFood = (basket) => { //sepet bilgilerini al.
    const groupedBasket = {};             //boş bir obje oluştur
    basket.forEach(data => {              //sepetin tüm elemanlarını gez
      if (!groupedBasket[data.food_title]) { //groupedBasket objesi içerisinde food_title yok ise 
        groupedBasket[data.food_title] = { ...data, count: 1 }; // tüm datayı ve count adında yeni bir değişkeni groupedBasket e ekle
      } else {                               //groupedBasket objesi içerisinde food_title var ise 
        groupedBasket[data.food_title].count++;      //datayı ekleme sadece count 1 arttır           
      }
    });
    return Object.values(groupedBasket); // groupedBasket objesini diziye çevir ve döndür
  };

  const newBasket = groupBasketByFood(props.basket);
 
 
  



  return (
    <>

      <div className='bg-gray-white w-96 h-auto border-2 hover:border-cyan-600 border-cyan-700 rounded-xl mb-8 fixed m-5'>
        <h1 className='text-center text-color-cyan text-3xl font-bold mb-3 mt-3'>Sepet</h1>

            
            {

           
            newBasket.map((data, index) => {
              

              
              return(
                <>
                 <div className='grid grid-cols-2'>
                  <div className='ml-2'>
                    <p className='text-sm m-3'> {data.food_title} </p>
                  
                    <p className='text-sm m-3'> {data.price} x {data.count} TL </p>

                  </div>
                  <div className='ml-16'>
                  <button onClick={() => added(data)} className='ml-1 mr-2 mt-3 text-xl text-blue-500'><MdOutlineAddCircle/></button>
                    {
                    data.count > 0 ? (
                      <span className='text-xl mr-2 mt-2.5'>{data.count}</span>
                    ) : (
                      <span className='text-xl mr-2 mt-2.5'>0</span>
                    )
                    }

                    
                    <button onClick={() => deleted(data.id)} className='ml-1 mt-3 text-xl text-red-500'><MdDeleteOutline/></button>
                  </div>

                 </div>
                 
                </>
               
              )
            })
            }
            <hr></hr>
            <div className='text-center'>
              <button className='bg-cyan-700 hover:bg-cyan-800 rounded-lg p-2 mt-3 mb-3 text-sm text-white'>Sepeti Tamamla</button>

            </div>

      </div>

        
    </>
  )
}

export default Basket

