import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import useApiFech from '../hooks/useApiFech'

import Spinner from '../components/home/Spinner';
import Reservations from '../components/details/Reservations';
import Description from '../components/details/Description';
import Gallery from '../components/details/Gallery';
import Map from '../components/details/Map';
import Hero from '../components/details/Hero';

function Details() {
  const params = useParams()

  const [hotel, getHotel,loading] = useApiFech()

  useEffect(()=>{
    
    const url_get = `/hotels/${params.id}`
    
    getHotel(
      {url:url_get}
    )
  },[params.id])

    
  if(!hotel) return

if(loading) return (
  <div className='grid place-content-center min-h-[100dvh]'>
    <Spinner className="w-14 h-14 text-gray-200 fill-blue-500 animate-spin" /></div>)

  return (
    <div>      
      {/* hero  */}
      <Hero hotel={hotel} />
        
      <div className='max-w-5x1 mx-auto p-5 py-10'>

        {/* reservaciones */ }
        <div className='mb-4'>
          <Reservations hotelId={hotel?.id} />
        </div>
        
        {/* grid */}
        <div className='grid grid-cols-2  gap-5'>
          <div className='col-span-2'>
            <Description 
              description = {hotel?.description}
              rating = {hotel?.rating}
              address = {hotel?.address}
            />
          </div>
          <div>
            <Gallery
              images = {hotel}        
            />        
          </div>
          <div>
            <Map
              lat = {hotel?.lat} 
              lon = {hotel?.lon}  />
          </div>
        </div> 
        {/* reviews  */}
        <div></div>

        {/* related hotels*/}
        <div></div>
      </div>    
    </div>
  )
}

export  { Details }