import React from 'react'
import { create } from 'zustand';

interface TypeState {
  count: number;
  actionUp: () => void;
  actionDown: () => void
}

const useStore = create<TypeState>((set) => ({
    count: 0,
    actionUp: () => set((state) => ({ count: state.count + 1 })),
    actionDown: () => set((state) => ({ count: state.count - 1 })),
}));

const ZustandExample = () => {
    //Truy cập lần lượt các giá trị của state strong Store
    const count = useStore(state => state.count);
    const actionUp = useStore(state => state.actionUp);
    const actionDown = useStore(state => state.actionDown);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={actionDown}>Down</button>
      <button onClick={actionUp}>Up</button>
    </div>
  )
}
export default ZustandExample;