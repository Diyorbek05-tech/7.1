import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  editId: null,
  editText: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        checked: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.checked = !todo.checked;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
      state.editId = null;
      state.editText = "";
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setEditId: (state, action) => {
      state.editId = action.payload.id;
      state.editText = action.payload.text;
    },
    setEditText: (state, action) => {
      state.editText = action.payload;
    },
    cancelEdit: (state) => {
      state.editId = null;
      state.editText = "";
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  setEditId,
  setEditText,
  cancelEdit,
} = todoSlice.actions;

export default todoSlice.reducer;
