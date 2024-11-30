import React from 'react'

function Map({ lat , lon}) {
  const zoom = 15
  return (
    <div className='w-full h-full object-cover rounded-lg overflow-hidden'>
     {/* <div className='aspect-square rounded-lg overflow-hidden '> */}
         
        <iframe src={`//maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
        loading='lazy'
        allowFullScreen        
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-full' ></iframe></div>
  )
}

export default Map