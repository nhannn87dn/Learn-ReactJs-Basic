# Làm một CV Online sử dụng React

Mục tiêu tạo và deployment CV lên Github.io có thể gửi được cho nhà tuyển dụng.

## Task 1

Tạo một profile CV của mình bằng React

![cv](resume-1.jpg)

## Deploy dự án React Vite

Step0:

Đẩy code lên github

Xem Link:

- https://www.youtube.com/watch?v=ElzJaEImmTI
- https://github.com/nhannn87dn/Learn-HTML-CSS-Js/tree/main/02.Lessions-40h/Day-01-HTML5-T1/3-Workshop-HTML5-L1/Github-Basic

Step1:

Thêm link vào dự án

Mở file package.json

```json
  "homepage": "https://myusername.github.io/my-app",
```

Trong đó:

- myusername: tên username github
- my-app: tên repository

Step 2:

```bash
yarn add gh-pages
```

Step 3:

Thêm vào phần Script trong package.json

```json
"predeploy": "yarn run build",
"deploy": "gh-pages -d dist",
```

Step 4:

Trong vite.config.js thêm thư mục repository vào

```js
base: "/my-app",
```

Step 5:

```bash
yarn run deploy
#or
npm run deploy
```

Step 6: Thành công --> Kiểm tra link: <https://myusername.github.io/my-app>
