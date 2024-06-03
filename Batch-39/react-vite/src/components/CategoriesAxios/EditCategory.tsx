import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

type TCategory = {
  id: number;
  name: string;
  image: string;
};

const schema = yup
  .object({
    name: yup.string().min(6, "Toi thieu phai 6 ki tu").required(),
    image: yup.string().optional(),
  })
  .required();

type TEditCategory = {
  isFresh: number;
  setIsFresh: (v: number) => void;
  category: TCategory;
};

const EditCategory = ({ isFresh, setIsFresh, category }: TEditCategory) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    setValue("name", category?.name);
    setValue("image", category?.image);
  }, [category]);

  const onSubmit = async (data) => {
    console.log("data", data);
    //goij api de them moi danh muc
    try {
      setIsLoading(true);
      const url = `https://api.escuelajs.co/api/v1/categories/${category.id}`;
      const response = await axios.put(url, {
        name: data.name,
        image: data.image,
      });
      console.log("response", response);
      if (response.status === 200) {
        setIsFresh(isFresh + 1);
        setIsLoading(false);
        setIsSuccess(true);

        //reset form
        reset();
      }
    } catch (error: any) {
      console.log("error", error);
      console.log("message", error?.response.data.message.join(". "));
      setError(error?.response.data.message.join(". "));
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3>Edit Category</h3>
      {isSuccess && (
        <div className="bg-green-100 text-green-600 py-2 px-3 rounded">
          Cap nhat danh muc thanh cong !
        </div>
      )}
      {error !== "" && (
        <div className="bg-red-100 text-red-600 py-2 px-3 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input placeholder="Image" {...register("image")} />
        <p>{errors.image?.message}</p>

        <button disabled={isLoading} type="submit">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
