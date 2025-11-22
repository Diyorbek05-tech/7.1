import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import ProductPage from "./pages/ProductPage";
import Layout from './components/Layout';
import About_us from "./pages/About_us";
import Profile from "./pages/Profile";
import PrivateRoute from './components/PriviteRoute';
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
        
         <Route path="/" element={<PrivateRoute />}>
         <Route
          path="/Todo"
          element={
            <div className="max-w-md mx-auto border p-4 rounded shadow">
              <h1 className="text-2xl font-bold mb-4">Todo App</h1>
              <AddTodo />
              <TodoList />
            </div>
          }
        />
         <Route path="/profile" element={<Profile />} />
         <Route path="/products" element={<ProductPage />} />
         <Route path="/about" element={<About_us />} />
         </Route>
       
      
      </Route>
    </Routes>
  );
};

export default App;