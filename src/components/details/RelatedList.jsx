import React from 'react'
import RelatedCard from './RelatedCard'
import { Text } from '../../containers/Language';


function RelatedList({ relateds }) {
  return (
    <div>{relateds?.map((hotel) => (
        <RelatedCard key={hotel?.id} hotel={hotel}/>
    ))}
    {relateds.length===0 && (
        <p className='font-semibold text-center'><Text tid="h_noHotelsRelated" /></p>
    )}
    </div>
  )
}

export default RelatedList