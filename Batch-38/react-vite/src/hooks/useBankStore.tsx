import { create } from "zustand";

type TBank = {
  balance: number;
  withdrawMoney: (amount: number) => void;
  depositMoney: (amount: number) => void;
};
//1.Tạo Hook Store (Global state)
export const useBankStore = create<TBank>((set) => ({
  balance: 0,
  withdrawMoney: (amount: number) =>
    set((state) => ({ balance: state.balance - amount })),
  depositMoney: (amount: number) =>
    set((state) => ({ balance: state.balance + amount })),
}));
//
