# Giới thiệu về hook `useMemo`

## 1. `useMemo` là gì?

Nếu `useCallback` giúp chúng ta "ghi nhớ" một hàm, thì **`useMemo` giúp chúng ta "ghi nhớ" (memoize) một giá trị đã được tính toán.**

Hãy hình dung bạn có một công thức làm bánh phức tạp, cần nhiều bước tính toán nguyên liệu. Mỗi lần muốn làm bánh, bạn lại phải tính toán lại từ đầu. `useMemo` giống như việc bạn ghi lại **kết quả** của những phép tính đó vào một tờ giấy. Lần sau, nếu các nguyên liệu cơ bản không đổi, bạn chỉ cần nhìn vào tờ giấy để lấy kết quả đã tính sẵn mà không cần làm lại các phép tính phức tạp.

Trong React, điều này có nghĩa là **`useMemo` sẽ trả về một giá trị đã được tính toán và ghi nhớ**, và giá trị này sẽ chỉ được tính toán lại khi các "phụ thuộc" của nó (những dữ liệu mà phép tính đó cần để tạo ra kết quả) thay đổi. Mục đích chính vẫn là **tối ưu hóa hiệu suất** bằng cách tránh các phép tính nặng nốn, tốn tài nguyên một cách không cần thiết trong mỗi lần component render.

## 2. Tại sao chúng ta cần `useMemo`? (Vấn đề nó giải quyết)

Giống như `useCallback`, `useMemo` cũng giúp giải quyết vấn đề về hiệu suất, cụ thể là khi bạn có các **phép tính nặng nề hoặc các thao tác tốn thời gian** diễn ra trong mỗi lần component re-render.

Hãy xem xét ví dụ sau:

```jsx
// Component con (ví dụ một danh sách hiển thị các số đã được lọc/tính toán)
function ItemList({ items }) {
  console.log('ItemList re-rendered!');
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} - Price: {item.price}</li>
      ))}
    </ul>
  );
}

// Component cha
function ProductDashboard() {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    { id: 4, name: 'Monitor', price: 300 },
  ]);
  const [filterText, setFilterText] = React.useState('');

  console.log('ProductDashboard re-rendered!');

  // Đây là một phép tính TỐN THỜI GIAN
  // Giả sử filterProducts là một hàm phức tạp, mất nhiều tài nguyên để chạy
  const expensiveFilteredProducts = products.filter(product => {
    // Giả lập một phép tính phức tạp
    let i = 0;
    while (i < 1000000) i++; // Giả lập mất thời gian
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      <input
        type="text"
        placeholder="Filter products..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {/* Component con ItemList nhận kết quả của phép tính phức tạp */}
      <ItemList items={expensiveFilteredProducts} />
      <button onClick={() => setProducts([...products, { id: products.length + 1, name: 'New Item', price: 50 }])}>
        Add New Product
      </button>
    </div>
  );
}
```

Trong ví dụ trên, hàm `filter` để tạo `expensiveFilteredProducts` là một phép tính giả lập tốn thời gian (có vòng lặp `while`). Khi bạn gõ vào ô tìm kiếm (`filterText` thay đổi), hoặc thậm chí khi bạn nhấn nút "Add New Product" (`products` thay đổi), `ProductDashboard` sẽ re-render. Mỗi lần re-render, phép tính `filter` **sẽ được chạy lại từ đầu**, dù cho `filterText` có thể không thay đổi! Điều này dẫn đến sự chậm trễ không cần thiết và trải nghiệm người dùng kém.

`useMemo` được tạo ra để ngăn chặn việc tính toán lại những giá trị này một cách không cần thiết.

## 3. `useMemo` hoạt động như thế nào?

`useMemo` hoạt động bằng cách "ghi nhớ" kết quả của một hàm bạn truyền vào. Nó sẽ chỉ thực thi lại hàm đó và tính toán lại giá trị khi có một trong các "phụ thuộc" của nó thay đổi.

**Cú pháp cơ bản:**

```jsx
const memoizedValue = useMemo(() => {
  // Logic tính toán tạo ra giá trị bạn muốn ghi nhớ
  return someCalculatedValue;
}, [dependencies]); // Mảng phụ thuộc
```

* **Hàm đầu tiên:** Là một hàm "factory" sẽ thực hiện phép tính và trả về giá trị mà bạn muốn ghi nhớ. `useMemo` sẽ gọi hàm này và lưu trữ giá trị trả về.
* **Mảng phụ thuộc (dependency array):** Tương tự như `useCallback`. Đây là một mảng các giá trị. `useMemo` sẽ chỉ thực thi lại hàm factory và tính toán lại `memoizedValue` khi bất kỳ giá trị nào trong mảng này thay đổi. Nếu mảng rỗng `[]`, giá trị sẽ chỉ được tính toán **một lần duy nhất** khi component được mount.

**Ví dụ minh họa:**

Chúng ta sẽ sửa lại ví dụ trên bằng cách sử dụng `useMemo` cho phép tính `expensiveFilteredProducts`:

