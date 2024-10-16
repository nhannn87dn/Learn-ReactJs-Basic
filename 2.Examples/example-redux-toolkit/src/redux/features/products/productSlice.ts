import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "./productApi";
import { IProduct } from "./productsType";
import { RootState } from "../../store";

interface ProductsState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

//Giá trị khởi tạo
const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

//Tạo một hàm sync để fetch Data
export const fetchProducts = createAsyncThunk<IProduct[], void>(
  "products/fetchProducts",
  async () => {
    const response = await fetchData();
    return response;
  }
);

//Tạo slice
export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  /**
   * Liên quan đến gọi API thì
   * tổ chức các trạng thái của API như dưới đây
   */
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; //TH đang xử lý
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.status = "succeeded"; //TH đã gọi thành công
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; //TH gọi thất bại
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

//Truy cập vào State của productsSlice
export const selectProducts = (state: RootState) => state.product;

export default productsSlice.reducer;
