# ⭐ Session 5 - Event Handling

>**Bạn sẽ nắm được**
>
>- Các cách khác nhau để tạo ra một event handler
>- Làm thế nào để truyền event handling logic từ một  component CHA
>
>- Thế nào là một sự kiện lan truyền và cách khắc phục

## 🔥 Responding to Events (Phản hồi sự kiện)

Khi bạn click chuột, rê chuột, focus vào một input... thì đó là những sự kiện. React cho phép bạn tạo ra các phản hồi lại giao diện người dùng tương ứng với từng sự kiện.

Doc: <https://react.dev/learn/responding-to-events>

Handling events trong React elements rất giống với handling events trong DOM elements (DOM thật), chỉ khác cú pháp.

- React events có tên đặt theo kiểu camelCase.
- Với JSX bạn truyền một function như là một event handler, hơn là chuỗi.

DOM Events Javascript: <https://www.w3schools.com/jsref/dom_obj_event.asp>



🌻 Ví dụ một sự kiện click trong HTML:

```js
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

## 🔥 Sự kiện về Chuột


```js
function handleClick() {
    alert('You clicked me!');
}
<button onClick={handleClick}>
  Click me
</button>

//inline

<button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   e.preventDefault();
  console.log('You clicked me!');
}}> Click Me</button>

```


Lưu ý: Để truyền một Event handlers thì ta truyền chứ không được GỌI. Ví dụ:

| passing a function (correct)   | calling a function (incorrect)   |
|--------------------------------|----------------------------------|
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

Ví dụ khác về sự kiện chuột

```js
import React, { useState } from 'react';

const MouseExample = () => {
  const [buttonColor, setButtonColor] = useState('blue');

  const handleMouseEnter = () => {
    setButtonColor('red');
  };

  const handleMouseLeave = () => {
    setButtonColor('blue');
  };

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Di chuột vào đây
    </button>
  );
};

export default MouseExample;

```js

```


## 🔥 Sự kiện bàn phím

```js
import React, { useState } from 'react';

const KeyboardEventsExample = () => {
  const [keyPressed, setKeyPressed] = useState('');
  const [keyReleased, setKeyReleased] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(event.key);
  };

  const handleKeyUp = (event) => {
    setKeyReleased(event.key);
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Nhấn phím bất kỳ vào đây..."
      />
      <p>Phím đang được nhấn: {keyPressed}</p>
      <p>Phím đã được thả ra: {keyReleased}</p>
    </div>
  );
};

export default KeyboardEventsExample;

```

## 🔥 Sự kiện về Form


🌻 Form Submit

```js
export default function Signup() {
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      //Ngăn chặn form fresh lại trang
      e.preventDefault();
      //test alert
      alert('Submitting!');
    }}>
      <input name="username" />
      <button type="submit">Send</button>
    </form>
  );
}
```


## 🔥 Event Handlers có sử dụng tham số

```js
import React, { useState } from 'react';

const EventHandlerWithParameterExample = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  const handleDecrement = (amount) => {
    setCount((prevCount) => prevCount - amount);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleIncrement(5)}>Tăng lên 5</button>
      <button onClick={() => handleDecrement(2)}>Giảm xuống 2</button>
    </div>
  );
};

export default EventHandlerWithParameterExample;

```

## Truyền Event Handlers như là Props

`onClick ` function event handler dùng như một props, được lấy từ props

Dùng cách này thì tên của nó bắt buộc bắt đầu bằng `on`

```js
type ButtonTypeProps = {
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({ onClick, children } : ButtonTypeProps) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }

```
Trường hợp này còn được gọi là Handler dưới dạng callback

Ví dụ có component CON

```js
function Button({label}) {
    function handlePlayClick() {
      console.log(`Playing + tên của phim `);
    }

    return (
      <button onClick={handlePlayClick}>
        {label}
      </button>
    );
  }
```
và component CHA

```js
  function PlayMovies(){
    const movieTitle = 'Captain America';
    return <Button label="Play" />
  }

```

- Mong muốn khi click nút Play thì in ra `Playing + tên của phim`
- Nhưng tên của phim thì nằm ở component CHA


Để làm được yêu cầu trên có thể sửa lại như sau:

```js
  function Button({label, name}) {
    function handlePlayClick() {
      console.log(`Playing + ${name} `);
    }

    return (
      <button onClick={handlePlayClick}>
        {label}
      </button>
    );
  }
  function PlayMovies(){
    const movieTitle = 'Captain America';
    return <Button label="Play" name={movieTitle} />
  }
```

Nhưng như thế nó lại làm mất đi tính TÁI SỬ DỤNG của component Button

Ví dụ muốn tạo một Button Next, và công việc của nó là đi nhảy sang bài kế tiếp thì sao ?

==> KẾT LUẬN

- Component nên chỉ đảm nhận việc hiển thị UI
- Xử lí Logic nên tách ra ngoài


Khi đó ta sửa lại thành như sau:


```js
  function Button({onHandleClick, label, name}) {
    return (
      <button onClick={onHandleClick}>
        {label}
      </button>
    );
  }
  function PlayMovies(){
    const movieTitle = 'Captain America';
    //chuyển handler xử lí qua cho component CHA
    function handlePlayClick() {
      console.log(`Playing + ${name} `);
    }
    return <Button onClick={handlePlayClick} label="Play" name={movieTitle} />
  }
```

==>  ở component CON mà thực hiện một event ở component CHA (callback)

Lưu ý:

- Ở trong PlayMovies chúng ta dùng thuộc tính onClick
- Nhưng ở phần định nghĩa props cho component Button, chúng ta lại khai báo là onHandleClick mà không phải là onClick (Tất nhiên có thể dùng tên onClick)
- Điều đó không quan trọng, React chỉ yêu cầu tên bắt đầu phải là là `on`


## Event propagation

Có hai cách để sự kiện được lan truyền (event propagation) trong HTML DOM: `bubbling` và `capturing`.

Khái niệm **Event propagation** là cách định nghĩa thứ tự của HTML element khi event xảy ra.

Ví dụ nếu ta có một phần tử `<p>` bên trong một phần tử `<div>`.

```html
<!-- Trong Html -->
<div onclick="suKienA">
    <p onclick="suKienB"></p>
</div>
```

Nếu Khi người dùng click lên phần tử `<p>`, thì sự kiện “click” của phần tử nào sẽ được xử lý trước?


Trong bubbling, sự kiện của phần tử bên trong cùng sẽ được xử lý trước:

- Với ví dụ trên, sự kiện “click” của phần tử `<p>` sẽ được xử lý trước
- Sau đó đến sự kiện của phần tử `<div>`.

Trong capturing thì ngược lại, sự kiện của phần tử bên ngoài cùng sẽ được xử lý trước:

- Sự kiện “click” của phần tử `<div>`được xử lý trước
- Sau đó tới phần tử `<p>`.

Ví dụ trong React: <https://react.dev/learn/responding-to-events#event-propagation>

## Stopping propagation

Xem: <https://react.dev/learn/responding-to-events#stopping-propagation>

Hoặc ví dụ với Typescript trong Folder ví dụ

## Preventing default behavior

Xem: <https://react.dev/learn/responding-to-events#preventing-default-behavior>

```js
<button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   e.preventDefault();
  console.log('You clicked me!');
}}> Click Me</button>

```

Với một function handler

```js

const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert('Clicked!');
  }

<button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handlerClick(e)}>
 Click Me
 </button>

```




Nội dung liên quan: hook useRef, làm MusicPlayler