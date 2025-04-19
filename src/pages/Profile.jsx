import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const Profile = () => {
  const { user } = useContext(AppContext)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Blood Type:</strong> {user.bloodType}</p>
      <p><strong>Emergency Contact:</strong> {user.emergencyContact}</p>
    </div>
  )
}

export default Profile
