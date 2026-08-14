import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* Khai báo rule cho trường dữ liệu */
const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng điền email"),
    name: yup.string().min(2, "Tên tối thiểu là 2 kí tự").required(),
    age: yup.number().positive().integer().min(18).required(),
    agree: yup.boolean().oneOf([true, false]),
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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="email" {...register("email", { required: true })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input placeholder="name" {...register("name", { required: true })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <input
          type="number"
          placeholder="age"
          {...register("age", { required: true })}
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <div>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            {...register("agree", { required: true })}
          />{" "}
          Đồng ý điều khoản...
        </label>
        {errors.agree && <span>{errors.agree.message}</span>}
      </div>

      <input type="submit" />
    </form>
  );
}
