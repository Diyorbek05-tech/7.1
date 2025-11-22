import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user, isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700">
          Please log in to view your profile.
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-md">
        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">Age: {user.age}</p>
        <p className="text-gray-600 mb-4">Address: {user.address}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8 w-full max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Tasks Completed</h3>
          <p className="text-gray-600">12 Todos done</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Products Purchased</h3>
          <p className="text-gray-600">5 Products bought</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
