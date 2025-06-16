# Giới thiệu về `useReducer`

## 1. `useReducer` là gì?

`useReducer` là một React Hook thay thế cho `useState` khi bạn có **logic trạng thái phức tạp hơn**. Nó được lấy cảm hứng từ cách hoạt động của Redux (một thư viện quản lý trạng thái nổi tiếng).

Về cơ bản, `useReducer` cho phép bạn quản lý trạng thái bằng cách sử dụng một hàm "reducer" và một hàm "dispatch".

* **State:** Là dữ liệu hiện tại của bạn.
* **Action:** Là một đối tượng mô tả "điều gì đã xảy ra" (ví dụ: 'INCREASE_COUNT', 'ADD_TODO', 'LOGIN_SUCCESS').
* **Reducer:** Là một hàm thuần túy (pure function) nhận vào `state` hiện tại và một `action`, sau đó trả về **`state` mới**. Nó chứa toàn bộ logic để cập nhật trạng thái.
* **Dispatch:** Là một hàm mà bạn sử dụng để "gửi" (dispatch) một `action` đến reducer. Khi một action được dispatch, reducer sẽ chạy và tính toán ra state mới, sau đó React sẽ re-render component với state mới đó.

Hãy tưởng tượng `useReducer` như một **"Trung tâm điều khiển"** cho trạng thái của bạn:

* Bạn **gửi các lệnh** (actions) đến trung tâm.
* Trung tâm có một **quy tắc rõ ràng** (reducer) về cách xử lý từng lệnh đó và tạo ra một trạng thái mới.
* Sau đó, nó **cập nhật bản đồ hiện tại** (state) của bạn.

Lưu ý rằng:

* Những gì `useState` làm được, thì `useReducer` làm được
* Những gì `useReducer` làm được, thì `useState` làm được

## 2. Tại sao chúng ta cần `useReducer`? (Vấn đề nó giải quyết)

`useReducer` trở nên hữu ích khi:

* **Logic cập nhật trạng thái trở nên phức tạp**: Khi một hành động cần cập nhật nhiều phần của trạng thái cùng một lúc, hoặc khi trạng thái tiếp theo phụ thuộc vào trạng thái trước đó một cách phức tạp.
* **Nhiều hành động (actions) khác nhau có thể thay đổi cùng một trạng thái**: Với `useState`, bạn sẽ có nhiều hàm `set...` khác nhau, dẫn đến nhiều dòng code lặp lại hoặc khó quản lý.
* **Bạn cần truyền hàm dispatch xuống các component con**: Hàm `dispatch` được `useReducer` trả về luôn ổn định (stable), nên bạn có thể truyền nó xuống các component con mà không lo ngại về việc nó sẽ gây re-render không cần thiết cho các component con được `memo` hóa. Điều này làm cho việc quản lý trạng thái chia sẻ dễ dàng hơn so với việc truyền nhiều hàm `set...` từ `useState`.

**Ví dụ về khi `useState` trở nên phức tạp (Counter với nhiều hành động):**

```jsx
import React, { useState } from 'react';

function CounterWith useState() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    setCount(0);
    setStep(1); // Cập nhật nhiều phần của state
  };

  // Giả sử có thêm nhiều hành động phức tạp khác...
  // Ví dụ: Đặt lại về một giá trị cụ thể, nhân đôi, chia đôi...
  // Mỗi lần cập nhật cần nhiều logic hoặc nhiều setCount -> phức tạp

  return (
    <div>
      <h2>Counter with useState (Complex)</h2>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setStep(prevStep => prevStep + 1)}>Increase Step</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

Trong ví dụ này, việc `reset` cần cập nhật cả `count` và `step`. Nếu có thêm nhiều hành động phức tạp hơn, hoặc có thêm các state phụ thuộc vào nhau, component sẽ chứa rất nhiều logic cập nhật state, làm cho nó trở nên khó đọc và khó quản lý.

## 3. `useReducer` hoạt động như thế nào?

`useReducer` nhận vào hai đối số:

1. **Hàm `reducer`**: Là trái tim của `useReducer`. Hàm này định nghĩa cách trạng thái thay đổi dựa trên các `action` được gửi đến. Nó có dạng `(state, action) => newState`.
2. **`initialState`**: Giá trị khởi tạo của trạng thái.

Và nó trả về một cặp giá trị:

1. **`state`**: Trạng thái hiện tại của bạn.
2. **`dispatch`**: Một hàm mà bạn dùng để gửi các `action`.

**Cú pháp cơ bản:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**Ví dụ minh họa (Giải quyết vấn đề Counter với `useReducer`):**

Chúng ta sẽ chuyển đổi ví dụ Counter phức tạp trên sang sử dụng `useReducer`.

Đầu tiên, chúng ta định nghĩa hàm `reducer` (thường nằm ngoài component để nó không bị tạo lại mỗi lần render):

```jsx
// Hàm Reducer: Định nghĩa cách state thay đổi dựa trên action
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'set_step':
      return { ...state, step: action.payload }; // payload là dữ liệu đi kèm action
    case 'reset':
      return { count: 0, step: 1 }; // Reset cả count và step
    default:
      throw new Error(); // Luôn ném lỗi nếu action type không hợp lệ
  }
}

