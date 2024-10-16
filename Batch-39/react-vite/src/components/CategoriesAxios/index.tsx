import React from "react";
import axios from "axios";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

type TCategory = {
  id: number;
  name: string;
  image: string;
};

type TCategories = TCategory[];

const CategoriesAxios = () => {
  const [categories, setCategories] = React.useState<TCategories>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [isFresh, setIsFresh] = React.useState<number>(0);
  const [selected, setSelected] = React.useState<TCategory | null>(null);

  console.log("categories", categories);
  console.log("selected", selected);
  console.log("isFresh", isFresh);

  React.useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const url = "https://api.escuelajs.co/api/v1/categories";
        // const options = {
        //   method: "GET",
        // };
        // const response = await fetch(url, options);
        // const data = await response.json();

        const response = await axios.get(url);

        console.log("<<=== 🚀 response ===>>", response);
        // lấy xong và thành công
        setIsLoading(false);
        //cập nhật lại state
        setCategories(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error?.message || "have some error");
    }
  }, [isFresh]);

  const handleClickDelete = async (categoryId: number) => {
    console.log("Xoa ", categoryId);
    try {
      const url = `https://api.escuelajs.co/api/v1/categories/${categoryId}`;
      const response = await axios.delete(url);
      console.log(response);
      if (response.status === 200) {
        setIsFresh((prev) => prev + 1);
        alert("Xoa thanh cong");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "have some error");
    }
  };

  return (
    <div>
      <h1 className="text-3xl">Categories</h1>

      <div>
        <AddCategory isFresh={isFresh} setIsFresh={setIsFresh} />
      </div>
      <div>
        {selected !== null && (
          <EditCategory
            isFresh={isFresh}
            category={selected}
            setIsFresh={setIsFresh}
          />
        )}
      </div>

      {error !== "" && (
        <div className="bg-red-100 text-red-600 py-2 px-3 rounded">{error}</div>
      )}
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
          {isLoading ? (
            <tr>
              <td colSpan={3}>Loading....</td>
            </tr>
          ) : (
            categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-x-3">
                      <button
                        onClick={() => {
                          setSelected(category);
                        }}
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleClickDelete(category.id)}
                        className="btn_delete"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesAxios;
