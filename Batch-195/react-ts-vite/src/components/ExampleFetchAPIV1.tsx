import React, { useEffect } from "react";

interface IUser {
  id: number;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

const ExampleFetchAPIV1 = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  // Fetch users from API
  useEffect(() => {
    //run get from DB
    const fetchData = async () => {
      const url = "https://api.escuelajs.co/api/v1/users";
      const options = {};
      const response = await fetch(url, options); //return Promise
      console.log(response);
      //để lấy được data trả về
      const data = await response.json();
      console.log("<<=== 🚀 data ===>>", data);

      setUsers(data); //set state
    };
    fetchData();
  }, []);

  console.log("<<=== 🚀 users ===>>", users);

  return (
    <div>
      <h2>Example Fetch API V1</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar} alt={user.name} width={50} />
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <div>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleFetchAPIV1;
