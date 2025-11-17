import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Yup schema
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(4, "Mật khẩu phải có ít nhất 4 ký tự"),

  avatar: yup
    .string()
    .required("Vui lòng nhập URL avatar")
    .url("URL không hợp lệ"),
});

export default function ExampleAxiosPost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const avatarUrl = watch("avatar");

  const onSubmit = async (data) => {
    //GỌI API để thêm user
    const response = await axios.post("https://api.escuelajs.co/api/v1/users", {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    });
    if (response.status === 201) {
      alert("User created successfully!");
      //làm mới form
      reset();
    }
  };

  //delete with axios

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">User profile form</h2>
        <p className="text-sm text-gray-500 mb-6">
          Form sử dụng <span className="font-medium">react-hook-form</span> +{" "}
          <span className="font-medium">yup</span> và Tailwind CSS.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left: inputs */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                {...register("name")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Nhập tên"
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="example@mail.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                {...register("password")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.password ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Mật khẩu"
              />
              {errors.password && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Avatar URL
              </label>
              <input
                {...register("avatar")}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.avatar ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="https://..."
              />
              {errors.avatar && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.avatar.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium disabled:opacity-60"
              >
                {isSubmitting ? "Đang gửi..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right: avatar preview */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border">
              {avatarUrl ? (
                // Nếu URL không hợp lệ thì ảnh lỗi — vẫn ok
                // người dùng có thể nhìn thấy preview nhanh
                <img
                  src={avatarUrl}
                  alt="avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-gray-400">Preview</span>
              )}
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <div>
                <strong>Tên:</strong> {watch("name") || "—"}
              </div>
              <div className="truncate w-40">
                <strong>Email:</strong> {watch("email") || "—"}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
