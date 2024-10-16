import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  email: string;
  province: string;
  age: number;
};

export default function FormReactHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold w-[120px]">example</label>
        <input defaultValue="test" {...register("example")} />
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold w-[120px]">exampleRequired</label>
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold w-[120px]">Age</label>
        <input {...register("age", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.age && <span>This field is required</span>}
      </div>
      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold w-[120px]">Email</label>
        <input {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}
      </div>

      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold  w-[120px]">Pronvice</label>
        <select {...register("province", { required: true })}>
          <option value="">Vui lòng chọn Province</option>
          <option value="1">Hà Nội</option>
          <option value="2">Đà Nẵng</option>
        </select>
        {errors.province && <span>This field is required</span>}
      </div>

      <div className="input-item my-2 flex items-center gap-x-3">
        <label className="font-bold  w-[120px]"></label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
