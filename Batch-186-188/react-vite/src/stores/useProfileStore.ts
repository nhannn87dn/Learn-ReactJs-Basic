import axios from "axios";
import { create } from "zustand";

type TUser = {
  id: number;
  email: string;
  name: string;
};

type TProfileStore = {
  user: null | TUser;
  isLoading: boolean;
  fetchProfile: () => void;
};
//GỌI API và lưu nó vào một state global để dùng chung
export const useProfileStore = create<TProfileStore>((set) => ({
  user: null,
  isLoading: false,
  fetchProfile: async () => {
    try {
      set({ isLoading: true });
      const url = "https://api.escuelajs.co/api/v1/users/1";
      const response = await axios.get(url);
      set({ user: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },
}));
