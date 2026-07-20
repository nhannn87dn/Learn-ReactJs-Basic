# Homework Session 02 - Component & JSX

## Bài 1: Tạo Component Thông Tin Cá Nhân

### Yêu cầu

Tạo một component tên `Profile`.

Component hiển thị:

- Họ tên: Nguyễn Văn A
- Nghề nghiệp: Frontend Developer
- Thành phố: Đà Nẵng

### Kết quả mong muốn

```text
Nguyễn Văn A
Frontend Developer
Đà Nẵng
```

### Điều kiện

- Sử dụng JSX.
- Component phải trả về một phần tử gốc duy nhất.
- Sử dụng các thẻ HTML phù hợp (`h1`, `p`, ...).

---

## Bài 2: Hiển Thị Dữ Liệu Bằng Curly Braces

### Yêu cầu

Cho dữ liệu:

```jsx
const name = "Nguyễn Văn A";
const age = 25;
const job = "Frontend Developer";
```

Tạo component `UserInfo` để hiển thị các thông tin trên.

### Kết quả mong muốn

```text
Nguyễn Văn A
25 tuổi
Frontend Developer
```

### Điều kiện

- Không hard-code dữ liệu trực tiếp trong JSX.
- Phải sử dụng dấu `{}` để hiển thị dữ liệu.

---

## Bài 3: Hiển Thị Danh Sách Sản Phẩm

### Yêu cầu

Cho dữ liệu:

```jsx
const products = [
  "Laptop",
  "Mouse",
  "Keyboard"
];
```

Tạo component `ProductList`.

Hiển thị danh sách sản phẩm bằng thẻ:

```html
<ul>
  <li>...</li>
</ul>
```

### Kết quả mong muốn

```text
• Laptop
• Mouse
• Keyboard
```

### Điều kiện

- Sử dụng JSX.
- Sử dụng JavaScript bên trong `{}` để render dữ liệu.

---

## Bài 4: Tính Toán Trong JSX

### Yêu cầu

Cho dữ liệu:

```jsx
const productName = "Laptop";
const price = 20000000;
```

Tạo component `ProductCard`.

Hiển thị:

- Tên sản phẩm
- Giá gốc
- Giá sau khi giảm 10%

### Kết quả mong muốn

```text
Laptop
Giá gốc: 20000000
Giá giảm còn: 18000000
```

### Điều kiện

- Không tạo thêm biến cho giá giảm.
- Thực hiện phép tính trực tiếp bên trong JSX bằng `{}`.

---

## Bài 5: Trang Giới Thiệu Công Ty

### Yêu cầu

Tạo các component sau:

##### Header

Hiển thị:

```text
ABC Company
```

##### About

Hiển thị:

```text
Chúng tôi chuyên phát triển phần mềm.
```

##### Contact

Hiển thị:

```text
Email: contact@abc.com
Phone: 0123456789
```

##### App

Render lần lượt:

- Header
- About
- Contact

### Kết quả mong muốn

```text
ABC Company

Chúng tôi chuyên phát triển phần mềm.

Email: contact@abc.com
Phone: 0123456789
```

### Điều kiện

- Mỗi phần phải là một component riêng.
- Component `App` phải gọi các component con bằng JSX.
- Tên component phải viết hoa chữ cái đầu.

## Cấu trúc thư mục

```
src/
│
├── components/
│   ├── Profile.tsx
│   ├── UserInfo.tsx
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   ├── Header.tsx
│   ├── About.tsx
│   └── Contact.tsx
│
├── App.tsx
└── main.tsx

```
