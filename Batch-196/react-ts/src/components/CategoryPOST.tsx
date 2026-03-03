import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./CategoryPOST.module.css";

interface FormValues {
  name: string;
  image: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required("Tên danh mục là bắt buộc")
    .min(3, "Tối thiểu 3 ký tự"),
  image: yup
    .string()
    .required("Image là bắt buộc")
    .url("Image phải là một URL hợp lệ"),
});

const CategoryPOST: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    // TODO: call API
    const url = "https://api.escuelajs.co/api/v1/categories";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //dữ liệu sẽ được gửi dưới dạng JSON
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("API Response:", result);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tạo mới danh mục</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Name */}
        <div className={styles.formGroup}>
          <label>Tên danh mục</label>
          <input type="text" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        {/* Image URL */}
        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            {...register("image")}
          />
          {errors.image && (
            <p className={styles.error}>{errors.image.message}</p>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Tạo danh mục
        </button>
      </form>
    </div>
  );
};

export default CategoryPOST;
