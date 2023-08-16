import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
};

const createProduct = async (newProduct) => {
  const response = await axios.post('https://api.escuelajs.co/api/v1/products', newProduct);
  return response.data;
};

const ProductManagement = () => {
  const queryClient = useQueryClient();

  const { data: products } = useQuery('products', fetchProducts);

  const createProductMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleAddProduct = () => {
    createProductMutation.mutate({
      title: 'New Product',
      price: 10,
      description: 'A description',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any'],
    });
  };

  return (
    <div>
      <h1>Product Management</h1>
      <button onClick={handleAddProduct}>Add New Product</button>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;


Tất nhiên! Dưới đây là một ví dụ về cách bạn có thể thực hiện phân trang và bộ lọc sản phẩm sử dụng React Query:

```jsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchProducts = async (page, filters) => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products', {
    params: {
      offset: (page - 1) * 10,
      limit: 10,
      ...filters,
    },
  });
  return response.data;
};

const ProductManagement = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [titleFilter, setTitleFilter] = useState(null);

  const { data: products } = useQuery(['products', page, categoryFilter, titleFilter], () =>
    fetchProducts(page, { categoryId: categoryFilter, title: titleFilter })
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleCategoryFilterChange = (categoryId) => {
    setCategoryFilter(categoryId);
    setPage(1);
  };

  const handleTitleFilterChange = (title) => {
    setTitleFilter(title);
    setPage(1);
  };

  return (
    <div>
      <h1>Product Management</h1>
      <input
        type="text"
        placeholder="Filter by category"
        onChange={(e) => handleCategoryFilterChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => handleTitleFilterChange(e.target.value)}
      />
      <ul>
        {products?.data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Previous Page
      </button>
      <button onClick={() => handlePageChange(page + 1)}>Next Page</button>
    </div>
  );
};

export default ProductManagement;
```

Trong ví dụ trên, chúng ta sử dụng `page`, `categoryFilter`, và `titleFilter` làm các state để theo dõi trang hiện tại và các giá trị bộ lọc. Khi người dùng thay đổi bộ lọc hoặc trang, chúng ta cập nhật state và sử dụng giá trị mới khi gọi `fetchProducts` để lấy danh sách sản phẩm phù hợp với bộ lọc và phân trang.

Lưu ý rằng API của bạn cần hỗ trợ các tham số `offset`, `limit`, `categoryId`, và `title` để thực hiện phân trang và bộ lọc.

***

Dưới đây là một ví dụ về cách sử dụng URLSearchParams trong React Router DOM để thay đổi các tham số truy vấn trong URL:

```js

import { useLocation, useHistory } from 'react-router-dom';

function ExampleComponent() {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  // Đọc giá trị của tham số truy vấn
  const value = searchParams.get('paramName');

  // Thay đổi giá trị của tham số truy vấn
  searchParams.set('paramName', 'newValue');

  // Xóa tham số truy vấn
  searchParams.delete('paramName');

  // Cập nhật URL với các thay đổi
  history.push(`?${searchParams.toString()}`);

  return (
    // ...
  );
}
```