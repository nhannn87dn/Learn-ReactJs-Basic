# Higher-Order Component

## Định nghĩa

**Higher-Order Component (HOC) trong React**  là một hàm nhận vào một component (gọi là WrappedComponent) và trả về một component mới với các tính năng bổ sung. Nó giống như một "lớp vỏ" bọc ngoài component để thêm logic, thay vì viết lại logic đó trong mỗi component.

## Cú pháp của Higher-Order Component

HOC là một hàm nhận một component (thường là function component) và trả về một function component mới với logic bổ sung. Cú pháp cơ bản:

```jsx
import React from 'react';

// Cú pháp HOC
const withSomeFeature = (WrappedComponent) => {
  // Trả về một function component mới
  return function NewComponent(props) {
    // Logic bổ sung (ví dụ: conditional rendering)
    // Truyền props vào WrappedComponent
    return <WrappedComponent {...props} />;
  };
};

export default withSomeFeature;
```

- **`withSomeFeature`**: Tên HOC (thường bắt đầu bằng `with` để dễ nhận biết).
- **`WrappedComponent`**: Component gốc (function component) được bọc.
- **`NewComponent`**: Component mới được tạo ra, chứa logic bổ sung.
- **`props`**: Truyền tất cả props từ component mới sang `WrappedComponent` bằng spread operator (`...props`).

### Ví dụ kiểm tra role

Dùng HOC để kiểm tra `role` và hiển thị nội dung nếu người dùng là "admin". Toàn bộ code dùng function component.

#### Bước 1: Tạo function component cơ bản

Component `SecretList` hiển thị danh sách bí mật, nhận prop `items`:

```jsx
import React from 'react';

const SecretList = ({ items }) => (
  <div>
    <h2>Danh sách bí mật</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SecretList;
```

#### Bước 2: Tạo HOC kiểm tra role

HOC `withRoleCheck` kiểm tra prop `role`, trả về function component mới:

```jsx
import React from 'react';
//là một hàm nhận vào một component
const withRoleCheck = (WrappedComponent) => {
  // Trả về function component mới
  return function WithRoleCheck({ role, ...props }) {
    // Conditional rendering: kiểm tra role
    if (role !== 'admin') {
      return <div>Bạn không có quyền truy cập!</div>;
    }
    // Nếu là admin, render WrappedComponent
    return <WrappedComponent {...props} />;
  };
};

export default withRoleCheck;
```

- **`role, ...props`**: Destructuring để lấy `role` riêng, còn lại là các props khác.
- **Conditional rendering**: Nếu `role` không phải "admin", hiển thị thông báo. Nếu là "admin", render `WrappedComponent`.

#### Bước 3: Áp dụng HOC

Bọc `SecretList` bằng `withRoleCheck`:

```jsx
import React from 'react';
import withRoleCheck from './withRoleCheck';
import SecretList from './SecretList';

// Tạo component mới
const SecretListWithRoleCheck = withRoleCheck(SecretList);

export default SecretListWithRoleCheck;
```

#### Bước 4: Sử dụng trong ứng dụng

Dùng `SecretListWithRoleCheck` trong `App`:

```jsx
import React from 'react';
import SecretListWithRoleCheck from './SecretListWithRoleCheck';

const App = () => {
  const secretItems = ['Bí mật 1', 'Bí mật 2', 'Bí mật 3'];

  return (
    <div>
      <h1>Ứng dụng React</h1>
      {/* Role là user -> không có quyền */}
      <h3>Người dùng thường:</h3>
      <SecretListWithRoleCheck role="user" items={secretItems} />

      {/* Role là admin -> hiển thị danh sách */}
      <h3>Admin:</h3>
      <SecretListWithRoleCheck role="admin" items={secretItems} />
    </div>
  );
};

export default App;
```

### Kết quả

- Với `role="user"`: Hiển thị **"Bạn không có quyền truy cập!"**.
- Với `role="admin"`: Hiển thị danh sách:

  ```
  Danh sách bí mật
  - Bí mật 1
  - Bí mật 2
  - Bí mật 3
  ```

