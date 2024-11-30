import React from 'react'
import RatingStars from '../RatingStars'
import { IoLocationOutline } from "react-icons/io5"

function Description({ rating, address, description}) {
  return (
    <div>
      <div className='mb-4'>
    <RatingStars rating={rating} />
    </div>
      <p className='flex items-center gap-1 '>
        <IoLocationOutline /><span className="text-xs">{address}</span> <IoLocationOutline /></p>
      <p className=''>{description}</p>

    </div>
  )
}

export default Description