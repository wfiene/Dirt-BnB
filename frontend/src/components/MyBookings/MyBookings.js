import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'

import { deleteBookingThunk, getUserBookingsThunk } from "../../store/bookings"
import EditBookingModal from "../EditBookingModal/EditBooking"
import './MyBookings.css'

const MyBookingsIndex = () => {

  const dispatch = useDispatch()

  const userBookings = useSelector(state => state.bookings)
  console.log('userBookings', userBookings)


  const dateMod = (date) => {
    let resDate = new Date(date)
    return resDate.toDateString()
  }


  useEffect(() => {
    dispatch(getUserBookingsThunk())
  }, [dispatch])

  return (
    <div id='mb-outer'>
      <div id='mb-main'>
        <div id='mb-frame'>
          {Object.values(userBookings).map(booking => (
            <>
            {booking && booking.id && <div id='mb-card'>
              {booking && booking.id && <div id='mb-img-container'>
                {/* <NavLink to={`/spots/${booking.Spot.id}`} > */}
                {booking && booking.Spot && booking.Spot.previewImage && <img id='mb-card-img' onError={(e) => e.target.src= "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={booking.Spot.previewImage} />}
                {/* </NavLink> */}
                {booking && booking.id && <div id='mb-info'>
                {booking && booking.id && <div id='mb-name-place'>
                  {booking.Spot && booking.Spot.name &&<div id='mb-spot-name'>{booking.Spot.name}</div>}
                  {booking.Spot && booking.Spot.city && booking.Spot.country &&<div id='mb-city-country'>{booking.Spot.city}, {booking.Spot.country}</div>}
                  </div>}
                  {booking && booking.id && <div id='mb-dates'>{dateMod(booking.startDate)} - {dateMod(booking.endDate)}</div>}
                  {/* <div id='mb-confNum'>
                    <div id='bookingNum'>BOOKING #</div>
                    <div>183KI{booking.id}</div>
                  </div> */}
                </div>}
              </div>}
              {booking && booking.id && <div id='mb-edit-del'>
                <EditBookingModal id='mb-edit' bookings={booking} /> |
                <button id='mb-delete' onClick={() =>dispatch(deleteBookingThunk(booking.id))}>delete</button>
              </div>}
            </div>}
            </>
          ))}
        </div>
      </div>
    </div>
  )

}

export default MyBookingsIndex