### Giải thích cú pháp

1. **HOC `withRoleCheck`**:
   - Là một hàm nhận `WrappedComponent` (ở đây là `SecretList`).
   - Trả về một function component (`WithRoleCheck`) nhận `props`.
   - Dùng **conditional rendering** để quyết định render gì dựa trên `role`.
2. **Spread props (`...props`)**:
   - Đảm bảo mọi props (như `items`) được truyền từ HOC vào `WrappedComponent`.
3. **Function component**:
   - Cả `SecretList` và component trong HOC đều là function component, đúng với kiến thức cơ bản bạn đang học.

## Lợi ích của HOC

- **Tái sử dụng**: Có thể dùng `withRoleCheck` cho bất kỳ component nào cần kiểm tra role.
- **Đơn giản**: Logic kiểm tra role nằm trong HOC, component gốc không cần thay đổi.
- **Phù hợp người mới**: Chỉ dùng props và conditional rendering, không cần hook hay logic phức tạp.

## Lưu ý sử dụng HOC

- Đặt tên HOC bắt đầu bằng `with` (ví dụ: `withRoleCheck`) để dễ nhận biết.
- Dùng spread operator (`...props`) để tránh bỏ sót props.
- Nếu cần kiểm tra nhiều role (ví dụ: "editor", "viewer"), bạn có thể thêm logic trong HOC.

### Nguyên tắc sử dụng Higher-Order Component

1. **Đừng chỉnh sửa component gốc**: HOC không nên thay đổi component gốc mà chỉ nên bọc component đó với chức năng bổ sung.
2. **Không chuyển tham số qua nhiều cấp**: Sử dụng HOC để giảm thiểu việc truyền các props không cần thiết qua nhiều cấp.
3. **Hạn chế sử dụng quá nhiều HOC**: Khi bạn sử dụng quá nhiều HOC bọc nhau, code có thể trở nên khó hiểu và khó quản lý.

### HOC và Hooks

Trong React hiện đại, khi React Hooks xuất hiện, nhiều trường hợp sử dụng HOC đã được thay thế bằng Hooks vì chúng dễ sử dụng hơn và giúp code ngắn gọn hơn. Tuy nhiên, HOC vẫn hữu ích trong một số trường hợp cần tách biệt hoàn toàn logic ra khỏi component con.

Code đầy đủ với Typescript

```ts
import React, { FC } from 'react';

// Định nghĩa kiểu cho props của HOC
interface RoleCheckProps {
  role: string;
}

// HOC nhận WrappedComponent với props bất kỳ
const withRoleCheck = <P extends object>(WrappedComponent: FC<P>) => {
  // Component mới, nhận props gốc (P) và thêm role
  const WithRoleCheck: FC<P & RoleCheckProps> = ({ role, ...props }) => {
    // Kiểm tra role
    if (role !== 'admin') {
      return <div>Bạn không có quyền truy cập!</div>;
    }
    // Render WrappedComponent với props gốc
    return <WrappedComponent {...(props as P)} />;
  };
  return WithRoleCheck;
};

export default withRoleCheck;

//Sử dụng trong App
import React, { FC } from 'react';
import withRoleCheck from './withRoleCheck';
import SecretList from './SecretList';
const SecretListWithRoleCheck = withRoleCheck(SecretList);

const App: FC = () => {
  const secretItems = ['Bí mật 1', 'Bí mật 2', 'Bí mật 3'];

  return (
    <div>
      <h1>Ứng dụng React</h1>
      {/* Role là user -> không có quyền */}
      <h3>Người dùng thường:</h3>
      <SecretListWithRoleCheck role="user" items={secretItems} />

      {/* Role là admin -> hiển thị danh sách */}
      <h3>Admin:</h3>
      <SecretListWithRoleCheck role="admin" items={secretItems} />
    </div>
  );
};

export default App;
```