```jsx
// Component con (ItemList vẫn giữ nguyên)
function ItemList({ items }) {
  console.log('ItemList re-rendered!');
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} - Price: {item.price}</li>
      ))}
    </ul>
  );
}

// Component cha với useMemo
function ProductDashboardOptimized() {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    { id: 4, name: 'Monitor', price: 300 },
  ]);
  const [filterText, setFilterText] = React.useState('');
  const [someOtherState, setSomeOtherState] = React.useState(0); // Thêm state khác để minh họa re-render

  console.log('ProductDashboardOptimized re-rendered!');

  // Bây giờ, phép tính phức tạp CHỈ chạy lại khi products hoặc filterText thay đổi
  const memoizedFilteredProducts = React.useMemo(() => {
    console.log('Calculating filtered products...'); // Để xem khi nào nó chạy
    // Giả lập một phép tính phức tạp
    let i = 0;
    while (i < 1000000) i++; // Giả lập mất thời gian
    return products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [products, filterText]); // Phụ thuộc vào 'products' và 'filterText'

  return (
    <div>
      <h1>Product Dashboard (Optimized)</h1>
      <input
        type="text"
        placeholder="Filter products..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={() => setSomeOtherState(someOtherState + 1)}>
        Update Other State ({someOtherState})
      </button>
      {/* ItemList nhận giá trị đã được ghi nhớ */}
      <ItemList items={memoizedFilteredProducts} />
      <button onClick={() => setProducts([...products, { id: products.length + 1, name: 'New Item', price: 50 }])}>
        Add New Product
      </button>
    </div>
  );
}
```

Trong ví dụ này, khi bạn gõ vào ô tìm kiếm hoặc nhấn "Add New Product", phép tính `filter` bên trong `useMemo` **sẽ chạy lại** vì `filterText` hoặc `products` đã thay đổi (là các phần tử trong mảng phụ thuộc).

Tuy nhiên, nếu bạn nhấn nút "Update Other State", `ProductDashboardOptimized` sẽ re-render, nhưng **phép tính `filter` bên trong `useMemo` sẽ KHÔNG chạy lại** vì `products` và `filterText` (các phụ thuộc) không thay đổi. Điều này giúp tiết kiệm tài nguyên tính toán và cải thiện đáng kể hiệu suất cho các tác vụ nặng.

## 4. Khi nào nên sử dụng `useMemo`?

* **Khi tính toán một giá trị phức tạp hoặc tốn kém:** Đây là trường hợp chính. Nếu bạn có một hàm hoặc một đoạn code mất nhiều thời gian để thực thi (ví dụ: lọc, sắp xếp, biến đổi dữ liệu lớn, tính toán toán học phức tạp), hãy xem xét `useMemo`.
* **Khi tạo các đối tượng hoặc mảng mới được truyền xuống component con memoized (`React.memo`):** Tương tự như `useCallback`, nếu bạn tạo một đối tượng hoặc mảng mới trong mỗi lần render và truyền nó xuống một component con được `React.memo`, component con đó sẽ re-render. `useMemo` giúp duy trì tham chiếu của đối tượng/mảng đó, ngăn chặn re-render không cần thiết.
* **Khi sử dụng trong dependency array của các Hooks khác:** Đôi khi, bạn cần một giá trị ổn định về mặt tham chiếu để đưa vào dependency array của `useEffect` hoặc `useCallback`.

## 5. Khi nào KHÔNG nên sử dụng `useMemo`?

Giống như `useCallback`, việc lạm dụng `useMemo` có thể phản tác dụng:

* **Không phải mọi phép tính đều cần `useMemo`:** Đối với các phép tính đơn giản, nhanh chóng (ví dụ: `1 + 1`, nối chuỗi cơ bản, tạo một mảng nhỏ), chi phí để `useMemo` hoạt động (kiểm tra phụ thuộc, lưu trữ giá trị) có thể lớn hơn lợi ích mà nó mang lại.
* **Khi chi phí tính toán là không đáng kể:** Nếu bạn không thấy sự chậm trễ rõ rệt trong ứng dụng (sử dụng React DevTools Profiler để kiểm tra), thì không cần thiết phải thêm `useMemo`.
* **Làm phức tạp code:** Việc thêm `useMemo` không cần thiết có thể làm code khó đọc và khó bảo trì hơn.

**Mẹo:** Hãy nhớ rằng mục đích của `useMemo` là tối ưu hóa. Nếu không có vấn đề hiệu suất rõ ràng, hãy giữ code của bạn đơn giản nhất có thể.

## Tổng kết

`useMemo` là một công cụ mạnh mẽ để tối ưu hóa hiệu suất trong React bằng cách "ghi nhớ" các giá trị đã được tính toán. Nó giúp chúng ta tránh các phép tính nặng nề được thực hiện lặp đi lặp lại trong mỗi lần re-render không cần thiết, đặc biệt hữu ích khi làm việc với dữ liệu lớn hoặc các component con được memoize.

Hãy sử dụng `useMemo` một cách thông minh và có mục đích. Luôn ưu tiên sự rõ ràng của code và chỉ tối ưu hóa khi bạn đã xác định được một vấn đề hiệu suất thực sự.
