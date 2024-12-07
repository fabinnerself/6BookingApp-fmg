import React from 'react'
import {FaRegStar , FaStarHalfStroke, FaStar, FaS }from 'react-icons/fa6'

function RatingStars({ rating }) {    

    const renderStar = (index) =>{
        if (index < Math.floor(rating)) {
            return <FaStar /> //estrella completa    
        } else if (index < rating) {
            return <FaStarHalfStroke /> 
        } else {
            return <FaRegStar /> 
        } 
    }

    const auxRender = Number(rating).toFixed(1)    
    
  return (
    <div className='flex items-center gap-2'>
        <span className='flex items-center'>{ [...Array(5)].map((_,index) =>{
            return(
                <span key={index}
                className='text-amber-300 text-lg'>
                    {renderStar(index)}</span>
            )
        })
            }</span> {' '}
            <span className='text-gray-400  text-sm'>{auxRender}</span>
    </div>
  )
}

export default RatingStars