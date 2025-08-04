import axios from "axios";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

// Define a type for the user object, you can be more specific
export type User = {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
};

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: null | string;
  setError: (error: string | null) => void;
  login: (email: string, password: string, callback: () => void) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLoading: false,
        setIsLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        error: null,
        isAuthenticated: false,
        setUser: (user) => set({ user, isAuthenticated: true }),
        login: async (
          email: string,
          password: string,
          callback: () => void
        ) => {
          //set Loading true
          set({ isLoading: true });
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
            {
              email,
              password,
            }
          );
          console.log("<<=== 🚀 response Login ===>>", response);
          if (response.status == 201) {
            //get accesstoken,
            const accessToken = response.data.access_token;
            // getProfile
            const responseProfile = await axios.get(
              "https://api.escuelajs.co/api/v1/auth/profile",
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            console.log("<<=== 🚀  responseProfile===>>", responseProfile);
            if (responseProfile.status == 200) {
              set({
                user: {
                  ...responseProfile.data,
                  access_token: accessToken,
                  refresh_token: response.data.refresh_token,
                },
                isAuthenticated: true,
                isLoading: false,
              });
              //redirect to customer page
              //window.location.href = "/customer";
              callback();
            } else {
              set({ user: null, isAuthenticated: false, isLoading: false });
            }
            // set user
          } else {
            set({ user: null, isAuthenticated: false, isLoading: false });
          }
        },
        logout: () => set({ user: null, isAuthenticated: false }),
      }),
      {
        name: "auth-storage", // unique name for localStorage key
        storage: createJSONStorage(() => localStorage),
      }
    ),
    {
      name: "AuthStoreDevTools", // name for devtools
    }
  )
);
