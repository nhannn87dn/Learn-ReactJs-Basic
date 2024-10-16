# Tạo trang web

Dự vào cấu trúc trang này, xây dựng layout các trang cho phần quản trị Admin.

```js
src/
├─ pages/
│  ├─ DashboardPage.js
│  ├─ CategoryPage.js
│  ├─ ProductPage.js
│  ├─ NoPage.js
│  ├─ LoginPage.js
```

Như vậy ứng dụng sẽ có 2 Layout, một layout cho PageAdmin và 1 layout chung cho tất cả các Page còn lại.

## Page Login

- Sử dụng `Form` của AntDesign
- Sử dụng `Yup` để validate dữ liệu cho Form

## Layout Dashboard

- Sử dụng component `Layout` và `Menu` của AntDesign
