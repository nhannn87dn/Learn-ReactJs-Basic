import { useEffect, useState } from "react";
import CategoryPOST from "./CategoryPOST";
import CategoriesDELETE from "./CategoriesDELETE";
import SimpleModalExample from "./SimpleModalExample";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./CategoryPOST.module.css";
import * as yup from "yup";

type Category = {
  id: number;
  name: string;
  image: string;
};

interface FormValues {
  name: string;
  image: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required("Tên danh mục là bắt buộc")
    .min(3, "Tối thiểu 3 ký tự"),
  image: yup
    .string()
    .required("Image là bắt buộc")
    .url("Image phải là một URL hợp lệ"),
});

const CategoriesCRUD = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  //
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("<<=== 🚀 selectedCategory ===>>", selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = "https://api.escuelajs.co/api/v1/categories";
      const options = {
        method: "GET", //mặc định
      };
      // tốn thời gian để fetch về
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        // sau khi có data rồi thì mới setState
        setCategories(data);
        console.log(data);
      } else {
        setError("Failed to fetch categories");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("<<=== 🚀 categories ===>>", categories);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedCategory) {
      // map selected user to form fields
      reset({
        name: selectedCategory.name ?? "",
        image: selectedCategory.image ?? "",
      });
    } else {
      // clear form when no user is selected
      reset();
    }
  }, [selectedCategory, reset]);

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    // TODO: call API
    const url = `https://api.escuelajs.co/api/v1/categories/${selectedCategory?.id}`;
    const options = {
      method: "PUT", //PUT để update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //dữ liệu sẽ được gửi dưới dạng JSON
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("API Response:", result);
    if (response.ok) {
      //tắt modal sau khi update xong
      setIsModalOpen(false);
    }
  };

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
          {isLoading ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : (
            categories.map((category: Category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <img src={category.image} alt={category.name} width="100" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      //Khi click vào Edit thì sẽ set selectedCategory
                      // là category hiện tại, và mở modal
                      setSelectedCategory(category);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <CategoriesDELETE id={category.id} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedCategory && (
        <SimpleModalExample
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Edit Category"
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {/* Name */}
            <div className={styles.formGroup}>
              <label>Tên danh mục</label>
              <input type="text" {...register("name")} />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>

            {/* Image URL */}
            <div className={styles.formGroup}>
              <label>Image URL</label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                {...register("image")}
              />
              {errors.image && (
                <p className={styles.error}>{errors.image.message}</p>
              )}
            </div>

            <button type="submit" className={styles.button}>
              Edit danh mục
            </button>
          </form>
        </SimpleModalExample>
      )}
    </div>
  );
};

export default CategoriesCRUD;
