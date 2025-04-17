import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

const MedicationForm = () => {
  const [med, setMed] = useState({ name: '', dosage: '', time: '' })
  const { medications, setMedications } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!med.name || !med.dosage || !med.time) return alert('All fields required')
    setMedications([...medications, med])
    setMed({ name: '', dosage: '', time: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input className="border p-2 w-full" placeholder="Medication Name" value={med.name} onChange={(e) => setMed({ ...med, name: e.target.value })} />
      <input className="border p-2 w-full" placeholder="Dosage" value={med.dosage} onChange={(e) => setMed({ ...med, dosage: e.target.value })} />
      <input className="border p-2 w-full" type="time" value={med.time} onChange={(e) => setMed({ ...med, time: e.target.value })} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Add Medication</button>
    </form>
  )
}

export default MedicationForm
