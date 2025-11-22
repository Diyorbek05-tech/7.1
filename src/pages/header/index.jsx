import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/authSlice';

const Header = () => {
   const dispatch = useDispatch();
   const { isAuth } = useSelector((state) => state.auth);
   
   function handleLogin() {
    dispatch(login({
      isAuth: true,
      user: {
        id: 1,
        name: "Diyorbek",
        age: 20,
        address: "Tashkent"
      }
    }));
   }
   
   function handleLogout() {
    dispatch(logout());
   }
   
  return (
    <header className="bg-white shadow-md py-4 px-8">
       <nav className="flex justify-between items-center">
          <div className="flex gap-6 text-gray-700 font-medium">
             <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:text-gray-500 transition-colors duration-200 ${isActive ? 'text-blue-600 font-bold' : ''}`
                }
             >
                Home
             </NavLink>
             <NavLink 
                to="/Todo" 
                className={({ isActive }) => 
                  `hover:text-gray-500 transition-colors duration-200 ${isActive ? 'text-blue-600 font-bold' : ''}`
                }
             >
                Todo
             </NavLink>
             <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `hover:text-gray-500 transition-colors duration-200 ${isActive ? 'text-blue-600 font-bold' : ''}`
                }
             >
                Products
             </NavLink>
             <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `hover:text-gray-500 transition-colors duration-200 ${isActive ? 'text-blue-600 font-bold' : ''}`
                }
             >
                About Us
             </NavLink>
             <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `hover:text-gray-500 transition-colors duration-200 ${isActive ? 'text-blue-600 font-bold' : ''}`
                }
             >
                Profile
             </NavLink>
          </div>

          <div>
            {isAuth ? (
              <button 
                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
                 onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <button 
                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                 onClick={handleLogin}
              >
                Log in
              </button>
            )}
          </div>
       </nav>
    </header>
  )
}

export default Header;
