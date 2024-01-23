import { DEPOSIT, WITHDRAW, BankActionTypes } from "./bankActions";

// Initial State
type BankState = {
  balance: number;
};

const initialState: BankState = {
  balance: 0,
};

// Reducer
export function bankReducer(
  state = initialState,
  action: BankActionTypes
): BankState {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.payload };
    case WITHDRAW:
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}
