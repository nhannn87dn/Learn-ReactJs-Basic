# ⭐ Session 3 - Conditional Rendering

Component của bạn sẽ thường xuyên cần hiển thị khác nhau tương ứng với các điều kiện khác nhau. Trong React, Bạn có thể render JSX có điều kiện bằng cách sử dụng cú pháp JavaScript như **`if`** statements, `&&`, và  `? : ` toán tử 3 ngôi.


> **Trong Session này bạn sẽ nắm được**
> - Làm thể nào để trả về một JSX phụ thuộc vào một điều kiện
> - Điều kiện bao gồm include hoặc loại trừ exclude một phần của JSX.
> - Cú pháp shorthand ràng buộc điều kiện bạn thường thấy trong React
>


Ví dụ minh họa

![conditionally](img/conditional-rendering.png)

Tạo một component để thực hiện ví dụ trên.

## 🔥 Điều kiện trả về biểu thức `JSX`

```js
//App.js

function Item({ name, isPacked } : {name: string, isPacked: boolean}) {
  if (isPacked) {
    //returning JSX
    return <li className="item">{name} ✔</li>;
  }
  //returning JSX
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}


```

## 🔥 Điều kiện trả về không có gì với `null`

```js
function Item({ name, isPacked } : {name: string, isPacked: boolean}) {
   // If isPacked is true, the component will return nothing, null
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}
....

```

## 🔥 Điều kiện toán tử ngôi thứ 3 (? :)

```js
 ...

function Item({ name, isPacked } : {name: string, isPacked: boolean}) {
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
}
...
```

## 🔥 Logical AND operator (&&)

```js
...

function Item({ name, isPacked } : {name: string, isPacked: boolean}) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}
...

```

## 🔥 Điều kiện gán một JSX như là một biến

```js
function Item({ name, isPacked } : {name: string, isPacked: boolean}) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

```

Ví dụ thực tế:

Chỉ có sản phẩm đầu và cuối là hiển thị discount. Vậy điều kiện nào để nó mới thiển thị ?

![ex](img/ex-1.png)