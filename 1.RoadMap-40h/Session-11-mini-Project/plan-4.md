# Weather App

## Step 1

Đăng ký tài khoản để lấy API Key: <https://openweathermap.org/api />

API Key: 

- 40d5f3cf9ad9a1c5a0b0363fbcacc4f1
- dcd574d4ca400f1ae6cc02befea7851a

## Step 2:

Lấy thông tin thời tiết:

```text
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

- lat: Kinh độ
- lon: vĩ độ
- units: standard | metric  |  imperial (Đơn vị nhiệt độ)
- appid: điền API key vào
- lang: vi là tiếng việt

**Muốn có `lat` và `lon` này thì gọi thêm API 

```text
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
```
- city name: điền từ khóa tên thành phố bạn muốn lấy thời tiết


Ví dụ:

```text
https://api.openweathermap.org/geo/1.0/direct?q=Danang&limit=5&appid=40d5f3cf9ad9a1c5a0b0363fbcacc4f1
```

response

```json
[
{
"name": "Da Nang",
"local_names": {
"km": "ដាណាំង",
"ru": "Дананг",
"ja": "ダナン",
"vi": "Thành phố Đà Nẵng",
"zh": "峴港",
"ko": "다낭",
"eo": "Danango",
"pt": "Da Nang",
"en": "Da Nang"
},
"lat": 16.068,
"lon": 108.212,
"country": "VN"
},
{
"name": "Đà Nẵng",
"local_names": {
"vi": "Đà Nẵng",
"ko": "다낭"
},
"lat": 16.0693775,
"lon": 108.2225767,
"country": "VN"
}
]
```

Sau khi có lat, lon

```text
https://api.openweathermap.org/data/2.5/weather?lat=16.0693775&lon=108.2225767&appid=40d5f3cf9ad9a1c5a0b0363fbcacc4f1&units=metric&lang=vi
```

Giải thích thông số lấy được: <https://openweathermap.org/current#fields_json/>


ICON Thời tiết: <https://openweathermap.org/weather-conditions>

## Yêu cầu

- Màn hình hình 1: Hiển thị thời tiết `hiện tại` và `hàng giờ` của 1 thành phố tùy chọn, 
- Màn hình 2: Hiển thị thời tiết `5 ngày tiếp theo` của thành phố đó


https://www.weatherapi.com/

APIKEY: c9a0ca46550648b29ce125849232709

Chi tiết cách truyền các tham số: https://www.weatherapi.com/docs/#intro-request
Giải thích các thuộc tính response trả về: https://www.weatherapi.com/docs/#intro-request

Current
https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=Danang&aqi=no&lang=vi


Hours
https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi

Daily 5 days (days=5)
https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=5&aqi=no&alerts=no&lang=vi

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