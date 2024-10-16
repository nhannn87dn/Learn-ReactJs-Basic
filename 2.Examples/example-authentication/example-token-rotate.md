Để thực hiện quá trình tự động làm mới token khi token hết hạn và đồng thời lấy token mới, bạn có thể sử dụng thư viện Axios Interceptors cùng với React Query. Dưới đây là cách bạn có thể thực hiện điều này:

1. **Cấu hình Axios Interceptors**:

Tạo một tệp để cấu hình Axios Interceptors, đảm bảo rằng bạn cập nhật URL và logic phù hợp với backend API của bạn.

```jsx
// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem('access_token');
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Gọi API để làm mới access_token và refresh_token
      try {
        const response = await axiosInstance.post(
          'https://your-api-url/refresh-token',
          {
            refresh_token: localStorage.getItem('refresh_token'),
          }
        );

        const { access_token, refresh_token } = response.data;

        // Lưu tokens mới vào localStorage
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        // Cố gắng gọi lại request ban đầu với access_token mới
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Xử lý lỗi khi làm mới token
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
```

2. **Sử dụng React Query và Axios trong Component**:

Trong component của bạn, bạn có thể sử dụng Axios và React Query để thực hiện các yêu cầu API. Đảm bảo rằng bạn đã cài đặt `react-query` và đã import Axios từ tệp `axiosConfig.js`:

```jsx
import React from 'react';
import axios from './axiosConfig'; // Import tệp cấu hình axios

const fetchProducts = async () => {
  const response = await axios.get('https://your-api-url/products');
  return response.data;
};

const ProductList = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  // ...
};
```

3. **Sử dụng Interceptors và React Query trong Ứng dụng**:

Trong component gốc của ứng dụng, bạn có thể cung cấp context cho React Query và sử dụng Axios được cấu hình sẵn với Interceptors:

```jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axiosInstance from './axiosConfig';
import AppRouter from './AppRouter'; // Thay thế bằng tên tệp của bạn

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider instance={axiosInstance}>
        <AppRouter />
      </AxiosProvider>
    </QueryClientProvider>
  );
};

export default App;
```

Vui lòng thay đổi các URL và logic phù hợp với backend API của bạn. Với cách làm này, Axios Interceptors sẽ tự động làm mới token và thực hiện lại các yêu cầu khi token hết hạn.