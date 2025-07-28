import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
  id: number;
  product_name: string;
  price: number;
  discount: number;
  category_id: number;
  brand_id: number;
  description: string;
  model_year: number;
  stock: number;
  thumbnail: string;
  slug: string;
}
const ProductListAxios = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true); //chờ dữ liệu
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:9000/api/v1/products"
        );
        console.log("<<=== 🚀 response ===>>", response);
        if (response.status === 200) {
          setProducts(response.data.data.data);
        }
      } catch (error) {
        console.log("<<=== 🚀error  ===>>", error);
        setError("Co loi xay ra");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>ProductListAxios</h1>
      <div className="overflow-x-auto">
        {error && <div className="p-3 text-red-500">{error}</div>}

        <table className="min-w-full bg-white border border-gray-100 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3 border-b">#ID</th>
              <th className="px-4 py-3 border-b">Thumb</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Price</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="py-5 text-center" colSpan={5}>
                  Loading...
                </td>
              </tr>
            ) : (
              <>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className="text-sm hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2 border-b">{item.id}</td>
                    <td className="px-4 py-2 border-b">
                      <img
                        height={40}
                        width={40}
                        src={item.thumbnail}
                        alt={item.product_name}
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{item.product_name}</td>
                    <td className="px-4 py-2 border-b">{item.price}</td>
                    <td className="px-4 py-2 border-b">
                      <div className="flex gap-x-2">
                        <button>Edit</button>
                        <button className="btn_delete">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListAxios;
