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
  isLoading: boolean,
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ isAuthenticated: boolean; error: string }>;
  logout: () => void;
}

const useAuth = create<Auth>((set) => ({
  user: null, //Lưu thông tin của user sau khi login thành công {id: 1, name: 'john'}
  setUser: (user: User) => {
    set({ user });
  },
  isLoading: false,
  isAuthenticated: false, //trạng thái user đã login chưa
  login: async (email: string, password: string) => {
    try {
      set({isLoading: true });
      const response = await axiosClient.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
      console.log(response);

      if (response && response.status === 201) {
        const isAuthenticated = response.status === 201;
        //Gọi tiếp API lấy thông tin User
        const {data} = await axiosClient.get('https://api.escuelajs.co/api/v1/auth/profile');
        set({user: data, isAuthenticated,isLoading: false });
        return { isAuthenticated, error: '',isLoading: false };
      } else {
        return { isAuthenticated: false, isLoading: false , error: 'Username or password is invalid' };
      }
    } catch (error) {
      console.log('login error',error);
      return { isAuthenticated: false,isLoading: false, error: 'Username or password is invalid' };
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