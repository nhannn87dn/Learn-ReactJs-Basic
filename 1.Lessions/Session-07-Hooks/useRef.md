# Tìm Hiểu Về useRef Trong React

`useRef` là một trong những **React Hook** được sử dụng phổ biến trong các ứng dụng React để quản lý tham chiếu (references) hoặc lưu trữ giá trị mà không gây ra việc re-render component. Trong bài viết này, chúng ta sẽ tìm hiểu cách `useRef` hoạt động, khi nào nên sử dụng nó, và một số ví dụ minh họa.

## 1. useRef Là Gì?

`useRef` là một Hook trong React, được giới thiệu từ phiên bản 16.8, cho phép tạo một **đối tượng tham chiếu** (reference object) có thuộc tính `.current`. Giá trị của `.current` có thể được thay đổi mà không làm component re-render, điều này khác với `useState` (khi thay đổi state, component sẽ re-render).

Cú pháp cơ bản:

```javascript
const ref = useRef(initialValue);
```

- `initialValue`: Giá trị ban đầu của `.current`.
- `ref.current`: Thuộc tính lưu giá trị tham chiếu, có thể thay đổi mà không gây re-render.

## 2. Các Trường Hợp Sử Dụng useRef

`useRef` thường được sử dụng trong hai trường hợp chính:

### 2.1. Quản Lý Tham Chiếu DOM

`useRef` được dùng để truy cập trực tiếp vào các phần tử DOM trong React một cách an toàn, thay vì sử dụng các phương pháp như `document.getElementById`.

**Ví dụ: Focus vào input khi component được render**

```javascript
import React, { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

Trong ví dụ trên, `inputRef` được sử dụng để tham chiếu đến phần tử `<input>`. Khi component được render, `useEffect` sẽ gọi `focus()` để đặt con trỏ vào input.

### 2.2. Lưu Trữ Giá Trị Không Gây Re-render

`useRef` có thể được dùng để lưu trữ các giá trị thay đổi qua thời gian mà không làm component re-render, chẳng hạn như giá trị của một biến tạm hoặc trạng thái trước đó.

**Ví dụ: Đếm số lần click mà không re-render**

```javascript
import React, { useRef } from 'react';

function ClickCounter() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Số lần click: ${countRef.current}`);
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

Trong ví dụ này, mỗi khi nhấn nút, giá trị `countRef.current` tăng lên nhưng component không re-render, vì `useRef` không kích hoạt quá trình này.

## 3. Tại Sao Nên Sử Dụng useRef?

- **Truy cập DOM an toàn**: Thay vì sử dụng các API DOM trực tiếp, `useRef` cung cấp cách tiếp cận theo phong cách React.
- **Hiệu suất tốt hơn**: Vì thay đổi giá trị `.current` không gây re-render, `useRef` hữu ích khi bạn cần lưu trữ dữ liệu tạm thời hoặc trạng thái không cần giao diện cập nhật.
- **Lưu trữ giá trị lâu dài**: Giá trị của `useRef` được giữ nguyên trong suốt vòng đời của component, ngay cả khi component re-render.

## 4. Lưu Ý Khi Sử Dụng useRef

- **Không lạm dụng**: `useRef` không nên được dùng thay thế cho `useState` trong các trường hợp cần cập nhật giao diện người dùng.
- **Không gây re-render**: Nếu bạn cần giá trị thay đổi để phản ánh lên giao diện, hãy sử dụng `useState` thay vì `useRef`.
- **Cẩn thận khi dùng với useEffect**: Đảm bảo rằng bạn hiểu rõ thời điểm `useEffect` chạy để tránh lỗi logic khi truy cập `.current`.

## 5. Ví Dụ Thực Tế: Tạo Một Input Có Nút Reset

Dưới đây là một ví dụ kết hợp `useRef` và `useState` để tạo một input có thể reset giá trị:

```javascript
import React, { useRef, useState } from 'react';

function ResetInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleReset = () => {
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

Trong ví dụ này:

- `useState` quản lý giá trị của input để cập nhật giao diện.
- `useRef` được dùng để focus lại vào input sau khi reset.

## 6. Ví dụ

Dưới đây là một ví dụ sử dụng useRef để quản lý một phần tử `<audio>` trong React, cho phép điều khiển phát, tạm dừng và thay đổi âm lượng của audio một cách trực tiếp

```js
import React, { useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);

  // Hàm phát audio
  const handlePlay = () => {
    audioRef.current.play();
  };

  // Hàm tạm dừng audio
  const handlePause = () => {
    audioRef.current.pause();
  };

  // Hàm thay đổi âm lượng
  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
```

Ví dụ này minh họa cách useRef giúp quản lý phần tử `<audio>` một cách hiệu quả, cho phép tương tác trực tiếp với DOM mà không cần sử dụng các API như `document.querySelector`
