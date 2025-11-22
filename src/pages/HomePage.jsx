import React from 'react'
import TodoList from '../components/todo/TodoList'     // TodoList faylingiz yo'lini moslang
import ProductList from '../components/products/ProductList' // ProductList faylingiz yo'lini moslang

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Welcome to Homepage
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Todo List</h2>
          <TodoList />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product List</h2>
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default HomePage
