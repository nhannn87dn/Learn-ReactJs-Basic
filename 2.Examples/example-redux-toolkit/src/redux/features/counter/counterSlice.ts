import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0, //giá trị khởi tạo
};


export const counterSlice = createSlice({
  name: "counter", //đặt tên cho slice, không trùng lặp
  initialState,
  reducers: {
    //Hàm tăng count lên 1
    increment: (state) => {
      state.count += 1;
    },
    //Hàm giảm count đi 1
    decrement: (state) => {
      state.count -= 1;
    },
    //Hàm tăng bởi một số tùy chọn
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// Export các action ra để các component có thể sử dụng được.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;