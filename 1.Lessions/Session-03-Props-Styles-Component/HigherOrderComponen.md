# Higher-Order Component

**Higher-Order Component (HOC) trong React** là một mẫu thiết kế nâng cao trong React cho phép tái sử dụng logic giữa các component. Một Higher-Order Component là một hàm nhận vào một component và trả về một component mới với những chức năng bổ sung.

HOC không phải là một tính năng có sẵn của React mà là một mẫu thiết kế. Một HOC sẽ "bao bọc" component gốc và cung cấp thêm khả năng hoặc dữ liệu mà không làm thay đổi component đó.

### Cú pháp của Higher-Order Component:

```javascript
const higherOrderComponent = (WrappedComponent) => {
  return class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

- **`WrappedComponent`** là component mà bạn muốn "bao bọc" và cung cấp thêm chức năng.
- **HOC** trả về một component mới với khả năng bổ sung.

### Lợi ích của Higher-Order Component:

- **Tái sử dụng logic**: Bạn có thể sử dụng HOC để chia sẻ logic giữa nhiều component khác nhau mà không phải lặp lại code.
- **Tách biệt sự quan tâm**: HOC giúp tách biệt logic của UI khỏi các phần khác như kiểm tra quyền truy cập, xử lý dữ liệu, v.v.
- **Dễ dàng nâng cấp**: Thay vì phải thay đổi trực tiếp các component con, bạn có thể thay đổi ở HOC để tác động đến các component con.

### Ví dụ về Higher-Order Component:

Dưới đây là một ví dụ đơn giản về HOC thêm khả năng kiểm tra quyền truy cập (authentication) cho một component.

```javascript
// Component gốc
const UserProfile = (props) => {
  return <div>Xin chào, {props.name}!</div>;
};

// Higher-Order Component kiểm tra quyền truy cập
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = true; // Giả sử người dùng đã đăng nhập
      if (!isAuthenticated) {
        return <div>Bạn cần đăng nhập để truy cập.</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Sử dụng HOC
const UserProfileWithAuth = withAuth(UserProfile);

// Sử dụng UserProfileWithAuth trong ứng dụng
const App = () => {
  const isAuthenticated = false; // Thay đổi thành true để kiểm tra khi đã đăng nhập
  const userName = "Ngọc Nguyễn";

  return (
    <div>
      <UserProfileWithAuth isAuthenticated={isAuthenticated} name={userName} />
    </div>
  );
};

export default App;
```

Trong ví dụ trên:

- **UserProfile** là component gốc hiển thị thông tin người dùng.
- **withAuth** là Higher-Order Component thêm chức năng kiểm tra quyền truy cập. Nếu người dùng chưa đăng nhập, nó sẽ hiển thị thông báo yêu cầu đăng nhập; nếu đã đăng nhập, nó sẽ hiển thị **UserProfile**.
- `UserProfileWithAuth` là phiên bản mới của `UserProfile` đã được bọc bởi `withAuth`.
- Trong component `App`, chúng ta truyền vào hai props: `isAuthenticated` (biến boolean thể hiện trạng thái đăng nhập) và `name` (tên người dùng). Nếu `isAuthenticated` là `false`, thông báo "Bạn cần đăng nhập để truy cập thông tin này." sẽ được hiển thị. Nếu `isAuthenticated` là `true`, component `UserProfile` sẽ hiển thị thông tin của người dùng.

### Kết quả:

- Nếu **isAuthenticated = false**, giao diện sẽ hiển thị:

  ```
  Bạn cần đăng nhập để truy cập thông tin này.
  ```

- Nếu **isAuthenticated = true**, giao diện sẽ hiển thị:
  ```
  Xin chào, Ngọc Nguyễn!
  ```

### Nguyên tắc sử dụng Higher-Order Component:

1. **Đừng chỉnh sửa component gốc**: HOC không nên thay đổi component gốc mà chỉ nên bọc component đó với chức năng bổ sung.
2. **Không chuyển tham số qua nhiều cấp**: Sử dụng HOC để giảm thiểu việc truyền các props không cần thiết qua nhiều cấp.
3. **Hạn chế sử dụng quá nhiều HOC**: Khi bạn sử dụng quá nhiều HOC bọc nhau, code có thể trở nên khó hiểu và khó quản lý.

### HOC và Hooks:

Trong React hiện đại, khi React Hooks xuất hiện, nhiều trường hợp sử dụng HOC đã được thay thế bằng Hooks vì chúng dễ sử dụng hơn và giúp code ngắn gọn hơn. Tuy nhiên, HOC vẫn hữu ích trong một số trường hợp cần tách biệt hoàn toàn logic ra khỏi component con.
