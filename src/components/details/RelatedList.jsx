import React from 'react'
import RelatedCard from './RelatedCard'

function RelatedList({ relateds }) {
  return (
    <div>{relateds?.map((hotel) => (
        <RelatedCard key={hotel?.id} hotel={hotel}/>
    ))}
    {relateds.length===0 && (
        <p className='font-semibold text-center'>No related hotels found.</p>
    )}
    </div>
  )
}

export default RelatedList