import { useState, useEffect } from "react";
import UserEditForm from "./UserEditForm";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css'..
interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  password: string;
}

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseModal = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        // handle success
        console.log(data);
        //lấy data gán cho State
        setUsers(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const handleDeleteUser = (userId: number) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const url = `https://api.escuelajs.co/api/v1/users/${userId}`;
              const options = {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              };
              const response = await fetch(url, options);
              const result = await response.json();
              console.log(result);
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleEditUser = async (userId: number) => {
    console.log(userId);

    fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // handle success
        console.log(data);
        //lấy data gán cho State
        setUser(data);
        setIsEdit(true);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  console.log(user);

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
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
                  <td>{user.avatar}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(user.id)}
                      className="btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="btn btn-del"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* Modal Edit */}
      {isEdit && <UserEditForm closeModal={handleCloseModal} user={user} />}
    </div>
  );
};

export default UserList;
