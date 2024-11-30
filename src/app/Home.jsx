import React, { useEffect } from 'react'
import HotelsList from '../components/home/HotelsList'
import { useHotels } from '../context/hotels'

function Home() {
   const {hotels,getAll} =useHotels()

useEffect(() =>{
  if(hotels.length===0){
    getAll()
  }
    
  // api.get("./hotels")
  //   .then(res => {console.log(res.data)})
},[])

//  console.log("from home ",hotels)

  return (
    <div>
      <section className='max-w-5x1 mx-auto px-5 py-10'>        
        <HotelsList hotels={hotels} />        
      </section>
      
      {/* <pre>
      {JSON.stringify(hotels,null,2)}
      </pre> */}
      </div>
  )
}

export   {Home}