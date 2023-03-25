# Workshop

## Làm quen công cụ TEST API

- POST MAN
- REST Client

## Làm quen với việc call API

- Sử dụng <https://jsonplaceholder.typicode.com/>
- Sử dụng [MockAPI](https://mockapi.io) để tạo REST API fake
- http://www.omdbapi.com
- https://developers.themoviedb.org/3/getting-started/introduction
- https://openweathermap.org/api

## Call API có sử dụng Authentication Token

Cần tạo một tài khoản đăng ký

https://developers.themoviedb.org/3/getting-started/introduction

API Key (v3 auth)
```code
bbf4abc4e3112c3a8b28301c1ad039ee
```
Example API Request
```code
https://api.themoviedb.org/3/movie/550?api_key=bbf4abc4e3112c3a8b28301c1ad039ee
```
API Read Access Token (v4 auth)
```code
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8
```

Sử dụng Bearer Token v4 ở trên
```bash
curl --request GET \
  --url 'https://api.themoviedb.org/3/movie/76341' \
  --header 'Authorization: Bearer <<access_token>>' \
  --header 'Content-Type: application/json;charset=utf-8'
```

===========================

BÀI TẬP KẾT THÚC MÔN

===========================

API endpoint: https://api.themoviedb.org/3

Nối thêm phần này vào cuối mỗi API: ?api_key=bbf4abc4e3112c3a8b28301c1ad039ee

Xem cách Call API: Batch-29\myapp-ts\src\pages\Popular.js

Làm một website review phim: <https://www.themoviedb.org/>

Yêu cầu:

- Áp dụng react router để tạo các trang như site Demo, nhưng chỉ tập trung code phần trang chủ. 

- Thời gian: 1 tuần
- Gửi code qua github, hoặc Zip lại (không bao gồm folder node_modules), gửi về email: nhannn@softech.vn

1.Trang chủ: 

  - Có header, footer, phần search, Join Today
  - Phần header: Có logo, chỉ làm 1  Menu Movies, có các trang con như Demo.
  - Phần footer: Để thông tin như demo, ko cần gắn link.
  - Phần còn lại của Body trang chỉ: Lấy danh sách phim mới nhất (latest), phim đang chiếu (now_playing), rồi show ra giao diện như Demo 

2.Trang con của Movies: bạn chỉ cần import phần Header, Footer vào, nội dung để h1 là tên trang. ví dụ: `<h1>Popular</h1>`

3.Trang chi tiết 1 phim: Không bắt buộc, nhưng làm thêm thì Tốt.

Danh sách API

- Danh sách Movies Mới nhất: /movie/latest (GET)
- Danh sách Movies Phổ biến: /movie/popular (GET)
- Danh sách Movies Đang chiếu: /movie/now_playing (GET)
- Chi tiết  Movie: /movie/{movie_id} (GET)
- Reviews Movie: /movie/{movie_id}/reviews (GET)

Lưu ý: phần Link hình ảnh: bắt đầu bằng: <https://www.themoviedb.org/t/p/w220_and_h330_face/>. Hoặc click phải lên hình trên demo để biết link, và nối chuổi hợp lý.

Xem thêm: <https://developers.themoviedb.org/3/movies/get-movie-details>

Dự vào tài liệu API bạn có thể xây dựng cho mình một website phim