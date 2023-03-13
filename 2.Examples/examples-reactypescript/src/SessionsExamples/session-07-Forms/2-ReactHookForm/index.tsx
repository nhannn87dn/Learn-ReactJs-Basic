import { useForm } from "react-hook-form";


type FormData = {
  firstName: string;
  lastName: string;
};

export default function ReactHookFormExample() {
  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit((data : any) => console.log(data));

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}