import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
  setEditId,
  setEditText,
  cancelEdit,
} from "../../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { editId, editText } = useSelector((state) => state.todo);
  const isEditing = editId === todo.id;

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, title: editText }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    else if (e.key === "Escape") dispatch(cancelEdit());
  };

  return (
    <div className="flex items-center gap-2 border-b border-gray-200 py-1">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => dispatch(setEditText(e.target.value))}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 border-b border-blue-400 px-1 py-0.5"
        />
      ) : (
        <p
          className={`flex-1 ${todo.checked ? "line-through text-gray-400" : ""}`}
        >
          {todo.title}
        </p>
      )}

      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            save
          </button>
          <button
            onClick={() => dispatch(cancelEdit())}
            className="text-red-500 hover:text-red-700"
          >
            cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() =>
              dispatch(setEditId({ id: todo.id, text: todo.title }))
            }
            className="text-blue-500 hover:text-blue-700"
          >
            edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 hover:text-red-700"
          >
            del
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
