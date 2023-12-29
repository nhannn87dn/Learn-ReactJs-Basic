Để chỉ thực hiện kiểm tra hết hạn token và làm mới token khi thực hiện yêu cầu lấy dữ liệu, bạn có thể sử dụng một interceptor trong thư viện Axios để thực hiện các bước này tự động trước mỗi yêu cầu.

Dưới đây là một ví dụ về cách bạn có thể triển khai điều này:

```js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken) {
      // Kiểm tra hết hạn token
      const isTokenExpired = checkTokenExpiration(accessToken);

      if (isTokenExpired) {
        try {
          // Làm mới token
          const response = await api.post('/auth/refresh-token', {
            refreshToken,
          });

          const newAccessToken = response.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);

          // Cập nhật tiêu đề Authorization với token mới
          config.headers.Authorization = `Bearer ${newAccessToken}`;
        } catch (error) {
          console.error('Failed to refresh token:', error);
          // Xử lý lỗi làm mới token
        }
      } else {
        // Sử dụng token hiện tại
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Hàm kiểm tra hết hạn token
const checkTokenExpiration = (accessToken) => {
  // Thực hiện kiểm tra hết hạn token và trả về true nếu hết hạn, false nếu chưa hết hạn
};

export default api;
```


úng ta kiểm tra xem token đã hết hạn chưa bằng cách sử dụng hàm `checkTokenExpiration`. Nếu token đã hết hạn, chúng ta thực hiện yêu cầu làm mới token bằng cách gửi một POST request đến endpoint `/auth/refresh-token` với refreshToken hiện tại. Sau khi nhận được phản hồi thành công, chúng ta lưu trữ accessToken mới vào localStorage và cập nhật tiêu đề Authorization trong yêu cầu hiện tại với accessToken mới.

Nếu token chưa hết hạn, chúng ta sử dụng accessToken hiện tại để thực hiện yêu cầu.

Để sử dụng API trong ứng dụng của bạn, bạn có thể import `api` từ file trên và sử dụng nó như sau:


```js
import React, { useEffect, useState } from 'react';
import api from './api';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get('/auth/profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        // Xử lý lỗi lấy thông tin người dùng
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>Welcome, {userProfile?.name}</h2>
      <p>Email: {userProfile?.email}</p>
    </div>
  );
};

export default UserProfile;

```