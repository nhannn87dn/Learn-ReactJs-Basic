import React from 'react'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = Yup.object({
  username: Yup.string().min(4).max(255).email().required(),
  password: Yup.string().required().min(6)
});

type FormData = Yup.InferType<typeof loginSchema>;


const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = (data: FormData) => {
    console.log(data)
  };

 

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        
         <input {...register("username")} type="text"  name='username' placeholder='username' />
         <p>{errors.username?.message}</p>
         <input {...register("password")} type="password"  name='password' placeholder='password' />
         <p>{errors.password?.message}</p>
         <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm