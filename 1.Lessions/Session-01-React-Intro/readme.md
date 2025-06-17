# Giới thiệu React

## 🔶 React là gì ?

**React** là một **thư viện JavaScript** được phát triển bởi **Facebook (nay là Meta)** để xây dựng **giao diện người dùng (User Interfaces)**.

* React tập trung chủ yếu vào **View** trong mô hình **MVC (Model – View – Controller)**.
* React dùng để tạo ra **các thành phần giao diện có thể tái sử dụng** gọi là **component**.

🧠 **Ghi nhớ:** React KHÔNG phải là framework như Angular, mà là **thư viện**.

React lần đầu tiên được triển khai cho ứng dụng Newsfeed của Facebook năm 2011, sau đó được triển khai cho Instagram.com năm 2012. Nó được mở mã nguồn (open-sourced) tại JSConf US tháng 5 năm 2013.

---

## 🌟 Điểm nổi bật của React?

| Tính năng               | Ý nghĩa                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| **Component-based UI**  | Giao diện chia thành các khối nhỏ (component) dễ quản lý và tái sử dụng |
| **Virtual DOM**         | Tối ưu hiệu năng bằng cách cập nhật phần giao diện thực sự cần thiết    |
| **Reusable Components** | Viết một lần – dùng nhiều nơi                                           |
| **Declarative Code**    | Mô tả giao diện bằng "trạng thái" – không cần thao tác DOM trực tiếp    |
| **Hệ sinh thái lớn**    | Hàng nghìn thư viện, công cụ hỗ trợ                                     |

---

## Cấu trúc cơ bản của ứng dụng React

React hoạt động xoay quanh 4 khái niệm chính:

| Khái niệm     | Ý nghĩa                                                     |
| ------------- | ----------------------------------------------------------- |
| **Component** | Một phần giao diện độc lập (hàm hoặc lớp)                   |
| **JSX**       | Cú pháp mở rộng giống HTML dùng trong JavaScript            |
| **Props**     | Dữ liệu truyền từ component cha xuống component con         |
| **State**     | Dữ liệu nội bộ của component có thể thay đổi theo thời gian |

---

## ⚙️ React khác gì với HTML/CSS/JS thuần?

| HTML/CSS/JS truyền thống           | React                        |
| ---------------------------------- | ---------------------------- |
| Giao diện tĩnh                     | Giao diện động theo dữ liệu  |
| Viết toàn bộ HTML trong file .html | Viết JSX trong component     |
| Quản lý DOM thủ công               | React xử lý DOM hiệu quả hơn |
| Tách logic và giao diện khó        | Component tách biệt rõ ràng  |

---

## 🤔 Khi nào nên dùng React?

Bạn nên dùng React khi:

* Ứng dụng có giao diện **nhiều thành phần lặp lại hoặc tái sử dụng**
* Giao diện cần **cập nhật thường xuyên** theo dữ liệu (VD: todo list, mạng xã hội, dashboard)
* Bạn cần **tổ chức code frontend rõ ràng**, dễ bảo trì

---

## 🔶 React có phổ biến không ?

* Github Star: <https://github.com/facebook/react/>
* Google trend: <https://trends.google.com/trends/explore?q=%2Fm%2F012l1vxv,%2Fg%2F11c0vmgx5d,%2Fg%2F11c6w0ddw9>

* `Example Case`: Facebook, Instagram, Netflix, Reddit, Uber, Airbnb, The New York Times, Khan, Academy, Codecademy, SoundCloud, Discord, WhatsApp Web

---

## 🔶 React có thể làm được gì ?

* làm WEB APP
* làm Mobile APP
* làm Desktop APP

---

## 🔶 Tại sao nên học React

* Trend
* Cộng đồng lớn
* Thân thiện SEO (Shopee, chotot.com, Tiki, Lazada)
* Khả năng mở rộng và tái sử dụng cao
* Hiệu suất ứng dụng cao
* Phát triển nhanh (thư viện hỗ trợ khổng lồ)
* Khả năng tương thích ngược
* Cơ hội việc làm cao

Xem Biểu đồ Trend tech:

* <https://survey.stackoverflow.co/2023/#section-most-popular-technologies-web-frameworks-and-technologies>
* <https://npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue>
* <https://trends.google.com/trends/explore?cat=31&date=2021-01-01%202023-07-17&q=Vue,React,Angular>

6 điểm nổi bật của ReactJs

![beb](img/ReactJS-Framework-Benefits.png)

Nhiều ông lớn sử dụng

![](img/Usage-of-ReactJS-by-top-brands.png)

---

---

## 🔶 Môi phát triển ReactJS (Node.js, npm/yarn)

### 🔥 Node.js

* Node.js là một môi trường chạy mã JavaScript ở phía máy chủ.
* Nó cho phép chúng ta chạy JavaScript bên ngoài trình duyệt, giúp xây dựng ứng dụng web đa nền tảng.
* Node.js đi kèm với npm (Node Package Manager) hoặc yarn (công cụ quản lý gói alternative).

### 🔥 Cài đặt Node.js

* Truy cập trang web chính thức của Node.js tại <https://nodejs.org>.
* Tải xuống phiên bản LTS (Long-Term Support) phù hợp với hệ điều hành của bạn.
* Chạy bộ cài đặt và hoàn thành quá trình cài đặt Node.js.

### 🔥 Kiểm tra cài đặt Node.js và npm

