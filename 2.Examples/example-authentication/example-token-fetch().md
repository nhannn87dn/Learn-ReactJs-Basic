Dưới đây là một ví dụ về cách bạn có thể triển khai hàm trung gian để thực hiện các bước tương tự như interceptor của axios:


```js
import { useRouter } from 'next/navigation';


export { useFetch };

function useFetch() {
    const router = useRouter();

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method: string) {
        return async (url: string, body?: any) => {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            // Kiểm tra hết hạn token
            // Nhớ code hàm checkTokenExpiration
            if (checkTokenExpiration(accessToken)) {
            try {
                // Gửi yêu cầu làm mới token
                const refreshedTokens = await refreshTokens(refreshToken);

                // Lưu trữ accessToken mới vào localStorage
                localStorage.setItem('accessToken', refreshedTokens.accessToken);

                // Cập nhật tiêu đề Authorization trong yêu cầu
                requestOptions.headers = {
                ...requestOptions.headers,
                Authorization: `Bearer ${refreshedTokens.accessToken}`,
                };
            } catch (error) {
                // Xử lý lỗi làm mới token
                console.error('Failed to refresh token:', error);
                throw error;
            }
            } else {
            // Sử dụng accessToken hiện tại để thực hiện yêu cầu
            requestOptions.headers = {
                ...requestOptions.headers,
                Authorization: `Bearer ${accessToken}`,
            };
            }

            // Gửi yêu cầu bằng fetch()
            return fetch(url, requestOptions).then(handleResponse);
        };
        }

    async function handleResponse(response: any) {
        const isJson = response.headers?.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        if (!response.ok) {
            if (response.status === 401) {
                router.push('/account/login');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    }
}




function checkTokenExpiration(accessToken: string): boolean {
  // Giả sử bạn có một trường `expiresAt` trong payload của token
  const tokenPayload = decodeTokenPayload(accessToken);
  const expiresAt = tokenPayload?.expiresAt;

  if (!expiresAt) {
    // Nếu không có trường `expiresAt`, coi token là hết hạn
    return true;
  }

  // Lấy thời gian hiện tại
  const currentTime = Date.now() / 1000;

  // Kiểm tra xem thời gian hiện tại có lớn hơn thời gian hết hạn của token hay không
  return currentTime > expiresAt;
}

function decodeTokenPayload(accessToken: string): any {
  // Giả sử bạn sử dụng JWT để mã hóa token
  const tokenParts = accessToken.split('.');
  const encodedPayload = tokenParts[1];

  try {
    // Giải mã payload từ base64
    const decodedPayload = atob(encodedPayload);

    // Parse payload thành đối tượng JSON
    const payload = JSON.parse(decodedPayload);

    return payload;
  } catch (error) {
    console.error('Failed to decode token payload:', error);
    return null;
  }
}

```