# useContext Hook

React Context là cách để quản lý state global.

Doc: <https://react.dev/reference/react/useContext>

## Khi nào dùng useContext ?

Khi component CHA cần truyền giá trị xuống cho component CON, có nhiều cấp lồng vào nhau sâu.


## Trường hợp thực tế

- Thông tin phần header
- Thông tin phần footer
- Thông tin User đã login


Ví dụ: 

Mô phỏng một user đã login thành công và có thông tin 

```js
const user = {name: 'John', email: 'john@example.com',avatarUrl: 'https://via.placeholder.com/100x100.png'};
```

- Tạo một component HomePage đại diện cho trang Home
- Tạo component PageHeader, PageFooter
- Trong PageHeader lại có thêm component UserInfo