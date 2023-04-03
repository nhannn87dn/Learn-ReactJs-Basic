# TypeScript Basic

## Môi trường chạy

- Cài đặt Node.Js

>https://nodejs.org/en/download

- Cài đặt TypeScript

```bash
# Khởi tạo project
npm init -y
npm i typescript --save-dev
```


- Cấu hình TypeScript

```bash
npx tsc --init

```

Thay lại nội dung thành như sau

```json
{
  "include": ["src"],
  "allowJs": true,
  "compilerOptions": {
    "target": "es5",
    "outDir": "./build"
  }
}
```
Typescript cần biên dịch qua Js mới chạy được thông thường chúng ta sử dụng lệnh

```bash
# Biên dịch index.ts sang index.js
tsc index.ts
```

Chạy file index.js

```bash
node index.js
```

Như vậy mất thời gian để đánh lệnh rất nhiều lần trong quá trình dev. Nên chúng ta có cách sau:


```bash
npm i ts-node-dev --save-dev
```

Chỉnh sửa package.json

```json 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsnd --respawn ./index.ts",
    "build": "tsc ./src/index.ts --outDir ./build"
  },

```

## Code chuẩn hơn với Prettier

- Cài đặt Extention
- Tạo file .vscode/settings.json

```json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

- Tạo file .prettierrc

```js
{
  "printWidth": 60,
  "singleQuote": true
}

```

## Khai báo kiểu dữ liệu cơ bản trong TypeScript

Chỉ tập trung cơ bản đủ để các bạn có thể áp dụng TypeScript trong React.

