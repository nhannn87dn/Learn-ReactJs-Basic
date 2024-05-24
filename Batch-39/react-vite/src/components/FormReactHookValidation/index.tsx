import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Validation
const schema = yup
  .object({
    firstName: yup.string().min(4).required(),
    age: yup.number().positive().integer().min(18).required(),
    gender: yup.number().oneOf([0, 1], "Giới tính không hợp lệ"),
  })
  .required();

export default function FormReactHookValidation() {
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
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <select {...register("gender")}>
        <option value="">Vui lòng chọn giới tính</option>
        <option value="1">Nam</option>
        <option value="2">Nữ</option>
      </select>
      <p>{errors.gender?.message}</p>

      <input type="submit" />
    </form>
  );
}
