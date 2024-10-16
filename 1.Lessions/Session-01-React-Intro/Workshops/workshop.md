# WorkShop Session 1


⭐ Cài đặt phần mềm, các extentions cần thiết cho học React



Cùng tìm hiểu nền móng React thông qua 2 vấn đề sau:


## React Elements

Tạo các Element với React.createElement

### 🔸1. Nhúng React CDN vào một trang HTML

Xem Doc: <https://reactjs.org/docs/add-react-to-a-website.html#step-2-add-the-script-tags>

### 🔸2. Tạo một HTML Elements sử dụng Javascript

### 🔸3. React.createElement ==> React Elements

=======================================

**Task 1:**
Tạo một element như sau
```html
<h1 class="heading">Hello React !</h1>
```
Javascript
```js
//Tạo một element mới
const h1DOM = document.createElement('h1');
h1DOM.className = 'heading'; //Thêm class cho thẻ h1
h1DOM.innerText = 'Hello React !'; //Add nội dung cho thẻ h1
//Hiển thị ra trình duyệt
document.body.appendChild(h1DOM);

```

React Element

```js
/**
 * Cú pháp: 
 *  createElement(type, props, ...children)
 * 
 * @type kiểu Element
 * @props các thuộc tính của Element
 * @children con của một Element
 */

const h1React = React.createElement(
    'h1',
    {
        className: 'heading'
    },
    'Hello React !'
    );
```
Nếu render nó thì cũng cho kết quả tương tự Javascript. 


## React DOM


### 🔸1. Tại sao phải sử dụng React DOM

React DOM là cầu nối giữa React và DOM:
React tạo ra các Elements và React DOM giúp render React Element ra trình duyệt.

=> Sử dụng React DOM để render React Element ra trình duyệt

### 🔸2. Tạo sai lại tách React DOM ra khỏi React

- Lúc đầu React DOM nằm luôn trong React nhưng sau khi React-Native ra đời, nhà phát hành nhận thấy rằng có thể tách React DOM ra khỏi React Core như là phần mở rộng.

- React Core trở nên gọn nhẹ hơn.