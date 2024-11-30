import React from 'react'

function Gallery({ images }) {

   const imagesG = images?.images && images.images[0].url

  // if (!images) return

  return (
     <div className='w-full h-full object-cover rounded-lg overflow-hidden'>
      <img  src={imagesG} alt="Photo" ></img> </div> 
      
  )
}

export default Gallery