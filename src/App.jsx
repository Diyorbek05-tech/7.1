import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex gap-4">
          <Link to="/" className=" hover:text-blue-500">Todo</Link>
          <Link to="/products" className=" hover:text-blue-500">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="max-w-md mx-auto border p-4 rounded shadow">
              <h1 className="text-2xl font-bold mb-4">Todo App</h1>
              <AddTodo />
              <TodoList />
            </div>
          } />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
