import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



const schema = yup
  .object({
    example: yup.string(),//Input ko yêu cầu điền
    exampleRequired: yup.string().required(), ////Input  yêu cầu điền
    email: yup.string().email().matches(/@[^.]*\./, 'EMail khong dung dinh dang').required(),
    age: yup.number().positive().integer().min(18).required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>;

export default function ReactHookFormValidation() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Example" defaultValue="test"  {...register("example", {minLength: 5})} />
      {errors.example && <span>This field is invalid</span>}
      {/*  Thêm input */}

      <input placeholder="Email" type="email" {...register("email", {required: true, maxLength: 255})}  />
      {errors.email?.message}
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="exampleRequired" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  )
}