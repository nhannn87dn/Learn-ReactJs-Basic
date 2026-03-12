import axios from "axios";
import { useState } from "react";
import SimpleModalExample from "./SimpleModalExample";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function ProductCRUDReactQuery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //PRODUCT LIST
  const getProducts = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products",
    );
    //bắt buộc return về data để React Query có thể cache lại
    return response.data;
  };
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"], //key để React Query cache lại data, khi nào key này thay đổi thì React Query mới gọi lại API
    queryFn: getProducts, //hàm để gọi API lấy data
  });

  //DELETE product
  const queryClient = useQueryClient();
  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    return response.data;
  };
  const queryDeleteProduct = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      //thông báo xóa sản phẩm thành công
      console.log("<<=== 🚀 delete product success ===>>");
      //refetch lại data sản phẩm sau khi xóa thành công
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }, //hàm này sẽ được gọi sau khi API xóa sản phẩm thành công, thường dùng để thông báo hoặc refetch lại data
    onError: (error) => {
      //thông báo xóa sản phẩm thất bại
      console.log("<<=== 🚀 error ===>>", error);
    }, //hàm này sẽ được gọi sau khi API xóa sản phẩm thất bại, thường dùng để thông báo lỗi
  });
  const onHandleDeleteProduct = async (id: number) => {
    //gọi API xóa sản phẩm
    await queryDeleteProduct.mutateAsync(id);
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

  //ADD PRODUCT
  const addProduct = async (
    product: Omit<Product, "id"> & { categoryId: number },
  ) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      {
        title: product.title,
        price: Number(product.price),
        description: product.description,
        images: product.images,
        categoryId: product.categoryId,
      },
    );
    return response.data;
  };

  const queryAddProduct = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      console.log("<<=== 🚀 add product success ===>>");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //clear form sau khi thêm sản phẩm thành công
      setForm({
        title: "",
        price: "",
        description: "",
        image: "https://placehold.co/600x400",
        categoryId: 1,
      });
    },
    onError: (error) => {
      console.log("<<=== 🚀 error ===>>", error);
    },
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
    await queryAddProduct.mutateAsync({
      title: form.title,
      price: Number(form.price),
      description: form.description,
      images: [form.image],
      categoryId: form.categoryId,
    });
  };

  //EDIT PRODUCT
  const editProduct = async ({
    id,
    title,
    price,
    description,
    images,
    categoryId,
  }: Partial<Product> & { id: number; categoryId: number }) => {
    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      {
        title,
        price: Number(price),
        description,
        images,
        categoryId,
      },
    );
    return response.data;
  };

  const queryEditProduct = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      console.log("<<=== 🚀 edit product success ===>>");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      //tắt modal sau khi edit sản phẩm thành công
      setSelectedProduct(null);
    },
    onError: (error) => {
      console.log("<<=== 🚀 error ===>>", error);
    },
  });

  const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("<<=== 🚀 formEdit ===>>", formEdit);
    if (!selectedProduct) return;

    await queryEditProduct.mutateAsync({
      id: selectedProduct.id,
      title: formEdit.title,
      price: Number(formEdit.price),
      description: formEdit.description,
      images: [formEdit.image],
      categoryId: formEdit.categoryId,
    });
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
      <h1 className="text-2xl font-bold mb-6">Product ReactQuery</h1>

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
        {isLoading && <p>Loading...</p>}
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
            {products &&
              products.map((p) => (
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
