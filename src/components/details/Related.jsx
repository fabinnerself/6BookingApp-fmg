import React, { useEffect } from 'react'
import useApiFech from '../../hooks/useApiFech'
import RelatedList from './RelatedList'

function Related({ cityId, hotelId}) {
    const [relateds, getRelated] = useApiFech()

    useEffect(()=> {
        if(cityId){
            getRelated({
                url: `/hotels?cityId=${cityId}`
            })
        }
        
    },[cityId])

    const filtered = relateds.filter(hotel => hotel.id != hotelId)
    
  return (
    <div> 
        <RelatedList relateds={filtered} />
    </div>
  )
}

export default Related