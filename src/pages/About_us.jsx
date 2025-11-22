import React from 'react'

const About_us = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Us
      </h1>

      <p className="text-gray-700 text-lg max-w-3xl text-center mb-10">
        Welcome to our company! We are committed to delivering the best products 
        and services to our customers. Our team works tirelessly to innovate 
        and create value for our community.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To provide top-quality products and services that make our customers happy.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            To be a leading company recognized for innovation and customer satisfaction.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Values</h3>
          <p className="text-gray-600">
            Integrity, quality, teamwork, and a customer-first approach in everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About_us
