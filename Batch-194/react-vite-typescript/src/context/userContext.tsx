import { createContext } from "react";

export interface UserContextType {
  id: number;
  name: string;
  avatarUrl: string;
}

export const UserContext = createContext<UserContextType | null>(null);
