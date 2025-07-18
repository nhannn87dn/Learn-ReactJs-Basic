# State management với Zustand

## Giới thiệu

![Zustand](https://github.com/pmndrs/zustand/raw/main/docs/bear.jpg)

Zustand là một state management library nhanh và dễ dàng mở rộng đang được nhiều người quan tâm hiện nay. Nó được xây dựng bởi các lập trình viên đã tạo ra Jotai và React-springs. Zustand được biết đến bởi tính đơn giản và sử dụng hooks mà không cần theo một kiểu mẫu nhất định.

## Tại sao cần Quản lý Trạng Thái Toàn Cầu?

Hãy nhớ lại ví dụ về "prop drilling" với `useContext`. `useContext` là một giải pháp tốt cho việc truyền dữ liệu xuống dưới cây component. Tuy nhiên, nếu bạn có:

* **Trạng thái cần được chia sẻ giữa các component không có quan hệ cha-con trực tiếp (sibling components, hoặc component ở các nhánh cây khác nhau).**
* **Trạng thái phức tạp cần cập nhật thường xuyên từ nhiều nơi.**
* **Bạn muốn tách biệt logic trạng thái ra khỏi các component UI để dễ tái sử dụng và kiểm thử.**

Trong những trường hợp này, việc dùng các Hook như `useState` hay `useReducer` trong component cục bộ không còn phù hợp. Các thư viện quản lý trạng thái toàn cầu như Redux, MobX, Recoil, Jotai, và **Zustand** được sinh ra để giải quyết vấn đề này.

**Zustand nổi bật vì:**

* Tạo store dễ dàng: Chỉ cần một hàm `create` để định nghĩa store.
* Truy cập state qua hooks: Sử dụng `useStore` để lấy state hoặc cập nhật state.
* Selector tối ưu: Chỉ lấy dữ liệu cần thiết từ store, giảm re-render không cần thiết.
* Middleware tích hợp: Hỗ trợ lưu state vào `localStorage`, logging, hoặc các tính năng tùy chỉnh.
* Không cần provider: Không cần bọc ứng dụng trong Provider như Context API.
* Hỗ trợ TypeScript: Cung cấp type inference mạnh mẽ.

## 🔥 Cài đặt

```bash
npm install zustand
pnpm add zustand
yarn add zustand
```

Dùng cho TypeScript: <https://github.com/pmndrs/zustand#typescript-usage>

## 🔥 Cách hoạt động cơ bản của Zustand

Zustand hoạt động dựa trên khái niệm **"store"**. Một store là nơi chứa trạng thái toàn cục của bạn và các hàm để cập nhật trạng thái đó.

1. **Tạo một store:** Sử dụng hàm `create` từ `zustand`.
2. **Định nghĩa trạng thái và các hành động (actions) trong store.**
3. **Sử dụng store trong component:** Dùng Hook `useStore` (do `create` tạo ra) để lấy trạng thái hoặc các hành động.

## 🔥 Tạo một Store với Zustand

```ts
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## 🔥 Cách chập nhật State trong Zustand

```ts
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## 🔥 Truy cập State trong Zustand

```ts
import { create } from "zustand";

const useBearStore = create((set, get) => ({
  bears: 0,
  increase: () => set({ bears: get().bears + 1 }),
}));
```

## 🔥 Async Action trong Zustand

```ts
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));
```

---

## 🔥 Lưu trữ State đến LocalStorage, SessionStorage với Zustand

**Persist** giúp bạn lưu trữ Zustand state xuống Storage (e.g., localStorage, AsyncStorage, IndexedDB, etc.)

```js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
```

Doc: <https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md>

Xem ở phần ví dụ tạo giỏ hàng 2.Examples\Shopping-Cart-Zustand

---

## 🔥 Debug State trong Zustand

Bước 1: Cài đặt [Redux DevTools Chrome extension](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

Bước 2: Cấu hình Store

```ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
```

---

## 🔥 Một số ví dụ về cách Zustand

### 🔷 bankSimple với Zustand

Bước 1: Tạo store

```js
// bankStore.js
import { create } from "zustand";

const useBankStore = create((set) => ({
  balance: 0,
  withdrawMoney: (amount) =>
    set((state) => ({ balance: state.balance - amount })),
  depositMoney: (amount) =>
    set((state) => ({ balance: state.balance + amount })),
}));

export default useBankStore;
```

Bước 2: Tích hợp vào BankAccount Component

```js
// BankAccount.js
import React, { useState } from "react";
import useBankStore from "./bankStore";

const BankAccount = () => {
  const [amount, setAmount] = useState("");
  const balance = useBankStore((state) => state.balance);
  const withdrawMoney = useBankStore((state) => state.withdrawMoney);
  const depositMoney = useBankStore((state) => state.depositMoney);

  const handleWithdraw = () => {
    withdrawMoney(Number(amount));
    setAmount("");
  };

  const handleDeposit = () => {
    depositMoney(Number(amount));
    setAmount("");
  };

  return (
    <div>
      <h2>Balance: {balance}</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={handleDeposit}>Deposit</button>
      </div>
    </div>
  );
};

export default BankAccount;
```

Bước 3: Render ứng dụng

```js
// App.js
import React from "react";
import { Provider } from "react-redux";
import BankAccount from "./BankAccount";
import useBankStore from "./bankStore";

const App = () => {
  return (
    <Provider>
      <div>
        <h1>Simple Bank App</h1>
        <BankAccount />
      </div>
    </Provider>
  );
};

export default App;
```

Cú pháp và cách sử dụng Zustand khá tương đồng với Redux, nhưng nó có cú pháp ngắn gọn và dễ dàng sử dụng hơn trong một số trường hợp đơn giản

### 🔷 Ví dụ về Call API

Để thực hiện việc hiển thị danh sách sản phẩm, thêm mới, xóa và cập nhật sản phẩm sử dụng Zustand và React, chúng ta sẽ cần tạo một store để quản lý trạng thái của các sản phẩm và các hàm để thực hiện các thao tác CRUD (Create, Read, Update, Delete). Hãy làm theo các bước sau:

Bước 1: Cài đặt Zustand và Axios (để gọi API)

Đảm bảo bạn đã cài đặt Zustand và Axios bằng cách chạy lệnh sau:

```bash
npm install zustand axios
# Hoặc sử dụng yarn:
yarn add zustand axios
```

Bước 2: Tạo Store và Các Hàm CRUD

```jsx
// store.js
import create from "zustand";
import axios from "axios";

const apiUrl = "https://api.escuelajs.co/api/v1/products";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null, // Trạng thái lưu trữ thông báo lỗi

  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.get(apiUrl);
      set({ products: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ isLoading: false, error: "Error fetching products" });
    }
  },

  addProduct: async (newProduct) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.post(apiUrl, newProduct);
      set((state) => ({
        products: [...state.products, response.data],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error adding product:", error);
      set({ isLoading: false, error: "Error adding product" });
    }
  },

  deleteProduct: async (productId) => {
    try {
      set({ isLoading: true, error: null });
      await axios.delete(`${apiUrl}/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
      set({ isLoading: false, error: "Error deleting product" });
    }
  },

  updateProduct: async (productId, updatedProduct) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axios.put(
        `${apiUrl}/${productId}`,
        updatedProduct
      );
      set((state) => ({
        products: state.products.map((product) =>
          product.id === productId ? response.data : product
        ),
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error updating product:", error);
      set({ isLoading: false, error: "Error updating product" });
    }
  },
}));