// Component sử dụng useReducer
import React, { useReducer } from 'react';

function CounterWithReducer() {
  // Khởi tạo useReducer
  // const [state, dispatch] = useReducer(reducerFunction, initialStateObject);
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      {/* Gửi (dispatch) các action đến reducer */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'set_step', payload: state.step + 1 })}>
        Increase Step
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

Trong ví dụ này:

1. Chúng ta định nghĩa `counterReducer` bên ngoài component. Hàm này nhận `state` hiện tại và `action`, sau đó trả về `state` mới. Nó rất rõ ràng về cách mỗi loại `action` thay đổi trạng thái.
2. Trong `CounterWithReducer`, chúng ta gọi `useReducer(counterReducer, { count: 0, step: 1 })`.
3. Khi người dùng click vào các nút, chúng ta gọi `dispatch` và truyền vào một đối tượng `action` (thường có thuộc tính `type` để mô tả hành động, và `payload` nếu cần truyền thêm dữ liệu).
4. Khi `dispatch` được gọi, React sẽ gọi `counterReducer` với `state` hiện tại và `action` đã gửi. Reducer tính toán `state` mới, và React sẽ re-render component với `state` mới đó.

Bạn thấy đấy, logic cập nhật trạng thái đã được tách biệt hoàn toàn vào hàm `reducer`, làm cho component gọn gàng hơn và dễ hiểu hơn nhiều.

## 4. Khi nào nên sử dụng `useReducer`?

* **Logic trạng thái phức tạp**: Khi một state cần nhiều hành động để cập nhật, hoặc các hành động phụ thuộc vào trạng thái trước đó.
* **Trạng thái phức tạp là một đối tượng hoặc mảng**: Khi state là một cấu trúc dữ liệu phức tạp mà bạn cần thay đổi một cách có cấu trúc.
* **Cập nhật nhiều trường của trạng thái cùng lúc**: Ví dụ, trong một form với nhiều trường, một hành động `UPDATE_FIELD` có thể cập nhật `value` và `isValid` của một trường cụ thể.
* **Chia sẻ logic cập nhật trạng thái giữa các component**: Bạn có thể định nghĩa một `reducer` ở một file riêng và tái sử dụng nó ở nhiều component khác nhau.
* **Tối ưu hóa hiệu suất khi truyền hàm xuống component con**: Hàm `dispatch` từ `useReducer` luôn ổn định về tham chiếu, nên bạn có thể truyền nó xuống các component con được `React.memo` hóa mà không gây re-render không cần thiết (tương tự như `useCallback` với các hàm).

### 5. Khi nào KHÔNG nên sử dụng `useReducer`?

* **Logic trạng thái đơn giản**: Nếu trạng thái của bạn chỉ là một giá trị đơn giản (ví dụ: một boolean, một số nguyên) và chỉ thay đổi bởi một hoặc hai hành động đơn giản, thì `useState` là đủ và dễ hiểu hơn.
* **Khi chỉ có một vài hành động đơn giản**: Nếu bạn chỉ có `toggle`, `increment`, `decrement` mà không có sự phức tạp về phụ thuộc, `useState` sẽ gọn gàng hơn.
* **Để thay thế hoàn toàn Redux**: Mặc dù `useReducer` rất giống với Redux, nó không cung cấp các tính năng như middleware, DevTools, hoặc một store toàn cục mà Redux có. Đối với các ứng dụng rất lớn và phức tạp, Redux hoặc các thư viện quản lý trạng thái chuyên dụng khác vẫn có thể là lựa chọn tốt hơn.

## Tổng kết

`useReducer` là một Hook mạnh mẽ giúp chúng ta quản lý trạng thái phức tạp trong React một cách có tổ chức và dễ bảo trì hơn. Bằng cách tách biệt logic cập nhật trạng thái vào một hàm `reducer` riêng biệt, chúng ta làm cho component của mình gọn gàng hơn và dễ đọc hơn.

Hãy xem xét sử dụng `useReducer` khi bạn nhận thấy logic `useState` của mình trở nên quá rườm rà, hoặc khi bạn có nhiều hành động khác nhau cùng tác động lên một phần của trạng thái.
