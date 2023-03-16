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

API endpoint: https://api.themoviedb.org/3

- Danh sách Movies Phổ biến: /movie/popular (GET)
- Chi tiết  Movie: /movie/{movie_id} (GET)
- Reviews Movie: /movie/{movie_id}/reviews (GET)

Dự vào tài liệu API bạn có thể xây dựng cho mình một website phim