export default useProductStore;
```

Trong ví dụ trên, chúng ta đã tạo một store có tên `useProductStore` để quản lý trạng thái của danh sách sản phẩm và các hàm để thực hiện các thao tác CRUD.

Bước 3: Sử dụng Store trong Component

```jsx
// App.js
import React, { useEffect } from "react";
import useProductStore from "./store";

function App() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const addProduct = useProductStore((state) => state.addProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const isLoading = useProductStore((state) => state.isLoading);
  const error = useProductStore((state) => state.error);

  //Có thể rút gọn lại như sau:
  // const { products, isLoading, error, fetchProducts, addProduct, deleteProduct, updateProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddProduct = async () => {
    const newProduct = {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    };
    await addProduct(newProduct);
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
  };

  const handleUpdateProduct = async (productId) => {
    const updatedProduct = {
      title: "Updated Product",
      price: 20,
      description: "An updated description",
      categoryId: 2,
      images: ["https://placeimg.com/640/480/any"],
    };
    await updateProduct(productId, updatedProduct);
  };

  return (
    <div>
      <h1>Product List</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
            <button onClick={() => handleUpdateProduct(product.id)}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add New Product</button>
    </div>
  );
}

export default App;
```

Trong ví dụ trên, chúng ta đã sử dụng store `useProductStore` và các hàm CRUD để hiển thị danh sách sản phẩm, thêm mới, xóa và cập nhật sản phẩm. Khi người dùng nhấn nút "Add New Product", "Delete" hoặc "Update" sản phẩm, chúng ta sẽ gọi các hàm tương ứng từ store để thực hiện các thao tác CRUD.

Lưu ý rằng, đây chỉ là một ví dụ đơn giản để minh họa việc sử dụng Zustand với React để quản lý trạng thái và thực hiện các thao tác CRUD. Trong ứng dụng thực tế, bạn có thể cần xử lý nhiều trường hợp và điều kiện hơn.

### 🔷 Authentication and Authorization in React App

Sẽ có các trang bạn cần yêu cầu đăng nhập đã mới cho phép truy cập. Sau đây là cách bạn bảo vệ các Route cần quyền truy cập nhu sau:

### Step 1 - Cấu hình Axios Client

Tạo file src/lib/axiosClient.ts với nội dung sau:

```ts
import axios from "axios";
const API_URL = "https://api.escuelajs.co/api/v1/auth";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST
axiosClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// RESPONSE

