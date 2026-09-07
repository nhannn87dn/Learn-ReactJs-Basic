import { useEffect } from "react";
import { useCategoryStore } from "../stores/categories-store";

const Categories = () => {
  const { categories, getCategories } = useCategoryStore();

  // Gọi API để lấy danh sách danh mục khi component được render lần đầu tiên
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
