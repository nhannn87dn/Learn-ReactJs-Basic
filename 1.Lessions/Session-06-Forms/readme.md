# Xử lý dữ liệu từ Form trong ReactJs

## 1. Form trong HTML truyền thống và trong React

**Trong HTML truyền thống:**

* Các phần tử form (input, textarea, select) tự quản lý trạng thái của chúng.
* Khi người dùng gõ vào input, giá trị của input thay đổi ngay lập tức bên trong DOM.
* Để lấy giá trị, bạn truy cập trực tiếp vào DOM (ví dụ: `document.getElementById('myInput').value`).

**Trong React:**

* React khuyến khích cách tiếp cận **"tuyên bố" (declarative)**. Thay vì để DOM quản lý trạng thái, chúng ta muốn **React quản lý trạng thái của form**.
* Điều này dẫn đến khái niệm **Controlled Components**.

## 2. Controlled Components (Thành phần được kiểm soát)

### 2.1 **Khái niệm:**

* Một "Controlled Component" là một phần tử form HTML mà **giá trị của nó được kiểm soát bởi trạng thái (state) của React component**.
* Khi giá trị của input thay đổi (người dùng gõ), nó sẽ không trực tiếp cập nhật DOM. Thay vào đó, nó sẽ kích hoạt một sự kiện (ví dụ: `onChange`), và bạn sẽ sử dụng hàm `setState` (hoặc `dispatch` với `useReducer`) để cập nhật trạng thái React. Sau đó, React sẽ lấy giá trị từ trạng thái này và cập nhật lại phần tử DOM.
* Vòng lặp: **Input UI -> Event Handler -> React State -> Input UI (re-render)**.

**Khi nào nên dùng:** Đây là **cách tiếp cận được khuyến nghị** và phổ biến nhất trong React. Nó cung cấp luồng dữ liệu một chiều rõ ràng, dễ dự đoán và dễ debug.

**Ví dụ:** Xử lý một ô input đơn giản

```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [name, setName] = useState(''); // 1. Khởi tạo state cho giá trị input

  // 2. Hàm xử lý sự kiện onChange
  const handleChange = (event) => {
    setName(event.target.value); // Cập nhật state với giá trị mới từ input
    console.log('Current input value (in state):', event.target.value);
  };

  // 3. Hàm xử lý sự kiện onSubmit
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)
    alert(`Tên bạn đã nhập là: ${name}`); // Sử dụng giá trị từ state
    setName(''); // Reset input sau khi submit
  };

  return (
    <div>
      <h2>Controlled Component - Input Text</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tên của bạn:
          <input
            type="text"
            value={name} // 4. Gán giá trị input với state
            onChange={handleChange} // 5. Lắng nghe sự kiện thay đổi
          />
        </label>
        <button type="submit">Gửi</button>
      </form>
      <p>Bạn đang gõ: <strong>{name}</strong></p>
    </div>
  );
}

export default ControlledInput;
```

**Giải thích:**

* `useState` tạo một biến trạng thái `name` để lưu trữ giá trị của input.
* Thuộc tính `value={name}` trên `<input>` làm cho nó trở thành một controlled component. Giá trị của input luôn được đọc từ state `name`.
* Sự kiện `onChange` kích hoạt `handleChange`. Trong `handleChange`, chúng ta lấy giá trị hiện tại của input từ `event.target.value` và cập nhật state `name`.
* Khi state `name` thay đổi, component `ControlledInput` re-render và `<input>` được cập nhật giá trị mới.
* Khi submit, chúng ta sử dụng giá trị `name` từ state.

### 2.2 **Xử lý các loại input khác nhau:**

* **`textarea`**: Tương tự như input text, dùng thuộc tính `value` và `onChange`.

    ```jsx
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
    ```

* **`select`**: Dùng thuộc tính `value` trên thẻ `<select>`, và React sẽ tự động chọn `<option>` có `value` khớp.

    ```jsx
    <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
      <option value="apple">Táo</option>
      <option value="banana">Chuối</option>
    </select>
    ```

* **`checkbox`**: Dùng thuộc tính `checked` (thay vì `value`) và `onChange`.

    ```jsx
    <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
    ```

