import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

const LoginAPI = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });
      const onSubmit = async (data: FormData) => {
        console.log(data);
        //Gửi data lên server qua API
        const url = 'https://api.escuelajs.co/api/v1/auth/login';
        const payloads = data; //object
        await axios
            .post(url, payloads)
            .then(function (response) {
                console.log(response);
                if(response.status === 201){
                  navigate('/') //chuyen huong ra home neu login thanh cong
                }
               
            })
            .catch(err => console.log(err))

      };


  return (
    <div>
        <h2>Login Form</h2>
        {isLoading && (<div>Loading....</div> )}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Email' {...register("email")} />
            <p>{errors.email?.message}</p>
                
            <input placeholder='password' {...register("password")} />
            <p>{errors.password?.message}</p>
            
            <button disabled={isLoading} type="submit">Login</button>
           </form>
    </div>
  )
}

export default LoginAPI