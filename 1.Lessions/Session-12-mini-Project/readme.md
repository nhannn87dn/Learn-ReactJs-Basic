# Project Mini

## Plan List

- Plan 1: [Movies App](plan-1.md)
- Plan 2: [Products Category](plan-2.md)
- Plan 3: [Home Page](plan-3.md)
- Plan 4: [Weather App](plan-4.md)

## Hình thức nộp bài

1. Tạo một repo Github --> Gửi link để nộp

- Deploy dự án lên git io: https://ecshopvietnam.com/blog/tao-va-deploy-ung-dung-react-app-len-github-94.html
- Deploy lên Vercel

2. Nếu không dùng được Github thì Zip folder code lại (Không bao gồm folder node_modules) --> Gửi về email: nhannn@softech.vn

## Deploy React Vite lên GitHub Pages

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

Edit file `vite.config.j` và thêm thuộc tính này vào

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
