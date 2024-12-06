import React from 'react'

function Gallery({ images }) {

   const imagesG = images?.images || []

  // if (!images) return

  return (
     <div className='w-full h-full object-cover rounded-lg overflow-hidden grid grid-cols-4 grid-row-2 gap-4 '>      
      <img  src={imagesG[0]?.url} alt="Photo"  className='w-full h-full object-cover col-span-full rounded-lg'></img> 
      <img  src={imagesG[1]?.url} alt="Photo" className='w-full h-full object-cover col-span-2 row-start-2 rounded-lg'></img>
      <img  src={imagesG[2]?.url} alt="Photo" className='w-full h-full object-cover col-span-2 row-start-2 rounded-lg'></img>
      </div> 
      
  )
}

export default Gallery