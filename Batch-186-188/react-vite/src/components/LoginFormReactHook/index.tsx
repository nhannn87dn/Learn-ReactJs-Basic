import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
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
      .min(4, "MK ít nhất phải 4 kí tự")
      .max(255)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "Mật khâu ko hợp lệ"
      )
      .required(),
    age: yup.number().min(18).max(100).required(),
    gender: yup.string().required().oneOf(["male", "female"], "Invalid gender"),
    link: yup.string(),
  })
  .required();

type Inputs = {
  email: string;
  password: string;
  age: number;
  gender: string; //male or female
  link: string;
};

export default function LoginFormReactHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("email", { required: true })} />
      {/* <input type="text" name="email" required /> */}
      <p>{errors.email?.message}</p>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      <p>{errors.password?.message}</p>

      <input {...register("age", { required: true })} />
      {/* errors will return when field validation fails  */}
      <p>{errors.age?.message}</p>

      <input {...register("gender", { required: true })} />
      {/* errors will return when field validation fails  */}
      <p>{errors.gender?.message}</p>

      <input {...register("link")} />

      <input type="submit" />
    </form>
  );
}
