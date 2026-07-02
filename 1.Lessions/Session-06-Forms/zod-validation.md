# Hướng Dẫn Sử Dụng React Hook Form (kèm Zod)

## Phần 1: Cơ bản về React Hook Form

### 1.1. React Hook Form là gì?

React Hook Form (RHF) là thư viện quản lý form cho React, giúp:

- Giảm số lần re-render (form không kiểm soát - uncontrolled by default)
- Code ngắn gọn hơn so với quản lý state thủ công
- Tích hợp validation dễ dàng
- Hiệu năng tốt hơn nhiều so với các thư viện dùng controlled input

### 1.2. Cài đặt

```bash
npm install react-hook-form
```

### 1.3. Ví dụ cơ bản nhất

```jsx
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", { required: "Email là bắt buộc" })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Mật khẩu</label>
      <input
        type="password"
        {...register("password", {
          required: "Mật khẩu là bắt buộc",
          minLength: { value: 6, message: "Tối thiểu 6 ký tự" },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Đăng nhập</button>
    </form>
  );
}
```

**Giải thích các hàm/hook chính:**

| Tên | Công dụng |
|---|---|
| `useForm()` | Khởi tạo form, trả về các hàm và state cần thiết |
| `register` | Đăng ký một input vào form, tự động gắn `name`, `onChange`, `onBlur`, `ref` |
| `handleSubmit` | Bọc hàm submit của bạn, tự validate trước khi gọi |
| `formState.errors` | Object chứa lỗi validate của từng field |
| `formState.isSubmitting` | Trạng thái đang submit |

### 1.4. Giá trị mặc định (`defaultValues`)

```jsx
const { register, handleSubmit } = useForm({
  defaultValues: {
    email: "",
    password: "",
  },
});
```

### 1.5. Theo dõi giá trị với `watch`

```jsx
const { watch } = useForm();
const email = watch("email"); // re-render mỗi khi email thay đổi
```

### 1.6. Set giá trị thủ công với `setValue` và `reset`

```jsx
const { setValue, reset } = useForm();

setValue("email", "test@example.com"); // gán 1 field
reset(); // reset toàn bộ form về defaultValues
```

### 1.7. Component con - dùng `Controller`

Với các UI library (MUI, AntD, react-select...) không hỗ trợ `ref` trực tiếp, dùng `Controller`:

```jsx
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

function MyForm() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Select {...field} options={[{ value: "vn", label: "Việt Nam" }]} />
        )}
      />
    </form>
  );
}
```

### 1.8. Form động (Field Array)

```jsx
import { useForm, useFieldArray } from "react-hook-form";

function DynamicForm() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: { items: [{ name: "" }] },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`items.${index}.name`)} />
          <button type="button" onClick={() => remove(index)}>Xóa</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })}>
        Thêm dòng
      </button>
      <button type="submit">Gửi</button>
    </form>
  );
}
```

---

## Phần 2: Tích hợp Zod để validate

### 2.1. Vì sao dùng Zod?

Validate bằng object rule (`required`, `minLength`...) như trên chỉ phù hợp cho form đơn giản. Với form phức tạp (validate chéo giữa các field, cấu trúc lồng nhau, dùng lại schema ở backend...) thì **Zod** là lựa chọn tốt hơn — Zod là thư viện khai báo schema (schema declaration) và validate dữ liệu cho TypeScript/JavaScript.

### 2.2. Cài đặt

```bash
npm install zod @hookform/resolvers
```

`@hookform/resolvers` là cầu nối giúp RHF hiểu được schema của Zod (và nhiều thư viện khác như Yup, Joi).

### 2.3. Ví dụ tích hợp cơ bản

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Định nghĩa schema
const loginSchema = z.object({
  email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

// 2. Suy ra type (nếu dùng TypeScript)
// type LoginFormValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // 3. Gắn resolver vào useForm
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="Mật khẩu" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Đăng nhập</button>
    </form>
  );
}
```

Lưu ý: khi đã có `resolver`, bạn **không cần** truyền rule vào `register` nữa (`register("email", { required: true })`) — mọi validate đều nằm trong schema.

### 2.4. Các kiểu validate thường dùng trong Zod

```js
import { z } from "zod";

const schema = z.object({
  // Chuỗi
  username: z.string().min(3, "Tối thiểu 3 ký tự").max(20, "Tối đa 20 ký tự"),

  // Số
  age: z.coerce.number().min(18, "Phải từ 18 tuổi trở lên"),
  // z.coerce.number() giúp convert string từ input thành number

  // Optional / nullable
  nickname: z.string().optional(),

  // Enum
  role: z.enum(["admin", "user", "guest"]),

  // Boolean bắt buộc phải true (vd: checkbox đồng ý điều khoản)
  agree: z.literal(true, {
    errorMap: () => ({ message: "Bạn phải đồng ý điều khoản" }),
  }),

  // Mảng
  tags: z.array(z.string()).min(1, "Chọn ít nhất 1 tag"),

  // Object lồng nhau
  address: z.object({
    city: z.string().min(1, "Thành phố là bắt buộc"),
  }),
});
```

### 2.5. Validate chéo giữa các field (`refine`)

Ví dụ bắt buộc `confirmPassword` phải khớp `password`:

```js
const registerSchema = z
  .object({
    password: z.string().min(6, "Tối thiểu 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"], // lỗi sẽ hiện ở field này
  });
```

### 2.6. Ví dụ đầy đủ: Form đăng ký

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Họ tên tối thiểu 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    age: z.coerce.number().min(18, "Phải từ 18 tuổi"),
    password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
    confirmPassword: z.string(),
    agree: z.literal(true, {
      errorMap: () => ({ message: "Bạn cần đồng ý điều khoản sử dụng" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      age: undefined,
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const onSubmit = async (data) => {
    // giả lập gọi API
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Dữ liệu hợp lệ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("fullName")} placeholder="Họ tên" />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input {...register("age")} placeholder="Tuổi" />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <input type="password" {...register("password")} placeholder="Mật khẩu" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Xác nhận mật khẩu"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("agree")} />
          Tôi đồng ý điều khoản sử dụng
        </label>
        {errors.agree && <p>{errors.agree.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Đăng ký"}
      </button>
    </form>
  );
}
```

### 2.7. Một số lưu ý khi kết hợp RHF + Zod

- **`z.coerce`**: input HTML luôn trả về string, dùng `z.coerce.number()` / `z.coerce.boolean()` để tự động ép kiểu trước khi validate.
- **TypeScript**: nên dùng `z.infer<typeof schema>` để lấy type cho form, tránh viết type 2 lần.

  ```ts
  type RegisterFormValues = z.infer<typeof registerSchema>;
  const { ... } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });
  ```

- **`mode`**: mặc định RHF chỉ validate khi submit. Muốn validate ngay khi gõ (onChange) hoặc rời field (onBlur):

  ```js
  useForm({ resolver: zodResolver(schema), mode: "onBlur" });
  ```

- **Tái sử dụng schema**: có thể dùng chung schema Zod ở cả frontend lẫn backend (nếu backend cũng là Node.js) để đảm bảo validate đồng nhất.
