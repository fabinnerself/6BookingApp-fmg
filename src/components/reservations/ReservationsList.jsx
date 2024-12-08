import React from 'react'
import ReservationsCard from './ReservationsCard'

import { Text} from '../../containers/Language';

function ReservationsList({ reservations , onDelete , onRate}) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6'>
      {reservations?.map(reservation => (
        <ReservationsCard 
          key={reservation.id} 
          reservation={reservation}
          onDelete ={onDelete} 
          onRate ={onRate}
          />
      ))}
    
      {reservations.length ===0 && (
          <p> <Text tid="r_noreservations" /> </p>)}
    </div>
  )
}

export default ReservationsList