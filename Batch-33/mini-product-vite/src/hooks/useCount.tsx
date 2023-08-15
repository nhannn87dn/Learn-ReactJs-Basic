import { create } from 'zustand';


interface TypeState {
    count: number;
    actionUp: () => void;
    actionDown: () => void
}

//Export ra de dung chung
//set là set trạng thái mặc định
const useStore = create<TypeState>((set) => ({
    count: 0,
    actionUp: () => set((state) => ({ count: state.count + 1 })),
    actionDown: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;