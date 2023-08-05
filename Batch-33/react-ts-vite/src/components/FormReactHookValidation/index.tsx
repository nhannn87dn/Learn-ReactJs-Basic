import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().required('Vui lòng nhập tuổi'),
  password: yup.string().required('Vui lòng nhập password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function FormReactHookValidation() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="firstName" {...register("firstName")} />
      
      <p className='text-red-500'>{errors.firstName?.message}</p>
        
      <input placeholder="Age" {...register("age")} />
      <p className='text-red-500'>{errors.age?.message}</p>

      <input placeholder="Password" {...register("password")} />
      <p className='text-red-500'>{errors.password?.message}</p>
      
      <button type="submit">Submit</button>
    </form>
  );
}
