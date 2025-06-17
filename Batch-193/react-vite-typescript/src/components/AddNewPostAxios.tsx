import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const schema = yup.object({
  userId: yup.number().positive("Phải là số nguyên dương").integer(),
  body: yup.string().max(123),
  title: yup.string().max(255).min(4, "Tối thiểu là 4 kí tự"),
});

const AddNewPostAxios = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  const [isAddSuccess, setIsAddSuccess] = useState(false);

  const onSubmit = async (data) => {
    //gọi API để thêm bài post
    const url = "https://jsonplaceholder.typicode.com/posts";
    const payload = {
      title: data.title,
      body: data.body,
      userId: data.userId,
    };
    try {
      //Bật cờ cho loading xoay
      setIsLoading(true);
      const response = await axios.post(url, payload);
      if (response.status === 201) {
        setIsLoading(false);
        setIsAddSuccess(true);
        //reset các input về trạng thái ban đầu
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      setErr("Thất bại");
      console.log("<<=== 🚀 error ===>>", error);
    }
  };

  return (
    <div>
      <h1>AddNewPostAxios</h1>
      {err && <p>Có lỗi khi gọi API</p>}
      {isLoading && <p>Loading .... </p>}
      {isAddSuccess && <p>Thêm bài post thành công !</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("title")} />
        <p>{errors.title?.message}</p>

        <input placeholder="Body" {...register("body")} />
        <p>{errors.body?.message}</p>

        <input placeholder="UserId" {...register("userId")} />
        <p>{errors.userId?.message}</p>

        <button disabled={isLoading} type="submit">
          {isLoading ? "Submitting...." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddNewPostAxios;
