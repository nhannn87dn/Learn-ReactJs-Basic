# mini Project

## Task 1

Tạo một profile CV của mình bằng React

Template tham khảo

ở thư mục 3.Homeworks\Session-02-JSX-Components-Props\Resums

hoặc hình sau

![cv](cv-project.jpg)

## Deploy dự án React Vite

Step1:

Thêm link vào dự án

myusername: tên username github
my-app: tên repository

```json
  "homepage": "https://myusername.github.io/my-app",
```

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
```

Step 6: Thành công --> Kiểm tra link: <https://myusername.github.io/my-app>
