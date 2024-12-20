# useContext Hook

React Context là cách để quản lý state global.

Doc: <https://react.dev/reference/react/useContext>

## Khi nào dùng useContext ?

Khi component CHA cần truyền giá trị xuống cho component CON, có nhiều cấp lồng vào nhau sâu.

Ví dụ tại component App.tsx có một object

```js
const userInfo = {
  id: 1,
  name: "John",
  avatarUrl: "http://",
};
```

Và có một component lồng vào nhau rất SÂU

```js
function UserInfo() {
  return (
    <>
      <span>Username: ???</span>
    </>
  );
}

function HeaderPage() {
  return (
    <>
      <UserInfo />
    </>
  );
}

function HomePage() {
  return (
    <>
      <HeaderPage />
    </>
  );
}

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}
```

Làm sao để truyền `userInfo` từ App xuống `component UserInfo` để hiển thị name ra chỗ ???

- Cách bình thường: truyền props lần lượt vào các component từ APP xuống UserInfo
- Cách khác: dùng useContext

Cách thực hiện với useContext:

- **Bước 1**: Tạo folder `src/context`
- **Bước 2**: Trong thư mục src/context tạo file `userContext.tsx`

```js
import React from "react";

interface UserType {
  id: number;
  name: string;
  avatarUrl: string;
}
//Bước 1: Tạo context
//createContext nhận vào giá trị khởi tạo, mặc đinh là null
export const userContext = (createContext < UserType) | (null > null);

// Bước 2: Tạo Provider context
//userContext.Provider sử dụng props value mặc định: chứa thông tin cần truyền xuống children
export const UserProvider = ({
  user,
  children,
}: {
  user: UserType,
  children?: React.ReactNode,
}) => {
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
```

- **Bước 3**: Sửa code App lại như sau

```js
//Import Provider vào App
import { UserProvider } from "./context/userContex";

function App() {
  console.log("App rendered");
  return (
    <div>
      <UserProvider user={userInfo}>
        <HomePage />
      </UserProvider>
    </div>
  );
}

export default App;
```

- **Bước 4**: Để component UserInfo lấy được thông tin user

```js
import React from "react";
import { userContext } from "../../../../context/userContext";

function UserInfo() {
  const userInfo = React.useContext(userContext);
  return (
    <>
      <span>Username: {userInfo.name}</span>
    </>
  );
}
```
