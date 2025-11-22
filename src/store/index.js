import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import productReduser from './productSlice'
import authReducer from './authSlice'
const store = configureStore({
  reducer: {
    todo: todoReducer,
    product:productReduser,
    auth:authReducer,
  },
});

export default store;
