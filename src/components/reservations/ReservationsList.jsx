import React from 'react'
import ReservationsCard from './ReservationsCard'

function ReservationsList({ reservations }) {
  return (
    <div>
      {reservations?.map(reservation => (
        <ReservationsCard 
          key={reservation.id} 
          reservation={reservation} />
      ))}
    
      {reservations.length ===0 && (
          <p>No reservation found</p>)}
    </div>
  )
}

export default ReservationsList