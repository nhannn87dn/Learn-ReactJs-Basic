import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />
      {errors.username && <span>Yêu cầu điền</span>}

      <input {...register("email", { required: true })} />
      {errors.email && <span>Yêu cầu điền</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
