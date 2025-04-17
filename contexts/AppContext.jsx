import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [medications, setMedications] = useState([])
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    bloodType: 'O+',
    emergencyContact: '9876543210'
  })

  return (
    <AppContext.Provider value={{
      appointments,
      setAppointments,
      medications,
      setMedications,
      user,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  )
}
