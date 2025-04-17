import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import MedicationForm from '../components/MedicationForm'

const Medications = () => {
  const { medications } = useContext(AppContext)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Medication Tracker</h2>
      <MedicationForm />
      <ul className="mt-6 space-y-2">
        {medications.map((med, idx) => (
          <li key={idx} className="border p-2 rounded bg-green-50">
            <strong>{med.name}</strong> - {med.dosage} at {med.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Medications
