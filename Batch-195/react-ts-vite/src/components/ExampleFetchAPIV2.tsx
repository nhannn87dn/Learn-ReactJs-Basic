import axios from "axios";
import React, { useEffect } from "react";
import SimpleModalExample from "./SimpleModalExample";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup schema
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(4, "Mật khẩu phải có ít nhất 4 ký tự"),

  avatar: yup
    .string()
    .required("Vui lòng nhập URL avatar")
    .url("URL không hợp lệ"),
});

interface IUser {
  id: number;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

const ExampleFetchAPIV2 = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [selected, setSelected] = React.useState<IUser | null>(null);
  // Fetch users from API
  useEffect(() => {
    //run get from DB
    try {
      //Khi bắt đầu lấy dữ liệu thì đi set loading true
      setLoading(true);
      const fetchData = async () => {
        const url = "https://api.escuelajs.co/api/v1/users";
        const response = await axios.get(url); //return Promise
        console.log("<<=== 🚀 response ===>>", response);

        //thành công
        if (response.status === 200) {
          setLoading(false);
          setUsers(response.data); //set state users
        }
      };
      fetchData();
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
      setError("Failed to fetch users");
      setLoading(false);
    }
  }, []);

  console.log("<<=== 🚀 users ===>>", users);
  console.log("<<=== 🚀 loading ===>>", loading);

  //edit user
  console.log("<<=== 🚀 selected ===>>", selected);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    // provide initial default values so inputs are controlled
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    resolver: yupResolver(schema),
  });

  // When `selected` changes (open edit modal), populate the form fields.
  // When modal closes (selected becomes null), reset form to defaults.
  useEffect(() => {
    if (selected) {
      // map selected user to form fields
      reset({
        name: selected.name ?? "",
        email: selected.email ?? "",
        // API doesn't usually return password; leave blank for safety
        password: "",
        avatar: selected.avatar ?? "",
      });
    } else {
      // clear form when no user is selected
      reset();
    }
  }, [selected, reset]);

  const onSubmit = async (data) => {
    //GỌI API để thêm user
    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/users/${selected?.id}`,
      {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
      }
    );
    if (response.status === 200) {
      alert("User updated successfully!");
    }
  };

  return (
    <div>
      <h2>Example Fetch API V1</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
          {loading && (
            <tr>
              <td colSpan={6}>Loading...</td>
            </tr>
          )}
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
                      <button
                        onClick={() => {
                          setSelected(user);
                          //set giá trị mặc định cho form
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={async () => {
                          console.log("Xoá user có id", user.id);
                          const response = await axios.delete(
                            `https://api.escuelajs.co/api/v1/users/${user.id}`
                          );
                          console.log(
                            "<<=== 🚀 delete response ===>>",
                            response
                          );
                          if (response.status === 200) {
                            //Xoá thành công khỏi giao diện
                            alert("Xóa user thành công");
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* EDIT MODAL */}
      <SimpleModalExample
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={"Cập nhật"}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left: inputs */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                {...register("name")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Nhập tên"
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="example@mail.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                {...register("password")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.password ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Mật khẩu"
              />
              {errors.password && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Avatar URL
              </label>
              <input
                {...register("avatar")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.avatar ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="https://..."
              />
              {errors.avatar && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.avatar.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-60"
              >
                {isSubmitting ? "Đang gửi..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </SimpleModalExample>
    </div>
  );
};

export default ExampleFetchAPIV2;
