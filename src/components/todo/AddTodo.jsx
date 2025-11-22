import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    if (!text) return;
    
    setIsSubmitting(true);
    dispatch(addTodo(text));
    e.target.reset();
    
    setTimeout(() => setIsSubmitting(false), 300);
  };

  return (
    <div className="mb-8 relative px-2">
    
      <div className={`
        absolute inset-0 rounded-3xl blur-3xl transition-all duration-500
        ${isFocused 
          ? 'bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-pink-500/30 opacity-100' 
          : 'bg-gradient-to-r from-indigo-400/15 via-purple-400/15 to-pink-400/15 opacity-60'
        }
      `} />
      
      <div
        className={`
          relative bg-white rounded-3xl p-2
          transition-all duration-300 ease-out
          ${isFocused 
            ? 'shadow-2xl shadow-purple-500/40 scale-[1.01]' 
            : 'shadow-xl shadow-gray-300/30'
          }
        `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 p-3 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        >
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            
            <input
              type="text"
              placeholder="What's on your mind?"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`
                relative w-full px-6 py-4 rounded-2xl
                bg-slate-800/80 backdrop-blur-sm text-white placeholder-slate-400
                border-2 transition-all duration-300
                focus:outline-none font-medium text-base
                ${isFocused 
                  ? 'border-violet-500 shadow-lg shadow-violet-500/30 bg-slate-800' 
                  : 'border-slate-700 hover:border-slate-600'
                }
              `}
            />
            
          
            <div className={`
              absolute left-3 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full
              bg-gradient-to-b from-violet-500 to-purple-600
              transition-all duration-300 ease-out
              ${isFocused ? 'h-3/5 opacity-100' : 'h-0 opacity-0'}
            `} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              relative px-8 py-4 rounded-2xl
              bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600
              text-white font-bold text-base
              flex items-center gap-2
              transition-all duration-300 ease-out
              hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-110
              active:scale-100
              disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
              group overflow-hidden relative
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            
            <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
              Add
            </span>
            
            <img 
              src={plus} 
              alt="" 
              className={`
                relative z-10 w-6 h-6 transition-all duration-300
                ${isSubmitting ? 'rotate-90 scale-125' : 'group-hover:rotate-180 group-hover:scale-125'}
              `}
            />
          </button>
        </form>
      </div>

  
      <div className={`
        absolute -top-4 left-1/4 w-3 h-3 rounded-full animate-pulse transition-all duration-300
        ${isFocused ? 'bg-violet-500 opacity-70' : 'bg-indigo-400 opacity-40'}
      `} />
      <div className={`
        absolute top-2 right-1/3 w-2 h-2 rounded-full animate-pulse transition-all duration-300
        ${isFocused ? 'bg-purple-500 opacity-70' : 'bg-purple-400 opacity-40'}
      `} style={{ animationDelay: '0.5s' }} />
      <div className={`
        absolute bottom-2 left-1/3 w-2.5 h-2.5 rounded-full animate-pulse transition-all duration-300
        ${isFocused ? 'bg-pink-500 opacity-70' : 'bg-pink-400 opacity-40'}
      `} style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AddTodo;