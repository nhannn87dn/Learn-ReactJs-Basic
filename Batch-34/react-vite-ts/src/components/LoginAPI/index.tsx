import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginAPI = () => {
  const navigate = useNavigate();
  const {login, isAuthenticated} = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
      const result = await login(data.email, data.password);
      console.log(result);
      if(!result.isAuthenticated){
        setError(result.error);
      }else{
        navigate("/customers");
      }

      
  };
  /* Nếu đã đăng nhập rồi, mà còn quay lại login thì đá ngược vào trong */
  React.useEffect(()=>{
    if(isAuthenticated){
      navigate("/customers");
    }
  },[isAuthenticated])

  return (
    <div className='max-w-[300px] mx-auto min-w-[300px]'>
      <h2 className='text-2xl text-center mb-3 font-bold'>Login Form</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-3" role="alert">
          <span className="block sm:inline">{error}</span>
      </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input placeholder="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button className='block w-full' disabled={isSubmitting} type="submit">
          {isSubmitting  ? 'Submitting...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginAPI;
