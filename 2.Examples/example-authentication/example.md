Dưới đây là một ví dụ minh họa cách triển khai quá trình đăng nhập thành công và chuyển hướng đến trang dashboard trong ứng dụng React với việc sử dụng xác thực token và refresh token từ backend API:

1. **Tạo Component Đăng nhập (Login.js)**:

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://your-api-url/login', {
        username,
        password,
      });

      const { access_token, refresh_token } = response.data;

      // Lưu tokens vào localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Gọi hàm callback để thông báo đăng nhập thành công
      onLogin();
    } catch (error) {
      setError('Đăng nhập thất bại');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
```

2. **Tạo Component Trang Dashboard (Dashboard.js)**:

```jsx
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      history.push('/login');
    }
  }, [history]);

  const handleLogout = () => {
    // Xóa tokens khi đăng xuất
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    history.push('/login');
  };

  return (
    <div>
      <h2>Trang Dashboard</h2>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default Dashboard;
```

3. **Cấu hình Router và App (App.js)**:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('access_token');

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login onLogin={() => window.location.reload()} />
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Login onLogin={() => {}} />}
        </Route>
        <Route path="/">
          {isLoggedIn ? <Dashboard /> : <Login onLogin={() => {}} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
```

Trong ví dụ này:

- Khi người dùng đăng nhập thành công, `access_token` và `refresh_token` sẽ được lưu vào `localStorage`.
- Component `Login` chứa form đăng nhập và khi đăng nhập thành công, nó gọi hàm callback `onLogin` để thông báo cho component cha (App) và cập nhật lại trạng thái đăng nhập.
- Trang `Dashboard` kiểm tra xem người dùng đã đăng nhập chưa và cho phép họ xem trang nếu họ đã đăng nhập. Ngược lại, họ sẽ bị chuyển hướng về trang đăng nhập.
- Khi người dùng đăng xuất, tokens sẽ bị xóa khỏi `localStorage` và họ sẽ bị chuyển hướng về trang đăng nhập.

Hãy thay đổi các URL và logic xác thực để phù hợp với backend API của bạn.