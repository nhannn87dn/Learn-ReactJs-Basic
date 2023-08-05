import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string,
    password: string,
    email: string,
    age:number
};

export default  function FormReactHook() {
  const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("username")} />
      <input placeholder="Age" {...register("age")} />
      <input placeholder="Email" {...register("email")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="Passowrd" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

