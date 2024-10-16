import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  example: string;
  exampleRequired: string;
  email: string
}


export default function ReactHookForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Example" defaultValue="test"  {...register("example", {minLength: 5})} />
      {errors.example && <span>This field is invalid</span>}
      {/*  Thêm input */}

      <input placeholder="Email" type="email" {...register("email", {maxLength: 255})}  />

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="exampleRequired" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}