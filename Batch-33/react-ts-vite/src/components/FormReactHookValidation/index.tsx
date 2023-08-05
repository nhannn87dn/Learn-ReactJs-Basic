import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().min(4, 'Tên tối thiểu 4 kí tự').required(),
  age: yup.number().min(18).max(100).required('Vui lòng nhập tuổi'),
  email: yup.string().email().required('Vui lòng điền email'),
  password: yup.string().required('Vui lòng nhập password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  address: yup.string().default(''),//không yêu cầu điền
  //Giới tính chỉ chập nhận 1 trong 2 giá trị
  gender: yup.string().required('Vui lòng chọn giới tính').oneOf(['male', 'female'], 'Giới tính không hợp lệ'),
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
      
      <input placeholder="Email" {...register("email")} />
      <p className='text-red-500'>{errors.email?.message}</p>

      <input placeholder="Age" {...register("age")} />
      <p className='text-red-500'>{errors.age?.message}</p>

      <input placeholder="Address" {...register("address")} />
      <p className='text-red-500'>{errors.address?.message}</p>

      <input placeholder="Password" {...register("password")} />
      <p className='text-red-500'>{errors.password?.message}</p>

      <label>
          <input type="radio" value='male' {...register("gender")} />Male
      </label>
      <label>
          <input type="radio" value='female' {...register("gender")} />Female
      </label>
      
      <p className='text-red-500'>{errors.gender?.message}</p>


      <button type="submit">Submit</button>
    </form>
  );
}
