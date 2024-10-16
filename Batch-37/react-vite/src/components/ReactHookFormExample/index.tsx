import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
  gender: string;
};

export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="username"
        defaultValue="test"
        {...register("username")}
      />
      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="email" {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
