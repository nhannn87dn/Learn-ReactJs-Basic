import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string,
  email: string,
};

export default function FormReactHook() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("username")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("username", { required: true, minLength: 4 })} />
      {errors.username && <span>{errors.username.message}</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}