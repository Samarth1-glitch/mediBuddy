import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import AppointmentCard from '../components/AppointmentCard'
import { getAppointments, addAppointment } from '../services/api'

const Appointments = () => {
  const { appointments, setAppointments } = useContext(AppContext)
  const [form, setForm] = useState({ doctor: '', date: '', reason: '' })

  useEffect(() => {
    getAppointments().then(setAppointments)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.doctor || !form.date || !form.reason) return alert("All fields required")
    const newAppt = await addAppointment(form)
    setAppointments([...appointments, newAppt])
    setForm({ doctor: '', date: '', reason: '' })
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>
      <form className="mb-6 space-y-2" onSubmit={handleSubmit}>
        <input className="border p-2 w-full" placeholder="Doctor's Name" value={form.doctor} onChange={(e) => setForm({ ...form, doctor: e.target.value })} />
        <input className="border p-2 w-full" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Reason" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Appointment</button>
      </form>

      <div className="space-y-3">
        {appointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
    </div>
  )
}

export default Appointments
