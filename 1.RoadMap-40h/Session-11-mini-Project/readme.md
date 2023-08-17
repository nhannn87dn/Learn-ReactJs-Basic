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
- Bài Kết thúc môn: Hiển thị tất cả sản phẩm tương tự như https://www.themoviedb.org/movie
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Now Playing (Bắt buộc)

- API: https://developer.themoviedb.org/reference/movie-now-playing-list
- Bài Kết thúc môn: Hiển thị tất cả sản phẩm tương tự như https://www.themoviedb.org/movie
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Upcoming Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-upcoming-list
- Hiển thị tất cả sản phẩm tương tự như https://www.themoviedb.org/movie
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Top Rated Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-top-rated-list
- Hiển thị tất cả sản phẩm tương tự như https://www.themoviedb.org/movie
- Hoàn thiện: Có số trang, click vào nhảy ra movies trang đó

### Trang Chi tiết 1 Movies (Làm thêm)

- API: https://developer.themoviedb.org/reference/movie-details
- Làm theo UI: https://movie-site-delta.vercel.app/play-page.html
- Tham khảo thêm UI: https://www.themoviedb.org/movie/353486-jumanji-welcome-to-the-jungle

## Hình thức nộp bài

1. Tạo một repo Github --> Gửi link để nộp

Nếu được thì tham khảo bài viết sau để Deploy dự án lên git io: https://ecshopvietnam.com/blog/tao-va-deploy-ung-dung-react-app-len-github-94.html

2. Nếu không dùng được Github thì Zip folder code lại (Không bao gồm folder node_modules) --> Gửi về email: nhannn@softech.vn