//ExampleReactHookForm

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
  address: string;
  gender: string; // female | male
};

//Quan trọng nhất là chỗ này
const schema = yup
  .object({
    email: yup.string().email("Email không hợp lệ").required(),
    password: yup.string().required().min(4, "mật khẩu ít nhất 4 ký tự"),
    address: yup.string().required(),
    gender: yup.string().required().oneOf(["female", "male"], "Chọn giới tính"),
  })
  .required();

export default function ExampleReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold p-5">Example React Hook Form</h2>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="email"
        {...register("email", { required: true, minLength: 4 })}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <input type="text" {...register("address", { required: true })} />
      {errors.address && (
        <span className="text-red-500">{errors.address.message}</span>
      )}

      <input type="text" {...register("gender", { required: true })} />
      {errors.gender && (
        <span className="text-red-500">{errors.gender.message}</span>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
