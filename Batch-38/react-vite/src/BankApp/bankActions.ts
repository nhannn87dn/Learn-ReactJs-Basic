//Lệnh rút tiền
// Action Types
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

export type DepositAction = {
  type: typeof DEPOSIT;
  payload: number;
};

export type WithdrawAction = {
  type: typeof WITHDRAW;
  payload: number;
};

export type BankActionTypes = DepositAction | WithdrawAction;

// Action Creators
export function depositMoney(amount: number): BankActionTypes {
  return {
    type: DEPOSIT,
    payload: amount,
  };
}

export function withdrawMoney(amount: number): BankActionTypes {
  return {
    type: WITHDRAW,
    payload: amount,
  };
}
