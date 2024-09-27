import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().min(4, "Tối thiểu 4 kí tự").max(25).required(),
    lastName: yup.string().min(4, "Tối thiểu 4 kí tự").max(25).required(),
    email: yup
      .string()
      .email()
      .matches(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Email không hợp lệ"
      )
      .required(),
    password: yup
      .string()
      .min(8, "Mật tối thiểu 8 kí tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        "Mật khẩu không hợp lệ"
      )
      .required(),
  })
  .required();

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="firstName" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input placeholder="lastName" {...register("lastName")} />
      <p>{errors.lastName?.message}</p>

      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  );
}
