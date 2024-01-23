import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    role: yup.string().required().oneOf(["customer", "admin"], "Invalid Role"),
    avatar: yup.string().required(),
    password: yup.string().required().min(4),
  })
  .required();

export default function UserEditForm({
  user,
  closeModal,
}: {
  user: IUser | null;
  closeModal: () => void;
}) {
  const { id, ...updateData } = user;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: updateData,
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const url = `https://api.escuelajs.co/api/v1/users/${id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit User: {user.name}</h1>
        <div>
          <input placeholder="name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <input placeholder="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input placeholder="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <input placeholder="role" {...register("role")} />
          <p>Ex: customer or admin</p>
          <p>{errors.role?.message}</p>
        </div>

        <div>
          <input placeholder="avatar" {...register("avatar")} />
          <p>EX: https://picsum.photos/800</p>
          <p>{errors.avatar?.message}</p>
        </div>

        <button
          disabled={isSubmitting}
          className="btn btn-primary"
          type="submit"
        >
          {isSubmitting ? "Submiting...." : "Update"}
        </button>
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </form>
    </div>
  );
}
