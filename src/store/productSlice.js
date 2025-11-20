import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  editId: null,
  editData: { name: "", price: "", quantity: "", image: "" },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = { id: Date.now(), ...action.payload };
      state.products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(state.products)); 
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    setEditProduct: (state, action) => {
      state.editId = action.payload.id;
      state.editData = { ...action.payload.data };
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload.data };
        localStorage.setItem("products", JSON.stringify(state.products));
      }
      state.editId = null;
      state.editData = { name: "", price: "", quantity: "", image: "" };
    },
    setEditData: (state, action) => {
      state.editData = { ...state.editData, ...action.payload };
    },
    cancelEdit: (state) => {
      state.editId = null;
      state.editData = { name: "", price: "", quantity: "", image: "" };
    },
  },
});

export const { addProduct, deleteProduct, setEditProduct, editProduct, setEditData, cancelEdit } = productSlice.actions;
export default productSlice.reducer;
