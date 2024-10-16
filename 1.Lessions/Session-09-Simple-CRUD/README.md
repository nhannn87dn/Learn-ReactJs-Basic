# Simple CRUD

## 💥 Ứng dụng quản lý sản phẩm

Sử dụng `axios`, `ReactQuery` và `AntDesign`

**Bước 1 - Cài đặt ReactQuery**

```bash
npm i @tanstack/react-query
# or
yarn add @tanstack/react-query
```

Trang web chính thức: <https://tanstack.com/query/latest>

Đề xuất nên cài thêm ESlint để kiểm soát lỗi

```bash
npm i -D @tanstack/eslint-plugin-query
# or
yarn add -D @tanstack/eslint-plugin-query
```

**Bước 2 - Khởi tạo React Query Provider**

Trước tiên, bạn cần đặt QueryClientProvider ở cấp cao nhất của ứng dụng React để sử dụng React Query.

```js
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 
      Component nào có sử dụng react query thì được đặt trong QueryClientProvider
      */}
    </QueryClientProvider>
  );
}

export default App;
```

**Bước 3- Sử dụng React Query Hooks**

React Query cung cấp một số hooks để bạn có thể dễ dàng gọi và quản lý các request mạng.

Xem chi tiết: <https://tanstack.com/query/v5>

`useQuery` và `useMutation` là hai hooks trong React Query được sử dụng để quản lý hai khía cạnh khác nhau của việc làm việc với dữ liệu trong ứng dụng:

1. `useQuery`:

   - Sử dụng `useQuery` khi bạn muốn lấy dữ liệu từ máy chủ (server) và hiển thị nó trong giao diện người dùng.
   - Hook này sử dụng cho các yêu cầu mạng chỉ đọc (read-only) như GET.
   - Khi bạn sử dụng `useQuery`, React Query sẽ quản lý việc caching dữ liệu, giúp giảm thiểu việc gửi các yêu cầu mạng trùng lặp và tối ưu hiệu suất ứng dụng.
   - Các trạng thái của `useQuery` bao gồm `isLoading` (đang tải), `isError` (xảy ra lỗi), `isSuccess` (thành công) để bạn có thể xử lý tương ứng với từng trạng thái trong giao diện.

2. `useMutation`:
   - Sử dụng `useMutation` khi bạn muốn thực hiện các thay đổi dữ liệu trên máy chủ (server) như thêm mới (create), cập nhật (update) hoặc xóa (delete).
   - Hook này sử dụng cho các yêu cầu mạng viết (write) như POST, PUT, PATCH, DELETE.
   - `useMutation` giúp bạn gọi các yêu cầu mạng mutation một cách dễ dàng và quản lý các trạng thái của mutation (loading, success, error) để bạn có thể cập nhật giao diện người dùng phản hồi cho người dùng khi thực hiện các thay đổi dữ liệu.
   - Ngoài ra, `useMutation` cung cấp các hàm như `reset`, `revert`, `onSuccess`, `onError`, `onSettled` giúp bạn tùy chỉnh hành vi sau khi thực hiện mutation thành công, lỗi hoặc khi kết thúc (settled).

Cách sử dụng useQuery:

Cú pháp:

```js
const todoResults = useQuery({ queryKey: ["/todos"], queryFn: fetchTodoList });
```

**queryKey:** là một mảng, sinh ra một cái key không trung lặp để cache dữ liệu

Xem chi tiết sử dụng key: <https://tanstack.com/query/v4/docs/react/guides/query-keys>

**queryFn:** là phương thức lấy dữ liệu, return về một Promise

Xem chi tiết cách dùng: <https://tanstack.com/query/v4/docs/react/guides/query-functions>

---

**Ví dụ Tạo UI danh sách sản phẩm**

```js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  title: string;
  price: number;
}

const Products: React.FC = () => {

  //Có thể sử dụng queryFn với fetch, phải return về kết quả cuối cùng
  const getProduct = async ()=>{
      return fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json());
  }
  //Có thể sử dụng queryFn với axios, phải return về kết quả cuối cùng
  const getProductAxios = async ()=>{
      return axios.get('https://api.escuelajs.co/api/v1/products').then(res => res.data);
  }

  // Sử dụng useQuery để fetch data từ API\
  //Kết quả lấy được nằm ở biến data
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ['products'], //đặt tên cho bộ nhớ cache
    queryFn: getProduct
  });

  // Nếu đang loading, hiển thị một thông báo
  if (isLoading) return <div>Đang tải...</div>;

  // Nếu có lỗi, hiển thị một thông báo
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // Nếu thành công, hiển thị danh sách sản phẩm
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {data.map((product: Product) => (
          <li key={product.id}>
            #{product.id} - {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

```

Cách sử dụng useMutation:

Trong ngữ cảnh của React Query, "mutations" là một khái niệm liên quan đến việc thay đổi dữ liệu trên máy chủ (server-side data changes) thông qua các yêu cầu HTTP như POST, PUT, PATCH hoặc DELETE. Mutations giúp bạn thực hiện các thao tác tạo mới (create), cập nhật (update), hoặc xóa (delete) dữ liệu.

