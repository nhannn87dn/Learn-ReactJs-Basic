import axios from "axios";
import { useEffect, useState } from "react";
import SimpleModalExample from "./SimpleModalExample";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductCRUDAxios() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  /* Product List */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products`,
        );
        //Dữ liệu axios trả về thì nó nằm trong thuộc tính data
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    //gọi hàm
    getProducts();
  }, []);

  //DELETE product
  const onHandleDeleteProduct = async (id: number) => {
    console.log(`Delete product with id: ${id}`);
    try {
      const response = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      );
      console.log("Delete response:", response);
      if (response.status === 200) {
        alert("Product deleted successfully!");
        // Remove the deleted product from the list ==> làm tươi danh sách
        setProducts(products.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "https://placehold.co/600x400",
    categoryId: 1,
  });

  const [formEdit, setFormEdit] = useState({
    title: "",
    price: "",
    description: "",
    image: "https://placehold.co/600x400",
    categoryId: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("<<=== 🚀 form ===>>", form);

    //gọi API thêm mới
    try {
      const response = await axios.post(
        `https://api.escuelajs.co/api/v1/products`,
        {
          title: form.title,
          price: form.price,
          description: form.description,
          images: [form.image],
          categoryId: form.categoryId,
        },
      );
      if (response.status === 201) {
        // Thêm sản phẩm mới vào danh sách
        setProducts([...products, response.data]);
        alert("Product created successfully!");
        setForm({
          title: "",
          price: "",
          description: "",
          image: "",
          categoryId: 1,
        });
      }
      console.log("Create response:", response);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("<<=== 🚀 formEdit ===>>", formEdit);
    try {
      const response = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${selectedProduct?.id}`,
        {
          title: formEdit.title,
          price: formEdit.price,
          description: formEdit.description,
          images: [formEdit.image],
          categoryId: formEdit.categoryId,
        },
      );
      if (response.status === 200) {
        //Cập nhật sản phẩm trong danh sách
        setProducts(
          products.map((p) =>
            p.id === selectedProduct?.id ? response.data : p,
          ),
        );
        alert("Product updated successfully!");
        setSelectedProduct(null);
      }
    } catch (error) {
      console.log("<<=== 🚀 error ===>>", error);
    }
  };

  const handleChangeEdit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-3 gap-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product name"
          className="border p-2 rounded"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded"
        />
        <input type="hidden" name="categoryId" value={form.categoryId} />
        <button className="col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{p.id}</td>

                <td className="p-4">
                  <img
                    src={p.images[0]}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="p-4 font-medium">{p.title}</td>

                <td className="p-4 text-red-500 font-semibold">
                  {Number(p.price).toLocaleString()}₫
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setFormEdit({
                        title: p.title,
                        price: p.price.toString(),
                        description: p.description,
                        image: p.images[0],
                        categoryId: 1,
                      });
                    }}
                    className="bg-yellow-400 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onHandleDeleteProduct(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedProduct && (
          <SimpleModalExample
            open={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            title={selectedProduct.title}
          >
            <form
              onSubmit={handleSubmitEdit}
              className="bg-white p-6 rounded-lg shadow mb-6 flex gap-4 flex-col"
            >
              <input
                name="title"
                value={formEdit.title}
                onChange={handleChangeEdit}
                placeholder="Product name"
                className="border p-2 rounded"
              />

              <input
                name="price"
                value={formEdit.price}
                onChange={handleChangeEdit}
                placeholder="Price"
                className="border p-2 rounded"
              />

              <input
                name="description"
                value={formEdit.description}
                onChange={handleChangeEdit}
                placeholder="Description"
                className="border p-2 rounded"
              />

              <input
                name="image"
                value={formEdit.image}
                onChange={handleChangeEdit}
                placeholder="Image URL"
                className="border p-2 rounded"
              />
              <input
                type="hidden"
                name="categoryId"
                value={formEdit.categoryId}
              />
              <button className="col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Edit Product
              </button>
            </form>
          </SimpleModalExample>
        )}
      </div>
    </div>
  );
}
