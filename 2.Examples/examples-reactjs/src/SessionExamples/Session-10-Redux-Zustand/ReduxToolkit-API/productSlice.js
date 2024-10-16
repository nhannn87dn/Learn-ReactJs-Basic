// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Định nghĩa action để gọi API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (categoryId) => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    );
    const data = await response.json();
    return data;
  }
);

// Tạo slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
