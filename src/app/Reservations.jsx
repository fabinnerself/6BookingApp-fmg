import React, { useEffect } from 'react'
import useApiFech from '../hooks/useApiFech'
import ReservationsList from '../components/reservations/ReservationsList'

function Reservations() {
   const [reservations, fetchReservations] = useApiFech()

useEffect(() =>{
  fetchReservations({
    url:"/bookings"
  })
},[])

  return (
    <div> <ReservationsList reservations={reservations} />
      {/* <pre>{JSON.stringify(reservations,null,3)}</pre> */}

    </div>
  )
}

export { Reservations }