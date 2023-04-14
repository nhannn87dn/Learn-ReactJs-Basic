import React from 'react';


export const users = {
  id: 1,
  name: 'John Doe',
  avatar: 'dsds'
}

export interface UserType {
  id: number;
  name:string;
  avatar:string;
}


export const userContext = React.createContext<UserType>(users);