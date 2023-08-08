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

Trong App có một biến user cần truyền xuống component UserInfo

```js
const user = {name: 'John', email: 'john@example.com',avatarUrl: 'https://via.placeholder.com/100x100.png'};
```

- Tạo một component HomePage đại diện cho trang Home
- Tạo component PageHeader, PageFooter
- Trong PageHeader lại có thêm component UserInfo

## Các bước thực hiện

### Bước 1: Khởi tạo Context

Trong thư mục src tạo một folder tên `context`

Tiếp theo tạo một file `userContex.tsx`

```tsx
import React from "react";

interface UserType {
  id: number;
  name:string;
  avatarUrl:string;
}
//Bước 1: Tạo context
//createContext nhận vào giá trị khởi tạo, mặc đinh là null
export const userContext = React.createContext<UserType | null>(null);

```

### Bước 2: Cấu hình Provider

Trong App, bạn muốn truyền xuống cho All các component con của nó thì làm như sau:

```tsx
import {userContext} from './context/userContext'

function App() {
    //Biến này cần truyền đi xuống cho con của ProductPage
    const user = {name: 'John', email: 'john@example.com',avatarUrl: 'https://via.placeholder.com/100x100.png'};

  return (
    <>
    <userContext.Provider value={user}>
        <ProductPage />
    </userContext.Provider>
    </>
  )
```

### Bước 3: Sử dụng Context

Nhận lại biến user từ App tại `UserInfo` như sau:


```tsx
import {useContext} from 'react'
import {userContext} from '../../context/userContext'

const UserInfo = () => {

  const user = React.useContext(userContext);

  return (
    <span>
        {user.name}
    </span>
  )
}
export default UserInfo
```

Qua ví dụ trên, chúng ta đã đưa được biến user từ App xuống UserInfo nhẹ nhàng hơn các dùng là pass props xuống các component lồng vào nhau