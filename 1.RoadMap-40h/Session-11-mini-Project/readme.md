# Bài tập mini Project - Movies APP

- UI:https://movie-site-delta.vercel.app/index.html
- https://developer.themoviedb.org/reference/movie-now-playing-list
- https://www.themoviedb.org/movie/now-playing

Để dùng được API thì cần đăng ký: <https://www.themoviedb.org/signup>

Đăng ký xong: thì họ sẽ gửi cho bạn 1 email: trong đó có cái KEY

***

API Key: bbf4abc4e3112c3a8b28301c1ad039ee

API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8


## Yêu cầu UI

- Font: Poppins từ Google Fonts
- Hiển thị Thumbnail của phim

Call API nhận được tên hình:

```js
"poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg"
```
Nối thêm để được link đầy đủ: 

```js
const thumb = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
```

### Trang chủ (Bắt buộc)

- Banner
- Slider Popular Movies - Sử dụng SwiperJs
- Slider Now Playing Movies - Sử dụng SwiperJs

### Trang Popular (Bắt buộc)

- API: https://developer.themoviedb.org/reference/movie-popular-list
- Bài Test: Chỉ lấy movies trang 1
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Now Playing (Bắt buộc)

- API: https://developer.themoviedb.org/reference/movie-now-playing-list
- Bài Test: Chỉ lấy movies trang 1
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Upcoming Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-upcoming-list
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Top Rated Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-top-rated-list
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Chi tiết 1 Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-details
- Làm theo UI: https://movie-site-delta.vercel.app/play-page.html
- Tham khảo thêm UI: https://www.themoviedb.org/movie/353486-jumanji-welcome-to-the-jungle