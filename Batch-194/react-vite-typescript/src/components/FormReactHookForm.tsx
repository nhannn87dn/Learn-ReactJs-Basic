import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup
      .string()
      .min(4, "Username ít nhất 4 kí tự")
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password invalid"
      ),
    email: yup.string().required("Email is required").email("Email invalid"),
  })
  .required();

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const FormReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <h2>FormReactHookForm</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-y-2 max-w-[300px]"
      >
        <input
          {...register("username", { required: "Username chưa điền" })}
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <input
          {...register("email", { required: "Email chưa điền" })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("password", { required: "Password chưa điền" })}
          type="text"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button className="justify-center">Submit</button>
      </form>
    </div>
  );
};

export default FormReactHookForm;
