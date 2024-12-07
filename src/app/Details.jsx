import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import useApiFech from '../hooks/useApiFech'
import { MdLockOutline } from "react-icons/md";
import Spinner from '../components/home/Spinner';
import Reservations from '../components/details/Reservations';
import Description from '../components/details/Description';
import Gallery from '../components/details/Gallery';
import Map from '../components/details/Map';
import Hero from '../components/details/Hero';
import { useAuth } from '../context/auth';
import Reviews from '../components/details/Reviews';
import Related from '../components/details/Related';

function Details() {
  const params = useParams()
  const { isAuth } = useAuth()
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
        <h2 className='text-2xl font-semibold text-center mb-4'>Reserve</h2>

        {/* reservaciones */ }
        <div className='mb-8'>
        {isAuth ? (<Reservations hotelId={hotel?.id} />) :(
          <p className='flex place-items-center justify-center gap-1'><MdLockOutline className='size-7' />
          <span>Please, login to make a reservation</span></p> )}          
        </div>
        
        {/* grid */}
        <div className='grid grid-cols-2  gap-5 mb-5'>
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
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* reviews  */}
          <div><Reviews hotelId={hotel?.id} /></div>

          {/* related hotels*/}
          <div className='h-full'>
            <div className='sticky top-20 '>
              <Related cityId={hotel?.cityId} hotelId={hotel?.id} />
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export  { Details }