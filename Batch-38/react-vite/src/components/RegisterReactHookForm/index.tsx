import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  mobile: string;
};

const RegisterReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" {...register("username")} />
      </div>
      <div>
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="email" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <input placeholder="Mobile" {...register("mobile")} />
      </div>

      <input type="submit" />
    </form>
  );
};

export default RegisterReactHookForm;