Trong React Query, hook `useMutation` được cung cấp để thực hiện các yêu cầu mutations và quản lý kết quả của chúng. Nó giúp bạn dễ dàng gọi và xử lý các thay đổi dữ liệu một cách tự động và hiệu quả.

Cú pháp:

```jsx
const mutation = useMutation({ objects });
```

Xem chi tiết: <https://tanstack.com/query/v4/docs/react/guides/mutations>

---

**Ví dụ Thêm Mới Sản phẩm**

```jsx
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Product {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

function AddProduct() {
  const queryClient = useQueryClient();

  //Mutation với fetch, phải return về kết quả cuối cùng
  const postProduct = async (newProduct: Product) =>
    fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((response) => response.json());

  //Mutation với axios
  const postProduct = async (newProduct: Product) =>
    axios
      .post("https://api.escuelajs.co/api/v1/products/", newProduct)
      .then((response) => response.data);

  // Mutations
  const addProductMutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Làm tươi lại dữ liệu, ở trang danh sách
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleAddProduct = () => {
    //Giả lập dữ liệu lấy lên được từ Form, sau đó đưa vào mutate
    addProductMutation.mutate({
      title: "New Product 3",
      price: 480,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    });
  };

  return (
    <div>
      <button
        disabled={addProductMutation.isLoading}
        onClick={handleAddProduct}
      >
        {addProductMutation.isLoading ? (
          <span>Adding Product...</span>
        ) : (
          <span>Add Product</span>
        )}
      </button>

      {addProductMutation.isSuccess && <span>Product added successfully!</span>}
      {addProductMutation.isError && <span>Failed to add Product.</span>}
    </div>
  );
}

export default AddProduct;
```

Trong ví dụ này, khi người dùng nhấn vào nút "Add Todo", `addTodoMutation.mutate()` sẽ được gọi và thực hiện mutation bằng cách gửi yêu cầu POST tới máy chủ. Trạng thái của mutation sẽ được theo dõi và hiển thị thông tin tương ứng cho người dùng (ví dụ: "Adding todo...", "Todo added successfully!", "Failed to add todo.").

Như vậy, cùng với `useQuery`, `useMutation` là một trong những hooks quan trọng của React Query để quản lý việc fetching và thay đổi dữ liệu trong ứng dụng React một cách dễ dàng và mạnh mẽ.

---

**Ví dụ về Xóa sản phẩm**

```jsx
//Edit lại từ component Products
//========== DELETE PRODUCT==============//
const deleteProduct = async (productId) => {
  return axios
    .delete(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .then((response) => response.data);
};

const deleteProductMutation = useMutation({
  mutationFn: deleteProduct,
  onSuccess: () => {
    // Làm tươi lại product list , sau khi xóa thành công
    queryClient.invalidateQueries({ queryKey: ["products"] });
  },
});

const handleDeleteProduct = (productId) => {
  // Sử dụng phương thức mutate, truyền vào id cần xóa
  deleteProductMutation.mutate(productId);
};

return (
  <div>
    <h1>Danh sách sản phẩm</h1>
    <ul>
      {data.map((product: Product) => (
        <li key={product.id}>
          #{product.id} - {product.title} - {product.price}
          <button
            disabled={deleteProductMutation.isLoading}
            onClick={() => handleDeleteProduct(product.id)}
          >
            {deleteProductMutation.isLoading ? (
              <span>Deleting ...</span>
            ) : (
              <span>Delete</span>
            )}
          </button>
        </li>
      ))}
    </ul>

    {deleteProductMutation.isSuccess && (
      <span>Product deleted successfully!</span>
    )}
    {deleteProductMutation.isError && <span>Failed to delete Product.</span>}
  </div>
);
```

**Ví dụ về Edit sản phẩm**

```jsx
const editProduct = (updatedProduct) => {
  /*
  id được gửi kèm trên form, sau đó tách ra
  */
  const { id, ...payloads } = updatedProduct;
  return axios
    .put(`https://api.escuelajs.co/api/v1/products/${id}`, payloads)
    .then((response) => response.data);
};

const editProductMutation = useMutation({
  mutationFn: editProduct,
  onSuccess: () => {
    // Làm tươi lại danh sách khi update thành công
    queryClient.invalidateQueries({ queryKey: ["products"] });
  },
});

const handleEditProduct = (updatedProduct) => {
  // Use the mutate method, passing in the id and updated product data
  editProductMutation.mutate(updatedProduct);
};

return (
  <div>
    <h1>Edit Product</h1>
    {data.map((product: Product) => (
      <div key={product.id}>
        <p>
          #{product.id} - {product.title} - {product.price}
        </p>
        <button
          disabled={editProductMutation.isLoading}
          onClick={() =>
            //Giả lập cứng data thay đổi
            handleEditProduct(product.id, {
              title: "New Title",
              price: product.price,
            })
          }
        >
          {editProductMutation.isLoading ? (
            <span>Editing...</span>
          ) : (
            <span>Edit</span>
          )}
        </button>
      </div>
    ))}

    {editProductMutation.isSuccess && <span>Product edited successfully!</span>}
    {editProductMutation.isError && <span>Failed to edit Product.</span>}
  </div>
);
```
