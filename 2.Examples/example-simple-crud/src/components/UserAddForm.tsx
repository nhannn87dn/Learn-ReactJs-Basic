import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    role: yup.string().required().oneOf(["customer", "admin"], "Invalid Role"),
    avatar: yup.string().required(),
    password: yup.string().required().min(4),
  })
  .required();

export default function UserAddForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const url = "https://api.escuelajs.co/api/v1/users/";
      const options = {
        method: "POST",
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create a new User</h1>
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

      <button disabled={isSubmitting} className="btn btn-primary" type="submit">
        {isSubmitting ? "Submiting...." : "Create"}
      </button>
    </form>
  );
}
