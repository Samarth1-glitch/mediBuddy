import React from 'react'

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
      <p>Date: {appointment.date}</p>
      <p>Reason: {appointment.reason}</p>
    </div>
  )
}

export default AppointmentCard
