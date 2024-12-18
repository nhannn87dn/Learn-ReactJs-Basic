import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nickname: yup.string().trim().min(6, "Tối thiểu phải 6 kí tự").required(),
    email: yup
      .string()
      .lowercase()
      .email()
      .matches(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Email ko dung dinh dang"
      )
      .required(),
    age: yup
      .string()
      .matches(/[0-9]+/, "Phai la so")
      .required(),
    gender: yup.string().oneOf(["male", "female"], "Invalid gender").required(),
  })
  .required();

export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="nickname" {...register("nickname")} />
      <p>{errors.nickname?.message}</p>
      <input placeholder="email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("gender")} />
      <p>{errors.gender?.message}</p>

      <input type="submit" />
    </form>
  );
}
