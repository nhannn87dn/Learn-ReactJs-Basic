# Quản lí State Global với Redux và Zustand


## Zustand

Sử dụng thư viện [Zustand](Manage-State/4.Zustand.md)

## Redux

Sử dụng thư viện [Redux](Manage-State/1.React-Redux.md)

## Authentication and Authorization in React App

Sẽ có các trang bạn cần yêu cầu đăng nhập đã mới cho phép truy cập. Sau đây là cách bạn bảo vệ các Route cần quyền truy cập nhu sau:

### Step 1 - Cấu hình Axios Client

Tạo file src/lib/axiosClient.ts với nội dung sau:

```ts
import axios from 'axios';
const API_URL = 'https://api.escuelajs.co/api/v1/auth'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST
axiosClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE

axiosClient.interceptors.response.use(
  async (response) => {
    const { access_token, refresh_token } = response.data;
    // LOGIN
    if (access_token) {
      window.localStorage.setItem('token', access_token);
    }
    if (refresh_token) {
      window.localStorage.setItem('refreshToken', refresh_token);
    }

    return response;
  },
  async (error) => {
    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    const originalConfig = error.config;

    if (error?.response?.status === 401 && !originalConfig.sent) {
      console.log('Error 🚀', error);
      originalConfig.sent = true;
      try {
        // Trường hợp không có token thì chuyển sang trang LOGIN
        const token = window.localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return Promise.reject(error);
        }

        const refreshToken = window.localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axiosClient.post('/refresh-token', {
            refreshToken: refreshToken,
          });

          const { access_token } = response.data;
          window.localStorage.setItem('token', access_token);

          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${access_token}`,
          };

          return axiosClient(originalConfig);
        } else {
          return Promise.reject(error);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  },
);

export { axiosClient };
```

### Step 2 - Tạo hook quản lý đăng nhập với zustand

Tạo file src/hooks/useAuth.ts

```ts
import { create } from 'zustand';
import { axiosClient } from '../lib/axiosClient';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface Auth {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ isAuthenticated: boolean; error: string }>;
  logout: () => void;
}

const useAuth = create<Auth>((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user });
  },
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
        //Gọi API Login
      const response = await axiosClient.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
      console.log(response);

      if (response && response.status === 201) {
        const isAuthenticated = response.status === 201;
        //Gọi tiếp API lấy thông tin User
        const {data} = await axiosClient.get('https://api.escuelajs.co/api/v1/auth/profile');
        set({user: data, isAuthenticated });
        //Trả về dấu hiệu để components chuyển hướng sau khi login OK
        return { isAuthenticated, error: '' };
      } else {
        return { isAuthenticated: false, error: 'Username or password is invalid' };
      }
    } catch (error) {
      return { isAuthenticated: false, error: error?.message || 'Login failed' };
    }
  },
  logout: () => {
    // Xóa trạng thái user và isAuthenticated
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },
}));

export default useAuth;
```

Lưu ý:

- API_URL: Thay đổi url API đúng với backend API
- Thay đổi các endpoints đúng với backend API của bạn

### Step 3 - Login

Code phần login

```tsx
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginAPI = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
      const result = await login(data.email, data.password);
      console.log(result);
      if(result.isAuthenticated){
        navigate("/customers");
      }else{
        setError(result.error);
      }
  };

  return (
    <div className='max-w-[300px] mx-auto min-w-[300px]'>
      <h2 className='text-2xl text-center mb-3 font-bold'>Login Form</h2>
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input placeholder="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button className='block w-full' disabled={isSubmitting} type="submit">
          {isSubmitting  ? 'Submitting...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginAPI;

```


### Step 4 - Bảo vệ các trang cần quyền Login

Ví dụ:

|-/                     home page   --> public
|-/login                login page  --> public
|-/customer             customer page  --> private
|-/customer/orders      customer page  --> private
|-/customer/profile     customer page  --> private

Thì bạn lồng các route private lại trong một Layout chung kiểu như

```tsx
<Route path="customer" element="Customer">
    <Route path="orders" element="CustomerOrders" />
    <Route path="profile" element="CustomerProfile" />
</Route>
```
Sau đó tại `Customer` bạn check xem user đã đăng nhập chưa bằng cách truy cập vào state `user` từ useAuth


```tsx
import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
1
const Customers = () => {
  const {isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login')
    }
  },[isAuthenticated])

  return (
    <>
    <h1 className='py-5'>Customers Page</h1>
      <div className="grid grid-cols-12">
          <div className="col-span-4">
            <ul>
              <li><Link to={'/customers'}>Dashboard</Link></li>
              <li><Link to={'/customers/orders'}>Danh sách đơn hàng</Link></li>
              <li><Link to={'/customers/profile'}>Thông tin cá nhân</Link></li>
              <li>
                <button type='button' onClick={logout}>Đăng Xuất</button>
              </li>
            </ul>
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
      </div>
    </>
  )
}

export default Customers
```

### Step 5 - Lấy thông tin User đưa lên Header

Component UserInfo

```tsx
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const {user, logout} = useAuth();
 
  return (
    <span>
      {user ? (
        <span className="flex gap-x-2 items-center">
          <img className="rounded-full" width={30} height={30} src={user.avatar} alt={user.name} />
          <strong>{user.name}</strong>
          <span className="cursor-pointer border-s border-slate-900 pl-2" onClick={logout}>Đăng xuất</span>
        </span>
      )
        
      : (
        <Link to={'/login'}>Login</Link>
      )
    }
    </span>
  )
}

export default UserInfo
```


Tham khảo thêm 2 bài viết sau: 

* <https://www.robinwieruch.de/react-router-private-routes/>
* <https://ui.dev/react-router-protected-routes-authentication>