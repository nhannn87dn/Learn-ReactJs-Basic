import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TUser {
  id: number;
  name: string;
}

interface AuthState {
  user: null | TUser;
  setUser: (u: TUser) => void;
}

export const useAuth = create(
  devtools<AuthState>((set) => ({
    user: null,
    setUser: (user: TUser) => {
      set({ user });
    },
  }))
);
