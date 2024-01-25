# Session 11 - UI Components

## Các thư viện UI Components

### AntDesign

Ant Design là một thư viện giao diện người dùng (UI) được tạo ra bởi Ant Design Corporation, một công ty của Trung Quốc. Thư viện này cung cấp một bộ sưu tập các thành phần giao diện đẹp, hiện đại và chuyên nghiệp, hỗ trợ xây dựng các ứng dụng web và mobile với giao diện người dùng tốt và dễ sử dụng.

Ant Design hỗ trợ nhiều ngôn ngữ lập trình như React, Angular, Vue và TypeScript, giúp bạn sử dụng thư viện dễ dàng trong các dự án phát triển ứng dụng. Điều này giúp bạn tập trung vào logic kinh doanh và xây dựng giao diện đẹp và mạnh mẽ một cách dễ dàng.

Cài đặt: https://ant.design/docs/react/introduce

```bash
npm install antd
yarn add antd
```

Cách dùng:

```js
/*
Dùng Component nào thì destructuring ra
*/
import { Button, Space } from "antd";
const App = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
export default App;
```

Ant Design thường dùng cho các ứng dụng thiên về quản lý: Dashboard, nhập liệu nhiều

Xem code mẫu Dashboard: React + AntDesign + Fake API + Authentication

- https://github.com/nhannn87dn/Learn-Backend-NodeJs/tree/main/02.Examples/react-frontend-dashboard

### Chakra UI

https://chakra-ui.com/

Chakra UI là một thư viện giao diện người dùng (UI) mã nguồn mở dựa trên React, được thiết kế để giúp bạn xây dựng các ứng dụng web với giao diện đẹp, tùy chỉnh và dễ sử dụng. Chakra UI tập trung vào việc cung cấp các thành phần giao diện tái sử dụng và tiết kiệm thời gian, giúp bạn tập trung vào việc xây dựng ứng dụng thay vì tạo lại các thành phần giao diện cơ bản.

Cài đặt với React Vite: https://chakra-ui.com/getting-started/vite-guide

### Semantic UI React

Semantic UI React là một thư viện giao diện người dùng mã nguồn mở dựa trên React, cung cấp các thành phần giao diện đẹp và tương tác. Nó sử dụng cú pháp đơn giản và rõ ràng, giúp bạn xây dựng giao diện dễ dàng và nhanh chóng.

https://react.semantic-ui.com/

### Material-UI

Material-UI là một thư viện giao diện người dùng (UI) mã nguồn mở dựa trên nguyên lý thiết kế Material Design của Google. Nó được xây dựng cho React và cung cấp một bộ sưu tập các thành phần giao diện đẹp, hiện đại và tương tác, giúp bạn xây dựng các ứng dụng web với giao diện người dùng chất lượng cao.

Material-UI được sử dụng rộng rãi trong cộng đồng React và đã trở thành một trong những lựa chọn hàng đầu cho việc xây dựng giao diện người dùng đẹp và mạnh mẽ. Nếu bạn đang tìm kiếm một thư viện giao diện React dựa trên Material Design, Material-UI là một sự lựa chọn tuyệt vời để thử nghiệm và triển khai.

Cài đặt: https://mui.com/material-ui/getting-started/installation/

```bash
npm install @mui/material @emotion/react @emotion/styled

yarn add @mui/material @emotion/react @emotion/styled
```

Xem chi tiết thêm ở link trên

Cách dùng:

```js
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
```

### React Bootstrap

Cách cài đặt: https://react-bootstrap.netlify.app/docs/getting-started/introduction

```bash
npm install react-bootstrap bootstrap
#hoặc
yarn add react-bootstrap bootstrap
```

Tiếp theo: Cấu hình Css global

```jsx
{
  /* The following line can be included in your src/index.js or App.js file */
  /* Thêm vào file src/App.tsx (React Vite) */
}
import "bootstrap/dist/css/bootstrap.min.css";
```

Cách dùng:

```jsx

import {Button, Stack} from 'react-bootstrap';
//Hoặc
//import Button from 'react-bootstrap/Button';
//import Stack from 'react-bootstrap/Stack';

const Myconponent = ()=>{
  return (
    <Stack direction="horizontal" gap={2}>
    <Button as="a" variant="primary">
      Button as link
    </Button>
    <Button as="a" variant="success">
      Button as link
    </Button>
  </Stack>;
  )
}
```

## UI HoT Trend Khác

- https://ui.shadcn.com
- https://www.radix-ui.com
- https://daisyui.com
- https://flowbite.com/docs/getting-started/introduction/

## Bài tập

### Task 1

- Làm lại Form02.png: https://github.com/nhannn87dn/Learn-ReactJs-Basic/tree/main/3.Homeworks/Session-06-Form/Exercise-2

- Sử dụng Ant Design
- Có validate với yup

### Task 2

- Lấy dữ liệu từ API: GET - https://api.escuelajs.co/api/v1/products
- Hiển thị thành một danh sách dạng BẢNG - table với Ant Design
- Phân trang trết kết quả trả về 5 records / 1 trang