* Mở Terminal hoặc Command Prompt trên máy tính của bạn.
* Gõ lệnh "node -v" để kiểm tra phiên bản Node.js đã được cài đặt.
* Gõ lệnh "npm -v" để kiểm tra phiên bản npm đã được cài đặt.

> Nên dùng yarn để cho tốc độ cài đặt nhanh hơn

### 🔥**npm là gì ?**

NPM viết tắt của từ **Node Package Manager** là một công cụ tạo và quản lý các thư viện javascript chạy trên môi trường Nodejs

NPM cung cấp 2 chức năng chính bao gồm:

* Là kho lưu trữ trực tuyến cho các package/module. Chúng ta có thể tìm kiếm các package trên search.nodejs.org.
* Quản lý các module javascript và phiên bản của chúng trong các dự án của chúng ta đơn giản hơn, dễ dàng hơn, tiết kiệm thời gian hơn.

Lệnh cơ bản:

```bash

npm init –y #hởi tạo project mới , tạo ra file package.json

npm ls #xem danh sách gói
npm ls -g #xem danh sách gói ở Global

npm install yarn -g # cài vào global
npm install axios --save # cài vào dependencies
npm install sass --save-dev # cài vào devDependencies

npm uninstall package_name # gở cài đặt
npm update package_name #update gói

```

### Yarn là một công cụ tương tự NPM

Cài yarn:

```bash
# Step 1: install
npm install --global yarn
# Step 2: check installation
yarn --version
```

Các lệnh cơ bản yarn

```bash
yarn init #Khởi tạo project mới, tạo ra file package.json

yarn add #Thêm gói cài đặt vào dependencies
yarn add --dev #Thêm gói cài đặt vào devDependencies

#Install packages globally on your operating system
yarn global add [package_name]

#Removing a dependency
yarn remove [package_name]

yarn up [package_name] #Upgrading a dependency

#Installing all the dependencies
yarn
yarn install
```

Xem tất cả lệnh: <https://classic.yarnpkg.com/en/docs/cli/list>

Fix cài Yarn:

Mở Powershell, chạy với quyền Administator, dán lệnh vào

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

Sau đó nhập A, Enter ==> quay lại cài yarn.
Tắt VsCode sau đó mở lại, check lại lệnh đã ổn chưa ?

### Các Extention VS Code

* ESLint (Microsoft)
* IntelliCode (Microsoft)
* JavaScript (ES6) code snippets (charalampos karypidis)
* ES7+ React/Redux/React-Native snippets (dsznajder)
* Prettier - Code formatter (Prettier)
* TSLint (Microsoft)
* Typescript React code snippets (infeng)

### Debug

Sử dụng `React Developer Tools` để Debug `Component`

```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

---

## 🚀 Cài đặt React cơ bản

Bạn có thể bắt đầu bằng:

### 📦 Cách 1: Dùng `create-react-app` (dễ)

```bash
npx create-react-app my-app
cd my-app
npm start
```

### ⚡ Cách 2: Dùng `Vite` (nhanh, gọn)

```bash
npm create vite@latest
pnpm create vite
yarn create vite
```

Sau khi chạy thì nó sẽ yêu cầu nhập tên dự án

```bash
Need to install the following packages:
  create-vite@4.1.0
Ok to proceed? (y) y
✔ Project name: … react-app
```

Tiếp theo là chọn Framework: Bạn chọn React

```bash
✔ Select a framework: › React
```

Tiếp theo: Chọn template, ở đây mình chọn TypeScript + SWC, SWC sẽ thay thế Babel cho việc biên dịch code Typescript/Javascript. SWC có tốc độ nhanh hơn 20 lần khi so với Babel

```bash
✔ Select a variant: › TypeScript + SWC
```

Tiếp theo là thư mục vừa được Vite tạo

```bash
cd react-app
```

Cài đặt các package

```bash
yarn
```

Chạy project

```bash
yarn dev
```

---

Tìm hiều các thành phần cấu trúc Project React

### 🔥**Giới thiệu các thành phần package.json**

* name: tên gói thư viện
* version: phiên bản gói
* description: phần mô tả về gói thư viện
* homepage: trang chủ của gói
* author: tác giả
* contributors: tên người đóng góp cho package
* dependencies: danh sách các gói phụ thuộc, tự động được cài theo.
* Devdependencies: danh sách các gói chạy trên môi trường developer.
* repository: loại repository và url của package, thông thường là git (Xem thêm Git là gì?)
* main: index.js
* keywords: các từ khóa

---

### 🔥**Giới thiệu về .gitignore**

**.gitignore** => Nhiệm vụ của nó là liệt kê những file, folder mà mình không mong muốn cho vào git hoặc hiểu nôm na là Git sẽ bỏ qua những file đó đi.

* Tránh public những thứ không cần thiết
* Góp phần giảm dung lượng dự án đẩy lên Git

---

### 🔥**Cấu trúc cơ bản React App**

Xem cấu trúc ở project đã cài đặt tùy bạn cài đặt với tùy chọn như thế nào mà nó có cấu trúc thư mục, file khác nhau

Xem thêm [React with TypeScript](TypeScript-React.md)

## 🔶 Javascript-ESNext

* Nắm thật chắc cú pháp ES6 <https://www.w3schools.com/REACT/react_es6.asp>

* Xem lại: [Mở Javascript-ESNext](Javascript-ES6/readme.md)

## 🔶 TypeScript with React

* Nắm một số cách khai báo kiểu dữ liệu trong TypeScript
* Link: <https://www.w3schools.com/typescript>

## 🔶 Flexbox Css

[Mở Flexbox](Review-Flexbox/flexbox.md)
