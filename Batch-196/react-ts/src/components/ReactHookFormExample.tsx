import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  email: string;
  agree: boolean;
};

const schema = yup
  .object({
    name: yup.string().min(4).max(6).required(),
    email: yup.string().email().required(),
    agree: yup
      .boolean()
      .oneOf([true, false], "You must accept the terms")
      .required(),
  })
  .required();

export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-3 flex items-center gap-3">
        <label className="w-15">Name:</label>
        <input {...register("name", { required: true })} />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>
      <div className="my-3 flex items-center gap-3">
        <label className="w-15">Email:</label>
        <input {...register("email", { required: true })} />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      <div className="my-3 flex items-center gap-3">
        <label>
          <input type="checkbox" {...register("agree", { required: true })} /> I
          agree to terms
          <p className="text-red-500">{errors.agree?.message}</p>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
