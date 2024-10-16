import { create } from "zustand";

type BankType = {
  balance: number;
  withdrawMoney: (a: number) => void;
  depositMoney: (a: number) => void;
};

/**
 * @return object
 */
const useBankStore = create<BankType>((set) => ({
  balance: 0,
  withdrawMoney: (amount) =>
    set((state) => ({ balance: state.balance - amount })),
  depositMoney: (amount) =>
    set((state) => ({ balance: state.balance + amount })),
}));

export default useBankStore;
