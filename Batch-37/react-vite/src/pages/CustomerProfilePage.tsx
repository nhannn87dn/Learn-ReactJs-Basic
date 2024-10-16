// import axios from "axios";
// import { useEffect, useState } from "react";

import { useEffect } from "react";
import useUserStore from "../hooks/useUserStore";

// interface IUser {
//   email: string;
//   name: string;
// }

const CustomerProfilePage = () => {
  // const [user, setUser] = useState<IUser | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://api.escuelajs.co/api/v1/users/1"
  //     );
  //     setUser(response.data);
  //   };
  //   fetchData();
  // }, []);

  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    //gọi hàm này để nó cập nhật dữ liệu user
    fetchUser();
  }, []);

  return (
    <div>
      <h2>CustomerProfilePage</h2>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default CustomerProfilePage;
