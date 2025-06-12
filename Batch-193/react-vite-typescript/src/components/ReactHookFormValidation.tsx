import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ràng buộc dữ liệu đầu vào với thử viện yup */
const schema = yup
  .object({
    firstName: yup.string().min(2).max(6).required(),
    age: yup.number().positive().integer().required(),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email không hợp lệ"
      )
      .required(),
    password: yup
      .string()
      .min(6)
      .max(12)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "Mật khẩu không đúng định dạng"
      )
      .required(),
    gender: yup.string().oneOf(["male", "female"]).default("male").required(),
    content: yup.string().optional().default("hello"), //ko bat buoc dien
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function ReactHookFormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input {...register("gender")} />
      <p>{errors.gender?.message}</p>

      <input {...register("content")} />

      <button type="submit">Submit</button>
    </form>
  );
}
