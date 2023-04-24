# Plan 1 - Quản trị User

Bước 1: 

Dùng mockupapi để tạo ra một API quản trị 20 User có cấu trúc như sau:

```js
{
    id: 1,
    name: 'random',
    fullName: 'random',
    email: 'random email',
    avatarUrl: 'random image',
    role: 'admin',
    creatDate:'random date'
}
```

Bước 2: Tạo một giao diện quản trị User với 3 tính năng: list, delete, create

Sử dụng React Router để tạo các trang



## 1. Trang Hiển thị danh sách User

* URL: /users
* Có cột Xóa để thực hiện chức năng xóa


## 2 Trang Thêm mới User

* URL: /users/add
* Tạo form thêm mới một User có các trường thông tin như trên, bạn chỉ cần tạo name, fullname, email, avatarUrl, role các trường còn lại được hệ thống sinh tự động