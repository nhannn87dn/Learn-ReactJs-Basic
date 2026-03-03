import { useEffect, useState } from "react";
import CategoryPOST from "./CategoryPOST";

type Category = {
  id: number;
  name: string;
  image: string;
};

const CategoriesCRUD = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.escuelajs.co/api/v1/categories";
      const options = {
        method: "GET", //mặc định
      };
      // tốn thời gian để fetch về
      const response = await fetch(url, options);
      const data = await response.json();
      // sau khi có data rồi thì mới setState
      setCategories(data);
      console.log(data);
    };
    fetchData();
  }, []);

  console.log("<<=== 🚀 categories ===>>", categories);

  return (
    <div>
      <h2>CategoriesCRUD</h2>
      <CategoryPOST />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: Category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <img src={category.image} alt={category.name} width="100" />
              </td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesCRUD;
