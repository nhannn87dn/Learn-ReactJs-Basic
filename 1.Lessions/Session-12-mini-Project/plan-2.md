# Plan 2 - Product List

## Phần chấm điểm kết thúc môn

- Tạo một Layout như Demo 5.Demo-Projects/category.html
- Tài liệu API: <https://fakestoreapi.in/docs>

Yêu cầu:

- Layout: Bên trái là cây danh mục sản phẩm. Bên phải là sản phẩm tương ứng với danh mục đang chọn. Nếu chưa chọn danh mục nào thì hiển thị sản phẩm không thuộc danh mục nào cả.

- Lấy danh sách sản phẩm hiển thị ra như Demo  CÓ PHÂN TRANG: Xem tại mục `Products->Pagination`
- API Danh mục: Xem tại mục `Products->Get Categories`
- API Lấy Sản phẩm của một Danh mục: Xem tại mục `Products->Get products of category`
- API chi tiết 1 sản phẩm: `Products->Get single product`

Gợi ý cách gọi API phân trang: ví dụ cần lấy `5` sản phẩm, danh mục `mobile`

```
https://fakestoreapi.in/api/products/category?type=mobile&page=1&limit=5
```
