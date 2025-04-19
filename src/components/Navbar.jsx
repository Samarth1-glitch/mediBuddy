import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">MediBuddy</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/medications">Medications</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}

export default Navbar
