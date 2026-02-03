import { createContext } from "react";

interface UserType {
  id: number;
  name: string;
}
//Bước 1: Tạo context
//createContext nhận vào giá trị khởi tạo, mặc đinh là null
export const userContext = createContext<UserType | null>(null);
