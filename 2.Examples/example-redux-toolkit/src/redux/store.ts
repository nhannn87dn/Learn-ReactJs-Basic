import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import bankReducer from "./features/bank/bankSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank: bankReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