* **`radio buttons`**: Tương tự checkbox, dùng `checked` và `onChange`, nhưng các radio button cùng `name` sẽ chia sẻ cùng một state.

    ```jsx
    <input type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} /> Nam
    <input type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} /> Nữ
    ```

## 3. Xử lý Form với nhiều Input

Khi có nhiều input, việc tạo nhiều `useState` có thể trở nên cồng kềnh. Bạn có thể gộp chúng vào một đối tượng `state` duy nhất với kiểu dữ liệu `object` như sau:

```jsx
import React, { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring để lấy name và value
    setFormData(prevFormData => ({
      ...prevFormData, // Giữ nguyên các giá trị khác
      [name]: value,   // Cập nhật giá trị tương ứng với thuộc tính 'name'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dữ liệu đã gửi:', formData);
    alert(`Đăng ký thành công!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Form với nhiều Input (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username" // Thêm thuộc tính 'name' khớp với key trong state
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email" // Thêm thuộc tính 'name'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Mật khẩu:
            <input
              type="password"
              name="password" // Thêm thuộc tính 'name'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p>Dữ liệu hiện tại: {JSON.stringify(formData)}</p>
    </div>
  );
}

export default MultiInputForm;
```

**Giải thích:**

* `formData` là một đối tượng state chứa tất cả các giá trị của input.
* Hàm `handleChange` được tái sử dụng cho tất cả các input.
* Thuộc tính `name` của mỗi input khớp với key trong đối tượng `formData`.
* Trong `handleChange`, chúng ta dùng cú pháp `[name]: value` để cập nhật động thuộc tính tương ứng trong state.

## 4. Uncontrolled Components (Thành phần không được kiểm soát)

**Khái niệm:**

* Một "Uncontrolled Component" là một phần tử form HTML mà **React không kiểm soát giá trị của nó**. Thay vào đó, bạn để DOM quản lý giá trị như HTML truyền thống.
* Để lấy giá trị của chúng, bạn sẽ cần sử dụng **Refs** để truy cập trực tiếp vào phần tử DOM và lấy giá trị.

**Khi nào nên dùng:**

* Khi bạn cần tích hợp với một thư viện JavaScript không phải React quản lý DOM (ví dụ: một thư viện biểu đồ, hoặc một widget của bên thứ ba).
* Khi bạn cần truy cập trực tiếp vào DOM cho các tác vụ như reset form, focus vào input.
* Đối với các form rất đơn giản chỉ cần lấy giá trị cuối cùng khi submit và không cần cập nhật UI trong quá trình gõ.

**Ví dụ:** Lấy giá trị input bằng `useRef`

```jsx
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null); // 1. Tạo một ref

  const handleSubmit = (event) => {
    event.preventDefault();
    // 2. Truy cập giá trị thông qua ref
    alert(`Giá trị bạn đã nhập là: ${inputRef.current.value}`);
    inputRef.current.value = ''; // Reset input bằng cách thao tác trực tiếp DOM
  };

  return (
    <div>
      <h2>Uncontrolled Component - Input Text (using Ref)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tên của bạn:
          <input
            type="text"
            ref={inputRef} // 3. Gán ref cho input
            defaultValue="Mặc định ban đầu" // Sử dụng defaultValue để đặt giá trị khởi tạo
          />
        </label>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default UncontrolledInput;
```

**Giải thích:**

* `useRef` tạo một đối tượng ref.
* `ref={inputRef}` gán ref đó vào phần tử `<input>`.
* Thay vì `value`, chúng ta dùng `defaultValue` để cung cấp giá trị khởi tạo. `defaultValue` chỉ thiết lập giá trị một lần duy nhất khi component được mount.
* Khi submit, chúng ta truy cập `inputRef.current.value` để lấy giá trị hiện tại của input trực tiếp từ DOM.

## 5. Chọn lựa giữa Controlled và Uncontrolled Components

| Đặc điểm           | Controlled Components                                    | Uncontrolled Components                               |
| :----------------- | :------------------------------------------------------- | :---------------------------------------------------- |
| **Quản lý giá trị** | Bởi React State                                          | Bởi DOM                                               |
| **Cập nhật UI** | Luôn đồng bộ với State (luồng dữ liệu một chiều)        | Không đồng bộ, DOM tự quản lý                         |
| **Dự đoán được** | Rất cao, dễ debug                                        | Ít dự đoán được hơn, khó debug hơn                    |
| **Cách truy cập** | Từ State (ví dụ: `name`)                                | Từ Ref (ví dụ: `inputRef.current.value`)              |
| **Độ phức tạp** | Hơi nhiều code hơn cho các input đơn giản               | Ít code hơn ban đầu cho input đơn giản                |
| **Khuyến nghị** | **Hầu hết các trường hợp, đặc biệt với form phức tạp** | Chỉ khi cần tích hợp với thư viện ngoài hoặc các tác vụ DOM trực tiếp |

**Lời khuyên:** Trong phần lớn các trường hợp, **hãy sử dụng Controlled Components**. Chúng giúp bạn kiểm soát hoàn toàn dữ liệu form, dễ dàng thực hiện validation (kiểm tra hợp lệ), hiển thị phản hồi tức thì cho người dùng, và reset form.

### Tổng kết

Xử lý dữ liệu form trong React chủ yếu xoay quanh khái niệm **Controlled Components**, nơi trạng thái của form được kiểm soát hoàn toàn bởi React component. Mặc dù **Uncontrolled Components** tồn tại và có những trường hợp sử dụng nhất định (chủ yếu là tích hợp bên thứ ba hoặc các tác vụ DOM trực tiếp), nhưng **Controlled Components là phương pháp được ưa chuộng và khuyến nghị** vì nó mang lại sự rõ ràng, dễ dự đoán và khả năng kiểm soát cao đối với dữ liệu của ứng dụng.

Khi xây dựng form, hãy luôn nghĩ về việc:

1. **Làm thế nào để lưu trữ giá trị của input trong React state?**
2. **Làm thế nào để cập nhật state khi người dùng gõ?**
3. **Làm thế nào để sử dụng giá trị từ state khi form được submit?**

Nắm vững những khái niệm này sẽ giúp bạn xây dựng các form mạnh mẽ và dễ bảo trì trong các ứng dụng React của mình.

===========================================

## Xử Lý Form Mạnh Mẽ với React Hook Form và Validation Yup

Chào mừng các bạn quay trở lại! Hôm nay, chúng ta sẽ nâng cấp kỹ năng xử lý form trong React của mình bằng cách tìm hiểu về một thư viện phổ biến: **React Hook Form**. Thư viện này giúp đơn giản hóa việc quản lý form state, validation, và submit, đặc biệt là khi form của bạn trở nên phức tạp. Sau đó, chúng ta sẽ kết hợp nó với **Yup** để thực hiện validation schema một cách hiệu quả.

### 1. Tại sao lại dùng React Hook Form?

Bạn đã học cách xử lý form với Controlled Components bằng `useState`. Điều này hoạt động tốt cho các form đơn giản. Tuy nhiên, khi form của bạn có:
* **Nhiều trường input:** Việc tạo và quản lý nhiều state cho từng input có thể rườm rà.
* **Validation phức tạp:** Viết logic validation thủ công có thể trở nên lộn xộn và khó bảo trì.
* **Re-render không cần thiết:** Với Controlled Components, mỗi lần gõ vào input đều gây ra re-render cho component chứa form, có thể ảnh hưởng đến hiệu suất nếu form quá lớn hoặc có nhiều logic bên trong.

**React Hook Form ra đời để giải quyết những vấn đề này:**

* **Hiệu suất:** Nó sử dụng `uncontrolled components` theo mặc định (với `ref`), giảm thiểu số lần re-render không cần thiết của component chứa form.
* **Dễ sử dụng:** Cú pháp đơn giản và trực quan với Hooks.
* **Tích hợp Validation mạnh mẽ:** Hỗ trợ validation dựa trên schema với các thư viện như Yup, Zod, Joi.
* **Ít code hơn:** Giảm lượng code bạn phải viết để quản lý form.

### 2. Bắt đầu với React Hook Form

Đầu tiên, hãy cài đặt thư viện:

```bash
npm install react-hook-form
# hoặc
yarn add react-hook-form
```

#### Các Hook chính của React Hook Form

* **`useForm()`**: Đây là Hook chính mà bạn sẽ sử dụng. Nó trả về một đối tượng chứa các phương thức và thuộc tính cần thiết để quản lý form.
* **`register`**: Dùng để "đăng ký" các trường input của form với React Hook Form. Nó gán một `ref` vào input để React Hook Form có thể theo dõi giá trị của nó.
* **`handleSubmit`**: Một hàm bao bọc hàm submit của bạn. Nó sẽ tự động gọi hàm submit của bạn với dữ liệu form khi validation thành công.
* **`formState`**: Một đối tượng chứa thông tin về trạng thái của form, bao gồm lỗi (`errors`), trạng thái loading (`isSubmitting`), v.v.

#### Ví dụ cơ bản: Form Đăng nhập

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  // 1. Khởi tạo useForm()
  const { register, handleSubmit, formState: { errors } } = useForm();

  // 2. Hàm submit sẽ được gọi khi form hợp lệ
  const onSubmit = (data) => {
    console.log("Dữ liệu form:", data);
    alert(
      `Đăng nhập thành công!\nEmail: ${data.email}\nMật khẩu: ${data.password}`
    );
  };

  return (
    <div>
      <h2>Đăng nhập với React Hook Form</h2>
      {/* 3. Gán handleSubmit vào onSubmit của form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            // 4. Đăng ký input với React Hook Form
            // Tham số đầu tiên là tên của trường (name)
            // Tham số thứ hai là các quy tắc validation tích hợp
            {...register("email", { required: "Email là bắt buộc" })}
          />
          {/* 5. Hiển thị lỗi nếu có */}
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Mật khẩu là bắt buộc",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự"
              }
            })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginForm;
```

**Giải thích:**

* **`useForm()`**: Chúng ta gọi `useForm()` để nhận các hàm và đối tượng cần thiết.
* **`register("fieldName", validationRules)`**: Thay vì `value` và `onChange`, chúng ta dùng toán tử spread `...` để truyền các props từ `register` vào input. Tham số đầu tiên là `name` của input. Tham số thứ hai là một đối tượng chứa các quy tắc validation tích hợp của React Hook Form (ví dụ: `required`, `minLength`, `maxLength`, ``pattern`).
* **`handleSubmit(onSubmit)`**: Khi form được submit, `handleSubmit` sẽ chạy validation. Nếu form hợp lệ, nó sẽ gọi hàm `onSubmit` của bạn và truyền vào đối tượng `data` chứa tất cả các giá trị của form. Nếu không hợp lệ, nó sẽ không gọi `onSubmit` và các lỗi sẽ được hiển thị.
* **`formState: { errors }`**: Đối tượng `errors` chứa các lỗi validation. Bạn có thể truy cập `errors.fieldName.message` để hiển thị thông báo lỗi tương ứng.

### 3. Tích hợp Validation với Yup

Mặc dù React Hook Form có validation tích hợp, nhưng khi validation logic trở nên phức tạp, việc viết chúng trực tiếp trong `register` sẽ khó quản lý. **Yup** là một thư viện schema validation phổ biến, giúp định nghĩa các quy tắc validation một cách rõ ràng và mạnh mẽ.

Đầu tiên, cài đặt Yup và resolver cho React Hook Form:

```bash
npm install yup @hookform/resolvers
# hoặc
yarn add yup @hookform/resolvers
```

#### Ví dụ: Form Đăng ký với Yup Validation

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import resolver
import * as yup from 'yup'; // Import yup

// 1. Định nghĩa schema validation với Yup
const schema = yup.object().shape({
  fullName: yup.string().required('Họ tên là bắt buộc').min(3, 'Họ tên phải có ít nhất 3 ký tự'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  age: yup.number()
    .typeError('Tuổi phải là số') // Thông báo lỗi khi không phải số
    .positive('Tuổi phải là số dương')
    .integer('Tuổi phải là số nguyên')
    .min(18, 'Bạn phải đủ 18 tuổi trở lên'),
  password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp') // Kiểm tra khớp với password
    .required('Xác nhận mật khẩu là bắt buộc'),
});

function RegistrationForm() {
  // 2. Truyền resolver vào useForm
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Sử dụng yupResolver với schema đã định nghĩa
  });

  const onSubmit = (data) => {
    console.log("Dữ liệu đăng ký:", data);
    alert('Đăng ký thành công! Kiểm tra console để xem dữ liệu.');
    // Logic gửi dữ liệu lên server
  };

  return (
    <div>
      <h2>Form Đăng ký với Yup Validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Họ tên:</label>
          <input id="fullName" type="text" {...register("fullName")} />
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="age">Tuổi:</label>
          <input id="age" type="text" {...register("age")} /> {/* Dùng type="text" để Yup xử lý typeError */}
          {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
          <input id="confirmPassword" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
```

**Giải thích:**

1. **Định nghĩa Schema với Yup:** Chúng ta tạo một `schema` bằng `yup.object().shape({...})`. Trong đó, bạn định nghĩa các quy tắc validation cho từng trường:
    * `yup.string()`: Định nghĩa trường là một chuỗi.
    * `.required()`: Yêu cầu trường không được để trống.
    * `.email()`: Kiểm tra định dạng email.
    * `.min(length, message)`: Độ dài tối thiểu.
    * `yup.number()`: Định nghĩa trường là một số.
    * `.typeError()`: Thông báo lỗi khi giá trị không phải là kiểu dữ liệu mong muốn.
    * `.positive()`, `.integer()`: Kiểm tra số dương, số nguyên.
    * `.oneOf([yup.ref('fieldName'), null], message)`: Kiểm tra giá trị có khớp với giá trị của một trường khác hay không.
2. **Sử dụng `yupResolver`:** Trong `useForm`, chúng ta truyền `resolver: yupResolver(schema)`. Điều này nói với React Hook Form rằng hãy sử dụng schema của Yup để thực hiện validation.
3. **Không cần validation trong `register`:** Vì đã có Yup schema, bạn không cần truyền các quy tắc validation vào `register()` nữa (ví dụ: `register("email")` thay vì `register("email", { required: true })`).
4. **Hiển thị lỗi:** Đối tượng `errors` vẫn hoạt động tương tự, nó sẽ chứa các thông báo lỗi từ Yup.

### 4. Các tính năng hữu ích khác của React Hook Form

* **`reset()`**: Dùng để reset form về trạng thái ban đầu hoặc về một tập hợp giá trị cụ thể.

    ```jsx
    // Trong hàm submit
    onSubmit: (data) => {
      console.log(data);
      reset(); // Reset tất cả các trường
    };
    ```

* **`watch()`**: Theo dõi giá trị của một hoặc nhiều trường input theo thời gian thực (tương tự như `onChange` với controlled component, nhưng thường dùng để hiển thị giá trị ngay lập tức mà không cần re-render toàn bộ form).

    ```jsx
    const emailValue = watch("email"); // Theo dõi giá trị của trường email
    // ...
    <p>Bạn đang gõ email: {emailValue}</p>
    ```

* **`setValue()`**: Thiết lập giá trị cho một trường cụ thể theo lập trình.

    ```jsx
    <button onClick={() => setValue("email", "test@example.com")}>Set Email</button>
    ```

* **`getValues()`**: Lấy tất cả giá trị của form tại bất kỳ thời điểm nào.

    ```jsx
    <button onClick={() => console.log(getValues())}>Lấy tất cả giá trị</button>
    ```

* **`Controller`**: Dùng để tích hợp React Hook Form với các thư viện UI bên thứ ba (như Material UI, Ant Design) mà không sử dụng `ref` nội bộ.

### Tổng kết

**React Hook Form** là một thư viện tuyệt vời để xử lý form trong React, mang lại hiệu suất tốt hơn, code sạch hơn và trải nghiệm phát triển dễ chịu hơn. Khi kết hợp với các thư viện schema validation như **Yup**, nó tạo thành một giải pháp toàn diện và mạnh mẽ cho mọi loại form, từ đơn giản đến phức tạp.

**Những điểm chính cần nhớ:**

* **`useForm()`** là Hook chính.
* **`register`** để "đăng ký" các input.
* **`handleSubmit`** để xử lý submit form sau khi validation.
* **`formState: { errors }`** để hiển thị lỗi.
* **Yup và `@hookform/resolvers`** cho validation schema nâng cao.
