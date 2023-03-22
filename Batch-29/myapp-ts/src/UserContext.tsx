import React from "react";


export type UserType = {
    name: string,
    email: string,
    avatarUrl: string
  }

export const UserContext = React.createContext<UserType | null>(null);