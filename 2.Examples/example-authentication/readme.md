Dưới đây là một ví dụ về cách bạn có thể triển khai quá trình đăng nhập và chuyển hướng sau khi đăng nhập thành công trong một ứng dụng React:

1. **Đăng nhập Component (Login.js)**:

```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Gửi yêu cầu đăng nhập và nhận access_token, refresh_token từ máy chủ
    const access_token = 'your_access_token'; // Thay thế bằng access_token thực tế
    const refresh_token = 'your_refresh_token'; // Thay thế bằng refresh_token thực tế
    
    // Lưu tokens vào localStorage
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    
    // Chuyển hướng sang trang dashboard
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

2. **Trang Dashboard Component (Dashboard.js)**:

```jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  
  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa (kiểm tra access_token)
    const access_token = localStorage.getItem('access_token');
    
    if (!access_token) {
      // Nếu không có access_token, chuyển hướng về trang đăng nhập
      history.push('/login');
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Nội dung của trang dashboard */}
    </div>
  );
};

export default Dashboard;
```

3. **App Component (App.js)**:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
```

Trong ví dụ này, khi bạn đăng nhập thành công, bạn sẽ được chuyển hướng đến trang dashboard và `access_token` sẽ được lưu trong `localStorage` để xác thực các yêu cầu đến các router private.


Khi người dùng có các quyền (permissions) khác nhau và bạn muốn xử lý yêu cầu dựa trên quyền của họ, bạn có thể thực hiện như sau:

1. **Quản lý Quyền (Permissions) và Xử lý Yêu Cầu**:

Giả sử bạn có một danh sách các quyền (permissions) như "read", "write", "delete" và bạn muốn kiểm tra quyền của người dùng trước khi cho phép họ truy cập các tài nguyên. Dưới đây là một ví dụ về cách bạn có thể thực hiện điều này:

```jsx
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const [permissions, setPermissions] = useState([]);
  
  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập và lấy quyền của họ từ máy chủ (ví dụ: userPermissions)
    const access_token = localStorage.getItem('access_token');
    
    if (!access_token) {
      // Nếu không có access_token, chuyển hướng về trang đăng nhập
      history.push('/login');
    } else {
      // Giả sử userPermissions là danh sách quyền của người dùng từ máy chủ
      const userPermissions = ['read', 'write'];
      setPermissions(userPermissions);
    }
  }, []);
  
  const hasPermission = (requiredPermission) => {
    return permissions.includes(requiredPermission);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {hasPermission('read') && (
        <button>Read Data</button>
      )}
      {hasPermission('write') && (
        <button>Write Data</button>
      )}
      {hasPermission('delete') && (
        <button>Delete Data</button>
      )}
    </div>
  );
};

export default Dashboard;
```

Trong ví dụ này, `hasPermission` là một hàm kiểm tra xem người dùng có quyền cần thiết hay không. Bạn có thể sử dụng `hasPermission` để kiểm tra quyền trước khi hiển thị các phần tử trên giao diện, như nút hoặc các phần tương tự. Nếu người dùng không có quyền, phần tử tương ứng sẽ không hiển thị.

Ví dụ trên là một cách cơ bản để quản lý quyền và xử lý yêu cầu dựa trên quyền của người dùng. Trong môi trường thực tế, bạn có thể thêm các cơ chế bảo mật phức tạp hơn như kiểm tra quyền trên máy chủ và mã hóa thông tin quyền để đảm bảo tính bảo mật của ứng dụng của bạn.