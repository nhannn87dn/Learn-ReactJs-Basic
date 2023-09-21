import { create } from 'zustand';
import { axiosClient } from '../lib/axiosClient';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface Auth {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ isAuthenticated: boolean; error: string }>;
  logout: () => void;
}

const useAuth = create<Auth>((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user });
  },
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      const response = await axiosClient.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
      console.log(response);

      if (response && response.status === 201) {
        const isAuthenticated = response.status === 201;
        //Gọi tiếp API lấy thông tin User
        const {data} = await axiosClient.get('https://api.escuelajs.co/api/v1/auth/profile');
        set({user: data, isAuthenticated });
        return { isAuthenticated, error: '' };
      } else {
        return { isAuthenticated: false, error: 'Username or password is invalid' };
      }
    } catch (error) {
      console.log('login error',error);
      return { isAuthenticated: false, error: 'Username or password is invalid' };
    }
  },
  logout: () => {
    // Xóa trạng thái user và isAuthenticated
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },
}));

export default useAuth;