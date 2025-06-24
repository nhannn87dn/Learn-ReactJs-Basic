import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUser {
  id: number;
  email: string;
  name: string;
}
interface IUserStore {
  users: IUser[];
  getUsers: () => void;
}

export const useUsersStore = create(
  devtools<IUserStore>((set) => ({
    users: [],
    getUsers: async () => {
      //gọi api sau đó đổ data vào cho users
      const response = await axios.get("https://api.escuelajs.co/api/v1/users");
      console.log("<<=== 🚀 response ===>>", response.data);
      set({ users: response.data });
    },
  }))
);
