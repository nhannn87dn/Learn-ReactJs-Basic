# Tạo trang web

Với hệ thống URL như sau

- / : mặc định là trang chủ

- /products : danh sách sản phẩm --> Gọi API lấy ra danh sách SP: https://fakeapi.platzi.com/en/rest/products/#get-all-products

- /products/:id : chi tiết một sản phẩm -- Lấy ID --> gọi API hiển thị chi tiết sản phẩm dựa vào ID: https://fakeapi.platzi.com/en/rest/products/#get-a-single-product

Phần quản trị

- /dashboard : Trang chủ Admin
- /login : Admin Login

- /dashboard/products : Danh sách sản phẩm
- /dashboard/products/add : Thêm một sản phẩm

**Lưu ý:**

- 3 trang đầu 1 Layout, 4 trang sau 1 Layout khác
- Nếu không match với URL nào thì hiển thị trang báo lỗi: 404 -Not Found
