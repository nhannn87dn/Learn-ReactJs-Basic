import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
}).required();
type FormData = yup.InferType<typeof schema>;



const PostLogin = () => {
  let [success, setSuccess] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  let [message, setMessage] = React.useState('');
  const navigate = useNavigate();

  const { register,  resetField, handleSubmit, formState: { errors, isSubmitted, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => {
      console.log(data);

      let handleSubmit = async ()=>{
         
          try {
            const url = "https://api.escuelajs.co/api/v1/auth/login";
            const options = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }

            const response = await fetch(url, options);
            const result = await response.json()

            console.log("res",result);
            if(result.statusCode === 401) {
                setMessage(result.message);
            }else{
                setMessage('Dang nhap thanh cong');
                resetField("email");
                resetField("password");
                navigate('/dashboard')
            }
    
        } catch (error) {
           console.log(error);
        }
      }
      handleSubmit();
  }
      

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' {...register("email")} />
      <p>{errors.email?.message}</p>
        
      <input placeholder='password' {...register("password")} />
      <p>{errors.password?.message}</p>

      
      <input disabled={isSubmitting && loading}  type="submit" />
      {message !== '' && <div>{message}</div>}
      {loading && <div>Loading....</div>}
      {success && <div>Da Post thanh cong !....</div>}
    </form>
  )
}

export default PostLogin