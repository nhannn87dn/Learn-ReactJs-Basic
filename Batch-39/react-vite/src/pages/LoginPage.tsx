import axios from "axios";
import { useState } from "react";
import { useAuth } from "../stores/useAuth";

type TUser = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<TUser>({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();

  return (
    <div>
      LoginPage
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submited");
          //gọi API
          try {
            const fetchLogin = async () => {
              const response = await axios.post(
                "https://api.escuelajs.co/api/v1/auth/login",
                userInfo
              );
              console.log(response);
              if (response.status === 201) {
                //luu token xuong local
                localStorage.setItem(
                  "access_token",
                  response.data.access_token
                );
                //Gọi API lấy profile
                const res = await axios.get(
                  "https://api.escuelajs.co/api/v1/auth/profile",
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${response.data.access_token}`,
                    },
                  }
                );

                console.log("<<=== 🚀 res ===>>", res);
                if (res.status === 200) {
                  //cập nhật store useAuth
                  setUser(res.data);
                }
              }
            };
            fetchLogin();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
          placeholder="Email"
          type="text"
          value={userInfo.email}
        />
        <input
          onChange={(e) => {
            setUserInfo({ ...userInfo, password: e.target.value });
          }}
          placeholder="Pass"
          type="text"
          value={userInfo.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