axiosClient.interceptors.response.use(
  async (response) => {
    const { access_token, refresh_token } = response.data;
    // LOGIN
    if (access_token) {
      window.localStorage.setItem("token", access_token);
    }
    if (refresh_token) {
      window.localStorage.setItem("refreshToken", refresh_token);
    }

    return response;
  },
  async (error) => {
    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    const originalConfig = error.config;

    if (error?.response?.status === 401 && !originalConfig.sent) {
      console.log("Error 🚀", error);
      originalConfig.sent = true;
      try {
        // Trường hợp không có token thì chuyển sang trang LOGIN
        const token = window.localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return Promise.reject(error);
        }

        const refreshToken = window.localStorage.getItem("refreshToken");
        if (refreshToken) {
          const response = await axiosClient.post("/refresh-token", {
            refreshToken: refreshToken,
          });

          const { access_token } = response.data;
          window.localStorage.setItem("token", access_token);

          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${access_token}`,
          };

          return axiosClient(originalConfig);
        } else {
          return Promise.reject(error);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
);

export { axiosClient };
```

### Step 2 - Tạo hook quản lý đăng nhập với zustand

Tạo file src/hooks/useAuth.ts

```ts
import { create } from "zustand";
import { axiosClient } from "../lib/axiosClient";

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface Auth {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ isAuthenticated: boolean; error: string }>;
  logout: () => void;
}

const useAuth = create<Auth>((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user });
  },
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      //Gọi API Login
      const response = await axiosClient.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      console.log(response);

      if (response && response.status === 201) {
        const isAuthenticated = response.status === 201;
        //Gọi tiếp API lấy thông tin User
        const { data } = await axiosClient.get(
          "https://api.escuelajs.co/api/v1/auth/profile"
        );
        set({ user: data, isAuthenticated });
        //Trả về dấu hiệu để components chuyển hướng sau khi login OK
        return { isAuthenticated, error: "" };
      } else {
        return {
          isAuthenticated: false,
          error: "Username or password is invalid",
        };
      }
    } catch (error) {
      return {
        isAuthenticated: false,
        error: error?.message || "Login failed",
      };
    }
  },
  logout: () => {
    // Xóa trạng thái user và isAuthenticated
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  },
}));

export default useAuth;
```

Lưu ý:

* API_URL: Thay đổi url API đúng với backend API
* Thay đổi các endpoints đúng với backend API của bạn

### Step 3 - Login

Code phần login

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginAPI = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
    const result = await login(data.email, data.password);
    console.log(result);
    if (result.isAuthenticated) {
      navigate("/customers");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="max-w-[300px] mx-auto min-w-[300px]">
      <h2 className="text-2xl text-center mb-3 font-bold">Login Form</h2>
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input placeholder="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button className="block w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginAPI;
```

### Step 4 - Bảo vệ các trang cần quyền Login

Ví dụ:

|-/ home page --> public
|-/login login page --> public
|-/customer customer page --> private
|-/customer/orders customer page --> private
|-/customer/profile customer page --> private

Thì bạn lồng các route private lại trong một Layout chung kiểu như

```tsx
<Route path="customer" element="Customer">
  <Route path="orders" element="CustomerOrders" />
  <Route path="profile" element="CustomerProfile" />
</Route>
```

Sau đó tại `Customer` bạn check xem user đã đăng nhập chưa bằng cách truy cập vào state `user` từ useAuth

```tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
1;
const Customers = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="py-5">Customers Page</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <ul>
            <li>
              <Link to={"/customers"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/customers/orders"}>Danh sách đơn hàng</Link>
            </li>
            <li>
              <Link to={"/customers/profile"}>Thông tin cá nhân</Link>
            </li>
            <li>
              <button type="button" onClick={logout}>
                Đăng Xuất
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Customers;
```

### Step 5 - Lấy thông tin User đưa lên Header

Component UserInfo

```tsx
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { user, logout } = useAuth();

  return (
    <span>
      {user ? (
        <span className="flex gap-x-2 items-center">
          <img
            className="rounded-full"
            width={30}
            height={30}
            src={user.avatar}
            alt={user.name}
          />
          <strong>{user.name}</strong>
          <span
            className="cursor-pointer border-s border-slate-900 pl-2"
            onClick={logout}
          >
            Đăng xuất
          </span>
        </span>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </span>
  );
};

export default UserInfo;
```

Tham khảo thêm 2 bài viết sau:

* <https://www.robinwieruch.de/react-router-private-routes/>
* <https://ui.dev/react-router-protected-routes-authentication>
