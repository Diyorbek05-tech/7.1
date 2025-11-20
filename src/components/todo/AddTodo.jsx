import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    if (!text) return;

    dispatch(addTodo(text));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Todo kiriting"
        className="flex-1 border border-gray-300 rounded px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
        Qo'shish
      </button>
    </form>
  );
};

export default AddTodo;
