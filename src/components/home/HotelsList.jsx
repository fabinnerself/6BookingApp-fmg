import React from 'react'
import HotelCard from './HotelCard'
import { Text } from '../../containers/Language';

function HotelsList({ hotels }) {
  
  return (  
    <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]  gap-6'>
      {hotels?.map(hotel => (
          <HotelCard key={hotel?.id} hotel={hotel} />
      ))
    }
{hotels.length ===0 && (
    <p><Text tid="h_noHotels" /></p>)}    

    </div>
  )
}

export default HotelsList