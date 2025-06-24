import { useEffect } from "react";
import { useUsersStore } from "../stores/usersStore";

const ContactPage = () => {
  const users = useUsersStore((state) => state.users);
  const getUsers = useUsersStore((state) => state.getUsers);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <h1>ContactPage</h1>
      <h2>Thông tin user</h2>
      {users.length > 0 &&
        users.map((u) => {
          return <p>Name: {u.name}</p>;
        })}
    </>
  );
};

export default ContactPage;
