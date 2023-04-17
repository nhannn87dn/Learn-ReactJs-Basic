import {create} from 'zustand';


interface TypeState {
    count: number;
    actionUp: () => void;
    actionDown: () => void
  }
  
  export const useCount = create<TypeState>((set) => ({
      count: 0,
      actionUp: () => set((state) => ({ count: state.count + 1 })),
      actionDown: () => set((state) => ({ count: state.count - 1 })),
  }));
  