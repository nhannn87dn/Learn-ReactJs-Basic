import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsListReactQuery = () => {
  //Code một hàm để fetch Product với axios
  const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    //bắt buộc hàm này phải return về dữ liệu mà bạn muốn lấy
    //mặc định dữ liệu backend trả về thì nằm trong thuộc tính data của axios
    return response.data;
  };

  const queryProducts = useQuery({
    queryKey: ["get-all-products"],
    queryFn: getAllProducts, //truyên tên hàm, chứ ko gọi hàm
  });
  //Dữ liệu lấy được từ API thì nó nằm ở queryProducts.data
  console.log("<<=== 🚀 queryProducts.data ===>>", queryProducts.data);
  return (
    <div>
      <h2 className="font-bold text-xl my-5">ProductsListReactQuery</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Thumb
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Price
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {queryProducts.data &&
            queryProducts.data.length > 0 &&
            queryProducts.data.map((product) => {
              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {product.id}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {product.title}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    ${product.price}
                  </td>
                  <td>
                    <div className="space-x-3">
                      <button>Edit</button>
                      <button className="btn_danger">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsListReactQuery;
