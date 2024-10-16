import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import bankReducer from "./features/bank/bankSlice";
import productReducer from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank: bankReducer,
    product: productReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/**
 * Nếu sử dụng useDispatch, useSelector từ react-redux ở các component
 * Bạn phải import react-redux vào tất cả các component có sử dụng store
 * Thay vì thế làm bước trung gian ở đây
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
