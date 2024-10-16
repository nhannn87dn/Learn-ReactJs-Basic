import React from "react";

interface UserType {
  id: number;
  name: string;
  avatarUrl: string;
}
//Bước 1: Tạo context
//createContext nhận vào giá trị khởi tạo, mặc đinh là null
export const userContext = React.createContext<UserType | null>(null);

// Bước 2: Tạo Provider context
//userContext.Provider sử dụng props value mặc định: chứa thông tin cần truyền xuống children
export const UserProvider = ({
  user,
  children,
}: {
  user: UserType;
  children?: React.ReactNode;
}) => {
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
