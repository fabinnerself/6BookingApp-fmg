import React from 'react'
import {priceFormat} from "../../utils"
import { Link } from 'react-router'
import { IoLocationOutline } from "react-icons/io5"
import { Text } from '../../containers/Language';


function RelatedCard({ hotel }) {
  return (
    <div className='border-b py-4'>
        <div className='grid grid-cols-[.3fr_1fr] gap-4' >
            <div className='aspect-square rounded-lg overflow-hidden'>
                <img className='size-full object-cover' src={hotel.images[0]?.url} alt={hotel?.name} />
            </div>

            <div className='flex flex-col '>
                <div  className='grow'>
                    <h3 className='font-semibold'>
                        {hotel?.name}</h3>
                        <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                            < IoLocationOutline />
                            <p className='text-sm'>{hotel?.city.name}, {hotel?.city.country}</p>
                        </div>
                        <p className='font-semibold'>{priceFormat.format(hotel?.price)}</p>
                        </div>
                </div>                
                <Link className='btn' to={`/hotel/${hotel?.id}`} ><Text tid="h_moreinfo" /></Link>
            </div>
        </div>
        
    </div>
  )
}

export default RelatedCard