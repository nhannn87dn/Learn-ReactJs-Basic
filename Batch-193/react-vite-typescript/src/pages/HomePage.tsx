import { useEffect } from "react";
import Count from "../components/Count";
import CountHangXom from "../components/CountHangXom";
import { useUsersStore } from "../stores/usersStore";
const HomePage = () => {
  const users = useUsersStore((state) => state.users);
  const getUsers = useUsersStore((state) => state.getUsers);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      <Count />
      <CountHangXom />
      <h2>Thông tin user</h2>
      {users.length > 0 &&
        users.map((u) => {
          return <p>Name: {u.name}</p>;
        })}
    </div>
  );
};

export default HomePage;
