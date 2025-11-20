import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editId: null,
  editText: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        checked: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.checked = !todo.checked;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
      state.editId = null;
      state.editText = "";
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
