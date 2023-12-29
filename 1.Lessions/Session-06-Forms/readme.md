# 6. Xử lý Form

## 1. Lấy value từ Input

```js
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Current Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </label>
      <input type="submit" />
    </form>
  );
}
export default MyForm;
```

## 2. Lấy value từ Textarea

```js
function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  //Tách sự kiện onChange ra ngoài
  // Xử lý sự kiện khi người dùng thay đổi giá trị của các trường input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Current Value: ${textarea}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={textarea} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 3. Lấy value từ Select

```js
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMyCar(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Current Value: ${myCar}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 4 Lấy value từ Radio

```js
import { useState } from "react";

function MyForm() {
  const [topping, setTopping] = useState("Medium");

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopping(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Current Value: ${topping}`);
  };

  return (
    <div className="App">
      <h3>Select Pizza Size</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="topping"
          value="Regular"
          id="regular"
          checked={topping === "Regular"}
          onChange={onOptionChange}
        />
        <label htmlFor="regular">Regular</label>

        <input
          type="radio"
          name="topping"
          value="Medium"
          id="medium"
          checked={topping === "Medium"}
          onChange={onOptionChange}
        />
        <label htmlFor="medium">Medium</label>

        <input
          type="radio"
          name="topping"
          value="Large"
          id="large"
          checked={topping === "Large"}
          onChange={onOptionChange}
        />
        <label htmlFor="large">Large</label>

        <p>
          Select topping <strong>{topping}</strong>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
```

## 5. Lấy value từ Checkbox

```js
export default function MyForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Paneer
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div>
    </div>
  );
}
```

## 6. Lấy value từ Multi Checkbox

```js
//App.js
const courses = [
  { id: 1, name: "Html" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "React Js" },
];
export default function App() {
  const [checked, setChecked] = useState([]);

  const handelCheck = (id) => {
    setChecked((prev) => {
      const isCheck = checked.includes(id);
      //Bỏ check nếu đã check
      if (isCheck) {
        return checked.filter((item) => item !== id);
      }
      //Còn lại thêm mới để check
      return [...prev, id];
    });
  };

  const handleSubmit = () => {
    console.log(checked);
  };

  return (
    <div>
      {courses.map((course) => {
        <label key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handelCheck(course.id)}
          />
          {course.name}
        </label>;
      })}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
```

## 7. Cách lấy khi có nhiều loại một lúc

Dùng khi có nhiều loại input khác nhau

```js
import React, { ChangeEvent, FormEvent, useState } from 'react';

function TestForm() {
  const [inputs, setInputs] = useState({
    userName: '',
    passwords: '',
    gender: '',
    favoriteFruit: '',
    acceptTerms: false,
    comments: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'checkbox') {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setInputs((values) => ({ ...values, [target.name]: target.checked }));
    } else {
      const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement; // Kiểm tra kiểu
      setInputs((values) => ({ ...values, [target.name]: target.value }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Current Values:', inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" name="userName" value={inputs.userName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Enter your password:
        <input type="password" name="passwords" value={inputs.passwords} onChange={handleChange} />
      </label>
      <br />
      <label>
        Select your gender:
        <select name="gender" value={inputs.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Select your favorite fruit:
        <input
          type="radio"
          name="favoriteFruit"
          value="apple"
          checked={inputs.favoriteFruit === 'apple'}
          onChange={handleChange}
        />
        Apple
        <input
          type="radio"
          name="favoriteFruit"
          value="banana"
          checked={inputs.favoriteFruit === 'banana'}
          onChange={handleChange}
        />
        Banana
        <input
          type="radio"
          name="favoriteFruit"
          value="orange"
          checked={inputs.favoriteFruit === 'orange'}
          onChange={handleChange}
        />
        Orange
      </label>
      <br />
      <label>
        Accept terms and conditions:
        <input
          type="checkbox"
          name="acceptTerms"
          checked={inputs.acceptTerms}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your comments:
        <textarea name="comments" value={inputs.comments} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;

```

===========================================

## 8. Thư viện hỗ trợ hay dùng

Thay vì đi làm việc thủ công với FORM như vậy thì có các thư viện giúp xử lí form nhanh hơn, kèm theo tính năng validate form, báo lỗi....

### React hook form

```bash
npm install react-hook-form
```

Example: <https://react-hook-form.com/get-started/#Quickstart>

React Hook Form with Yup Validation

Bạn cần cài thêm

```bash
npm install @hookform/resolvers yup
```

Dưới đây là một ví dụ về dùng React Hook Form + Validate dữ liệu lấy từ Inputs

```js
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//validate with yup
const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

//Typescript for Form Data
type FormData = yup.InferType<typeof schema>;

export default function MyForm() {
  //Su dụng React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <
  FormData >
  {
    resolver: yupResolver(schema),
  };
  //Bắt sự kiện Onsubmit Form
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
```

Để thêm một trường mới, bạn chỉ cần thêm 2 dòng này:

```jsx
<input {...register("age")} />
<p>{errors.age?.message}</p>
```

Trong đó:

- `{...register("age")}` là cú pháp bạn khai báo `name` cho input
- `{errors.age?.message}` để hiển thị lỗi khi dữ liệu bạn nhập vào input không hợp lệ.

Nếu bạn muốn sử dụng các tính năng validation cơ bản của HTML5 bạn có thể làm như sau:

```jsx
<input {...register("age", {require: true, min: 18, max: 100 })} />
<p>{errors.age?.message}</p>
```

==> Bạn thêm vào hàm `register` tham số thứ 2 là một Object

Chi tiết xem: https://react-hook-form.com/get-started#Registerfields

Để bắt các trạng thái submit trong React Hook Form, bạn có thể sử dụng thuộc tính `handleSubmit` và `isSubmitting` được cung cấp bởi React Hook Form. Dưới đây là một ví dụ:

```jsx

export default function MyForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

       <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );

}

export default MyForm;
```

Trong ví dụ trên, chúng ta sử dụng `useForm` từ React Hook Form để tạo ra các phương thức và thuộc tính cần thiết cho form.

- `handleSubmit` là một phương thức được cung cấp bởi React Hook Form và được gắn vào sự kiện `onSubmit` của form. Khi form được gửi đi, `handleSubmit` sẽ chạy hàm `onSubmit` được định nghĩa bởi bạn.
- `isSubmitting` là một thuộc tính trong `formState` được cung cấp bởi React Hook Form. Nó sẽ có giá trị `true` khi form đang trong quá trình submit và `false` khi quá trình submit hoàn thành.

Trong phần giao diện của form, chúng ta có một nút submit được kích hoạt hoặc vô hiệu hóa dựa trên giá trị của `isSubmitting`. Khi form đang được submit, nút submit sẽ bị vô hiệu hóa và hiển thị thông báo "Submitting...".

Ngược lại, khi không có quá trình submit nào diễn ra, nút sẽ được kích hoạt và hiển thị "Submit".

==> Giúp tránh cho người dùng nhấn Submit liên tục

### Yup validation

Sử dụng để validate form trong React

```bash
npm install yup --save
```

Cách sử dụng: <https://github.com/jquense/yup>

---

Dưới đây là một ví dụ về đối tượng "user" với nhiều trường và các quy tắc xác thực tương ứng bằng Yup:

```javascript
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .integer()
    .min(18, "Age must be at least 18")
    .required("Age is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      "Mật khẩu không đúng định dạng"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Gender is required"),
});

const user = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
  password: "password123",
  confirmPassword: "password123",
  gender: "male",
};

schema
  .validate(user)
  .then((valid) => console.log(valid))
  .catch((error) => console.log(error));
```

Trong ví dụ trên, chúng ta đã sử dụng Yup để tạo một schema đối tượng cho "user". Các trường của "user" bao gồm `username`, `email`, `age`, `password`, `confirmPassword`, và `gender`. Mỗi trường được định nghĩa với các quy tắc xác thực tương ứng.

- `username` phải là một chuỗi bắt buộc.
- `email` phải là một chuỗi hợp lệ đại diện cho địa chỉ email.
- `age` phải là một số nguyên dương và ít nhất 18 tuổi.
- `password` phải là một chuỗi có ít nhất 6 ký tự.
- `confirmPassword` phải giống với giá trị của trường `password`.
- `gender` phải là một trong hai giá trị "male" hoặc "female".

Nếu các giá trị của "user" không tuân thủ các quy tắc xác thực tương ứng, Yup sẽ sinh ra các lỗi tương ứng. Bằng cách sử dụng phương thức `validate` của schema, chúng ta có thể kiểm tra xem "user" có hợp lệ hay không và xử lý các lỗi nếu có.

### Formik

Ngoài React Hook Form bạn có thêm một lựa chọn nữa khá tốt là `Formik`

```bash
npm install formik --save
```

Example: <https://formik.org/docs/tutorial#a-simple-newsletter-signup-form>

Formik với Yup Validation

Doc: <https://formik.org/docs/guides/validation>

---
