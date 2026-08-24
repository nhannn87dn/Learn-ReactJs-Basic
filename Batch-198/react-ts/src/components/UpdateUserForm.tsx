import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./UpdateUserForm.module.css";

const updateUserSchema = yup.object({
  firstName: yup
    .string()
    .required("First name là bắt buộc")
    .min(2, "First name phải có ít nhất 2 ký tự")
    .max(50, "First name không được vượt quá 50 ký tự"),

  lastName: yup
    .string()
    .required("Last name là bắt buộc")
    .min(2, "Last name phải có ít nhất 2 ký tự")
    .max(50, "Last name không được vượt quá 50 ký tự"),

  email: yup
    .string()
    .required("Email là bắt buộc")
    .email("Email không đúng định dạng"),

  age: yup
    .number()
    .typeError("Age phải là một số")
    .required("Age là bắt buộc")
    .integer("Age phải là số nguyên")
    .min(1, "Age phải lớn hơn hoặc bằng 1")
    .max(120, "Age không được lớn hơn 120"),
});

export type UpdateUserFormData = yup.InferType<typeof updateUserSchema>;

type UpdateUserFormProps = {
  user: UpdateUserFormData;
  onSubmit?: (data: UpdateUserFormData) => void;
  onCancel?: () => void;
};

export default function UpdateUserForm({
  user,
  onSubmit,
  onCancel,
}: UpdateUserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserFormData>({
    resolver: yupResolver(updateUserSchema),

    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
    },
  });

  const handleFormSubmit = (data: UpdateUserFormData) => {
    onSubmit?.(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      {/* First Name */}
      <div className={styles.formGroup}>
        <label htmlFor="firstName" className={styles.label}>
          First Name
          <span className={styles.required}>*</span>
        </label>

        <input
          id="firstName"
          type="text"
          placeholder="Nhập first name..."
          className={`${styles.input} ${
            errors.firstName ? styles.inputError : ""
          }`}
          {...register("firstName")}
        />

        {errors.firstName && (
          <p className={styles.errorMessage}>{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className={styles.formGroup}>
        <label htmlFor="lastName" className={styles.label}>
          Last Name
          <span className={styles.required}>*</span>
        </label>

        <input
          id="lastName"
          type="text"
          placeholder="Nhập last name..."
          className={`${styles.input} ${
            errors.lastName ? styles.inputError : ""
          }`}
          {...register("lastName")}
        />

        {errors.lastName && (
          <p className={styles.errorMessage}>{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
          <span className={styles.required}>*</span>
        </label>

        <input
          id="email"
          type="email"
          placeholder="Nhập email..."
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          {...register("email")}
        />

        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>

      {/* Age */}
      <div className={styles.formGroup}>
        <label htmlFor="age" className={styles.label}>
          Age
          <span className={styles.required}>*</span>
        </label>

        <input
          id="age"
          type="number"
          placeholder="Nhập tuổi..."
          className={`${styles.input} ${errors.age ? styles.inputError : ""}`}
          {...register("age", {
            valueAsNumber: true,
          })}
        />

        {errors.age && (
          <p className={styles.errorMessage}>{errors.age.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Hủy
        </button>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang cập nhật..." : "Cập nhật"}
        </button>
      </div>
    </form>
  );
}
