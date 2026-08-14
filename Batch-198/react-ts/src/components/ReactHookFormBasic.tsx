import { useForm, type SubmitHandler } from "react-hook-form"

/* Khai báo type cho các trường dữ liệu của form */
type Inputs = {
  email: string
  name: string
  age: number
  agree: boolean
}


export default function ReactHookFormBasic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }



  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="email" {...register("email", {required: true})} />
        {errors.email && <span>Vui lòng điền email</span>}
      </div>
      <div>
        <input placeholder="name" {...register("name", { required: true })} />
       {errors.name && <span>Vui lòng điền tên</span>}
      </div>
     <div>
       <input placeholder="age" {...register("age", { required: true })} />
       {errors.age && <span>Vui lòng điền tuổi</span>}
     </div>
    
     <div>
       <label htmlFor="agree">
        <input type="checkbox" id="agree" {...register("agree", { required: true })} /> Đồng ý điều khoản...
      </label>
        {errors.agree && <span>Bạn chưa đồng ý với điều khoản</span>}
     </div>

      <input type="submit" />
    </form>
  )
}