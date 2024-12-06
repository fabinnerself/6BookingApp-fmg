import React from 'react'
import RatingStars from '../RatingStars'
import { IoLocationOutline } from "react-icons/io5"

function Description({ rating, address, description}) {
  return (
    <div>
      <div className='flex items-center gap-2'>
    <RatingStars rating={rating} />
    <span className= ' text-sm'>{rating}</span>
    </div>
      <p className='flex items-center gap-1 mb-4 '>
        <IoLocationOutline /><span className="text-xs">{address}</span> <IoLocationOutline /></p>
      <p className='text-justify'>{description}</p>

    </div>
  )
}

export default Description