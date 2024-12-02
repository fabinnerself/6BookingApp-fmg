import React, { useEffect } from 'react'
import HotelsList from '../components/home/HotelsList'
import { useHotels } from '../context/hotels'
import Layout from '../layouts/Layout'

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
    <Layout >     
      <section className='max-w-5x1 mx-auto px-5 py-10'>        
        <HotelsList hotels={hotels} />        
      </section>      
      </Layout>
  )
}

export   {Home}