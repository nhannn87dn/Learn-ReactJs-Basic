import { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../stores/useProduct";
interface Category {
  id: number;
  name: string;
}
export default function HomePage() {
  const { products, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/categories")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  const fetchCategories = async () => {
    try {
      // const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      // const data = await res.json();
      //setCategories(data);

      //Hoặc dùng axios

      setIsLoading(true); // Bật cờ loading xoay
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      console.log("response", response);
      if (response.status === 200) {
        setCategories(response.data);
        setIsLoading(false); // Tắt cờ loading xoay
      }
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
      setIsLoading(false); // Tắt cờ loading xoay
    }
  };

  const createCategory = async () => {
    console.log("Create new category");
    try {
      const url = "https://api.escuelajs.co/api/v1/categories";
      // const options = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: "New Category xxx",
      //     image: "https://placeimg.com/640/480/any",
      //   }),
      // };
      // const res = await fetch(url, options);
      // const data = await res.json();

      // if (res.status === 201) {
      //   console.log(data);
      //   alert("Create new category successfully");
      // }
      const response = await axios.post(url, {
        name: "New Category yyy",
        image: "https://placeimg.com/640/480/any",
      });

      if (response.status === 201) {
        alert("Create new category successfully");
      }
    } catch (error) {
      console.log("<<=== error ===>>", error);
    }
  };

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          fetchCategories();
        }}
      >
        Load Categories
      </button>

      <button
        onClick={() => {
          createCategory();
        }}
      >
        Create new a Category
      </button>

      {isLoading && <p>Loading...</p>}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
