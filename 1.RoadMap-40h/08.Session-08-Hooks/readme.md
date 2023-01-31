# Hooks

- **What’s a Hook?**

**What is a Hook?** A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later

- **When would I use a Hook?**

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

## 🔥 1. State Hook - useState

```js
 const [count, setCount] = useState(0)
```

## 🔥 2. Effect Hook - useEffect

- useEffect cho phép bạn thực hiện các hiệu ứng phụ trong các Components của bạn.
- Effects sẽ chạy sau khi component đã rendering.
- Dùng khi nào: fetching data, directly updating the DOM, and có sử dụng đến timers
- useEffect có 2 tham số. Tham số thứ 2 là tùy chọn

> `useEffect(<function>, <dependency>)`

### 🔷 **2.1 Cách dùng**

1. Không có dependency:

```js
useEffect(() => {
  //Runs on every render
});
```

2. Dependency là một mảng rổng:

```js
useEffect(() => {
  //Runs only on the first render
}, []); // <- add empty brackets here
```

3. Dependency là một Props hoặc State:

```js
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

-------------------------------
=> Lưu ý: Luôn đúng cho cả 3 cách dùng trên

- Callback luôn được gọi sau khi component đã mounted
- Cleanup luôn được gọi trước khi component unmounted

### 🔷 **2.2 Effect Cleanup (Unmouting)***

- Sử dụng để hủy effects --> chống tràn bộ nhớ (memory leaks)
- Khi nào dùng: Khi dùng Timeouts, subscriptions, event listeners hoặc các effects khác không cần thiết sử dụng đến nũa.

```js
useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
  
  // Có return trả về --> Unmouting
  
  return () => clearTimeout(timer)
  }, []);
```
 Open and Close dialog
```js
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```
Subscribing to events

```js
useEffect(() => {
  function handleScroll(e) {
    console.log(e.clientX, e.clientY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
Triggering animations
```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```
Fetching data
```js
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

### 🔷 **2.3 Không cần phải dùng Effect**

- Một số logic chỉ chạy 1 lần khi ứng dụng khởi chạy. Bạn đặt chúng ra bên ngoài Component

```js
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

- Xem thêm: <https://beta.reactjs.org/learn/you-might-not-need-an-effect>

==> Next: Intro Other Hooks