import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Định nghĩa schema
const loginSchema = z.object({
  email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  age: z
    .number()
    .min(18, "Tuổi phải từ 18 trở lên")
    .max(100, "Tuổi phải nhỏ hơn hoặc bằng 100"),
});

// 2. Suy ra type (nếu dùng TypeScript)
type LoginFormValues = z.infer<typeof loginSchema>;

//Form với validation HTML5 và React Hook Form
export default function ReactHookFormExampleZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema), // 3. Gắn resolver vào useForm
  }); //

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-5">
      <input
        className={
          errors.email ? "border-red-500 outline-red-500" : "border-gray-300"
        }
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className={errors.password ? "border-red-500" : "border-gray-300"}
        placeholder="Password"
        {...register("password")}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        className={errors.age ? "border-red-500" : "border-gray-300"}
        placeholder="Age"
        {...register("age")}
      />
      {errors.age && <p className="text-red-500">{errors.age.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
