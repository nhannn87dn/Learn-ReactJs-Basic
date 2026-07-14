import { create } from 'zustand'

type CountState = {
    count: number
    increment: () => void
}

// Kho chung
export const useCountStore = create<CountState>((set) => ({
    count: 0, //state count
    increment: () => set((state) => ({ count: state.count + 1 })), //phuong thuc thay doi state count
}))