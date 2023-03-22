import React, { Fragment, ReactNode, useMemo, createContext } from 'react';
import { ChakraProvider } from '@chakra-ui/react'


import './App.css';
import HomePage from './pages/HomePage';
import { UserContext, UserType } from './UserContext';
import TodoReducer from './components/TodoReducer';

const user = {
name: 'John', 
email: 'john@example.com',
avatarUrl: 'https://via.placeholder.com/100x100.png'
};


function App() {
  //Bước 1: tạo Context UserContext.tsx
  //Bước 2: Tạo Provider để bao lấy component con
  // Bước 3: truyền vào Provider một prop có tên value = giá trị gì đó
  // mà bạn muốn componet con nhận được
  
  return (
    <>
    <UserContext.Provider value={user}>
      {/* <HomePage user={user} /> */}
      <TodoReducer />
    </UserContext.Provider>
    </>
  );
}

export default App;
