# Weather App

## Step 1

Đăng ký tài khoản để lấy API Key: <https://www.weatherapi.com/>

## Step 2:

Lấy thông tin thời tiết:

- Điền API Key
- Nhập tên thành phố bạn muốn lấy : Danang

Xem demo: https://www.weatherapi.com/api-explorer.aspx

![dêm](hd-1.png)

- Tab Current: lấy thời tiết hiện tại
- Tab Forecast: lấy thời tiết theo ngày
- CLick nút Show Response
![dêm](hd-2.png)




APIKEY: c9a0ca46550648b29ce125849232709

Chi tiết cách truyền các tham số: https://www.weatherapi.com/docs/#intro-request

Giải thích các thuộc tính response trả về: https://www.weatherapi.com/docs/#intro-request

Current
https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=Danang&aqi=no&lang=vi


Hours
https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi

Daily 5 days (days=5)
https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=5&aqi=no&alerts=no&lang=vi


## Yêu cầu

- Màn hình hình 1: Hiển thị thời tiết `hiện tại` và `hàng giờ` của 1 thành phố tùy chọn, 
- Màn hình 2: Hiển thị thời tiết `5 ngày tiếp theo` của thành phố đó


## Điểm theo hạng mục

Hệ số điểm 20:

- Call API lấy và hiển thị thời tiết hiện tại: 2 điểm
- Call API lấy và hiển thị thời tiết theo giờ: 3 điểm
- Call API lấy và hiển thị thời tiết 5 ngày: 5 điểm
- Layout UI: thiết kế tùy theo ý tưởng  : 10 điểm


## Version nâng cấp lên

Có thêm search Tên thành phố ở trên đầu App

VÍ dụ điền BangKok --> CLick search --> gọi API lấy `lat` và `lon` của BangKok
- Rồi thêm tọa độ này vào localStorage
- Dựa vào localStorage, lấy thông tin thời tiết từng thành phố


![app](plan-4.png)