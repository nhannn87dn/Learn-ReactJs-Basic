# Project Mini

## 💛 Các thư viện UI Components

### 💥 AntDesign

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

### 💥 ui.shadcn

Chi tiết: https://ui.shadcn.com

Cài đặt: https://ui.shadcn.com/docs/installation/vite

### 💥 radix-ui

Chi tiết: https://www.radix-ui.com/

Cài đặt: https://www.radix-ui.com/themes/docs/overview/getting-started

### 💥 Một số thư viện UI Khác

- React Bootstrap: https://react-bootstrap.netlify.app/docs/getting-started/introduction

- Material-UI: https://mui.com/material-ui/getting-started/installation/

- Chakra UI: https://chakra-ui.com/

## 💛 Project Topics

- Plan 1: [Movies App](plan-1.md)
- Plan 2: [Products Category](plan-2.md)
- Plan 4: [Weather App](plan-4.md)

## 💛 Hình thức nộp bài

1. Tạo một repo Github --> Gửi link để nộp

1. Deploy dự án lên github.io, Xem bên dưới.

1. Nếu không dùng được Github thì Zip folder code lại (Không bao gồm folder node_modules) --> Gửi về email: nhannn@softech.vn

## 💛 Deploy React Vite lên GitHub Pages

### Bước 1

Cài đặt `gh-pages` package

```bash
npm install gh-pages --save-dev
# or
yarn add gh-pages --save-dev
```

### Bước 2

Chỉnh sửa lại file `package.json` Thêm đoạn này vào `scripts`

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

### Bước 3

Cấu hình thư mục gốc cho project

Edit file `vite.config.js` và thêm thuộc tính này vào

```js
base: "/YOUR_REPOSITORY_NAME",
```

Thay đổi `YOUR_REPOSITORY_NAME` thành tên github của bạn

### Bước 4

chạy lệnh sau để deploy

```bash
npm run deploy
yarn run deploy
```

Sau khi thành công bạn truy cập đường link https://username.github.io/YOUR_REPOSITORY_NAME
