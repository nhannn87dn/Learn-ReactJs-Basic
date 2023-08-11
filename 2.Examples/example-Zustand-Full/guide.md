# example-Zustand-Shopping-Cart 

Dưới đây là một ứng dụng đơn giản sử dụng Zustand và middleware Persist để quản lý giỏ hàng và lưu trữ dữ liệu vào `localStorage`.

Bước 1: Cài đặt Zustand và Middleware Persist

Đảm bảo bạn đã cài đặt Zustand và Middleware Persist:

```bash
npm install zustand @zustand/persist
# Hoặc sử dụng yarn:
yarn add zustand @zustand/persist
```

Bước 2: Cấu hình Store và Middleware Persist

```jsx
// store.js
import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product) => {
        set((state) => ({ cartItems: [...state.cartItems, product] }));
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },
      getTotalQuantity: () => {
        return useCartStore.getState().cartItems.length;
      },
      getTotalPrice: () => {
        return useCartStore.getState().cartItems.reduce((total, item) => total + item.price, 0);
      },
    }),
    {
      name: 'cart-storage', // (optional) name for the storage key, defaults to 'zustand'
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useCartStore;
```

Bước 3: Sử dụng Store trong Component

```jsx
// ProductList.js
import React from 'react';
import useCartStore from './store';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

```jsx
// Cart.js
import React from 'react';
import useCartStore from './store';

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getTotalQuantity = useCartStore((state) => state.getTotalQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
    </div>
  );
}

export default Cart;
```

```jsx
// App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <div>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
```

Với cách này, giỏ hàng của bạn sẽ được lưu trữ trong `localStorage`, và bạn có thể tắt/mở lại trình duyệt và dữ liệu giỏ hàng vẫn được giữ nguyên. Nếu bạn muốn sử dụng `sessionStorage` thay vì `localStorage`, hãy thay `getStorage: () => localStorage` bằng `getStorage: () => sessionStorage`.