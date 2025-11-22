import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
  setEditId,
  setEditText,
  cancelEdit,
} from "../../store/todoSlice";
import pen from "../../assets/images/pen.svg";
import trash from "../../assets/images/trash.svg";

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
    <div 
      className={`
        group relative flex items-center gap-3 px-4 py-3 rounded-2xl
        bg-gradient-to-r transition-all duration-300 ease-out
        backdrop-blur-sm mb-3 shadow-sm hover:shadow-md
        ${isEditing 
          ? 'from-blue-50 to-cyan-50 border-2 border-blue-400 shadow-lg shadow-blue-200/50 scale-[1.01]' 
          : todo.checked
          ? 'from-emerald-50/80 to-green-50/80 border-2 border-emerald-200'
          : 'from-white to-slate-50/30 border-2 border-gray-200 hover:border-slate-300 hover:from-slate-50 hover:to-slate-100/50'
        }
      `}
    >

      <div className={`
        absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full
        transition-all duration-300 ease-out
        ${todo.checked 
          ? 'h-full bg-gradient-to-b from-emerald-400 via-green-500 to-teal-500' 
          : isEditing
          ? 'h-4/5 bg-gradient-to-b from-blue-400 via-cyan-500 to-blue-500'
          : 'h-0 bg-gradient-to-b from-slate-300 to-slate-400 group-hover:h-2/5'
        }
      `} />
      <label className="relative flex items-center cursor-pointer group/checkbox">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="sr-only peer"
        />
        <div className={`
          w-6 h-6 rounded-lg border-2 transition-all duration-300
          flex items-center justify-center
          ${todo.checked 
            ? 'bg-gradient-to-br from-emerald-400 to-green-500 border-emerald-500 scale-110 shadow-md shadow-emerald-300/40' 
            : 'border-slate-300 bg-white group-hover/checkbox:border-blue-400 group-hover/checkbox:scale-110 group-hover/checkbox:shadow-sm'
          }
        `}>
          {todo.checked && (
            <svg 
              className="w-4 h-4 text-white animate-in zoom-in duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </label>


      {isEditing ? (
        <div className="flex-1 relative">
          <input
            type="text"
            value={editText}
            onChange={(e) => dispatch(setEditText(e.target.value))}
            onKeyDown={handleKeyDown}
            autoFocus
            className="
              w-full px-4 py-2 rounded-lg
              bg-white text-slate-800 font-medium
              border-2 border-blue-300
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              transition-all duration-200
              shadow-sm
            "
          />
          <div className="absolute inset-0 rounded-lg bg-blue-300/5 pointer-events-none" />
        </div>
      ) : (
        <p className={`
          flex-1 text-base font-medium transition-all duration-300
          ${todo.checked 
            ? 'line-through text-slate-400' 
            : 'text-slate-700 group-hover:text-slate-800'
          }
        `}>
          {todo.title}
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-emerald-500 to-teal-500
                text-white font-semibold text-sm
                hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105
                active:scale-95
                transition-all duration-200
              "
            >
              Save
            </button>
            <button
              onClick={() => dispatch(cancelEdit())}
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-rose-400 to-red-500
                text-white font-semibold text-sm
                hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105
                active:scale-95
                transition-all duration-200
              "
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                dispatch(setEditId({ id: todo.id, text: todo.title }))
              }
              className="
                p-2.5 rounded-lg
                bg-blue-100 hover:bg-blue-200
                transition-all duration-200
                hover:scale-110 hover:shadow-md
                active:scale-95
                group/edit
              "
            >
              <img 
                src={pen} 
                alt="Edit" 
                className="w-5 h-5 transition-transform duration-200 group-hover/edit:rotate-12" 
              />
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="
                p-2.5 rounded-lg
                bg-red-100 hover:bg-red-200
                transition-all duration-200
                hover:scale-110 hover:shadow-md
                active:scale-95
                group/delete
              "
            >
              <img 
                src={trash} 
                alt="Delete" 
                className="w-5 h-5 transition-transform duration-200 group-hover/delete:scale-110" 
              />
            </button>
          </>
        )}
      </div>

  
      {todo.checked && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/5 to-green-300/5 pointer-events-none" />
      )}
    </div>
  );
};

export default TodoItem;