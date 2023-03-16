# Gọi API cơ bản

Sử dụng MockAPI để tạo REST API fake

API endpoint: <https://640809942f01352a8a890332.mockapi.io/api/v1>

- /users - GET => Trả lại danh sách Users
- /users/:id - GET => Trả lại chi tiết một Users
- /users - POST => Thêm mới một User
- /users/:id - PUT => Cập nhật một User
- /users/:id - DELETE => Xóa một User

Responses Example:

```json
[
 {
  "createdAt": "2023-03-07T16:06:25.751Z",
  "name": "Lynette Bechtelar",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/793.jpg",
  "email": "Rey.Bernhard74@example.com",
  "mobile": "1-693-322-8500 x843",
  "country": "Saint Helena",
  "id": "1"
 },
 {
  "createdAt": "2023-03-07T23:09:56.793Z",
  "name": "Kristina Oberbrunner",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/63.jpg",
  "email": "Mariela_Blanda34@example.net",
  "mobile": "639-639-8488 x8718",
  "country": "French Southern Territories",
  "id": "2"
 },
]

```


Code Examples: <https://github.com/mockapi-io/docs/wiki/Code-examples>