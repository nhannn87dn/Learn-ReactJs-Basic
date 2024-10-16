import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, "Ban chua du tuoi")
      .required(),
    email: yup
      .string()
      .required()
      .email()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email khong dung dinh dang"
      ),
    address: yup.string().nullable(),
    mobile: yup
      .string()
      .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/g, "Mobile chua dung dinh dang")
      .required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#!*%?])[a-zA-Z\d@#!*%?]{8,}$/,
        "Password khong dung dinh dang"
      ),
    //Toi thieu 8 ki tu,
    //It nhat 1 ki tu HOA
    // It nhat 1 ki tu dac biet: @#!*%?
    //It nhat 1 ki tu thuong,
    //It nhat 1 ki tu so
    passwordConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "passwordConfirm must match")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#!*%?])[a-zA-Z\d@#!*%?]{8,}$/,
        "Password khong dung dinh dang"
      ),
    role: yup
      .string()
      .required()
      .oneOf(["admin", "user", "editor"], "Invalid Role"),
  })
  .required();

const RegisterReactHookFormValidation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset(); //Xóa dữ liệu từ các inputs
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="firstName" {...register("firstName")} />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <input placeholder="age" {...register("age")} />
        <p>{errors.age?.message}</p>
      </div>
      <div>
        <input placeholder="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input placeholder="address" {...register("address")} />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <input placeholder="mobile" {...register("mobile")} />
        <p>{errors.mobile?.message}</p>
      </div>
      <div>
        <input placeholder="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input placeholder="passwordConfirm" {...register("passwordConfirm")} />
        <p>{errors.passwordConfirm?.message}</p>
      </div>

      <div>
        <input placeholder="Role" {...register("role")} />
        <p>{errors.role?.message}</p>
      </div>

      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default RegisterReactHookFormValidation;
