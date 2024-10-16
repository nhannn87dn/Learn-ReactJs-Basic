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
          console.log('Token not found',window.location.pathname);
          //Nếu trang hiện tại đang đứng không phải là login thì chuyển hướng login
          if(window.location.pathname !== '/login'){
            window.location.href = '/login';
          }
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