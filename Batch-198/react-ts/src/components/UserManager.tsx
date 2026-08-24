import { useEffect, useState } from "react";
import styles from "./UserManager.module.css";
import Modal from "./Modal";
import UserForm from "./UserForm";
import UpdateUserForm from "./UpdateUserForm";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: string;
  image: string;
};

export default function UserManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchUsers = async () => {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log("<<=== 🚀 data ===>>", data);
        if (response.status === 200) {
          setUsers(data.users);
        }
      };
      fetchUsers();
    } catch (error) {
      console.log(error);
      setError("Đã xảy ra lỗi khi tải dữ liệu.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleAddUser = () => {
    console.log("Add user");
    setIsModalAddOpen(true);
  };

  const handleEditUser = (user: User) => {
    console.log("<<=== 🚀 handleEditUser ===>>", user);
    console.log("Edit user:", user.id);
    setSelectedUser(user);
    setIsModalEditOpen(true);
  };

  const handleDeleteUser = async (id: number) => {
    console.log("<<=== 🚀 id ===>>", id);
    //cập nhập để xóa phần tử user có id ra khỏi danh sách users
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    //gọi api để xóa user có id ở trên server
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("<<=== 🚀 data ===>>", data);
      if (data.isDeleted) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setError("Đã xảy ra lỗi khi xóa người dùng.");
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  console.log("<<=== 🚀 user ===>>", selectedUser);
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Quản Lý Người Dùng</h1>

        {isSuccess && <p>Xử lý thành công !</p>}

        {isModalAddOpen && (
          <Modal
            open={isModalAddOpen}
            onClose={() => setIsModalAddOpen(false)}
            title="Thêm người dùng mới"
          >
            <UserForm
              onSubmit={async (data) => {
                console.log("<<=== 🚀 data ===>>", data);
                try {
                  setIsLoading(true);
                  const response = await fetch(
                    "https://dummyjson.com/users/add",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    },
                  );
                  const result = await response.json();
                  console.log("<<=== 🚀 result ===>>", result);
                  if (response.status === 201) {
                    //bổ sung user mới vào danh sách users
                    setUsers((prevUsers) => [...prevUsers, result]);
                    //tắt modal
                    setIsModalAddOpen(false);
                    //bật thông báo thành công
                    setIsSuccess(true);
                  }
                } catch (error) {
                  console.log(error);
                  setError("Đã xảy ra lỗi khi thêm người dùng.");
                } finally {
                  setIsLoading(false);
                }
              }}
              onCancel={() => {
                console.log("cancle form");
              }}
            />
          </Modal>
        )}

        {isModalEditOpen && (
          <Modal
            open={isModalEditOpen}
            onClose={() => setIsModalEditOpen(false)}
            title="Cập nhật người dùng"
          >
            <UpdateUserForm
              user={selectedUser!}
              onSubmit={async (data) => {
                console.log("data update", data);
                try {
                  setIsLoading(true);
                  const response = await fetch(
                    `https://dummyjson.com/users/${selectedUser?.id}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    },
                  );
                  const result = await response.json();
                  console.log("<<=== 🚀 result ===>>", result);
                  if (response.status === 200) {
                    //cập nhật user trong danh sách users
                    setUsers((prevUsers) =>
                      prevUsers.map((u) =>
                        u.id === selectedUser?.id ? result : u,
                      ),
                    );
                    //tắt modal
                    setIsModalEditOpen(false);
                    //bật thông báo thành công
                    setIsSuccess(true);
                  }
                } catch (error) {
                  console.log(error);
                  setError("Đã xảy ra lỗi khi cập nhật người dùng.");
                } finally {
                  setIsLoading(false);
                }
              }}
            />
          </Modal>
        )}

        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input type="text" placeholder="Tìm theo tên người dùng..." />
          </div>

          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddUser}
          >
            <span className={styles.plus}>+</span>
            Thêm mới
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.idColumn}>ID</th>
              <th>Họ và Tên</th>
              <th>Email</th>
              <th>Tuổi</th>
              <th>Vai trò</th>
              <th className={styles.actionColumn}>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className={styles.idCell}>#{user.id}</td>

                <td>
                  <div className={styles.userInfo}>
                    <img
                      src={user.image}
                      alt={user.firstName + " " + user.lastName}
                      className={styles.avatar}
                    />

                    <span className={styles.userName}>
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </td>

                <td className={styles.email}>{user.email}</td>

                <td>{user.age}</td>

                <td>
                  <span className={styles.cityBadge}>{user.role}</span>
                </td>

                <td>
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={`${styles.actionButton} ${styles.editButton}`}
                      onClick={() => handleEditUser(user)}
                      aria-label={`Chỉnh sửa ${user.firstName} ${user.lastName}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                      onClick={() => handleDeleteUser(user.id)}
                      aria-label={`Xóa ${user.firstName} ${user.lastName}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v5" />
                        <path d="M14 11v5" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className={styles.emptyState}>Không có người dùng nào.</div>
        )}
      </div>
    </div>
  );
}
