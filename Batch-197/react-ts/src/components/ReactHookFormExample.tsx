import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  password: string;
  email: string;
  age: number;
};

//Form với validation HTML5 và React Hook Form
export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(); //

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-5">
      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <p>{errors.password.message}</p>}

      <input
        placeholder="Age"
        {...register("age", {
          required: "Age is required",
          min: {
            value: 18,
            message: "Age must be at least 18",
          },
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
