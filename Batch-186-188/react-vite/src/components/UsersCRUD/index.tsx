import React from "react";
import styles from "./Users.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    avatar: yup.string().required(),
  })
  .required();

//Typescript for Form Data
type FormData = yup.InferType<typeof schema>;

type TUsers = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

const UsersCRUD = () => {
  /* THiết lập trạng thái chờ gọi gọi API */
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<null | string>(null);
  const [users, setUsers] = React.useState<TUsers[]>([]);
  /* Mặc định lúc đầu là một mảng rỗng */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data); //data là một object
    //gọi API tạo mới user = phương POST
    try {
      setLoading(true); //bật nó xoay xoay, để người dùng biết là đang gọi API

      const url = "https://api.escuelajs.co/api/v1/users";
      const options = {
        method: "POST", //PUT, PATH, DELETE thì có chung cách dùng với POST
        headers: {
          "Content-Type": "application/json",
        },
        /* JSON.stringify để convert object thành JSON string */
        //Body chứa dữ liệu cần gửi đi
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          avatar: data.avatar,
        }),
      };
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("<<=== 🚀 result create new user ===>>", result);

      //Nếu thành công thì cập nhật lại state Loading
      if (response.status === 201) {
        console.log("thành công");
        setLoading(false);
        setMessage("Tạo mới User thành công");
        reset(); //Xóa hết dữ liệu trong các input đi
      }
      //Gọi API mà mà response về khác 201
      else {
        setLoading(false);
        setMessage(result.message[0]);
      }
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
      setLoading(false);
      setMessage("Tạo mới User thất bại");
    }
  };

  console.log("<<=== 🚀 users ===>>", users);

  React.useEffect(() => {
    //Nó chỉ chạy 1 lần đầu khi component render

    //Tạo một hàm bất đồng bộ
    const fetchData = async () => {
      const urlAPI = "https://api.escuelajs.co/api/v1/users";
      const options = {
        method: "GET",
      }; //nó kiểu là object, tham số tùy chọn.
      const response = await fetch(urlAPI, options);

      console.log("<<=== 🚀 response ===>>", response);
      const data = await response.json();

      console.log("<<=== 🚀 data ===>>", data);

      //Gán data lấy được cho state users
      setUsers(data);
    };
    //Gọi hàm, để thực thi
    fetchData();
  }, []); //dependency là một mảng rỗng

  return (
    <div>
      {message ? (
        <div className="bg-orange-100 py-1 px-3 text-orange-800">{message}</div>
      ) : null}
      <h2>Thêm mới User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input placeholder="email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input placeholder="password" {...register("password")} />
        <p>{errors.email?.message}</p>

        <input placeholder="avatar" {...register("avatar")} />
        <p>{errors.email?.message}</p>

        <button className="btn btn-primary" type="submit">
          {loading ? "Loading ...." : "Thêm mới"}
        </button>
      </form>
      <h2>Danh sách Users</h2>
      <table className={styles.table}>
        <tr>
          <td>ID</td>
          <td>Avatar</td>
          <td>Name</td>
          <td>Email</td>
          <td>Actions</td>
        </tr>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>
                  <img
                    height={50}
                    width={50}
                    src={user.avatar}
                    alt={user.name}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-default">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default UsersCRUD;
