import { create } from "zustand";
import axios from "axios";
interface IUser {
  email: string;
  name: string;
}

type UserStoreType = {
  user: null | IUser;
  fetchUser: () => void;
};

const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  //   setUser: (data: IUser) => {
  //     set({ user: data });
  //   },
  fetchUser: async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/users/1");
    set({ user: response.data });
  },
}));

export default useUserStore;
