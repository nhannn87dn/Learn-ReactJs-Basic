import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type TCategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

interface IAddCategory {
  name: string;
  image: string;
}

//Form them moi Category voi react hook form
const AddCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddCategory>();
  const onSubmit: SubmitHandler<IAddCategory> = async (data) => {
    console.log(data);
    // Gọi API để thêm mới category
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories",
        {
          method: "POST", //cấu hình method POST để thêm mới dữ liệu
          headers: {
            "Content-Type": "application/json", //cấu hình header để gửi dữ liệu dạng JSON
          },
          body: JSON.stringify(data), //body là dữ liệu gửi đi dạng JSON
        },
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Name"
        {...register("name", { required: true, maxLength: 20 })}
      />
      {errors.name && (
        <span>Name is required and should be less than 20 characters</span>
      )}
      <input
        placeholder="Image URL"
        {...register("image", { required: true })}
      />
      {errors.image && <span>Image URL is required</span>}
      <button type="submit">Add Category</button>
    </form>
  );
};

// Sử dụng hàm fetch để lấy dữ liệu từ API
const FetchCURDCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [isAddCategory, setIsAddCategory] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = "https://api.escuelajs.co/api/v1/categories";
        const options = {
          method: "GET",
        }; //tuỳ chọn, mặc định là rỗng, method GET
        const response = await fetch(url, options);
        const data = await response.json(); //convert json về object

        console.log("data", data);

        setCategories(data); //cập nhật state categories với dữ liệu lấy được từ API
      } catch (error) {
        //nễu gọi API bị lỗi thì sẽ vào catch
        console.log(error);
      }
    };
    // Gọi hàm fetchCategories để thực hiện việc lấy dữ liệu
    fetchCategories();
  }, []); //tham số thứ 2 là dependencies, nếu để rỗng thì chỉ chạy 1 lần khi component được render lần đầu tiên

  console.log("<<=== 🚀 categories ===>>", categories);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h1>Categories Simple CURD</h1>
        <div className="extra">
          <button onClick={() => setIsAddCategory(true)}>Add Category</button>
        </div>
      </div>
      {/* Khi nào click vào nút Add Category thì sẽ hiển thị form AddCategoryForm, còn không thì không hiển thị. Sử dụng state isAddCategory để quản lý việc hiển thị form. */}
      {isAddCategory && <AddCategoryForm />}

      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b px-4 py-3 text-left font-semibold">ID</th>
            <th className="border-b px-4 py-3 text-left font-semibold">
              Image
            </th>
            <th className="border-b px-4 py-3 text-left font-semibold">Name</th>
            <th className="border-b px-4 py-3 text-left font-semibold">Slug</th>
            <th className="border-b px-4 py-3 text-left font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="border-b px-4 py-3">{category.id}</td>

                <td className="border-b px-4 py-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                </td>

                <td className="border-b px-4 py-3">{category.name}</td>

                <td className="border-b px-4 py-3">{category.slug}</td>
                <td className="border-b px-4 py-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchCURDCategories;
