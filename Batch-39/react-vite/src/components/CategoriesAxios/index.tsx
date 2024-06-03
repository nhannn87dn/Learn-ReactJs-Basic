import React from "react";
import axios from "axios";

type TCategory = {
  id: number;
  name: string;
  image: string;
};

type TCategories = TCategory[];

const CategoriesAxios = () => {
  const [categories, setCategories] = React.useState<TCategories>([]);

  console.log("categories", categories);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.escuelajs.co/api/v1/categories";
      // const options = {
      //   method: "GET",
      // };
      // const response = await fetch(url, options);
      // const data = await response.json();

      const response = await axios.get(url);

      console.log("<<=== 🚀 response ===>>", response);
      //cập nhật lại state
      setCategories(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Categories</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Edit, Delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesAxios;
